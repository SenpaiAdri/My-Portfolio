import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // navbar
    <div className="z-50 flex w-full p-4 fixed top-0 left-0 justify-center items-center">
      {/* logo */}
      {/* <div className="h-10 w-10 bg-[#6A6B70] rounded-xl opacity-100" /> */}
      {/* links */}
      <div className="flex text-white gap-5 pe-2">
        <div className="flex h-10 w-25 bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-300">
          <Link href="/skills">Skills</Link>
        </div>
        <div className="flex h-10 w-25 bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-300">
          <Link href="/about">Projects</Link>
        </div>
        <div className="flex h-10 w-25 bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-300">
          <Link href="/about">About</Link>
        </div>
        <div className="flex h-10 w-25 bg-[#131316]/10 backdrop-blur-md rounded-full border-1 border-[#6A6B70] transition-all items-center justify-center hover:bg-[#26262C] duration-300">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
