import Navbar from "@/app/components/sections/navbar";
import Hero from "@/app/components/sections/hero";
import Projects from "@/app/components/sections/projects";
import Skills from "@/app/components/sections/skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <div className="h-screen bg-[#121212] items-center justify-center flex">
        <h1 className="text-white text-4xl font-bold text-center">This part is still under construction</h1>
      </div>
    </div>
  );
}
