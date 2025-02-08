"use server";

import { GithubRepo, GithubUser } from "../../../type";
import { config } from "../config";
import { getInstallationAccessToken } from "./github-auth";

export const getGithubRepo = async (): Promise<GithubRepo[]> => {
  const res = await fetch(
    `${config.env.github.apiEndpoint}/orgs/${config.env.github.orgs}/repos?type=public&sort=updated&direction=asc`,
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

export const getGithubRepoCollaborators = async (
  repo: string
): Promise<GithubRepo[]> => {
  // const installationToken = await generateGitHubAppJWT();
  const installationToken = await getInstallationAccessToken();

  const res = await fetch(
    `${config.env.github.apiEndpoint}/repos/${config.env.github.orgs}/${repo}/collaborators`,
    {
      method: "GET",
      signal: new AbortController().signal,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "mokletdev",
        Authorization: `Bearer ${installationToken}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch GitHub repositories");

  const data = await res.json();

  return data;
};

export const getGithubOrgsMembers = async (): Promise<GithubUser[]> => {
  const installationToken = await getInstallationAccessToken();

  const res = await fetch(
    `${config.env.github.apiEndpoint}/orgs/${config.env.github.orgs}/members`,
    {
      method: "GET",
      signal: new AbortController().signal,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "mokletdev",
        Authorization: `Bearer ${installationToken}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch GitHub Orgs Members");

  console.log("success get collaborators");

  const data = await res.json();

  return data;
};
