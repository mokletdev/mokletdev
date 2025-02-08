export const config = {
  env: {
    github: {
      apiEndpoint: process.env.GITHUB_API_ENDPOINT!,
      orgs: process.env.GITHUB_ORGS!,
      appId: process.env.GITHUB_APP_ID!,
      privateKey: process.env.GITHUB_PRIVATE_KEY!,
      installationId: process.env.GITHUB_INSTALLATION_ID!,
    },
    databaseUrl: process.env.DATABASE_URL!,
    excludedRepos: (process.env.EXCLUDED_REPOS || "").split(","),
  },
};
