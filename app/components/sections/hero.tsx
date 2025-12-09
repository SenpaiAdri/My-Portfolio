"use client";
import { motion } from "motion/react";
import React from "react";
import { Meteors } from "../ui/meteors";

const hero = () => {
  const transition = {
    duration: 1.75,
    delay: 0.5,
    ease: "easeInOut" as const,
  };
  return (
    <div
      className="relative w-full min-h-screen pt-20 pb-40 px-5 flex flex-col justify-between
      md:px-30
      lg:pb-0 lg:pt-0 lg:px-0
      xl:pb-0 xl:pt-0 xl:px-0"
    >
      {/* Top Right Content */}
      <div>
        {/* Top Right Content Container */}
        <div
          className="flex flex-col items-center justify-center gap-5 px-4 mt-25
          lg:flex-row lg:items-start lg:justify-end lg:gap-10 lg:px-10
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
              "Building Practical Solutions for a<br />
              Better Future"
            </h1>
          </motion.div>
          {/* Name and Description */}
          <motion.div
            className="border border-[#6A6B70] rounded-3xl backdrop-blur-lg 
              w-full px-6 py-10 text-center 
              lg:w-200 lg:p-8 lg:text-right 
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
                text-3xl pb-3 
                xl:text-5xl xl:pb-5"
            >
              I'm Adrian M. De Guzman
            </h1>
            <p
              className="text-gray-200 italic 
                text-xl 
                xl:text-2xl"
            >
              A Computer Science Student Major{" "}
              <br className="hidden xl:block" />
              In Mobile Programming
            </p>
          </motion.div>
        </div>
      </div>
      {/* Center Content */}
      <motion.div
        className="bg-grey w-full flex flex-col items-center justify-center 
          flex-1 py-10
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
      {/* Bottom Right Content */}
      <div>
        <div
          className="flex flex-col items-center justify-center gap-5 px-4 
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
                text-3xl text-center pb-3
                lg:text-3xl lg:text-left lg:pb-5
                xl:text-5xl xl:text-left xl:pb-5"
            >
              One of the developers
              <br />
              of Pasada
            </h1>
            <p
              className="text-gray-200 italic 
                text-xl text-center 
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
              className="text-xl pb-3 text-center whitespace-nowrap
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
              [ Let's Connect ]
            </motion.h1>
          </div>
        </div>
      </div>
      {/* Meteors */}
      <Meteors number={80} />
    </div>
  );
};

export default hero;
