"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { navbar } from "@/app/data/navbar";
import RollText from "@/app/components/ui/roll-text";
import { HandleScroll } from "../handle-scroll";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

const Navbar = () => {
  const NavBarButtons =
    "group flex whitespace-nowrap backdrop-blur-md rounded-full border-1 border-[#C6C6C9] dark:border-[#6A6B70] transition-colors items-center justify-center hover:bg-[#393A41]/10 dark:hover:bg-[#26262C]/50 duration-200 h-8 w-auto px-3 text-xs md:w-25 md:h-10 md:text-base";

  return (
    // navbar
    <div className="z-50 flex w-full p-4 fixed top-0 left-0 justify-center items-center">
      {/* logo */}
      {/* <div className="h-10 w-10 bg-[#6A6B70] rounded-xl opacity-100" /> */}
      {/* links */}
      <div
        className="flex flex-wrap justify-center dark:text-white 
          gap-2 pe-0 
          md:gap-5 md:pe-2"
      >
        {navbar.map((item) => (
          <MotionLink
            key={item.href}
            href={item.href}
            onClick={HandleScroll(item.href)}
            className={NavBarButtons}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: -250 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* {item.name} */}
            <RollText text={item.name} fill className="h-full leading-none" />
          </MotionLink>
        ))}
        {/* Theme Toggle */}

        <motion.div
           initial={{ opacity: 0, y: -250 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
        >
          <ThemeToggle className={cn(NavBarButtons, "px-0 w-8 md:w-10")} />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
