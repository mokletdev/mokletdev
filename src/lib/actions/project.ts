"use server";

import { asc, InferInsertModel, and, gt } from "drizzle-orm";
import { db } from "../../../database/drizzle";
import { projects } from "../../../database/schema";
import { config } from "../config";
import { getGithubRepo } from "./github";

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
        // highlight: repo.forks_count > 1 && repo.stargazers_count > 1,
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
          // highlight: projects.highlight,
          updatedAt: new Date(),
        },
      });

    console.log(`✅ Synced ${repoData.length} repositories.`);
  } catch (error) {
    console.error("❌ Error syncing repositories:", error);
  }
};

export const getListProjects = async () => {
  const data = await db
    .select()
    .from(projects)
    // .limit(10)
    .orderBy(asc(projects.name));
  return data;
};

export const getListHighlightedProjects = async () => {
  const data = await db
    .select()
    .from(projects)
    .where(and(gt(projects.forksCount, 1), gt(projects.stargazersCount, 1)))
    // .limit(10)
    .orderBy(asc(projects.stargazersCount));

  console.log(data);
  return data;
};
