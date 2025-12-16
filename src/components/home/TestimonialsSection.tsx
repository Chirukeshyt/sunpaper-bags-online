import ScrollReveal from "@/components/ui/ScrollReveal";

const TestimonialsSection = () => {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container">
        <ScrollReveal className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Verified reviews powered by Senja
          </p>
        </ScrollReveal>

        <script
          src="https://widget.senja.io/widget/11659a57-6f07-4e01-83fb-8058d06b46bd/platform.js"
          type="text/javascript"
          async
        ></script>

<div 
  className="block w-full"
  data-id="11659a57-6f07-4e01-83fb-8058d06b46bd"
  data-mode="shadow"
  data-lazyload="false"
>
  <div className="senja-embed"></div>
</div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
