import React from "react";
import { db } from "../../../database/drizzle";
import { projects } from "../../../database/schema";
import { asc } from "drizzle-orm";
import { Sync } from "./sync";

export const Projects = async () => {
  const listProjects = await db
    .select()
    .from(projects)
    // .limit(10)
    .orderBy(asc(projects.name));

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
