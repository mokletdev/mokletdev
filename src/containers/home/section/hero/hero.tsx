"use client";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { LuArrowUpRight, LuGlobe } from "react-icons/lu";

export const HeroSection = () => {
  const projectRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    // layoutEffect: true,,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const rotate = useTransform(scrollYProgress, [0, 0.5], [-7, -21]);

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      className="@container/hero h-screen w-full flex flex-col gap-32 items-center justify-center relative overflow-hidden"
      ref={projectRef}
    >
      <div />
      <motion.div
        style={{ scale, rotate, opacity, translateY }}
        className="transform relative z-0"
      >
        <h1 className="grid grid-cols-3 grid-rows-3 leading-none text-center font-medium font-rubik text-[25vw] sm:text-[20vw] md:text-[15vw] lg:text-[10vw] *:odd:text-red-500 *:even:text-amber-500">
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.6,
              },
            }}
          >
            M
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            O
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            K
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            L
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            E
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            T
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            D
          </motion.span>
          <motion.span
            initial={{ opacity: 0, rotateY: 0 }}
            animate={{ opacity: 1, rotateY: 180 }}
            transition={{ delay: 1.2 }}
          >
            E
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            V
          </motion.span>
        </h1>
      </motion.div>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Button
          variant="outline"
          className="font-mono group hover:pr-8! focus:pr-8! relative duration-500 overflow-hidden"
          asChild
        >
          <Link href="https://github.com/mokletdev" target="_blank">
            <LuGlobe className="group-hover:-rotate-30 group-focus:-rotate-30 group-hover:text-accent-foreground group-focus:text-accent-foreground transition-all duration-300" />
            <span>
              <span className="max-sm:hidden">https://</span>
              github.com/mokletdev
            </span>
            <LuArrowUpRight className="absolute right-3 group-hover:translate-y-0 translate-y-1/2 group-focus:opacity-100 group-hover:opacity-100 opacity-0 transition-all duration-500" />
          </Link>
        </Button>
        {/* <p className="text-center text-muted-foreground max-w-2xl">
          MokletDev is a student developer community under METIC (Moklet
          Education of Technology and Informatic Club). We turn ideas into
          working products, web apps, tools, and services used by our school and
          external partners.
        </p> */}
      </div>
    </section>
  );
};
