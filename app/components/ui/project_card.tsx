"use client";
import { Project } from "@/app/data/project";
import { motion, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/components/theme-provider";
import { ChevronRight } from "lucide-react";

export const ProjectCard = ({
  project,
  x,
  opacity,
}: {
  project: Project;
  x: MotionValue<number>;
  opacity: MotionValue<number>;
}) => {
  const { isDark } = useTheme();

  return (
    // Main Project Card Container
    <motion.div
      style={{ x, opacity }}
      className={cn(
        "w-full flex flex-col items-center justify-center gap-3 md:px-10 text-center",
        "md:flex-row md:gap-6 lg:gap-10",
        project.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Project Image Section */}
      <div
        className={cn(
          "w-full h-48 max-w-sm md:max-w-none rounded-4xl md:w-1/3 md:h-64 lg:h-80 relative overflow-hidden"
        )}
      >
        {project.logo && (
          <Image
            src={project.logo[isDark ? 1 : 0]}
            alt={`${project.title} logo`}
            fill
            className="object-contain"
          />
        )}
      </div>

      {/* Text Section */}
      <div
        className={cn(
          "flex flex-col flex-1 w-auto",
          project.align === "right"
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        )}
      >
        <h3 className="text-xl font-bold md:text-3xl lg:text-4xl dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm italic dark:text-gray-300 mt-2 md:text-lg backdrop-blur-lg px-1">
          {project.description}
        </p>

        {/* Learn More Button */}
        <Link href={project.slug ? `/projects/${project.slug}` : "#"}>
          <motion.div
            style={
              {
                "--hover-bg": project.color,
              } as React.CSSProperties
            }
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            className="w-fit py-2 px-5 group bg-[#E8E8E8] rounded-full backdrop-blur-xs text-black mt-3 mx-auto flex items-center justify-center gap-1 
            transition-colors duration-300
            md:h-10 cursor-pointer hover:bg-[var(--hover-bg)]
            dark:bg-[#131316] dark:text-white"
          >
            <h1
              className="text-center text-xs font-semibold 
            md:text-base group-hover:text-white transition-colors duration-300"
            >
              {project.slug ? "Learn More" : "Coming Soon"}
            </h1>
            <ChevronRight size={16} className="group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};
