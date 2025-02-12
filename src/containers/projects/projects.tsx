"use client";
import { DetailedHTMLProps } from "react";
import { useAtomValue } from "jotai";
import { listProjectAtom } from "@/lib/jotai";
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
  const listProjects = useAtomValue(listProjectAtom);

  return (
    <section
      {...props}
      className={cn(
        "relative z-20 container px-8 min-h-[100vh] grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-4 md:gap-x-8 lg:gap-x-16 odd:*:sm:mt-[20vw]",
        // " *:max-w-[70vw] even:*:max-sm:ml-auto",
        className
      )}
    >
      {listProjects.state === "hasData" &&
        listProjects.data.map((project) => (
          <ProjectCard key={project.githubId} project={project} className="" />
        ))}
    </section>
  );
};
