"use client";
import Image from "next/image";
import { skills } from "@/app/data/skills";
import Tooltip from "@/app/components/ui/tooltip";
import { motion } from "motion/react";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: (customX: number) => ({
      opacity: 0,
      x: customX,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const skillList = skills.map((skill) => (
    <motion.div
      key={skill.type}
      variants={itemVariants}
      className="bg-white dark:bg-[#131316] rounded-[30px] w-full p-5 gap-4 flex flex-col items-center
      md:rounded-[40px] 
      lg:rounded-4xl  shadow-xl 
      dark:shadow-black/20 hover:shadow-neutral-400/50 dark:hover:shadow-black/50"
      initial={{opacity: 0, x: skill.initialx , scale: 0.8}}
      whileInView={{opacity: 1, x: 0, scale: 1}}
      transition={{duration: 0.8, ease: "easeOut"}}
      viewport={{amount: 0.2}}
      whileHover={{scale: 1.05, transition: {duration: 0.3, ease: "easeOut"}}}
    >
      <h1 className="text-black dark:text-white text-base md:text-xl md:py-4 text-center">
        {skill.type}
      </h1>
      <div className="flex flex-wrap justify-center max-w-55 gap-2 md:gap-4">
        {skill.list.map((item, index) => (
          <div
            key={`${skill.type}-${item}-${index}`}
            className="text-black dark:text-white text-xl flex items-center justify-center md:p-2 pb-1"
          >
            {/* <h1>{item}</h1> */}
            <Tooltip text={item}>
              <span tabIndex={0} className="outline-none">
                <Image
                  src={skill.image[index]}
                  alt={item}
                  title={item}
                  width={50}
                  height={50}
                  className="m-2 hover:scale-120 transition-transform duration-300 w-8 h-8 
                  md:w-12 md:h-12 
                  lg:w-[50px] lg:h-[50px]"
                />
              </span>
            </Tooltip>
          </div>
        ))}
      </div>
    </motion.div>
  ));

  return (
    <div id="skills">
      <div className="bg-white dark:bg-black flex flex-col items-center justify-center py-5 md:py-15 px-5 md:px-10">
        <h1 className="text-3xl font-bold text-center mt-10 
        md:text-5xl 
        lg:text-5xl text-black dark:text-white">
          Skills
        </h1>
        {/* Skills Container */}
        <motion.div
          className="bg-[#E8E8E8] dark:bg-[#26262C] rounded-[35px] p-5 my-6 gap-6 grid grid-cols-1 
        sm:my-20 sm:grid-cols-2 sm:p-5 sm:gap-4
        md:my-20 md:grid-cols-2 md:p-8 md:gap-8 md:rounded-[45px]
        lg:my-50 lg:grid-cols-4 lg:p-10 lg:gap-10 lg:rounded-[50px]
        dark:hover:shadow-[#26262C]/20 transition-shadow duration-300 shadow-xl shadow-neutral-400/10 dark:shadow-[#26262C]/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {skillList}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
