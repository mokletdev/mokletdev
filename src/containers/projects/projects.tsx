import React from "react";
import { Sync } from "./sync";
import { getListProjects } from "@/lib/actions/project";

export const Projects = async () => {
  const listProjects = await getListProjects();

  return (
    <section id="projects">
      <h1>All project</h1>
      <Sync />
      {listProjects.map((project) => (
        <div key={project.githubId}>
          <a
            href={project.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer"
          >
            {project.name}
          </a>
        </div>
      ))}
    </section>
  );
};
