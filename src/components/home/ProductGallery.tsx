import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

import weddingBags from "@/assets/wedding-bags.jpg";
import retailBags from "@/assets/retail-bags.jpg";
import foodBags from "@/assets/food-bags.jpg";
import hospitalBags from "@/assets/hospital-bags.jpg";
import jewelryBags from "@/assets/jewelry-bags.jpg";
import duplexBags from "@/assets/duplex-bags.jpg";
import kraftBags from "@/assets/kraft-bags.jpg";

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  sizes: string[];
}

const categories: ProductCategory[] = [
  {
    id: "wedding",
    name: "Wedding Bags",
    description: "Elegant bags for your special occasions",
    image: weddingBags,
    sizes: ["Small", "Medium", "Large", "Custom"]
  },
  {
    id: "retail",
    name: "Retail & Shopping",
    description: "Branded bags for fashion & retail stores",
    image: retailBags,
    sizes: ["6x9", "11x13", "16x13", "18x13", "Custom"]
  },
  {
    id: "food",
    name: "Food & Bakery",
    description: "Food-safe kraft bags for restaurants",
    image: foodBags,
    sizes: ["1/4 KG", "1/2 KG", "1 KG", "Custom"]
  },
  {
    id: "hospital",
    name: "Hospital & Pharmacy",
    description: "Clean white bags for healthcare",
    image: hospitalBags,
    sizes: ["Small", "Medium", "Large", "Custom"]
  },
  {
    id: "jewelry",
    name: "Jewelry & Boutique",
    description: "Premium small bags with foil printing",
    image: jewelryBags,
    sizes: ["Small", "Medium", "Custom"]
  },
  {
    id: "fashion",
    name: "Fashion & Apparel",
    description: "Stylish duplex bags with multicolor print",
    image: duplexBags,
    sizes: ["20x23", "20x28", "Custom"]
  },
  {
    id: "kraft",
    name: "Eco-Friendly Kraft",
    description: "Sustainable brown kraft paper bags",
    image: kraftBags,
    sizes: ["All sizes available"]
  }
];

const ProductCard = ({ category, index }: { category: ProductCategory; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {category.description}
        </p>
        
        {/* Sizes */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {category.sizes.slice(0, 3).map((size) => (
            <span 
              key={size}
              className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {size}
            </span>
          ))}
          {category.sizes.length > 3 && (
            <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">
              +{category.sizes.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Button variant="default" size="sm" className="mt-4 w-full" asChild>
          <Link to={`/order?category=${encodeURIComponent(category.name)}`}>
            Order Now
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

const ProductGallery = () => {
  return (
    <section id="products" className="bg-surface-soft py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Product Range
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore our wide range of printed paper bags. All products are fully customizable 
            — from size to printing. Get a custom quote via WhatsApp.
          </p>
        </ScrollReveal>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <ProductCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Custom Size CTA */}
        <ScrollReveal delay={0.3} className="mt-12 rounded-2xl bg-primary/5 p-8 text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground">
            Need a Custom Size?
          </h3>
          <p className="mt-2 text-muted-foreground">
            We manufacture paper bags in any custom dimensions. Share your requirements and get an instant quote.
          </p>
          <Button variant="default" size="lg" className="mt-6" asChild>
            <Link to="/order?category=Custom%20Size">
              <ArrowRight className="h-5 w-5 mr-2" />
              Customize & Order
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductGallery;
