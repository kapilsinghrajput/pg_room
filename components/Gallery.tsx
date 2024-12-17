import Image from "next/image";
import { Card } from "@/components/ui/card";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    alt: "Modern Room",
    title: "Comfortable Rooms"
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
    alt: "Kitchen",
    title: "Modern Kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    alt: "Common Area",
    title: "Spacious Common Areas"
  },
  {
    src: "https://images.unsplash.com/photo-1486304873000-235643847519?w=800&h=600&fit=crop",
    alt: "Study Room",
    title: "Quiet Study Spaces"
  }
];

export default function Gallery() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our Facilities</h2>
          <p className="text-gray-600 mt-4">Take a tour of our modern accommodation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative aspect-video">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}