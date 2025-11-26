import React from "react";
import { Meteors } from "../ui/meteors";

const hero = () => {
  return (
    <div className="relative w-full h-screen mt-20">
      {/* Top Right Content */}
      <div>
        {/* Top Right Content Container */}
        <div className="flex flex-wrap items-start justify-end gap-10 mt-25 px-10">
          {/* Quote */}
          <div className="border border-[#6A6B70] rounded-3xl p-8 backdrop-blur-md">
            <h1 className="text-2xl italic text-right">
              "Building Practical Solutions for a<br />
              Better Future"
            </h1>
          </div>
          {/* Name and Description */}
          <div className="border border-[#6A6B70] rounded-3xl p-8 backdrop-blur-md text-right">
            <h1 className="text-5xl font-bold italic pb-5">
              I&apos;m Adrian M. De Guzman
            </h1>
            <p className="text-gray-200 text-2xl italic">
              A Computer Science Student Major <br />
              In Mobile Programming
            </p>
          </div>
        </div>
      </div>
      {/* Center Content */}
      <div className="bg-grey w-full h-100 flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold">Welcome to</h1>
        <h1 className="text-4xl">My Portfolio</h1>
      </div>
      {/* Bottom Right Content */}
      <div>
        <div className="flex flex-wrap items-end justify-start gap-10 mt-25 px-10">
          {/* Achievements */}
          <div className="border border-[#6A6B70] rounded-3xl p-8 backdrop-blur-md">
            <h1 className="text-5xl font-bold italic text-left pb-5">
              One of the developers
              <br />
              of Pasada
            </h1>
            <p className="text-gray-200 text-2xl italic">
              An AI-Powered Ride-Hailing and Fleet Management Platform for
              <br />
              Modernized Jeepneys Services
            </p>
          </div>
          {/* Skills */}
          <div className="border border-[#6A6B70] rounded-3xl p-8 backdrop-blur-md text-left">
            <h1 className="text-4xl italic mb-2">Skills</h1>
            <p className=" text-gray-300 text-2xl">
              Dart | Flutter | PostgreSQL <br /> Supabase | Figma
            </p>
          </div>
        </div>
      </div>
      {/* Meteors */}
      <Meteors number={80} />
    </div>
  );
};

export default hero;
