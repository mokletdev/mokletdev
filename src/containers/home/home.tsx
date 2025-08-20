import { GitHubRepository, GitHubUserLite } from "@/types/github";
import { ReposSection } from "./section/repos";
import { HeroSection } from "./section/hero";
import { ContributeSection } from "./section/contribute";
import { Footer } from "@/components/fragments/footer";
import { Navbar } from "@/components/fragments/navbar";

// TODO: Add about section
// TODO: Change repo section to showchasing 6 repo only, and create new page explore repos
// TODO: Fill up footer for another place url

export const HomeContainer = ({
  repos,
  members,
}: {
  repos: GitHubRepository[];
  members: GitHubUserLite[];
}) => {
  return (
    <main className="mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-7xl">
      <Navbar />
      <HeroSection />
      <ReposSection repos={repos} />
      <ContributeSection members={members} />
      <Footer />
    </main>
  );
};
