import { Truck, Palette, BadgePercent, Leaf, Shield, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick turnaround with pan-India delivery in 7-10 days"
  },
  {
    icon: Palette,
    title: "Custom Printing",
    description: "Single, two-color, or multi-color printing with your brand"
  },
  {
    icon: BadgePercent,
    title: "Bulk Pricing",
    description: "Competitive rates with discounts on larger quantities"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable materials that are 100% recyclable"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Premium materials with strict quality control"
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personalized service via WhatsApp & phone"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why Choose SunPaper Industries?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across India for premium printed paper bags
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
