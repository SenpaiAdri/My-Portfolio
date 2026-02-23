"use client";
import { skills } from "@/app/data/skills";
import SkillCards from "../ui/skill_cards";

const Skills = () => {
  return (
    <div id="skills">
      <div className="bg-white dark:bg-black flex flex-col items-center justify-center py-5 md:py-15 px-5 md:px-10">
        <h1 className="text-3xl font-bold text-center mt-10 
        md:text-5xl 
        lg:text-5xl text-black dark:text-white">
          Skills
        </h1>
        {/* Skills Container */}
        <div
          className="bg-[#E8E8E8] dark:bg-[#26262C] rounded-[35px] p-5 my-6 gap-6 grid grid-cols-1 
          sm:my-20 sm:grid-cols-2 sm:p-5 sm:gap-4
          md:my-20 md:grid-cols-2 md:p-8 md:gap-8 md:rounded-[45px]
          lg:my-50 lg:grid-cols-4 lg:p-10 lg:gap-10 lg:rounded-[50px]
          overflow-hidden"
        >
          {skills.map((skill, index) => (
            <SkillCards key={skill.type} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
