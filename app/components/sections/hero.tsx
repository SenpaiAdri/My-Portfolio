"use client";
import { motion } from "motion/react";
import React from "react";
import { Meteors } from "../ui/meteors";

const hero = () => {
  return (
    <div
      className="relative w-full min-h-[calc(100vh-5rem)] mt-20 pt-20 pb-40 px-5 flex flex-col justify-between 
      md:block md:min-h-screen md:pb-0 md:pt-0 md:px-0
      xl:block xl:min-h-screen xl:pb-0 xl:pt-0 xl:px-0"
    >
      {/* Top Right Content */}
      <div>
        {/* Top Right Content Container */}
        <div
          className="flex flex-col items-center justify-center gap-5 px-4
          md:flex-row md:items-start md:justify-end md:gap-10 md:mt-25 md:px-10
            xl:flex-row xl:items-start xl:justify-end xl:gap-10 xl:mt-25 xl:px-10"
        >
          {/* Quote */}
          <div
            className="hidden border border-[#6A6B70] rounded-3xl backdrop-blur-md 
              w-full px-6 py-10
              md:block md:w-auto md:p-8
              xl:w-auto xl:p-8"
          >
            <h1
              className="italic 
                text-xl text-center 
                md:text-xl md:text-right
                xl:text-2xl xl:text-right"
            >
              "Building Practical Solutions for a<br />
              Better Future"
            </h1>
          </div>
          {/* Name and Description */}
          <div
            className="border border-[#6A6B70] rounded-3xl backdrop-blur-md 
              w-full px-6 py-10 text-center 
              md:w-100 md:p-8 md:text-right 
              xl:w-auto xl:p-8 xl:text-right"
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
          </div>
        </div>
      </div>
      {/* Center Content */}
      <div
        className="bg-grey w-full flex flex-col items-center justify-center 
          h-auto py-10 
          md:h-100 md:py-0
          xl:h-100 xl:py-0"
      >
        <h1
          className="font-bold text-center 
            text-4xl 
            md:text-5xl
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
      </div>
      {/* Bottom Right Content */}
      <div>
        <div
          className="flex flex-col items-center justify-center gap-5 px-4 
          md:flex-row md:items-end md:justify-start md:gap-10 md:mt-25 md:px-10
            xl:flex-row xl:items-end xl:justify-start xl:gap-10 xl:mt-25 xl:px-10"
        >
          {/* Achievements */}
          <div
            className="border border-[#6A6B70] rounded-3xl backdrop-blur-md 
              w-full p-6 
              md:w-110 md:p-8 md:text-left
              xl:w-auto xl:p-8"
          >
            <h1
              className="font-bold italic 
                text-3xl text-center pb-3
                md:text-3xl md:text-left md:pb-5
                xl:text-5xl xl:text-left xl:pb-5"
            >
              One of the developers
              <br />
              of Pasada
            </h1>
            <p
              className="text-gray-200 italic 
                text-xl text-center 
                md:text-xl md:text-left
                xl:text-2xl xl:text-left"
            >
              An AI-Powered Ride-Hailing and Fleet Management Platform for
              <br className="hidden xl:block" />
              Modernized Jeepneys Services
            </p>
          </div>
          {/* Skills */}
          <div
            className="hidden border border-[#6A6B70] rounded-3xl backdrop-blur-md 
              w-full p-6 text-center 
              md:block md:w-auto md:p-8 md:text-left
              xl:w-auto xl:p-8 xl:text-left"
          >
            <h1
              className="italic mb-2 
                md:text-2xl md:text-left
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
          </div>
          {/* Lets Connect*/}
          <div
            className="backdrop-blur-md w-auto p-6
          xl:ml-0
          lg:w-auto lg:p-8"
          >
            <motion.h1
              className="text-xl pb-3 text-center
            md:text-3xl md:text-left md:text-lg 
            xl:text-2xl xl:text-left xl:pb-5
            hover:text-gray-500 cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
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
