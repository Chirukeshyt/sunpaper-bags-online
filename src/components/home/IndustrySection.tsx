import { 
  Heart, 
  Camera, 
  Shirt, 
  Scale, 
  Megaphone,
  ShoppingBag,
  UtensilsCrossed,
  Gem
} from "lucide-react";
import { getCustomQuoteLink } from "@/lib/whatsapp";

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Health Care",
    icon: <Heart className="h-8 w-8" />,
    color: "bg-red-50 text-red-600"
  },
  {
    id: "photo",
    name: "Photo & Video",
    icon: <Camera className="h-8 w-8" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: "fashion",
    name: "Apparel & Fashion",
    icon: <Shirt className="h-8 w-8" />,
    color: "bg-pink-50 text-pink-600"
  },
  {
    id: "legal",
    name: "Law & Politics",
    icon: <Scale className="h-8 w-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: <Megaphone className="h-8 w-8" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    id: "retail",
    name: "Retail & Shopping",
    icon: <ShoppingBag className="h-8 w-8" />,
    color: "bg-green-50 text-green-600"
  },
  {
    id: "food",
    name: "Food & Restaurant",
    icon: <UtensilsCrossed className="h-8 w-8" />,
    color: "bg-amber-50 text-amber-600"
  },
  {
    id: "jewelry",
    name: "Jewelry & Luxury",
    icon: <Gem className="h-8 w-8" />,
    color: "bg-indigo-50 text-indigo-600"
  }
];

const IndustrySection = () => {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-8 md:mb-10 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-muted-foreground">
            Custom printed paper bags for every business vertical. 
            We understand your industry needs and deliver accordingly.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((industry) => (
            <a
              key={industry.id}
              href={getCustomQuoteLink(industry.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-md hover:border-primary/30"
            >
              <div className={`rounded-full p-4 ${industry.color} transition-transform group-hover:scale-110`}>
                {industry.icon}
              </div>
              <h3 className="mt-4 font-medium text-foreground">
                {industry.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
