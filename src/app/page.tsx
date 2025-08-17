// src/app/page.tsx
import { getOrgRepos } from "@/lib/github";
import { HomeContainer } from "@/containers/home";

export const revalidate = 1800; // page-level ISR (optional)

export default async function Page() {
  const org = process.env.GITHUB_ORG;
  if (!org) {
    throw new Error("Missing GITHUB_ORG in .env.local");
  }

  const repos = await getOrgRepos(org);

  return <HomeContainer repos={repos} />;
}
