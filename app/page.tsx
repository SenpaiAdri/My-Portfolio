import Navbar from "@/app/components/sections/navbar";
import Hero from "@/app/components/sections/hero";
import Projects from "@/app/components/sections/projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <div className="h-1000 bg-[#121212]"></div>
    </div>
  );
}
