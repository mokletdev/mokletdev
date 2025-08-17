"use client";
import { useRepository } from "@/hooks/use-repository";
import { GitHubRepository } from "@/types/github";
import { RepoCard, RepoCardWithImage } from "./repo-card";

export const ListRepos = ({ repos }: { repos: GitHubRepository[] }) => {
  const { keyword, setKeyword, language, setLanguage, languages, data } =
    useRepository({ repos });

  return (
    <section className="@container/repos" id="list-repos">
      <div className="flex items-center justify-between">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search repositories…"
          className="w-full border sm:max-w-sm"
          aria-label="Search repositories"
        />
        <div className="flex gap-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border sm:max-w-sm"
            aria-label="Filter by language"
          >
            <option value="">All languages</option>
            {languages.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              setKeyword("");
              setLanguage("");
            }}
            className="w-full border sm:max-w-sm"
            aria-label="Reset filters"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="grid gap-4 @[736px]/repos:grid-cols-2 @[1116px]/repos:grid-cols-3">
        {data.map((repo) =>
          repo.homepage ? (
            <RepoCardWithImage key={repo.id} data={repo} />
          ) : (
            <RepoCard key={repo.id} data={repo} />
          )
        )}
      </div>
    </section>
  );
};
