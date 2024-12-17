import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=2000&q=80"
          alt="PG Hostel"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Home Away From Home
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience comfortable living with modern amenities and a vibrant community
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Book Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-orange-400 text-white border-white hover:bg-white/20">
            <Link href="/facilities">View Facilities</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}