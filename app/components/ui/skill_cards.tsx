import Tooltip from "./tooltip";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SkillCards({ skill, index }: { skill: any, index: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      key={`${skill.type}-${mounted ? "mounted" : "ssr"}`}
      initial={mounted ? { opacity: 0, x: skill.initialx } : false}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white dark:bg-[#131316] rounded-[30px] w-full p-5 gap-4 flex flex-col items-center overflow-hidden
      md:rounded-[40px] 
      lg:rounded-4xl  shadow-xl 
      dark:shadow-black/20 hover:shadow-neutral-400/50 dark:hover:shadow-black/50"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <h1 className="text-black dark:text-white text-base md:text-xl md:py-4 text-center">
        {skill.type}
      </h1>
      <div className="flex flex-wrap justify-center max-w-55 gap-2 md:gap-4 overflow-hidden">
        {skill.image.map((image: string, index: number) => (
          <div
            key={`${skill.type}-${image}-${index}`}
            className="text-black dark:text-white text-xl flex items-center justify-center md:p-2 pb-1"
          >
            <Tooltip text={skill.type}>
              <span tabIndex={0} className="outline-none">
                <Image
                  src={skill.image[index]}
                  alt={skill.type}
                  title={skill.type}
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
  );
}