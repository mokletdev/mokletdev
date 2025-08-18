"use client";

import { GitHubRepository, GitHubUserLite } from "@/types/github";
import { ReposSection } from "./section/repos";
import { HeroSection } from "./section/hero";
import { ContributeSection } from "./section/contribute";
import { Footer } from "@/components/fragments/footer";
import { Navbar } from "@/components/fragments/navbar";
import { useRef } from "react";

export const HomeContainer = ({
  repos,
  members,
}: {
  repos: GitHubRepository[];
  members: GitHubUserLite[];
}) => {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <main className="mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-7xl">
      <Navbar ref={heroRef} />
      <HeroSection ref={heroRef} />
      <ReposSection repos={repos} />
      <ContributeSection members={members} />
      <Footer />
    </main>
  );
};
