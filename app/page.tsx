import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-1000 bg-[#121212]"></div>
    </div>
  );
}
