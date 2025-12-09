import { Package, Users, MapPin, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "18+",
    label: "Years Experience",
    description: "Since 2006"
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Across India"
  },
  {
    icon: Package,
    value: "10L+",
    label: "Bags Delivered",
    description: "Every Year"
  },
  {
    icon: MapPin,
    value: "25+",
    label: "Cities Served",
    description: "Pan India"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="font-medium">{stat.label}</p>
              <p className="text-sm opacity-70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
