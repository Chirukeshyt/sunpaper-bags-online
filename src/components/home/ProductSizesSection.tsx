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
        <div className="relative rounded-3xl border border-border/60 bg-gradient-to-b from-muted/30 to-background px-6 py-5 shadow-sm">
          <svg
            width="180"
            height="190"
            viewBox="0 0 180 190"
            className="mx-auto"
          >
            <defs>
              <linearGradient id={`bagFront-${size.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8f0e1" />
                <stop offset="35%" stopColor="#ead1a9" />
                <stop offset="68%" stopColor="#ddb884" />
                <stop offset="100%" stopColor="#cfa16a" />
              </linearGradient>
              <linearGradient id={`bagSide-${size.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c8945f" />
                <stop offset="50%" stopColor="#b9824d" />
                <stop offset="100%" stopColor="#9e6937" />
              </linearGradient>
              <linearGradient id={`bagTop-${size.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fcf8ef" />
                <stop offset="100%" stopColor="#d5b487" />
              </linearGradient>
              <linearGradient id={`bagFold-${size.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e5c79b" />
                <stop offset="100%" stopColor="#c08f55" />
              </linearGradient>
              <linearGradient id={`bagFrontHighlight-${size.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.34)" />
                <stop offset="40%" stopColor="rgba(255,255,255,0.12)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <linearGradient id={`bagInner-${size.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9a7c58" />
                <stop offset="100%" stopColor="#6f5538" />
              </linearGradient>
              <radialGradient id={`bagSpecular-${size.id}`} cx="34%" cy="22%" r="70%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.34)" />
                <stop offset="55%" stopColor="rgba(255,255,255,0.06)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              <filter id={`bagBlur-${size.id}`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.8" />
              </filter>
              <filter id={`bagShadow-${size.id}`} x="-20%" y="-20%" width="140%" height="160%">
                <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="rgba(0,0,0,0.18)" />
              </filter>
            </defs>

            {/* Ground Shadow */}
            <ellipse
              cx="90"
              cy="170"
              rx="52"
              ry="10"
              fill="rgba(15, 23, 42, 0.10)"
            />

            {/* Bag Body */}
            <g filter={`url(#bagShadow-${size.id})`}>
              <ellipse
                cx="100"
                cy="170"
                rx="44"
                ry="11"
                fill="rgba(0,0,0,0.08)"
                filter={`url(#bagBlur-${size.id})`}
              />
              <polygon
                points="66,56 124,56 142,70 84,70"
                fill={`url(#bagInner-${size.id})`}
                stroke="#8d6a43"
                strokeWidth="1"
              />
              <polygon
                points="62,52 122,52 142,68 82,68"
                fill={`url(#bagTop-${size.id})`}
                stroke="#c5a06f"
                strokeWidth="1.2"
              />
              <path
                d="M 82 68 L 142 68"
                fill="none"
                stroke="#d6b586"
                strokeWidth="1.4"
              />
              <polygon
                points="62,52 82,68 82,146 62,132"
                fill="#ddb789"
                stroke="#c5a06f"
                strokeWidth="1.2"
              />
              <path
                d="M 82 68 L 142 68 L 142 146 L 82 146 Z"
                fill={`url(#bagFront-${size.id})`}
                stroke="#c5a06f"
                strokeWidth="1.2"
              />
              <polygon
                points="142,68 122,52 122,130 142,146"
                fill={`url(#bagSide-${size.id})`}
                stroke="#a97a44"
                strokeWidth="1.2"
              />
              <path
                d="M 82 82 L 142 82"
                fill="none"
                stroke="#cfad7e"
                strokeWidth="1"
              />
              <path
                d="M 82 68 L 142 68 L 142 146 L 82 146 Z"
                fill="url(#bagSpecular-${size.id})"
                opacity="0.45"
              />
              <path
                d="M 82 82 L 62 66"
                fill="none"
                stroke="#cfad7e"
                strokeWidth="1"
              />
              <path
                d="M 104 68 L 104 146"
                fill="none"
                stroke="rgba(255,255,255,0.20)"
                strokeWidth="1"
              />
              <path
                d="M 90 94 L 134 94"
                fill="none"
                stroke="rgba(121, 84, 46, 0.26)"
                strokeWidth="1.2"
              />
              <path
                d="M 90 122 L 134 122"
                fill="none"
                stroke="rgba(121, 84, 46, 0.18)"
                strokeWidth="1"
              />
              <path
                d="M 90 132 L 134 132"
                fill="none"
                stroke="url(#bagFold-${size.id})"
                strokeWidth="1"
              />
              <path
                d="M 66 78 L 66 128"
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1"
              />
              <path
                d="M 122 52 L 122 130"
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1"
              />
              <path
                d="M 82 146 L 142 146"
                fill="none"
                stroke="rgba(121,84,46,0.35)"
                strokeWidth="1.1"
              />
              <path
                d="M 90 76 L 90 142"
                fill="none"
                stroke="url(#bagFrontHighlight-${size.id})"
                strokeWidth="1.6"
                opacity="0.9"
              />
              <path
                d="M 136 74 L 136 142"
                fill="none"
                stroke="rgba(102,66,31,0.22)"
                strokeWidth="1.2"
              />
            </g>

            {/* Dimensions */}
            <g className="text-muted-foreground text-[10px] font-medium">
              {/* Width */}
              <line x1="74" y1="156" x2="142" y2="156" stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 2.5" />
              <line x1="74" y1="150" x2="74" y2="160" stroke="currentColor" strokeWidth="1" />
              <line x1="142" y1="150" x2="142" y2="160" stroke="currentColor" strokeWidth="1" />
              <text x="108" y="173" textAnchor="middle" className="fill-current">
                {size.width} {size.unit}
              </text>

              {/* Height */}
              <line x1="156" y1="62" x2="156" y2="144" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="148" y1="62" x2="160" y2="62" stroke="currentColor" strokeWidth="1" />
              <line x1="148" y1="144" x2="160" y2="144" stroke="currentColor" strokeWidth="1" />
              <text x="168" y="104" textAnchor="middle" className="fill-current" transform="rotate(90 168 104)">
                {size.height} {size.unit}
              </text>

              {/* Depth */}
              <line x1="54" y1="42" x2="74" y2="56" stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 2.5" />
              <line x1="50" y1="38" x2="58" y2="44" stroke="currentColor" strokeWidth="1" />
              <line x1="70" y1="52" x2="78" y2="58" stroke="currentColor" strokeWidth="1" />
              <text x="42" y="36" textAnchor="middle" className="fill-current">
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
