import { Button } from "@/components/ui/button";
import { MessageCircle, Ruler, Palette, Package, Truck } from "lucide-react";
import { getCustomQuoteLink } from "@/lib/whatsapp";

const steps = [
  {
    icon: <Ruler className="h-6 w-6" />,
    title: "Choose Size",
    description: "Standard or custom dimensions"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Select Material & Print",
    description: "Duplex, Kraft, Single/Multi color"
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Specify Quantity",
    description: "Bulk orders welcome"
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Get Delivery",
    description: "Fast Pan-India shipping"
  }
];

const CustomQuoteSection = () => {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container">
        <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-6 md:p-8 lg:p-12 text-center overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
              How to Get Your Custom Quote
            </h2>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto px-2">
              Getting custom printed paper bags is easy! Just follow these simple steps 
              and we'll provide you with an instant quote via WhatsApp.
            </p>

            {/* Steps */}
            <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="rounded-lg md:rounded-xl bg-primary-foreground/10 backdrop-blur-sm p-4 md:p-6 text-center"
                >
                  <div className="mx-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground mb-3 md:mb-4">
                    {step.icon}
                  </div>
                  <div className="text-xs text-primary-foreground/60 mb-1">Step {index + 1}</div>
                  <h3 className="text-sm md:text-base font-semibold text-primary-foreground">{step.title}</h3>
                  <p className="mt-1 text-xs md:text-sm text-primary-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              size="lg"
              className="mt-6 md:mt-10 w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm md:text-base px-6 md:px-8"
              asChild
            >
              <a href={getCustomQuoteLink("General Inquiry")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Get Instant Quote on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomQuoteSection;
