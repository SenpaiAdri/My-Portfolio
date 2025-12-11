"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { useLenis } from "../smooth-scroll";

const MotionLink = motion.create(Link);

const Navbar = () => {
  const lenis = useLenis();

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(id);
    }
  };

  const NavBarButtons =
    "flex bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-0 h-8 w-auto px-4 text-sm md:w-25 md:h-10 md:text-base";

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
          href="#projects"
          onClick={handleScroll("#projects")}
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
