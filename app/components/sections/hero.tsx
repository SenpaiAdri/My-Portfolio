"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Meteors } from "../ui/meteors";
import { HandleScroll } from "../handle-scroll";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const xTop = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const yCenter = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const xBottom = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const transition = {
    duration: 1.75,
    delay: 0.5,
    ease: "easeInOut" as const,
  };

  return (
    <div
      ref={containerRef}
      className="bg-white dark:bg-black relative w-full min-h-screen pt-10 pb-0 px-5 flex flex-col justify-between overflow-hidden
      md:px-30
      lg:pb-0 lg:pt-0 lg:px-0
      xl:pb-0 xl:pt-0 xl:px-0"
    >
      {/* Meteors */}
      <Meteors number={80} />
      {/* Top Right Content */}
      <motion.div style={{ x: xTop, opacity , y:xTop}}>
        {/* Top Right Content Container */}
        <div
          className="flex flex-col items-center justify-center gap-5 px-4 mt-20
          md:mt-20
          lg:flex-row lg:items-start lg:justify-end lg:gap-10 lg:px-10 lg:mt-30
          xl:flex-row xl:items-start xl:justify-end xl:gap-10 xl:px-10"
        >
          {/* Quote */}
          <motion.div
            className="hidden border dark:border-[#6A6B70] border-[#C6C6C9] rounded-3xl backdrop-blur-xs 
              w-full px-6 py-10
              lg:block lg:w-auto lg:p-8
              xl:w-auto xl:p-8
              hover:bg-[#393A41]/10 dark:hover:bg-[#393A41]/25 cursor-pointer
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
              Currently looking for an Internship
            </h1>
          </motion.div>
          {/* Name and Description */}
          <motion.div
            className="border dark:border-[#6A6B70] border-[#C6C6C9] rounded-3xl backdrop-blur-xs
              w-full px-6 py-10 text-center 
              lg:w-auto lg:p-8 lg:text-right 
              xl:w-auto xl:p-8 xl:text-right
              hover:bg-[#393A41]/10 cursor-pointer
              dark:hover:bg-[#393A41]/25
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
              className="dark:text-gray-200 italic text-base 
                xl:text-2xl"
            >
              A Computer Science Student Specialized{" "}
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
            className="border dark:border-[#6A6B70] border-[#C6C6C9] rounded-3xl backdrop-blur-xs
              w-full p-6 
              lg:w-110 lg:p-8 lg:text-left
              xl:w-auto xl:p-8
              hover:bg-[#393A41]/10 dark:hover:bg-[#393A41]/25 cursor-pointer
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
              className="dark:text-gray-200 italic 
                text-base text-center 
                lg:text-xl lg:text-left
                xl:text-2xl xl:text-left"
            >
              An AI-Powered Ride-Hailing and Fleet Management Platform <br className="hidden lg:block" /> for Modernized Jeepneys Services
            </p>
          </motion.div>
          {/* Skills */}
          <motion.div
            className="hidden border dark:border-[#6A6B70] border-[#C6C6C9] rounded-3xl backdrop-blur-xs
            w-full p-6 text-center 
            lg:block lg:w-auto lg:p-8 lg:text-left
            xl:w-auto xl:p-8 xl:text-left
            hover:dark:hover:bg-[#393A41]/25 cursor-pointer
            hover:bg-[#393A41]/10 
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
              className="dark:text-gray-300 
                text-xl 
                xl:text-2xl"
            >
              Dart | Flutter | PostgreSQL <br /> Supabase | Next.js
            </p>
          </motion.div>
          {/* Lets Connect*/}
          <div
            className="w-auto p-6 mx-auto
          xl:mx-auto
          lg:w-auto lg:p-8"
          >
            <motion.a
              className="text-xl pb-20 text-center whitespace-nowrap block self-end
              lg:text-xl lg:text-left lg:pb-0
              xl:text-2xl xl:text-left 
              hover:text-gray-500 dark:hover:text-gray-500 cursor-pointer
              transition-colors duration-300"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              onClick={HandleScroll("#contact")}
            >
              [ Let&apos;s Connect ]
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
