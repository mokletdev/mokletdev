// src/app/page.tsx
import { getOrgRepos } from "@/lib/github";
import { ListRepos } from "@/components/fragments/list-repos";
import { ModeToggle } from "@/components/fragments/mode-toggle";

export const revalidate = 1800; // page-level ISR (optional)

export default async function Page() {
  const org = process.env.GITHUB_ORG;
  if (!org) {
    throw new Error("Missing GITHUB_ORG in .env.local");
  }

  const repos = await getOrgRepos(org);

  return (
    <main className="">
      <ModeToggle />
      <ListRepos repos={repos} />
    </main>
  );
}
