"use client";
import { ModeToggle } from "@/components/fragments/mode-toggle";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { RefObject } from "react";

export const Navbar = ({ ref }: { ref: RefObject<HTMLElement | null> }) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    // layoutEffect: true,,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-14 sm:h-16 z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mx-auto sm:w-[calc(100%-4rem)] max-w-7xl h-full flex items-center pr-4 sm:pr-0 gap-2"
        >
          <div className="bg-primary text-primary-foreground font-rubik font-medium h-full px-4 sm:px-6 flex items-center text-xl">
            dev.
          </div>
          <div className="flex-1" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
          >
            <ModeToggle />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9 }}
          >
            <Button asChild>
              <Link href="https://github.com/mokletdev" target="_blank">
                <FaGithub className="size-[1.2rem]" />
                Github
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </nav>
      <motion.div
        className="fixed top-0 left-0 w-full h-14 sm:h-16 z-40 bg-background/65 backdrop-blur-lg shadow"
        style={{ opacity }}
      />
    </>
  );
};
