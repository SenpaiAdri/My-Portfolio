import React from "react";
import Image from "next/image";
import { skills } from "@/app/data/skills";
import Tooltip from "@/app/components/ui/tooltip";
const Skills = () => {

  const skillList = skills.map((skill) => (
    <div
      key={skill.type}
      className="bg-[#131316] rounded-3xl min-w-60 p-5 gap-4 flex flex-col shadow-xl 
      shadow-black/20 hover:shadow-black/50 transition-all duration-300 hover:scale-105"
    >
      <h1 className="text-white text-xl py-2 text-center">{skill.type}</h1>
      <div className="flex flex-wrap justify-center max-w-55 gap-4">
        {skill.list.map((item, index) => (
          <div
            key={`${skill.type}-${item}-${index}`}
          className="text-white text-xl flex items-center justify-center p-2"
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
                  className="m-2 hover:scale-120 transition-all duration-300"
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
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold text-center mt-10 md:text-5xl lg:text-5xl text-white">Skills</h1>
        {/* Skills Container */}
        <div className="bg-[#26262C] rounded-4xl p-10 my-50 w-content flex flex-wrap gap-8 shadow-xl shadow-[#26262C]/10 hover:shadow-[#26262C]/20 transition-all duration-300">
            {skillList}
        </div>
      </div>
    </div>
  );
};

export default Skills;
