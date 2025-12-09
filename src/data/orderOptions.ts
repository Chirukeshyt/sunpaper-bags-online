export const materials = [
  { id: 'duplex', name: 'Duplex', priceMultiplier: 1 },
  { id: 'kraft', name: 'Kraft', priceMultiplier: 0.9 },
  { id: 'catlumina', name: 'Catlumina (Laminated)', priceMultiplier: 1.8 },
];

export const colorOptions = [
  { id: 'single', name: 'Single Color', priceAdd: 0 },
  { id: 'two-color', name: 'Two Colors', priceAdd: 2 },
  { id: 'multi', name: 'Multi Color', priceAdd: 4 },
];

export const sizes = [
  { id: 'small', name: 'Small (6×9×2.5 Inc)', basePrice: 8 },
  { id: 'medium', name: 'Medium (11×13×4 Inc)', basePrice: 14 },
  { id: 'large', name: 'Large (16×13×4 Inc)', basePrice: 16 },
  { id: 'xlarge', name: 'Extra Large (18×13×4 Inc)', basePrice: 18 },
  { id: 'custom', name: 'Custom Size', basePrice: 15 },
];

export const quantityOptions = [
  { id: '500', value: 500, discount: 0 },
  { id: '1000', value: 1000, discount: 0.05 },
  { id: '2000', value: 2000, discount: 0.1 },
  { id: '5000', value: 5000, discount: 0.15 },
  { id: 'custom', value: 0, discount: 0 },
];

export const calculatePrice = (
  sizeId: string,
  materialId: string,
  colorId: string,
  quantityId: string,
  customQuantity?: number
): { unitPrice: number; totalPrice: number; quantity: number } => {
  const size = sizes.find(s => s.id === sizeId);
  const material = materials.find(m => m.id === materialId);
  const color = colorOptions.find(c => c.id === colorId);
  const quantityOption = quantityOptions.find(q => q.id === quantityId);

  if (!size || !material || !color || !quantityOption) {
    return { unitPrice: 0, totalPrice: 0, quantity: 0 };
  }

  const quantity = quantityId === 'custom' ? (customQuantity || 500) : quantityOption.value;
  const basePrice = size.basePrice * material.priceMultiplier + color.priceAdd;
  const discountedPrice = basePrice * (1 - quantityOption.discount);
  const unitPrice = Math.round(discountedPrice * 100) / 100;
  const totalPrice = Math.round(unitPrice * quantity * 100) / 100;

  return { unitPrice, totalPrice, quantity };
};
