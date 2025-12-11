"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import { Meteors } from "../ui/meteors";
import Link from "next/link";

// 1. Define Project Data Interface and Array
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageColor: string; // Temporary placeholder until you have real images
  align: "left" | "right";
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Pasada Driver Side",
    category: "Mobile App",
    description:
      "A Location-tracking, Booking Manager and Quota Monitoring App for the Drivers and Conductors of Modernized Jeepneys",
    imageColor: "bg-red-500",
    align: "right",
    link: "",
  },
  {
    id: 2,
    title: "AI Blog Post",
    category: "Web App",
    description:
      "An AI-Powered Blogging Channel for Latest Tech News and Updates",
    imageColor: "bg-blue-500",
    align: "left",
    link: "",
  },
  {
    id: 3,
    title: "To Be Announced",
    category: "Coming Soon",
    description:
      "Next project is still on the back of my mind and will be announced soon",
    imageColor: "bg-purple-500",
    align: "right",
    link: "",
  },
];

// 2. Sub-component for individual project card
const ProjectCard = ({
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
        {/* View Project Button */}
        <div
          className="h-8 w-25 bg-white/90 rounded-full backdrop-blur-xs text-gray-300 mt-3 flex items-center justify-center self-center md:self-auto
          md:h-10 md:w-30"
        >
          <h1 className="hover:text-gray-500 cursor-pointer transition-colors text-black duration-300 text-center text-xs md:text-base font-bold">
            Learn More
          </h1>
        </div>
      </div>

      {/* Project Image Section */}
      <div
        className={cn(
          "w-full h-48 max-w-sm md:max-w-none rounded-2xl md:w-1/2 md:h-64 lg:h-80 shadow-lg",
          project.imageColor
        )}
      />
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic height:
  // We allocate ~80vh of scroll distance per project to allow time to read and transition
  const containerHeight = `${Math.max(150, projectsData.length * 110)}dvh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0.1, 1]);

  return (
    <div
      id="projects"
      ref={containerRef}
      className="bg-black relative w-full"
      style={{ height: containerHeight }}
    >
      <Meteors number={80} />
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden py-10">
        {/* Title */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute top-15 md:top-20 z-10"
        >
          <h2 className="text-3xl font-bold text-center md:text-5xl lg:text-6xl text-white">
            Projects
          </h2>
        </motion.div>

        {/* Projects List Container */}
        <div className="w-full max-w-6xl px-5 relative h-full flex items-center justify-center">
          {projectsData.map((project, i) => {
            const totalProjects = projectsData.length;
            // Animation Timeline
            const timelineStart = 0.1;
            const timelineEnd = 0.95;
            const durationPerProject =
              (timelineEnd - timelineStart) / totalProjects;

            // Animation Start and End Times
            const start = timelineStart + i * durationPerProject;
            const end = start + durationPerProject * 0.6; // Animation entrance happens in first half of slot
            const exitStart = start + durationPerProject; // Start exiting when next one starts
            const exitEnd = exitStart + durationPerProject * 0.4;

            // Position of the Entrance
            const initialX = project.align === "right" ? 1000 : -1000;
            const x = useTransform(
              scrollYProgress,
              [start, end],
              [initialX, 0]
            );

            // Opacity of the Project Card
            // If it's the last item, it stays visible until the very end
            const opacityRange =
              i === totalProjects - 1
                ? [start, end]
                : [start, end, exitStart, exitEnd];

            const opacityOutput =
              i === totalProjects - 1 ? [0, 1] : [0, 1, 1, 0];

            const opacity = useTransform(
              scrollYProgress,
              opacityRange,
              opacityOutput
            );

            return (
              <div
                key={project.id}
                className="absolute w-full max-w-5xl px-4 pointer-events-none"
              >
                {/* Inner wrapper to restore pointer events if needed */}
                <div className="pointer-events-auto">
                  <ProjectCard project={project} x={x} opacity={opacity} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
