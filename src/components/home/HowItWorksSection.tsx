import { MessageCircle, FileText, Settings, Truck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageCircle,
    title: "Request Quote",
    description: "Contact us via WhatsApp or fill out the order form with your requirements",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: FileText,
    title: "Get Quote & Approve",
    description: "Receive a detailed quote within 24 hours. Review and approve the design & pricing",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    icon: Settings,
    title: "Production",
    description: "We manufacture your custom bags with quality materials and your brand design",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Your bags are carefully packaged and delivered pan-India within 7-10 days",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    iconColor: "text-orange-600 dark:text-orange-400"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your custom printed paper bags is easy. Follow these simple steps to get started.
          </p>
        </ScrollReveal>

        {/* Steps - Desktop: Horizontal, Mobile: Vertical */}
        <div className="relative">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
              
              <div className="grid grid-cols-4 gap-6 relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm border-4 border-background">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Step Card */}
                    <div className="bg-card rounded-xl border border-border p-6 mt-8 hover:shadow-lg hover:border-primary/30 transition-all group">
                      <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet: Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Step Number Badge */}
                    <div className="absolute left-0 top-0 z-10">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base md:text-lg border-4 border-background shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Step Card */}
                    <div className="bg-card rounded-xl border border-border p-4 md:p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${step.color} flex items-center justify-center mb-3 md:mb-4`}>
                        <step.icon className={`w-6 h-6 md:w-7 md:h-7 ${step.iconColor}`} />
                      </div>
                      <h3 className="font-heading text-base md:text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6 md:p-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Contact us now and get a free quote for your custom paper bags
            </p>
            <Button variant="whatsapp" size="lg" className="font-semibold" asChild>
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Get Free Quote on WhatsApp
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorksSection;

