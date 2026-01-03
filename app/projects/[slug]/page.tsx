"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { projectsData } from "@/app/data/project";
import { motion } from "motion/react";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Back Button */}
      <div className="absolute top-8 left-8 z-50">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="relative w-full h-[60vh] px-1 flex items-center justify-center bg-gradient-to-b from-black/80 to-[#0a0a0a]">
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
           {/* Background gradient utilizing project color */}
           <div
             className="absolute inset-0 blur-3xl opacity-40"
             style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
           />
        </div>
        
        <div className="flex flex-col items-center text-center px-5 max-w-4xl z-10 mt-20">
          {project.logo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative w-40 h-40 md:w-50 md:h-50 rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-4 border border-white/10"
            >
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                className="object-contain p-2"
              />
            </motion.div>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
             className="text-xl md:text-2xl text-gray-300 max-w-2xl"
          >
            {project.description}
          </motion.p>

          {/* Tech Stack Pills */}
          {project.techStack && (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="flex flex-wrap gap-3 justify-center mt-8"
             >
               {project.techStack.map((tech) => (
                 <span key={tech} className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium backdrop-blur-sm
                 hover:bg-gray-500 transition-colors duration-300">
                   {tech}
                 </span>
               ))}
             </motion.div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
        {/* Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:px-10"
        >
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-[var(--project-color)] pl-4" style={{ borderColor: project.color }}>Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>
          
          <div className="space-y-6">
             <h2 className="text-2xl font-bold">Project Info</h2>
             <div className="bg-[#111] p-6 rounded-2xl border border-[#333] space-y-4">
                <div>
                   <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-1">Role</h3>
                   <p className="font-medium text-lg">Developer</p>
                </div>
                <div>
                   <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-1">Timeline</h3>
                   <p className="font-medium text-lg">{project.timeline}</p>
                </div>
                {/* Links */}
                <div className="pt-4 flex flex-col gap-3">
                   {project.link && (
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                       View Live Demo ↗
                     </a>
                   )}
                   {project.github && (
                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#222] text-white border border-[#444] py-3 rounded-xl font-bold hover:bg-[#333] transition-colors">
                       GitHub Repo ↗
                     </a>
                   )}
                </div>
             </div>
          </div>
        </motion.div>

        {/* Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="space-y-10 px-3 sm:px-10">
            <h2 className="text-3xl font-bold text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group aspect-[9/16] rounded-3xl overflow-hidden border border-[#121212] cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
