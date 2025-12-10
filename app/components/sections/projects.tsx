"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Meteors } from "../ui/meteors";

const projects = () => {
  return (
    <div
      className="bg-black relative w-full min-h-screen pt-20 pb-40 px-5 flex flex-col justify-between overflow-hidden
      md:px-30
      lg:pb-0 lg:pt-0 lg:px-0
      xl:pb-0 xl:pt-0 xl:px-0"
    >
      <h1 className="text-4xl font-bold text-center pt-20">Projects</h1>
    </div>
  );
};

export default projects;
