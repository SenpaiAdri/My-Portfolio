import React from "react";
import Image from "next/image";
import { skills } from "@/app/data/skills";
const Skills = () => {

  const skillList = skills.map((skill) => (
    <div
      key={skill.type}
      className="bg-[#131316] rounded-3xl w-content flex flex-col items-top"
    >
      <h1 className="text-white text-2xl font-bold pb-2">{skill.type}</h1>
      {skill.list.map((item, index) => (
        <div
          key={`${skill.type}-${item}-${index}`}
          className="text-white text-xl flex items-center justify-center p-2"
        >
          {/* <h1>{item}</h1> */}
          <Image src={skill.image[index]} alt={item} width={40} height={40} className="mr-2" />
        </div>
        
      ))}
    </div>
  ));

  return (
    <div id="skills">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold text-center md:text-5xl lg:text-5xl text-white">Skills</h1>
        {/* Skills Container */}
        <div className="bg-[#26262C] rounded-3xl p-8 m-10 w-content flex flex-wrap gap-4">
            {skillList}
        </div>
      </div>
    </div>
  );
};

export default Skills;
