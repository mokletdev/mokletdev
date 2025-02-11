"use client";
import { Hero } from "@/containers/hero";
import { Projects } from "@/containers/projects";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const projectRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: scrollYProgressProject } = useScroll({
    target: projectRef,
    layoutEffect: true,
    offset: ["start end", "start 50vh"],
  });

  return (
    <div className="relative">
      <Hero scrollYProgress={scrollYProgressProject} />

      <Projects id="projects" ref={projectRef} className="mt-20" />
    </div>
  );
}
