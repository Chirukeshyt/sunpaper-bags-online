import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import heroBags from "@/assets/hero-bags.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBags} 
          alt="Paper bags background" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl py-16 md:py-24">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Since 2006 • Trusted by 1000+ businesses
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in [animation-delay:100ms]">
            Premium Printed{" "}
            <span className="text-primary">Paper Bags</span>{" "}
            for Your Brand
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-muted-foreground md:text-xl animate-fade-in [animation-delay:200ms] max-w-2xl">
            Custom paper bags for Wedding, Retail, Food & Healthcare industries. 
            Fully customizable — from size to print. Premium quality at competitive prices.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row animate-fade-in [animation-delay:300ms]">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Get Custom Quote
              </a>
            </Button>
            <Button variant="outline" size="xl" className="backdrop-blur-sm" asChild>
              <a href="#products">
                Explore Products
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Pan-India Delivery
            </div>
            <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Custom Sizes
            </div>
            <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Bulk Orders
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="bg-background/80 backdrop-blur-sm rounded-full p-2">
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
