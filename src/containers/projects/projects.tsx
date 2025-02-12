"use client";
import { DetailedHTMLProps } from "react";
import { useAtomValue } from "jotai";
import { listHighlightedProjectAtom } from "@/lib/jotai";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/containers/projects/project-card";

interface Props
  extends Omit<
    DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    "className"
  > {
  className?: ClassValue;
}

export const Projects = ({ className, ...props }: Props) => {
  const listHighlightedProjects = useAtomValue(listHighlightedProjectAtom);

  const hasData = listHighlightedProjects.state === "hasData";
  return (
    <section
      {...props}
      className={cn(
        "relative z-20 container px-8 min-h-[100vh] grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-4 md:gap-x-8 lg:gap-x-16",
        hasData && listHighlightedProjects.data.length % 2 === 0
          ? "odd:*:sm:mt-[20vw]"
          : "even:*:sm:mt-[20vw]",
        // " *:max-w-[70vw] even:*:max-sm:ml-auto",
        className
      )}
      style={{
        direction:
          hasData && listHighlightedProjects.data.length % 2 === 0
            ? "ltr"
            : "rtl",
      }}
    >
      {hasData &&
        listHighlightedProjects.data.map((project) => {
          return <ProjectCard key={project.githubId} project={project} />;
        })}
    </section>
  );
};
