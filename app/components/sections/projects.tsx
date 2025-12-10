"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 2750]);
  const xproject1 = useTransform(scrollYProgress, [.1, .2], [1000, 0]);
  const xproject2 = useTransform(scrollYProgress, [.25, .4], [-1000, 0]);
  const xproject3 = useTransform(scrollYProgress, [.45, .6], [1000, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, .1], [0, 1]);
  const project1Opacity = useTransform(scrollYProgress, [.1, .2], [0, 1]);
  const project2Opacity = useTransform(scrollYProgress, [.3, .4], [0, 1]);
  const project3Opacity = useTransform(scrollYProgress, [.5, .6], [0, 1]);
  return (
    // background
    <motion.div
      ref={containerRef}
      className="bg-black relative w-full h-[275vh] pt-0 px-5 flex flex-col justify-between overflow-hidden
      md:px-30
      lg:px-0
      xl:px-0"
    >
      <div className="w-auto h-auto flex flex-col items-top justify-start">
        {/* Title */}
        <motion.div style={{ y: y, opacity: titleOpacity }}>
          <h1
            className="text-2xl font-bold text-center pt-20
          md:text-3xl
          lg:text-4xl
          xl:text-4xl"
          >
            Projects
          </h1>
        </motion.div>

        {/* Project list*/}
        <motion.div style={{ y: y }}>
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-10 px-5 
            md:px-10 
            lg:px-30"
          >
            {/* Project */}
            <motion.div
              style={{ x: xproject1, opacity: project1Opacity }}
              className="w-auto h-full flex flex-row items-center justify-center gap-10 self-end"
            >
              <div className="w-auto h-auto flex flex-col">
                <h1
                  className="text-2xl font-bold text-right
                md:text-3xl
                lg:text-4xl
                xl:text-4xl"
                >
                  Pasada Driver Side
                </h1>
                <p
                  className="text-right
                md:text-xl
                lg:text-2xl
                xl:text-2xl"
                >
                  An AI-Powered Ride-Hailing and Fleet Management Platform
                  <br />
                  for Modernized Jeepneys Services
                </p>
              </div>
              <div className="w-75 h-50 bg-red-500 rounded-2xl"></div>
            </motion.div>
            {/* Project */}
            <motion.div
              style={{ x: xproject2, opacity: project2Opacity }}
              className="w-auto h-auto flex flex-row items-center justify-center gap-10 self-start"
            >
              <div className="w-75 h-50 bg-red-500 rounded-2xl"></div>

              <div className="w-auto h-auto flex flex-col">
                <h1
                  className="text-2xl font-bold text-left
                md:text-3xl
                lg:text-4xl
                xl:text-4xl"
                >
                  AI Blog Post
                </h1>
                <p
                  className="text-left
                md:text-xl
                lg:text-2xl
                xl:text-2xl"
                >
                  An AI-Powered Blogging Channel for Latest <br />
                  Tech News and Updates
                </p>
              </div>
            </motion.div>
            {/* Project */}
            <motion.div
              style={{ x: xproject3, opacity: project3Opacity }}
              className="w-auto h-full flex flex-row items-center justify-center gap-10 self-end"
            >
              <div className="w-auto h-auto flex flex-col">
                <h1
                  className="text-2xl font-bold text-right
                md:text-3xl
                lg:text-4xl
                xl:text-4xl"
                >
                  To Be Announced
                </h1>
                <p
                  className="text-right
                md:text-xl
                lg:text-2xl
                xl:text-2xl"
                >
                  Next project is still on the back of my mind <br />
                  and will be announced soon
                </p>
              </div>
              <div className="w-75 h-50 bg-red-500 rounded-2xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
