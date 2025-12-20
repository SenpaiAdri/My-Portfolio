"use client";
import { Project } from "@/app/data/project";
import { motion, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ProjectCard = ({
  project,
  x,
  opacity,
}: {
  project: Project;
  x: MotionValue<number>;
  opacity: MotionValue<number>;
}) => {
  return (
    // Main Project Card Container
    <motion.div
      style={{ x, opacity }}
      className={cn(
        "w-full flex flex-col items-center justify-center gap-3 md:px-10 text-center",
        "md:flex-row md:gap-6 lg:gap-10",
        project.align === "left" ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {/* Text Section */}
      <div
        className={cn(
          "flex flex-col flex-1",
          project.align === "right"
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        )}
      >
        <h3 className="text-xl font-bold md:text-3xl lg:text-4xl text-white">
          {project.title}
        </h3>
        <p className="text-sm italic text-gray-300 mt-2 md:text-lg">
          {project.description}
        </p>
        {/* Learn More Button */}
        <motion.div
          whileHover={{ scale: 1.02, backgroundColor: project.color }}
          whileTap={{ scale: 0.9 }}
          className="h-8 w-25 bg-white/90 rounded-full backdrop-blur-xs text-black mt-3 flex items-center justify-center self-center transition-colors duration-300
          md:self-auto md:h-10 md:w-30 cursor-pointer group"
        >
          <h1
            className="group-hover:text-white transition-colors duration-300 text-center text-xs font-bold 
          md:text-base "
          >
            Learn More
          </h1>
        </motion.div>
      </div>

      {/* Project Image Section */}
      <div
        className={cn(
          "w-full h-48 max-w-sm md:max-w-none rounded-4xl md:w-1/2 md:h-64 lg:h-80 relative overflow-hidden"
        )}
      >
        {project.logo && (
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            fill
            className="object-contain"
          />
        )}
      </div>
    </motion.div>
  );
};
