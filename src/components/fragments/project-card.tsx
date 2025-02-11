import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { useRef, useState } from "react";
import { ProgressiveBlur } from "../ui/progressive-blur";
import { motion, useScroll, useTransform } from "motion/react";
import { InferSelectModel } from "drizzle-orm";
import { projects } from "../../../database/schema";

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

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [`blur(4px)`, `blur(0)`, `blur(4px)`]
  );

  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      ref={scrollRef}
      style={{ scale, filter }}
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-neutral-950 aspect-square border border-neutral-800",
        // Card position
        "even:origin-top",
        // Hover variable
        "sm:[--opacity-hidden:0%] sm:[--opacity-visible:100%]",
        className
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.img
        style={{ opacity }}
        src="https://cdn.cosmos.so/2d774ea0-4b4f-4d9f-a634-6b6c5a130e91?format=jpeg"
        alt="John Martin - Pandemonium"
        className="h-full w-full object-cover"
      />
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[75%] w-full"
        blurIntensity={0.5}
        animate={isHover ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: "var(--opacity-hidden, 100%)" },
          visible: { opacity: "var(--opacity-visible, 100%)" },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 flex justify-between w-full items-end p-4 sm:[--bottom-hidden:-0.5rem]"
        animate={isHover ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: "var(--opacity-hidden, 100%)",
            bottom: "var(--bottom-hidden, 0)",
          },
          visible: { opacity: "var(--opacity-visible, 100%)", bottom: 0 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div>
          <h5 className="font-mono sm:text-xl font-semibold">{project.name}</h5>
          <p className="font-rubik text-xs sm:text-sm font-light">
            {project.description}
          </p>
        </div>
        {/* <button className="rounded-full py-1 px-4 bg-neutral-700/50 backdrop-blur-sm">
          Visit
        </button> */}
      </motion.div>
    </motion.div>
  );
};
