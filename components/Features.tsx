import { Wifi, Utensils, Camera, Droplet, Refrigerator, Shield } from "lucide-react";

const features = [
  {
    name: "High-Speed WiFi",
    description: "24/7 high-speed internet connectivity for all residents",
    icon: Wifi,
  },
  {
    name: "Modern Kitchen",
    description: "Fully equipped mesh kitchen with modern appliances",
    icon: Utensils,
  },
  {
    name: "CCTV Security",
    description: "Round-the-clock surveillance for your safety",
    icon: Camera,
  },
  {
    name: "RO Water",
    description: "Pure and safe drinking water available 24/7",
    icon: Droplet,
  },
  {
    name: "Refrigerator",
    description: "Dedicated refrigerator space for all residents",
    icon: Refrigerator,
  },
  {
    name: "24/7 Security",
    description: "Professional security staff and controlled access",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Modern Amenities</h2>
          <p className="text-gray-600 mt-4">Everything you need for a comfortable stay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <feature.icon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">{feature.name}</h3>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}