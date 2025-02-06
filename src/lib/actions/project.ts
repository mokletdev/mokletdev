"use server";

import { InferInsertModel } from "drizzle-orm";
import { db } from "../../../database/drizzle";
import { projects } from "../../../database/schema";
import { GithubRepo } from "../../../type";
import { config } from "../config";
import { off } from "process";

export const getGithubRepo = async (): Promise<GithubRepo[]> => {
  const res = await fetch(
    `${config.env.githubApi.endpoint}/repos?type=public&sort=updated&direction=asc`,
    {
      method: "GET",
      signal: new AbortController().signal,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "mokletdev",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch GitHub repositories");

  const data = await res.json();

  return data;
};

export const getGithubRepoCollaborators = async (): Promise<GithubRepo[]> => {
  const res = await fetch(
    `${config.env.githubApi.endpoint}/repos?type=public&sort=updated&direction=asc`,
    {
      method: "GET",
      signal: new AbortController().signal,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "mokletdev",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch GitHub repositories");

  const data = await res.json();

  return data;
};

export const syncGithubRepo = async (): Promise<void> => {
  try {
    const githubRepos = await getGithubRepo();

    if (!githubRepos || githubRepos.length === 0) {
      console.log("No repositories found.");
      return;
    }

    // Prepare data for bulk insert
    const repoData: InferInsertModel<typeof projects>[] = githubRepos
      .filter(({ name, owner }) => {
        // Exclude repositories not owned by mokletdev
        if (owner.login !== "mokletdev") return false;

        // Exclude repositories based on the config
        return !config.env.excludedRepos.includes(name);
      })
      .map((repo) => ({
        githubId: repo.id,
        name: repo.name,
        url: repo.url,
        htmlUrl: repo.html_url,
        description: repo.description || "No description",
        homepage: repo.homepage || null,
        forksCount: repo.forks_count,
        stargazersCount: repo.stargazers_count,
        watchersCount: repo.watchers_count,
        topics: repo.topics.join(","),
        githubCreatedAt: new Date(repo.created_at),
        githubUpdatedAt: new Date(repo.updated_at),
        githubPushedAt: new Date(repo.pushed_at),
      }));

    // Bulk insert with conflict resolution
    await db
      .insert(projects)
      .values(repoData)
      .onConflictDoUpdate({
        target: projects.githubId,
        set: {
          name: projects.name,
          url: projects.url,
          htmlUrl: projects.htmlUrl,
          description: projects.description,
          homepage: projects.homepage,
          forksCount: projects.forksCount,
          stargazersCount: projects.stargazersCount,
          watchersCount: projects.watchersCount,
          topics: projects.topics,
          // githubCreatedAt: projects.githubCreatedAt,
          githubUpdatedAt: projects.githubUpdatedAt,
          githubPushedAt: projects.githubPushedAt,
          updatedAt: new Date(),
        },
      });

    console.log(`✅ Synced ${repoData.length} repositories.`);
  } catch (error) {
    console.error("❌ Error syncing repositories:", error);
  }
};
