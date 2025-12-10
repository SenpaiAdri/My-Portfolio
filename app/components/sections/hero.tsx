"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Meteors } from "../ui/meteors";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const xTop = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const yCenter = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const xBottom = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const transition = {
    duration: 1.75,
    delay: 0.5,
    ease: "easeInOut" as const,
  };

  return (
    <div
      // Attach the ref here so useScroll knows which element to measure
      ref={containerRef}
      className="relative w-full min-h-screen pt-10 pb-0 px-5 flex flex-col justify-between overflow-hidden
      md:px-30
      lg:pb-0 lg:pt-0 lg:px-0
      xl:pb-0 xl:pt-0 xl:px-0"
    >
      {/* Top Right Content */}
      <motion.div style={{ x: xTop, opacity }}>
        {/* Top Right Content Container */}
        <div
          className="flex flex-col items-center justify-center gap-5 px-4 mt-20
          md:mt-20
          lg:flex-row lg:items-start lg:justify-end lg:gap-10 lg:px-10 lg:mt-30
          xl:flex-row xl:items-start xl:justify-end xl:gap-10 xl:px-10"
        >
          {/* Quote */}
          <motion.div
            className="hidden border border-[#6A6B70] rounded-3xl backdrop-blur-lg 
              w-full px-6 py-10
              lg:block lg:w-auto lg:p-8
              xl:w-auto xl:p-8
              hover:bg-[#393A41] cursor-pointer
              transition-colors duration-300"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            whileHover={{ scale: 1.01 }}
          >
            <h1
              className="italic 
                text-xl text-center 
                lg:text-xl lg:text-right
                xl:text-2xl xl:text-right"
            >
              &quot;Building Practical Solutions for a<br />
              Better Future&quot;
            </h1>
          </motion.div>
          {/* Name and Description */}
          <motion.div
            className="border border-[#6A6B70] rounded-3xl backdrop-blur-lg 
              w-full px-6 py-10 text-center 
              lg:w-auto lg:p-8 lg:text-right 
              xl:w-auto xl:p-8 xl:text-right
              hover:bg-[#393A41] cursor-pointer
              transition-colors duration-300"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
            whileHover={{ scale: 1.01 }}
          >
            <h1
              className="font-bold italic 
                text-2xl pb-3 
                xl:text-5xl xl:pb-5"
            >
              I&apos;m Adrian M. De Guzman
            </h1>
            <p
              className="text-gray-200 italic 
                text-base 
                xl:text-2xl"
            >
              A Computer Science Student Major{" "}
              <br className="hidden md:block" />
              In Mobile Programming
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Center Content */}
      <motion.div
        style={{ y: yCenter, opacity }}
        className="w-full flex-1 flex flex-col items-center justify-center"
      >
        <motion.div
          className="bg-grey w-full flex flex-col items-center justify-center 
            py-10
            lg:py-0
            xl:py-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
        >
          <h1
            className="font-bold text-center 
              text-4xl
              lg:text-5xl
              xl:text-7xl"
          >
            Welcome to
          </h1>
          <h1
            className="text-center 
              text-2xl 
              xl:text-4xl"
          >
            My Portfolio
          </h1>
        </motion.div>
      </motion.div>

      {/* Bottom Right Content */}
      <motion.div style={{ x: xBottom, opacity }}>
        <div
          className="flex flex-col items-center justify-center gap-10 px-4 
          lg:flex-row lg:items-end lg:justify-start lg:gap-10 lg:mt-25 lg:mb-15 lg:px-10
          xl:flex-row xl:items-end xl:justify-start xl:gap-10 xl:mt-25 xl:mb-15 xl:px-10"
        >
          {/* Achievements */}
          <motion.div
            className="border border-[#6A6B70] rounded-3xl backdrop-blur-md
              w-full p-6 
              lg:w-110 lg:p-8 lg:text-left
              xl:w-auto xl:p-8
              hover:bg-[#393A41] cursor-pointer
              transition-colors duration-300"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
            whileHover={{ scale: 1.01 }}
          >
            <h1
              className="font-bold italic 
                text-2xl text-center pb-3
                lg:text-3xl lg:text-left lg:pb-5
                xl:text-5xl xl:text-left xl:pb-5"
            >
              One of the developers
              <br />
              of Pasada
            </h1>
            <p
              className="text-gray-200 italic 
                text-base text-center 
                lg:text-xl lg:text-left
                xl:text-2xl xl:text-left"
            >
              An AI-Powered Ride-Hailing and Fleet Management Platform for
              <br className="hidden xl:block" />
              Modernized Jeepneys Services
            </p>
          </motion.div>
          {/* Skills */}
          <motion.div
            className="hidden border border-[#6A6B70] rounded-3xl backdrop-blur-lg 
            w-full p-6 text-center 
            lg:block lg:w-auto lg:p-8 lg:text-left
            xl:w-auto xl:p-8 xl:text-left
            hover:bg-[#393A41] cursor-pointer
            transition-colors duration-300"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            whileHover={{ scale: 1.01 }}
          >
            <h1
              className="italic mb-2 
                lg:text-2xl lg:text-left
                text-2xl 
                xl:text-4xl"
            >
              Skills
            </h1>
            <p
              className="text-gray-300 
                text-xl 
                xl:text-2xl"
            >
              Dart | Flutter | PostgreSQL <br /> Supabase | Figma
            </p>
          </motion.div>
          {/* Lets Connect*/}
          <div
            className="backdrop-blur-lg w-auto p-6 mx-auto
          xl:mx-auto
          lg:w-auto lg:p-8"
          >
            <motion.h1
              className="text-xl pb-20 text-center whitespace-nowrap
              lg:text-3xl lg:text-left lg:text-lg 
              xl:text-2xl xl:text-left xl:pb-5
              hover:text-gray-500 cursor-pointer
              transition-colors duration-300"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
            >
              [ Let&apos;s Connect ]
            </motion.h1>
          </div>
        </div>
      </motion.div>
      {/* Meteors */}
      <Meteors number={80} />
    </div>
  );
};

export default Hero;
