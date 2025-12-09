"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

const Navbar = () => {
  const NavBarButtons =
    "flex bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-0 h-10 w-auto px-4 text-sm md:w-25 md:text-base";

  return (
    // navbar
    <div className="z-50 flex w-full p-4 fixed top-0 left-0 justify-center items-center">
      {/* logo */}
      {/* <div className="h-10 w-10 bg-[#6A6B70] rounded-xl opacity-100" /> */}
      {/* links */}
      <div
        className="flex flex-wrap justify-center text-white 
          gap-2 pe-0 
          md:gap-5 md:pe-2"
      >
        {/* <MotionLink
          href=""
          className={NavBarButtons}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skills
        </MotionLink> */}

        <MotionLink
          href=""
          className={NavBarButtons}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </MotionLink>

        <MotionLink
          href=""
          className={NavBarButtons}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </MotionLink>

        <MotionLink
          href=""
          className={NavBarButtons}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </MotionLink>
      </div>
    </div>
  );
};

export default Navbar;
