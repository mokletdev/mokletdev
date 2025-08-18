"use client";
import { ModeToggle } from "@/components/fragments/mode-toggle";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "motion/react";
import { useScrolledPastThreshold } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const scrolled = useScrolledPastThreshold(100);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full h-14 sm:h-16 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/65 backdrop-blur-lg shadow"
          : "bg-transparent backdrop-blur-none shadow-none"
      )}
    >
      <motion.div
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        transition={{ delay: 1.8, ease: "easeInOut" }}
        className="mx-auto sm:w-[calc(100%-4rem)] max-w-7xl h-full flex items-center pr-4 sm:pr-0 gap-2"
      >
        <div className="bg-primary text-primary-foreground font-rubik font-medium h-full px-4 sm:px-6 flex items-center text-xl leading-5">
          Moklet
          <br />
          Dev
        </div>
        <div className="flex-1" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          <ModeToggle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1 }}
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
  );
};
