import { Check, TrendingUp, Package, Factory, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const pricingTiers = [
  {
    name: "Small Orders",
    quantity: "1000 - 5,000 bags",
    icon: Package,
    features: [
      "Custom size & design",
      "Single color printing",
      "Standard materials",
      "7-10 days delivery",
      "WhatsApp support"
    ],
    
    popular: false
  },
  {
    name: "Medium Orders",
    quantity: "5,000 - 10,000 bags",
    icon: TrendingUp,
    features: [
      "Custom size & design",
      "Multi-color printing",
      "Premium materials",
      "5-7 days delivery",
      "Priority support",
      
    ],
    
    popular: true
  },
  {
    name: "Bulk Orders",
    quantity: "10,000+ bags",
    icon: Factory,
    features: [
      "Custom size & design",
      "Multi-color printing",
      "Premium materials",
      "3-5 days delivery",
      "Dedicated account manager",
      
      "Flexible payment terms"
    ],
    
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Pricing & Benefits</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Competitive Pricing
            <span className="block text-primary mt-2">Better Value on Bulk Orders</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with attractive discounts on larger quantities. All prices are customizable based on your specific requirements.
          </p>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl border-2 p-6 md:p-8 transition-all hover:shadow-xl ${
                tier.popular 
                  ? "border-primary shadow-lg scale-105 md:scale-105" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${
                tier.popular ? "bg-primary/20" : ""
              }`}>
                <tier.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Tier Name */}
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                {tier.name}
              </h3>

              {/* Quantity */}
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                {tier.quantity}
              </p>



              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={tier.popular ? "default" : "outline"}
                className="w-full font-semibold"
                size="lg"
                asChild
              >
                <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Get Quote
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollReveal delay={0.4}>
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                  💰 Payment Terms
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>50% advance, 50% before delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Flexible terms for bulk orders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Multiple payment options</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                  📦 What's Included
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Free design consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Quality assurance guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Secure packaging & shipping</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Note */}
        <ScrollReveal delay={0.5} className="mt-8 text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> Final pricing depends on size, material, printing complexity, and quantity. 
            Contact us for a detailed quote tailored to your needs.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;

