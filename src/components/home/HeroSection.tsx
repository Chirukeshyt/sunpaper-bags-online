import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import heroBags from "@/assets/hero-bags.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="container">
        <div className="grid min-h-[80vh] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-0">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Trusted by 1000+ businesses
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-in [animation-delay:100ms]">
              Custom Printing for{" "}
              <span className="text-primary">Brands & You</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg text-muted-foreground md:text-xl animate-fade-in [animation-delay:200ms] max-w-xl mx-auto lg:mx-0">
              Premium printed paper bags for Wedding, Retail, Food & Healthcare. 
              Fully customizable from size to print — tailored to your brand.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start animate-fade-in [animation-delay:300ms]">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Get Custom Quote
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#products">
                  Explore Products
                  <ArrowDown className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in [animation-delay:400ms] lg:justify-start">
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
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroBags} 
                alt="Premium printed paper bags collection" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg border border-border hidden md:block">
              <p className="text-sm font-medium text-foreground">100% Customizable</p>
              <p className="text-xs text-muted-foreground">Any size, any design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
