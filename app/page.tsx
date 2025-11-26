import Navbar from "@/app/components/sections/navbar";
import Hero from "@/app/components/sections/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-1000 bg-[#121212]"></div>
    </div>
  );
}
