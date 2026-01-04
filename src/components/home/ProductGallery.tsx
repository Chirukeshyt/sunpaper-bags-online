import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

import { homePageProducts, ProductCategory } from "@/data/products";

const ProductCard = ({ category, index }: { category: ProductCategory; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-lg md:rounded-2xl bg-card border border-border/50 md:bg-gradient-to-br md:from-card md:to-card/50 md:shadow-lg md:hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-3 md:hover:border-primary/30">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img 
            src={category.image} 
            alt={category.name}
            className="h-full w-full object-cover transition-all duration-700 md:group-hover:scale-110 md:group-hover:brightness-110"
          />
          {/* Gradient Overlay - Hidden on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
          
          {/* Floating Badge - Hidden on mobile */}
          <div className="absolute top-4 right-4 opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-2 md:group-hover:translate-y-0 hidden md:flex">
            <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              Customizable
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-3 md:p-5 lg:p-6 bg-card md:bg-gradient-to-b md:from-card md:to-card/95">
          <div className="mb-2 md:mb-3">
            <h3 className="font-heading text-sm md:text-lg lg:text-xl font-semibold md:font-bold text-foreground mb-1 md:mb-2 md:group-hover:text-primary transition-colors duration-300">
              {category.name}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2 hidden md:block">
              {category.description}
            </p>
          </div>
          
          {/* Sizes - Now Visible on All Devices */}
          <div className="mb-3 md:mb-4 flex flex-wrap gap-2">
            {category.sizes.slice(0, 4).map((size) => (
              <span 
                key={size}
                className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1.5 text-xs md:text-sm font-semibold border-2 border-primary/30 hover:border-primary/50 transition-colors"
              >
                {size}
              </span>
            ))}
            {category.sizes.length > 4 && (
              <span className="inline-flex items-center rounded-full bg-muted text-muted-foreground px-3 py-1.5 text-xs md:text-sm font-semibold border-2 border-border">
                +{category.sizes.length - 4} more
              </span>
            )}
          </div>

          {/* CTA Button */}
          <Button 
            variant="default" 
            size="sm" 
            className="w-full text-xs md:text-sm font-medium md:font-semibold group/btn" 
            asChild
          >
            <Link to={`/order?category=${encodeURIComponent(category.name)}`}>
              <span>Order Now</span>
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1.5 md:ml-2 transition-transform duration-300 md:group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Decorative Corner Element - Hidden on mobile */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
      </div>
    </motion.div>
  );
};

const ProductGallery = () => {
  return (
    <section id="products" className="relative py-12 md:py-16 bg-gradient-to-b from-background via-surface-soft to-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mx-auto mb-10 md:mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Our Products</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5">
            Our Categories
            <span className="block text-primary mt-2">Quality Paper Products for Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our comprehensive range of paper products including bags, stationery, food packaging, books, and more. 
            All products are fully customizable — from size to printing. Get a custom quote via WhatsApp.
          </p>
        </ScrollReveal>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {homePageProducts.map((category, index) => (
            <ProductCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Custom Size CTA */}
        <ScrollReveal delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-8 md:p-12 text-center overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Need a Custom Size?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base">
                We manufacture paper bags in any custom dimensions. Share your requirements and get an instant quote.
              </p>
              <Button variant="default" size="lg" className="font-semibold shadow-lg hover:shadow-xl transition-shadow" asChild>
                <Link to="/order?category=Custom%20Size">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Customize & Order
                </Link>
              </Button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductGallery;
