import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order quantity is 500 pieces for most products. For custom sizes or special printing requirements, please contact us via WhatsApp for specific requirements."
  },
  {
    question: "What materials do you offer for paper bags?",
    answer: "We offer three main materials: Duplex (white coated board), Kraft (brown eco-friendly paper), and Catlumina (laminated premium finish). Each material has different properties suitable for various uses."
  },
  {
    question: "How long does delivery take?",
    answer: "Standard orders are delivered within 7-10 working days. Urgent orders can be processed in 3-5 days with an express charge. Delivery time may vary based on quantity and customization."
  },
  {
    question: "Can I get custom sizes for my bags?",
    answer: "Yes! We manufacture paper bags in any custom dimensions. Simply share your requirements (width, height, gusset) via WhatsApp and we'll provide a quote."
  },
  {
    question: "What printing options are available?",
    answer: "We offer single color, two color, and multi-color printing options. We also provide special finishes like UV coating, foil stamping, and lamination for premium bags."
  },
  {
    question: "Do you provide samples before bulk orders?",
    answer: "Yes, we can provide samples for a nominal charge. This helps you check the quality and finish before placing a bulk order. Sample charges are adjusted in your final order."
  },
  {
    question: "What are your payment terms?",
    answer: "We accept 50% advance payment with order confirmation and the remaining 50% before dispatch. We accept bank transfer, UPI, and all major payment methods."
  },
  {
    question: "Do you deliver pan-India?",
    answer: "Yes, we deliver across India. Shipping charges vary based on location and order weight. Bulk orders above certain quantities may qualify for free shipping."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-soft">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
