import React from "react";
import { Sync } from "./sync";
import { getListProjects } from "@/lib/actions/project";
import { useEffect, useState } from "react";
import { InferSelectModel } from "drizzle-orm";
import { projects } from "../../../database/schema";
export const Projects = () => {
  const [listProjects, setListProjects] = useState<
    InferSelectModel<typeof projects>[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getListProjects();
        setListProjects(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
