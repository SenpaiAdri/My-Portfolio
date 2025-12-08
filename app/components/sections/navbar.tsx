import Link from "next/link";
import React from "react";

const Navbar = () => {
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
        <div
          className="flex bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-300 
            h-10 w-auto px-4 text-sm 
            md:w-25 md:text-base"
        >
          <Link href="/skills">Skills</Link>
        </div>
        <div
          className="flex bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-300 
            h-10 w-auto px-4 text-sm 
            md:w-25 md:text-base"
        >
          <Link href="/about">Projects</Link>
        </div>
        <div
          className="flex bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-300 
            h-10 w-auto px-4 text-sm 
            md:w-25 md:text-base"
        >
          <Link href="/about">About</Link>
        </div>
        <div
          className="flex bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-300 
            h-10 w-auto px-4 text-sm 
            md:w-25 md:text-base"
        >
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
