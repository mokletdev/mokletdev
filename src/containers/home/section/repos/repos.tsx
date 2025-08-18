"use client";
import { Heading } from "@/components/fragments/heading";
import { RepoCard } from "@/components/fragments/repo-card";
import { useRepository } from "@/hooks/use-repository";
import { cn } from "@/lib/utils";
import { GitHubRepository } from "@/types/github";
import { getLanguageColor } from "@/utils/colors";
import { IoSearch } from "react-icons/io5";

export const ReposSection = ({ repos }: { repos: GitHubRepository[] }) => {
  const { keyword, setKeyword, language, setLanguage, languages, data } =
    useRepository({ repos });

  return (
    <section
      id="repos"
      className="@container/repos min-h-screen flex flex-col items-center gap-8"
    >
      <Heading
        title=" Find Repositories"
        description="Explore our repositories to see the projects we have worked on, including web applications, tools, and services. You can also search for specific repositories or filter by programming language."
      />
      <div className="flex flex-col gap-4 items-center">
        <div className="relative w-full sm:max-w-lg">
          <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search repositories…"
            className="w-full border rounded-full pl-10 pr-4 py-2 transition-colors duration-200 focus:bg-accent-foreground/10 hover:bg-accent-foreground/10"
            aria-label="Search repositories"
          />
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {languages.map((lang) => {
            const isActive = language === lang;

            return (
              <button
                key={lang}
                value={lang}
                className={cn(
                  "flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-colors duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                )}
                onClick={() => setLanguage(isActive ? "" : lang)}
              >
                <div
                  className={`size-3 rounded-full ${getLanguageColor(lang)}`}
                />
                {lang}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center w-full">
        {data.length ? (
          data.map((repo) => (
            <RepoCard
              key={repo.id}
              data={repo}
              className="@[696px]/repos:w-[calc(50%-0.5rem)] @[1056px]/repos:w-[calc(33.333%-0.7rem)]"
            />
          ))
        ) : (
          <p className="text-muted-foreground font-mono text-center">
            No repositories found <br /> <span>Sorry :( </span>
          </p>
        )}
      </div>
    </section>
  );
};
