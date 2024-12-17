import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <Phone size={42} className="bg-green-400  text-white p-1 rounded-full fixed bottom-6 right-6 z-20 shadow-lg cursor-pointer" />
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
    </div>
  );
}
