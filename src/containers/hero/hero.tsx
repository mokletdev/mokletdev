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
    [0.25, 1],
    [`blur(0)`, `blur(50px)`]
  );

  return (
    <>
      <div className="sticky top-0 left-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[80dvh] md:h-dvh flex items-center justify-center z-10">
          <motion.div style={{ scale, rotate, filter }} className="">
            <h1 className="grid grid-cols-3 grid-rows-3 leading-none text-center font-medium font-rubik text-[25vw] sm:text-[20vw] md:text-[15vw] lg:text-[10vw] odd:*:text-red-600 even:*:text-amber-500">
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
      </div>
      <section className="h-dvh relative z-10">dev.</section>
    </>
  );
};
