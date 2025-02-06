export const config = {
  env: {
    githubApi: {
      endpoint: process.env.GITHUB_API_ENDPOINT!,
    },
    databaseUrl: process.env.DATABASE_URL!,
    excludedRepos: (process.env.EXCLUDED_REPOS || "").split(","),
  },
};
