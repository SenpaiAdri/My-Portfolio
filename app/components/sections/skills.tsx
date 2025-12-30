import React from "react";
import Image from "next/image";
import { skills } from "@/app/data/skills";
import Tooltip from "@/app/components/ui/tooltip";
const Skills = () => {

  const skillList = skills.map((skill) => (
    <div
      key={skill.type}
      className="bg-[#131316] rounded-[30px] md:rounded-[40px] lg:rounded-4xl w-full p-5 gap-4 flex flex-col items-center shadow-xl 
      shadow-black/20 hover:shadow-black/50 transition-all duration-300 hover:scale-105"
    >
      <h1 className="text-white text-base md:text-xl md:py-4 text-center">{skill.type}</h1>
      <div className="flex flex-wrap justify-center max-w-55 gap-2 md:gap-4">
        {skill.list.map((item, index) => (
          <div
            key={`${skill.type}-${item}-${index}`}
          className="text-white text-xl flex items-center justify-center md:p-2 pb-1"
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
                  className="m-2 hover:scale-120 transition-all duration-300 w-8 h-8 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px]"
                />
              </span>
            </Tooltip>
          </div> 
        ))}
      </div>
    </div>
  ));

  return (
    <div id="skills">
      <div className="flex flex-col items-center justify-center py-5 md:py-10 px-5 md:px-10">
        <h1 className="text-3xl font-bold text-center mt-10 md:text-5xl lg:text-5xl text-white">Skills</h1>
        {/* Skills Container */}
        <div className="bg-[#26262C] rounded-[35px] md:rounded-[45px] lg:rounded-[50px] p-5 my-6 md:my-20 grid grid-cols-1 
        md:grid-cols-2 gap-6 shadow-xl shadow-[#26262C]/10 
        md:p-10 md:gap-10
        lg:my-50
        lg:grid-cols-4
        hover:shadow-[#26262C]/20 transition-all duration-300">
            {skillList}
        </div>
      </div>
    </div>
  );
};

export default Skills;
