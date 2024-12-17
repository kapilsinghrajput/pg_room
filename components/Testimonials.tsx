import { Card } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    text: "The facilities and environment here are excellent. It truly feels like a home away from home."
  },
  {
    name: "Priya Singh",
    role: "Working Professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    text: "Clean rooms, great amenities, and friendly staff. Couldn't ask for a better PG experience."
  },
  {
    name: "Alex Chen",
    role: "International Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    text: "The security and comfort provided here made my transition to a new country much easier."
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">What Our Residents Say</h2>
          <p className="text-gray-600 mt-4">Hear from the people who call our PG their home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}