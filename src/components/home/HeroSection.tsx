import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-soft to-background py-16 md:py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Trusted by 500+ businesses
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-in [animation-delay:100ms]">
            Printed Paper Bags — 
            <span className="text-primary"> Custom, Durable & Affordable</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-muted-foreground md:text-xl animate-fade-in [animation-delay:200ms]">
            Wedding, Retail, Food & Hospital Bags with premium printing & bulk pricing. 
            Quality craftsmanship for every business need.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in [animation-delay:300ms]">
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">
                View Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Premium Quality
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Bulk Pricing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
