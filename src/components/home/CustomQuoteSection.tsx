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
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 text-center overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              How to Get Your Custom Quote
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Getting custom printed paper bags is easy! Just follow these simple steps 
              and we'll provide you with an instant quote via WhatsApp.
            </p>

            {/* Steps */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm p-6 text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground mb-4">
                    {step.icon}
                  </div>
                  <div className="text-xs text-primary-foreground/60 mb-1">Step {index + 1}</div>
                  <h3 className="font-semibold text-primary-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              size="xl" 
              className="mt-10 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              asChild
            >
              <a href={getCustomQuoteLink("General Inquiry")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
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
