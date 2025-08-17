import { ModeToggle } from "@/components/fragments/mode-toggle";
import { GitHubRepository } from "@/types/github";
import { ReposSection } from "./section/repos";

export const HomeContainer = ({ repos }: { repos: GitHubRepository[] }) => {
  return (
    <main className="mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-7xl">
      <ModeToggle />
      <ReposSection repos={repos} />
    </main>
  );
};
