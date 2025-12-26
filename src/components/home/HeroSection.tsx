import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import heroBags from "@/assets/hero-bags.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container">
        <div className="grid min-h-[85vh] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-0">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Since 2006 • Trusted by 1000+ businesses
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              Premium{" "}
              <span className="text-primary">All Types of Bags</span>{" "}
              for Your Brand
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0"
            >
              Custom bags for Wedding, Retail, Food & Healthcare industries. 
              We manufacture all types of bags — paper, and more. Fully customizable — from size to print. Premium quality at competitive prices.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            >
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto" asChild>
                <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  <span className="hidden sm:inline">Get Custom Quote</span>
                  <span className="sm:hidden">Get Quote</span>
                </a>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto" asChild>
                <a href="#products">
                  <span className="hidden sm:inline">Explore Products</span>
                  <span className="sm:hidden">Products</span>
                  <ArrowDown className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Pan-India Delivery
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Custom Sizes
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Bulk Orders
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroBags} 
                alt="Premium printed paper bags collection" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg border border-border hidden md:block"
            >
              <p className="text-sm font-medium text-foreground">100% Customizable</p>
              <p className="text-xs text-muted-foreground">Any size, any design</p>
            </motion.div>
            {/* Another floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-4 -right-4 rounded-xl bg-primary p-4 shadow-lg hidden md:block"
            >
              <p className="text-sm font-bold text-primary-foreground">20+ Years</p>
              <p className="text-xs text-primary-foreground/80">Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="bg-background/80 backdrop-blur-sm rounded-full p-2 border border-border">
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
