import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { InferSelectModel } from "drizzle-orm";
import { projects } from "../../../database/schema";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

interface Props {
  className?: ClassValue;
  project: InferSelectModel<typeof projects>;
}

export const ProjectCard = ({ className, project }: Props) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["5% end", "95% start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.8, 1, 1, 0.8]
  );
  const filter = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [`blur(4px)`, `blur(0)`, `blur(0)`, `blur(4px)`]
  );

  const topics = !!project.topics.length ? project.topics.split(",") : [];

  return (
    <motion.div
      ref={scrollRef}
      style={{ scale, filter, direction: "ltr" }}
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 h-fit max-w-[400px] drop-shadow-lg",
        // Card position
        "origin-center",
        className
      )}
    >
      <div className="w-full aspect-square">
        <motion.img
          src="https://cdn.cosmos.so/2d774ea0-4b4f-4d9f-a634-6b6c5a130e91?format=jpeg"
          alt="John Martin - Pandemonium"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-2 space-y-2">
        <h5 className="font-mono font-semibold leading-none">{project.name}</h5>
        <p className="font-rubik text-xs font-light">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <div className="bg-slate-700 rounded-sm px-1 py-0.5" key={index}>
              <p className="text-xs leading-none">{topic}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="bg-slate-100 text-zinc-900">
            <FaGithub /> Source
          </Button>
          {project.homepage && (
            <Button asChild size="sm" className="bg-slate-100 text-zinc-900">
              <Link href={project.homepage} target="_blank">
                <HiOutlineExternalLink /> Live
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
