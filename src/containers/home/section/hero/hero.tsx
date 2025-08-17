"use client";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const HeroSection = () => {
  const projectRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    // layoutEffect: true,,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  const rotate = useTransform(scrollYProgress, [0, 1], [-7, -21]);

  // const translateY = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      className="@container/hero h-svh w-full flex items-center justify-center relative overflow-hidden"
      ref={projectRef}
    >
      <motion.div style={{ scale, rotate, opacity }} className="transform">
        <h1 className="grid grid-cols-3 grid-rows-3 leading-none text-center font-semibold font-rubik text-[25vw] sm:text-[20vw] md:text-[15vw] lg:text-[10vw] *:odd:text-red-500 *:even:text-amber-500">
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
    </section>
  );
};
