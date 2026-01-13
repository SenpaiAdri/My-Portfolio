"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="relative w-full py-20 px-10 items-center justify-center md:px-25 bg-[#E8E8E8] dark:bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Section Title */}
        <motion.h1
          className="text-3xl font-bold text-center mb-10 md:text-5xl text-neutral-900 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
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
            viewport={{ amount: 0.2 }}
          >
            <p className="text-neutral-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
              Hi, I&apos;m <span className="text-neutral-900 dark:text-white font-semibold">Adrian M. De Guzman</span> and I&apos;m a Computer Science student specialized in <span className="text-neutral-900 dark:text-white">Mobile Programming</span>. 
              I am currently looking for an internship where i can gain hands-on experience and develop skills aligned with the current industry standards. I'd like to explore new technologies, learn new skills, and adapt to the fast-changing tech industry.
            </p>
            
            <p className="text-neutral-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
              Recently, I have worked with <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className="text-[#38BDF8] font-medium">Flutter</a> Framework, 
              which i used to build the driver side of the <span className="text-neutral-900 dark:text-white font-semibold">Pasada Systems</span>, an AI-powered Ride Hailing and Fleet Management System 
              for Modernized Jeepney Services. I&apos;m currently working with projects using modern web development technologies with <span className="text-neutral-900 dark:text-white font-medium">Next.js</span>, which I used to build this portfolio.
            </p>

            <p className="text-neutral-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
              I am currently looking for an internship where I can apply my skills in mobile and web development while learning from 
              experienced developers and engineers. I look forward to working in environments that focuses on good engineering practices, 
              collaboration and continuous learning. I want to contribute to real production systems while gaining experience to the 
              current industry tools, practices, and standards.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.2 }}
          >
             <div className="relative w-64 h-64 md:w-90 md:h-100 rounded-full border-2 border-[#696972] dark:border-[#C6C6C9] flex items-center justify-center bg-neutral-100 dark:bg-[#111] overflow-hidden">
                <Image src="/profile_picture.png" width={320} height={320} alt="About" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/5 dark:via-white/5 to-transparent opacity-50" />
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
