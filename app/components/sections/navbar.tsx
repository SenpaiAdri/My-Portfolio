"use client";
import { AnimatePresence, motion } from "motion/react";
import { navbar } from "@/app/data/navbar";
import RollText from "@/app/components/ui/roll-text";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { cn } from "@/lib/utils";
import { TransitionLink } from "../ui/transition-link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/app/components/theme-provider";
import MobileNav from "../ui/mobile_nav";

const MotionLink = motion.create(TransitionLink);

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDark } = useTheme();
  return (
    <div className="">
      {/* Mobile Navbar */}
      <div className="z-50 opacity-100 sm:hidden flex w-full p-6 fixed top-0 left-0 justify-between">
        {isDark ? (
          <Image src="/my_logo_nobg_light.svg" alt="logo" width={40} height={40} />
        ) : (
          <Image src="/my_logo_nobg_dark.svg" alt="logo" width={40} height={40} />
        )}
        <menu className="flex">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </menu>
      </div>

      <MobileNav isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Desktop Navbar */}
      <div className="z-50 hidden sm:flex w-full p-4 fixed top-0 left-0 justify-center items-center">
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
              className={"group flex whitespace-nowrap backdrop-blur-md rounded-full border-1 border-[#C6C6C9] dark:border-[#6A6B70] transition-colors items-center justify-center hover:bg-[#393A41]/10 dark:hover:bg-[#26262C]/50 duration-200 h-8 w-auto px-3 text-xs md:w-25 md:h-10 md:text-base"}
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
            <ThemeToggle className={cn(" h-8 w-auto px-3 text-xs md:w-25 md:h-10 group flex whitespace-nowrap backdrop-blur-md rounded-full border-1 border-[#C6C6C9] transition-colors items-center justify-center hover:bg-[#393A41]/10 duration-200",
              "px-0 w-8 md:w-10 dark:hover:bg-[#26262C]/50 dark:border-[#6A6B70]",
              "md:text-base")} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
