const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

export const getGeneralWhatsAppLink = (): string => {
  const message = encodeURIComponent(`Hi SunPaperIndustries 👋
I'm interested in your printed paper bags. Please share more details about your products and pricing.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const getCustomQuoteLink = (category: string): string => {
  const message = encodeURIComponent(`Hi SunPaperIndustries 👋
I'm interested in getting a quote for:

• Category: ${category}
• Size: [Please specify your required size]
• Material: [Duplex / Kraft / Catlumina]
• Printing: [Single Color / Multi Color]
• Quantity: [Please specify quantity]

Please share pricing and delivery details.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const getCustomSizeQuoteLink = (): string => {
  const message = encodeURIComponent(`Hi SunPaperIndustries 👋
I need paper bags in a custom size:

• Width: ___
• Height: ___
• Gusset: ___
• Unit: Inches / Cms
• Material: [Duplex / Kraft / Catlumina]
• Printing: [Single Color / Multi Color]
• Quantity: ___

Please share pricing and delivery details.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
