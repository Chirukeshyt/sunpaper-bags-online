import { Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "The print finish and paper quality were exactly what we wanted for our wedding return bags. Delivery to Tirupati was on time and the final result looked premium.",
    name: "Lakshmi & Family",
    role: "Wedding Order, Tirupati",
  },
  {
    quote:
      "We needed custom retail bags in bulk with clean branding. The team was responsive on WhatsApp, shared updates clearly, and the bags came out neat and sturdy.",
    name: "Rohit Sharma",
    role: "Retail Store, Hyderabad",
  },
  {
    quote:
      "For our food packaging orders, consistency matters. The bag size, handle strength, and print quality were maintained well across the full batch.",
    name: "Priya Foods",
    role: "Food Business, Bengaluru",
  },
  {
    quote:
      "We ordered hospital utility bags with specific size requirements. The customization was handled properly and the pricing worked well for repeat bulk orders.",
    name: "CarePlus Team",
    role: "Healthcare Supply, Chennai",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <ScrollReveal className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">Customer Feedback</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Feedback from businesses and families across India who trust us for custom paper bags.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="min-h-[132px] text-sm leading-7 text-muted-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
