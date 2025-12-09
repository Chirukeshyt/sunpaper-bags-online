import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    business: "Sri Lakshmi Textiles",
    rating: 5,
    text: "We've been ordering paper bags from SunPaper Industries for 3 years now. Excellent quality and the multi-color printing really makes our brand stand out. Highly recommended!",
    location: "Chennai"
  },
  {
    id: 2,
    name: "Priya Sharma",
    business: "Sweet Paradise Bakery",
    rating: 5,
    text: "The food-grade kraft bags are perfect for our bakery. Quick delivery and the prices are very competitive. Our customers love the eco-friendly packaging.",
    location: "Hyderabad"
  },
  {
    id: 3,
    name: "Mohammed Irfan",
    business: "Diamond Jewellers",
    rating: 5,
    text: "Beautiful small bags with foil printing for our jewelry store. The quality is premium and our customers appreciate the elegant packaging.",
    location: "Bangalore"
  },
  {
    id: 4,
    name: "Sunitha Reddy",
    business: "Grace Hospital",
    rating: 5,
    text: "Clean white pharmacy bags with our hospital logo. Consistent quality and timely delivery every month. Very professional service.",
    location: "Vijayawada"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Trusted by 500+ businesses across India since 2006
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.business}</p>
                <p className="text-xs text-primary">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
