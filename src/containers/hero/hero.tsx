"use client";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo } from "react";

export const Hero = () => {
  const container = useRef(null);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "start 50vh"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const rotate = useTransform(scrollYProgress, [0, 0.5], [-5, -10]);
  const filter = useTransform(
    scrollYProgress,
    [0.5, 1],
    [`blur(0)`, `blur(4px)`]
  );

  const totalRow = useMemo(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    return Math.ceil(vh / (vw * 0.1));
  }, []);

  console.log(totalRow);

  return (
    <section ref={container} id="hero" className="w-full relative">
      <motion.div
        style={{ scale, rotate, filter }}
        className="sticky top-0 h-dvh flex items-center justify-center"
      >
        <h1 className="grid grid-cols-3 grid-rows-3 leading-none text-center font-bold text-[25vw] md:text-[10vw] gap-x-1 even:*:text-amber-500 odd:*:text-red-500">
          <span>M</span>
          <span>O</span>
          <span>K</span>
          <span>L</span>
          <span>E</span>
          <span>T</span>
          <span>D</span>
          <span>E</span>
          <span>V</span>
        </h1>
      </motion.div>

      <div ref={scrollRef} className="relative z-10">
        <div className="h-screen w-full p-10">
          <div className="w-full h-full bg-red-500"></div>
        </div>
        <div className="h-screen w-full p-10">
          <div className="w-full h-full bg-red-500"></div>
        </div>
        <div className="h-screen w-full p-10">
          <div className="w-full h-full bg-red-500"></div>
        </div>
      </div>
    </section>
  );
};
