"use client";
import { DetailedHTMLProps } from "react";
import { useAtomValue } from "jotai";
import { listProjectAtom } from "@/lib/jotai";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/fragments/project-card";

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
        "relative z-10 container px-8 min-h-[100vh] space-y-4",
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
