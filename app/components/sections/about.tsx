"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="relative w-full py-20 px-5 items-center justify-center md:px-10 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Section Title */}
        <motion.h1
          className="text-3xl font-bold text-center mb-10 md:text-5xl lg:text-5xl text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-10 mt-20 items-center justify-center w-full">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-2/3 flex flex-col gap-6 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Adrian M. De Guzman</span>, a Computer Science student major in <span className="text-white">Mobile Programming</span>. 
              My journey in tech is driven by a fascination with building practical applications that solve real-world problems.
            </p>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Currently, I&apos;m focused on cross-platform development using <span className="text-[#38BDF8] font-medium">Flutter</span> and learning modern web development with <span className="text-white font-medium">Next.js</span>. 
              I&apos;m one of the developers behind <span className="text-white font-semibold">Pasada</span>, an AI-powered platform modernizing public transportation.
            </p>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Beyond coding, I&apos;m constantly exploring new technologies to enhance my skills and widen my knowledge. I believe in writing clean, maintainable code and am eager to collaborate on projects that make a difference.
            </p>
          </motion.div>

          {/* Decorative / Image Placeholder */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
             <div className="relative w-64 h-64 md:w-90 md:h-100 rounded-full border-2 border-white flex items-center justify-center bg-[#111] overflow-hidden">
                {/* You can replace this with an actual image later */}
                {/* <span className="text-gray-600 text-6xl select-none">ADG</span> */}
                <Image src="/profile_picture.png" width={320} height={320} alt="About" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50" />
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
