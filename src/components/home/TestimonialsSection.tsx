import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6 relative hover:shadow-lg transition-shadow flex-shrink-0">
      <Quote className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 text-primary/10" />
      
      {/* Rating */}
      <div className="flex gap-0.5 mb-3 md:mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Text */}
      <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-4 leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="border-t border-border pt-3 md:pt-4">
        <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.business}</p>
        <p className="text-xs text-primary mt-0.5">{testimonial.location}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = scrollContentRef.current;
    
    if (!container || !content) return;

    let scrollPosition = 0;
    let isPaused = false;
    let animationId: number;

    const getScrollWidth = () => {
      // Calculate the width of one set of testimonials
      const firstCard = content.children[0] as HTMLElement;
      if (!firstCard) return 0;
      const cardWidth = firstCard.offsetWidth;
      const gap = 16; // gap-4 = 16px
      return (cardWidth + gap) * testimonials.length;
    };

    const animate = () => {
      if (!isPaused && container && content) {
        const scrollWidth = getScrollWidth();
        scrollPosition += 0.5; // Scroll speed
        
        // Reset to start when we've scrolled through one set
        if (scrollPosition >= scrollWidth) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    // Pause on hover/touch
    const handlePause = () => { isPaused = true; };
    const handleResume = () => { isPaused = false; };
    
    container.addEventListener('mouseenter', handlePause);
    container.addEventListener('mouseleave', handleResume);
    container.addEventListener('touchstart', handlePause);
    container.addEventListener('touchend', handleResume);

    // Start animation
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handlePause);
      container.removeEventListener('mouseleave', handleResume);
      container.removeEventListener('touchstart', handlePause);
      container.removeEventListener('touchend', handleResume);
    };
  }, []);

  // Duplicate testimonials for seamless scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Trusted by 500+ businesses across India since 2006
          </p>
        </ScrollReveal>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Auto-Scrolling View */}
        <div 
          ref={scrollContainerRef}
          className="md:hidden overflow-x-hidden pb-4"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style>{`
            .testimonial-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div 
            ref={scrollContentRef}
            className="flex gap-4 testimonial-scroll"
            style={{ width: 'max-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="w-[85vw] max-w-[320px] flex-shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
