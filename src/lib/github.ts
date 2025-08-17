import { GitHubRepository } from "@/types/github";
import { toTime } from "@/utils/time";

const BASE = "https://api.github.com";

async function fetchJSON<T>(url: string, init?: RequestInit): Promise<T> {
  const token = process.env.GITHUB_TOKEN;

  // Start from any incoming headers and normalize to a real Headers object
  const headers = new Headers(init?.headers);
  headers.set("Accept", "application/vnd.github+json");
  headers.set("X-GitHub-Api-Version", "2022-11-28");
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const res = await fetch(url, {
    ...init,
    headers,
    // Cache on the server and revalidate periodically
    next: { revalidate: 1800, tags: ["github:repos"] }, // 30 min
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

// Fetch *all* public repos for an org, handling pagination.
export async function getOrgRepos(org: string): Promise<GitHubRepository[]> {
  const perPage = 100;
  let page = 1;
  let all: GitHubRepository[] = [];

  while (true) {
    const list = await fetchJSON<GitHubRepository[]>(
      `${BASE}/orgs/${org}/repos?type=public&sort=updated&per_page=${perPage}&page=${page}`
    );
    all = all.concat(list);
    if (list.length < perPage) break; // last page
    page += 1;
    if (page > 10) break; // safety cap (1000 repos)
  }

  // filter and sort
  all = all
    .filter((r) => !r.archived && !r.disabled && !r.name.includes(".github"))
    .sort((a, b) => lastActivityMs(b) - lastActivityMs(a));

  return all;
}

function lastActivityMs(r: GitHubRepository): number {
  // Prefer pushed_at; fall back to updated_at, then created_at.
  return toTime(r.pushed_at) || toTime(r.updated_at) || toTime(r.created_at);
}
