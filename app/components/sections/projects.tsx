"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import { Meteors } from "../ui/meteors";
import { Marquee } from "../ui/marquee";
import Image from "next/image";
import { projectsData } from "@/app/data/project";
import { ProjectCard } from "../ui/project_card";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic height:
  // We allocate ~80vh of scroll distance per project to allow time to read and transition
  const containerHeight = `${Math.max(150, projectsData.length * 250)}dvh`;

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
      <Meteors number={200} />
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Title */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute top-15 md:top-20 z-10"
        >
          <h2 className="text-3xl font-bold text-center md:text-5xl lg:text-5xl text-white">
            Projects
          </h2>
        </motion.div>

        {/* Projects List Container */}
        <div className="w-full h-full flex items-center justify-center relative">
          {projectsData.map((project, i) => {
            const totalProjects = projectsData.length;
            // Animation Timeline
            const timelineStart = 0.05;
            const timelineEnd = 0.98;
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

            // Only enable pointer events when the project is visible
            const pointerEvents = useTransform(opacity, (val) =>
              val > 0.05 ? "auto" : "none"
            );

            return (
              <React.Fragment key={project.id}>
                {/* Background Marquee Layer */}
                <motion.div
                  style={{ opacity }}
                  className="absolute inset-0 z-0 flex flex-col justify-center pointer-events-none"
                >
                  <div className="absolute inset-0 bg-black/10 z-10" />
                  <Marquee
                    reverse
                    className="[--duration:30s] [--gap:1rem] flex-1 opacity-40 rotate-350 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
                  >
                    {project.images
                      ? project.images.map((img, j) => (
                          <div
                            key={j}
                            className="h-full w-48 relative mx-4 rounded-lg overflow-hidden opacity-50"
                          >
                            <Image
                              src={img}
                              alt={`${project.title} screenshot ${j + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))
                      : [...Array(10)].map((_, j) => (
                          <div
                            key={j}
                            className={cn(
                              "h-full w-48 rounded-lg opacity-50 mx-4",
                              project.imageColor
                            )}
                          />
                        ))}
                  </Marquee>
                  <div className="h-5 rotate-170" />
                  <Marquee className="[--duration:30s] [--gap:2rem] flex-1 opacity-40 rotate-350 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                    {project.images
                      ? project.images.map((img, j) => (
                          <div
                            key={j}
                            className="h-full w-48 relative mx-4 rounded-lg overflow-hidden opacity-50"
                          >
                            <Image
                              src={img}
                              alt={`${project.title} screenshot ${j + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))
                      : [...Array(10)].map((_, j) => (
                          <div
                            key={j}
                            className={cn(
                              "h-full w-48 rounded-lg opacity-50 mx-4",
                              project.imageColor
                            )}
                          />
                        ))}
                  </Marquee>
                  <div className="h-5 rotate-170" />
                  <Marquee
                    reverse
                    className="[--duration:35s] [--gap:1rem] flex-1 opacity-40 rotate-350 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
                  >
                    {project.images
                      ? [...project.images].reverse().map((img, j) => (
                          <div
                            key={j}
                            className="h-full w-48 relative mx-4 rounded-lg overflow-hidden opacity-50"
                          >
                            <Image
                              src={img}
                              alt={`${project.title} screenshot ${j + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))
                      : [...Array(10)].map((_, j) => (
                          <div
                            key={j}
                            className={cn(
                              "h-full w-48 rounded-lg opacity-50 mx-4",
                              project.imageColor
                            )}
                          />
                        ))}
                  </Marquee>
                </motion.div>

                {/* Content Layer */}
                <div className="absolute w-full max-w-6xl px-5 pointer-events-none z-20 flex items-center justify-center">
                  <motion.div style={{ pointerEvents }} className="w-full">
                    <ProjectCard project={project} x={x} opacity={opacity} />
                  </motion.div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
