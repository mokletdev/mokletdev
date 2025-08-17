import { ModeToggle } from "@/components/fragments/mode-toggle";
import { GitHubRepository, GitHubUserLite } from "@/types/github";
import { ReposSection } from "./section/repos";
import { HeroSection } from "./section/hero";
import { ContributeSection } from "./section/contribute";
import { Footer } from "@/components/fragments/footer";

export const HomeContainer = ({
  repos,
  members,
}: {
  repos: GitHubRepository[];
  members: GitHubUserLite[];
}) => {
  return (
    <main className="mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-7xl">
      <ModeToggle />
      <HeroSection />
      <ReposSection repos={repos} />
      <ContributeSection members={members} />
      <Footer />
    </main>
  );
};
