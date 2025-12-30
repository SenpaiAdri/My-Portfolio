"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { useLenis } from "../smooth-scroll";
import { navbar } from "@/app/data/navbar";
import RollText from "@/app/components/ui/roll-text";

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
    "group flex bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-colors items-center justify-center hover:bg-[#26262C]/50 duration-200 h-8 w-auto px-4 text-sm md:w-25 md:h-10 md:text-base";

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
        {navbar.map((item) => (
          <MotionLink
            key={item.href}
            href={item.href}
            onClick={handleScroll(item.href)}
            className={NavBarButtons}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RollText text={item.name} fill className="h-full w-full leading-none" />
          </MotionLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
