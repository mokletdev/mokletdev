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
    [0.25, 0.75],
    [`blur(0)`, `blur(4px)`]
  );
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [`#0A0A0A`, `#F59E0C`]
  );
  const color = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [`#F59E0C`, `#0A0A0A`]
  );

  return (
    <>
      <div className="sticky top-0 left-0">
        <div className="relative">
          <motion.div
            style={{ backgroundColor }}
            className="absolute top-0 left-0 w-full h-dvh"
          />
        </div>
      </div>
      <motion.section
        id="hero"
        style={{ backgroundColor }}
        className="sticky top-0 h-[80dvh] md:h-dvh flex items-center justify-center z-10"
      >
        <motion.div style={{ scale, rotate, filter }} className="">
          <h1 className="grid grid-cols-3 grid-rows-3 leading-none text-center font-medium font-rubik text-[25vw] sm:text-[20vw] md:text-[15vw] lg:text-[10vw] odd:*:text-red-600">
            <span>M</span>
            <motion.span style={{ color }}>O</motion.span>
            <span>K</span>
            <motion.span style={{ color }}>L</motion.span>
            <span>E</span>
            <motion.span style={{ color }}>T</motion.span>
            <span>D</span>
            <motion.span style={{ color }}>E</motion.span>
            <span>V</span>
          </h1>
        </motion.div>
      </motion.section>
    </>
  );
};
