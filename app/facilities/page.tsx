import { Card } from "@/components/ui/card";
import Image from "next/image";

const facultyMembers = [

  {
    name: "Mr. Prem ",
    role: "Senior  Cook",
    image: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1734408925~exp=1734412525~hmac=6f9dfcbad069424175b976164ae6f66f555b487f2aeaa83f52cbf549858e909e&w=740",
    description: "10 Year+ Experience"
  },
  {
    name: "Ms. someone",
    role: "cooking Helper ",
    image: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1734408925~exp=1734412525~hmac=6f9dfcbad069424175b976164ae6f66f555b487f2aeaa83f52cbf549858e909e&w=740",
    description: "Dedicated to help in cooking"
  },
  {
    name: "Mr. someone",
    role: "Security Head",
    image: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1734408925~exp=1734412525~hmac=6f9dfcbad069424175b976164ae6f66f555b487f2aeaa83f52cbf549858e909e&w=740",
    description: "Maintains 24/7 security and safety protocols"
  }
];

export default function Faculty() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Faculty & Staff</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {facultyMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
        <p className="text-gray-600 leading-relaxed">
          Our dedicated team of professionals works around the clock to ensure that your stay at Comfort PG Hostel is comfortable, safe, and enriching. From facility maintenance to student welfare, our staff members are here to support you throughout your stay.
        </p>
      </div>
    </div>
  );
}