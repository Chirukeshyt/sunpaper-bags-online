import { Ruler, Package } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProductSize {
  id: string;
  width: number;
  height: number;
  depth: number;
  unit: string;
  label?: string;
}

const standardSizes: ProductSize[] = [
  {
    id: "small",
    width: 11,
    height: 13,
    depth: 4,
    unit: "cm",
    label: "Small"
  },
  {
    id: "medium",
    width: 20,
    height: 23,
    depth: 8,
    unit: "cm",
    label: "Medium"
  }
];

const SizeCard = ({ size, index }: { size: ProductSize; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl border-2 border-border p-6 md:p-8 hover:shadow-xl hover:border-primary/50 transition-all"
    >
      {/* Label */}
      {size.label && (
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-base font-bold shadow-sm">
            {size.label} Size
          </span>
        </div>
      )}

      {/* Visual Representation */}
      <div className="mb-4 flex items-center justify-center">
        <div className="relative">
          {/* Bag Drawing */}
          <svg
            width="120"
            height="150"
            viewBox="0 0 120 150"
            className="mx-auto"
          >
            {/* Bag Body */}
            <rect
              x="20"
              y="40"
              width="80"
              height="100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            {/* Bag Opening */}
            <ellipse
              cx="60"
              cy="40"
              rx="40"
              ry="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            {/* Handles */}
            <path
              d="M 30 40 Q 30 20, 40 20 Q 50 20, 50 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            <path
              d="M 70 40 Q 70 20, 80 20 Q 90 20, 90 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            {/* Dimensions */}
            <g className="text-muted-foreground text-[10px] font-medium">
              {/* Width */}
              <line x1="20" y1="155" x2="100" y2="155" stroke="currentColor" strokeWidth="1" />
              <line x1="20" y1="150" x2="20" y2="155" stroke="currentColor" strokeWidth="1" />
              <line x1="100" y1="150" x2="100" y2="155" stroke="currentColor" strokeWidth="1" />
              <text x="60" y="168" textAnchor="middle" className="fill-current">
                {size.width} {size.unit}
              </text>
              {/* Height */}
              <line x1="105" y1="40" x2="105" y2="140" stroke="currentColor" strokeWidth="1" />
              <line x1="100" y1="40" x2="105" y2="40" stroke="currentColor" strokeWidth="1" />
              <line x1="100" y1="140" x2="105" y2="140" stroke="currentColor" strokeWidth="1" />
              <text x="115" y="90" textAnchor="middle" className="fill-current" transform="rotate(90 115 90)">
                {size.height} {size.unit}
              </text>
              {/* Depth */}
              <line x1="15" y1="80" x2="15" y2="100" stroke="currentColor" strokeWidth="1" />
              <text x="8" y="92" textAnchor="middle" className="fill-current" transform="rotate(-90 8 92)">
                {size.depth} {size.unit}
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Dimensions List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex items-center gap-3">
            <Ruler className="w-5 h-5 text-primary" />
            <span className="text-base font-semibold text-foreground">Width</span>
          </div>
          <span className="text-base md:text-lg font-bold text-primary">
            {size.width} {size.unit}
          </span>
        </div>
        <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex items-center gap-3">
            <Ruler className="w-5 h-5 text-primary" />
            <span className="text-base font-semibold text-foreground">Height</span>
          </div>
          <span className="text-base md:text-lg font-bold text-primary">
            {size.height} {size.unit}
          </span>
        </div>
        <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex items-center gap-3">
            <Ruler className="w-5 h-5 text-primary" />
            <span className="text-base font-semibold text-foreground">Depth</span>
          </div>
          <span className="text-base md:text-lg font-bold text-primary">
            {size.depth} {size.unit}
          </span>
        </div>
      </div>

      {/* Size Notation - Prominent */}
      <div className="mt-6 pt-6 border-t-2 border-primary/20">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
          <p className="text-center text-lg md:text-xl font-bold text-foreground mb-1">
            {size.width} × {size.height} × {size.depth}
          </p>
          <p className="text-center text-sm font-semibold text-primary uppercase">
            {size.unit}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ProductSizesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Package className="w-4 h-4" />
            <span className="text-sm font-medium">Standard Sizes</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Available Product Sizes
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our standard sizes or request a custom dimension. All sizes are fully customizable.
          </p>
        </ScrollReveal>

        {/* Size Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-8">
          {standardSizes.map((size, index) => (
            <SizeCard key={size.id} size={size} index={index} />
          ))}
        </div>

        {/* Custom Size Note */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6 md:p-8">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                Need a Custom Size?
              </h3>
              <p className="text-muted-foreground mb-4">
                We can manufacture paper bags in any custom dimensions to match your specific requirements. 
                Contact us via WhatsApp to get a quote for your custom size.
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                Custom sizes available • Any dimension • Quick quotes
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductSizesSection;
