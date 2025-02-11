"use client";
import { motion, MotionValue, useTransform } from "motion/react";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const Hero = ({ scrollYProgress }: Props) => {
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const rotate = useTransform(scrollYProgress, [0, 0.5], [-5, -10]);
  const filter = useTransform(
    scrollYProgress,
    [0.5, 1],
    [`blur(0)`, `blur(4px)`]
  );

  return (
    <>
      <div
        id="hero"
        className="sticky top-0 h-dvh flex items-center justify-center"
      >
        <motion.div style={{ scale, rotate, filter }} className="">
          <h1 className="grid grid-cols-3 grid-rows-3 leading-none text-center font-medium font-rubik text-[25vw] md:text-[10vw] even:*:text-amber-500 odd:*:text-red-600">
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
      </div>
    </>
  );
};
