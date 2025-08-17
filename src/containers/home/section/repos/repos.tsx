"use client";
import { RepoCard } from "@/components/fragments/repo-card";
import { useRepository } from "@/hooks/use-repository";
import { cn } from "@/lib/utils";
import { GitHubRepository } from "@/types/github";
import { getLanguageColor } from "@/utils/colors";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export const ReposSection = ({ repos }: { repos: GitHubRepository[] }) => {
  const { keyword, setKeyword, language, setLanguage, languages, data } =
    useRepository({ repos });

  return (
    <section id="repos" className="@container/repos">
      <div className="flex flex-col gap-4 items-center mb-8">
        <div className="relative w-full sm:max-w-lg">
          <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search repositories…"
            className="w-full outline rounded-full pl-10 pr-4 py-2 transition-colors duration-200 focus:bg-accent-foreground/10 hover:bg-accent-foreground/10"
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
      <div className="grid gap-4 @[696px]/repos:grid-cols-2 @[1056px]/repos:grid-cols-3">
        {data.map((repo) => (
          <RepoCard key={repo.id} data={repo} />
        ))}
      </div>
    </section>
  );
};
