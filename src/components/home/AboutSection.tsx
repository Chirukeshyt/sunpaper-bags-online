import { Check } from "lucide-react";

const features = [
  "Fully customizable from paper to size",
  "Premium quality printing (Single, Multi-color, UV)",
  "Materials: Duplex, Kraft, Catlumina & more",
  "Fast turnaround times",
  "Pan-India delivery",
  "Exceptional customer service"
];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              About SunPaperIndustries
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Print Solution by SunPaper: The Perfect Choice for Every Professional
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Online printing has revolutionized how we get our marketing materials, offering 
              convenience and customization. SunPaperIndustries stands out as the best printing 
              solution for a range of products like paper bags, shopping bags, food packaging, 
              hospital bags, and more.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our products are fully customizable, from paper type to size, allowing you to create 
              materials that perfectly match your brand. With SunPaperIndustries, you get high-quality 
              prints, fast turnaround times, and exceptional customer service.
            </p>

            {/* Feature List */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-card p-6 text-center shadow-soft border border-border">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="mt-2 text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="rounded-xl bg-card p-6 text-center shadow-soft border border-border">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="mt-2 text-sm text-muted-foreground">Product Varieties</div>
            </div>
            <div className="rounded-xl bg-card p-6 text-center shadow-soft border border-border">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="mt-2 text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="rounded-xl bg-card p-6 text-center shadow-soft border border-border">
              <div className="text-4xl font-bold text-primary">Pan</div>
              <div className="mt-2 text-sm text-muted-foreground">India Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
