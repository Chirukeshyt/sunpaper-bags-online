import { Product } from "@/data/products";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

export const generateWhatsAppMessage = (product: Product): string => {
  const costDisplay = product.cost ? `₹${product.cost}` : "Contact for price";
  const gstDisplay = product.gst ? `${product.gst}%` : "N/A";
  
  const message = `Hi SunPaperIndustries 👋
I want to order the following product:

• Product: ${product.purpose || "Paper Bag"}
• Size: ${product.size} ${product.unit}
• Material: ${product.material}
• Printing: ${product.printing}
• Min Qty: ${product.min_quantity}
• Unit Price: ${costDisplay} (GST ${gstDisplay})

Please share delivery time & payment details.`;

  return encodeURIComponent(message);
};

export const getWhatsAppLink = (product: Product): string => {
  const message = generateWhatsAppMessage(product);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const getGeneralWhatsAppLink = (): string => {
  const message = encodeURIComponent("Hi SunPaperIndustries 👋\nI'm interested in your printed paper bags. Please share more details.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
