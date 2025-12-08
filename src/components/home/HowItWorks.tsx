import { Ruler, Palette, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Ruler,
    title: "Choose Your Size",
    description: "Select from our wide range of sizes suitable for different purposes.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Choose Print Type",
    description: "Pick single color, multi-color, or custom printing for your brand.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Order on WhatsApp",
    description: "Send us your order details and we'll confirm pricing & delivery.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simple 3-step process to get your custom paper bags
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connection Line - Desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-border md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Step Number */}
                <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card">
                  <step.icon className="h-7 w-7" />
                </div>

                {/* Step Content */}
                <div className="mx-auto max-w-xs">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary">
                    Step {step.number}
                  </span>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
