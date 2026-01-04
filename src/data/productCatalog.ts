export interface ProductOption {
  id: string;
  size: string;
  sizeFormatted: string;
  material: string;
  printing: string;
  minQuantity: number;
  unitPrice: number;
  gst: number;
  unit: 'Inc' | 'Cms';
}

export const productCatalog: ProductOption[] = [
  // Sample Kits
  { id: 'sample-1', size: '12X15X4', sizeFormatted: '12×15×4 Cms', material: 'DUPLEX', printing: 'MULTI/SINGLE', minQuantity: 2000, unitPrice: 0, gst: 18, unit: 'Cms' },
  { id: 'sample-2', size: '6x6x2.5', sizeFormatted: '6×6×2.5 Inc', material: 'duplex', printing: 'single/multi', minQuantity: 2000, unitPrice: 0, gst: 18, unit: 'Inc' },
  
  // 6X9X2.5 Inc - DUPLEX
  { id: '6x9-2.5-duplex-single-wedding', size: '6X9X2.5', sizeFormatted: '6×9×2.5 Inc', material: 'DUPLEX', printing: 'SINGLE', minQuantity: 1000, unitPrice: 9, gst: 18, unit: 'Inc' },
  { id: '6x9-2.5-duplex-multi-jewelry', size: '6X9X2.5', sizeFormatted: '6×9×2.5 Inc', material: 'DUPLEX', printing: 'MULTY', minQuantity: 2000, unitPrice: 11, gst: 18, unit: 'Inc' },
  { id: '6x9-2.5-craft-single-hospital', size: '6X9X2.5', sizeFormatted: '6×9×2.5 Inc', material: 'CRAFT INDIA', printing: 'SINGLE', minQuantity: 2000, unitPrice: 8.5, gst: 18, unit: 'Inc' },
  
  // 20X23X8 Cms
  { id: '20x23x8-craft-single', size: '20X23X8', sizeFormatted: '20×23×8 Cms', material: 'CRAFT INDIA', printing: 'SINGLE', minQuantity: 2000, unitPrice: 9, gst: 18, unit: 'Cms' },
  { id: '20x23x8-duplex-single-inkpot', size: '20X23X8', sizeFormatted: '20×23×8 Cms', material: 'DUPLEX', printing: 'SINGLE', minQuantity: 2000, unitPrice: 10, gst: 18, unit: 'Cms' },
  { id: '20x23x8-duplex-multi', size: '20X23X8', sizeFormatted: '20×23×8 Cms', material: 'DUPLEX', printing: 'MULTY', minQuantity: 2000, unitPrice: 12, gst: 18, unit: 'Cms' },
  { id: '20x23x8-catlumina-single', size: '20X23X8', sizeFormatted: '20×23×8 Cms', material: 'CATLUMINA', printing: 'SINGLE', minQuantity: 2000, unitPrice: 15, gst: 18, unit: 'Cms' },
  
  // 20X28X8 Cms
  { id: '20x28x8-duplex-200gsm-single', size: '20X28X8', sizeFormatted: '20×28×8 Cms', material: 'DUPLEX/200 GSM', printing: 'SINGLE', minQuantity: 2000, unitPrice: 12, gst: 18, unit: 'Cms' },
  { id: '20x28x8-craft-single', size: '20X28X8', sizeFormatted: '20×28×8 Cms', material: 'CRAFT', printing: 'SINGLE', minQuantity: 2000, unitPrice: 10, gst: 18, unit: 'Cms' },
  { id: '20x28x8-duplex-multi', size: '20X28X8', sizeFormatted: '20×28×8 Cms', material: 'DUPLEX', printing: 'MULTY', minQuantity: 2000, unitPrice: 14, gst: 18, unit: 'Cms' },
  
  // 11X13X4 Inc - DUPLEX
  { id: '11x13x4-duplex-single', size: '11X13X4', sizeFormatted: '11×13×4 Inc', material: 'DUPLEX', printing: 'SINGLE', minQuantity: 2000, unitPrice: 14.5, gst: 18, unit: 'Inc' },
  { id: '11x13x4-duplex-two-color', size: '11X13X4', sizeFormatted: '11×13×4 Inc', material: 'DUPLEX', printing: 'TWO COLOR', minQuantity: 1000, unitPrice: 15.5, gst: 18, unit: 'Inc' },
  { id: '11x13x4-duplex-single-solid', size: '11X13X4', sizeFormatted: '11×13×4 Inc', material: 'DUPLEX', printing: 'SINGLE-SOLID', minQuantity: 1000, unitPrice: 15.5, gst: 18, unit: 'Inc' },
  { id: '11x13x4-duplex-multy', size: '11X13X4', sizeFormatted: '11×13×4 Inc', material: 'DUPLEX', printing: 'MULTY COLOR', minQuantity: 1000, unitPrice: 16.5, gst: 18, unit: 'Inc' },
  { id: '11x13x4-craft-single', size: '11X13X4', sizeFormatted: '11×13×4 Inc', material: 'CRAFT', printing: 'SINGLE', minQuantity: 1000, unitPrice: 13.5, gst: 18, unit: 'Inc' },
  
  // 16X13X4 Inc
  { id: '16x13x4-craft-single', size: '16X13X4', sizeFormatted: '16×13×4 Inc', material: 'CRAFT', printing: 'SINGLE', minQuantity: 1000, unitPrice: 15, gst: 18, unit: 'Inc' },
  { id: '16x13x4-duplex-single', size: '16X13X4', sizeFormatted: '16×13×4 Inc', material: 'DUPLEX', printing: 'SINGLE', minQuantity: 1000, unitPrice: 16.5, gst: 18, unit: 'Inc' },
  { id: '16x13x4-duplex-single-solid', size: '16X13X4', sizeFormatted: '16×13×4 Inc', material: 'DUPLEX', printing: 'SINGLE-SOLID', minQuantity: 1000, unitPrice: 17.5, gst: 18, unit: 'Inc' },
  { id: '16x13x4-duplex-two-color', size: '16X13X4', sizeFormatted: '16×13×4 Inc', material: 'DUPLEX', printing: 'TWO COLOR', minQuantity: 1000, unitPrice: 0, gst: 18, unit: 'Inc' },
  { id: '16x13x4-duplex-multy', size: '16X13X4', sizeFormatted: '16×13×4 Inc', material: 'DUPLEX', printing: 'MULTY', minQuantity: 1000, unitPrice: 18.5, gst: 18, unit: 'Inc' },
  
  // 18X13X4 Inc
  { id: '18x13x4-duplex-single', size: '18X13X4', sizeFormatted: '18×13×4 Inc', material: 'DUPLEX', printing: 'SINGLE', minQuantity: 1000, unitPrice: 18.5, gst: 18, unit: 'Inc' },
  { id: '18x13x4-duplex-multy', size: '18X13X4', sizeFormatted: '18×13×4 Inc', material: 'DUPLEX', printing: 'MULTY', minQuantity: 1000, unitPrice: 20.5, gst: 18, unit: 'Inc' },
  { id: '18x13x4-catlumina-single', size: '18X13X4', sizeFormatted: '18×13×4 Inc', material: 'CATLUMINA', printing: 'SINGLE', minQuantity: 1000, unitPrice: 37, gst: 18, unit: 'Inc' },
  { id: '18x13x4-catlumina-multy', size: '18X13X4', sizeFormatted: '18×13×4 Inc', material: 'CATLUMINA', printing: 'MULTY', minQuantity: 1000, unitPrice: 39, gst: 18, unit: 'Inc' },
  
  // Brown Craft sizes
  { id: '8.5x8.5x6.5-brown-craft-single', size: '8.5x8.5x6.5', sizeFormatted: '8.5×8.5×6.5 Inc', material: 'BROWN CRAFT', printing: 'SINGLE', minQuantity: 2000, unitPrice: 0, gst: 18, unit: 'Inc' },
  { id: '11x8.5x8-brown-craft-single', size: '11X8.5X8', sizeFormatted: '11×8.5×8 Inc', material: 'BROWN CRAFT', printing: 'SINGLE', minQuantity: 2000, unitPrice: 0, gst: 18, unit: 'Inc' },
  { id: '9x6.5x3.5-brown-craft-single', size: '9X6.5X3.5', sizeFormatted: '9×6.5×3.5 Inc', material: 'BROWN CRAFT', printing: 'SINGLE', minQuantity: 2000, unitPrice: 0, gst: 18, unit: 'Inc' },
  { id: '7x9x5-brown-craft-single', size: '7X9X5', sizeFormatted: '7×9×5 Inc', material: 'BROWN CRAFT', printing: 'SINGLE', minQuantity: 2000, unitPrice: 0, gst: 18, unit: 'Inc' },
  { id: '8.5x8.5x5.5-brown-craft-single', size: '8.5X8.5X5.5', sizeFormatted: '8.5×8.5×5.5 Inc', material: 'BROWN CRAFT', printing: 'SINGLE', minQuantity: 2000, unitPrice: 0, gst: 18, unit: 'Inc' },
  { id: '21.5x21x14-brown-craft-single', size: '21.5x21x14', sizeFormatted: '21.5×21×14 Cms', material: 'brown craft', printing: 'single', minQuantity: 1000, unitPrice: 8, gst: 18, unit: 'Cms' },
];

// Get unique sizes
export const getUniqueSizes = (): Array<{ id: string; label: string; unit: 'Inc' | 'Cms' }> => {
  const sizeMap = new Map<string, { id: string; label: string; unit: 'Inc' | 'Cms' }>();
  productCatalog.forEach(product => {
    const key = `${product.size}-${product.unit}`;
    if (!sizeMap.has(key)) {
      sizeMap.set(key, {
        id: key,
        label: product.sizeFormatted,
        unit: product.unit
      });
    }
  });
  return Array.from(sizeMap.values()).sort((a, b) => a.label.localeCompare(b.label));
};

// Get unique materials
export const getUniqueMaterials = (): Array<{ id: string; label: string }> => {
  const materialMap = new Map<string, string>();
  productCatalog.forEach(product => {
    const material = product.material.toUpperCase();
    if (!materialMap.has(material)) {
      materialMap.set(material, material);
    }
  });
  return Array.from(materialMap.entries()).map(([id, label]) => ({ id, label })).sort((a, b) => a.label.localeCompare(b.label));
};

// Get unique printing options
export const getUniquePrintingOptions = (): Array<{ id: string; label: string }> => {
  const printingMap = new Map<string, string>();
  productCatalog.forEach(product => {
    let printing = product.printing.toUpperCase();
    // Normalize printing options
    if (printing.includes('MULTY') || printing.includes('MULTI')) {
      printing = 'MULTI COLOR';
    } else if (printing.includes('TWO')) {
      printing = 'TWO COLOR';
    } else if (printing.includes('SINGLE')) {
      if (printing.includes('SOLID')) {
        printing = 'SINGLE SOLID';
      } else {
        printing = 'SINGLE COLOR';
      }
    }
    if (!printingMap.has(printing)) {
      printingMap.set(printing, printing);
    }
  });
  return Array.from(printingMap.entries()).map(([id, label]) => ({ id, label })).sort((a, b) => a.label.localeCompare(b.label));
};

// Normalize material names
const normalizeMaterial = (material: string): string => {
  const mat = material.toUpperCase();
  if (mat.includes('CRAFT INDIA') || mat.includes('CRAFT')) {
    return 'CRAFT';
  }
  if (mat.includes('BROWN CRAFT')) {
    return 'BROWN CRAFT';
  }
  if (mat.includes('CATLUMINA')) {
    return 'CATLUMINA';
  }
  if (mat.includes('DUPLEX')) {
    return 'DUPLEX';
  }
  return mat;
};

// Normalize printing options
const normalizePrinting = (printing: string): string => {
  const print = printing.toUpperCase();
  if (print.includes('MULTY') || print.includes('MULTI')) {
    return 'MULTI';
  }
  if (print.includes('TWO')) {
    return 'TWO';
  }
  if (print.includes('SINGLE')) {
    if (print.includes('SOLID')) {
      return 'SINGLE SOLID';
    }
    return 'SINGLE';
  }
  return print;
};

// Find matching product from catalog
export const findProductFromCatalog = (
  size: string,
  material: string,
  printing: string
): ProductOption | undefined => {
  const normalizedMaterial = normalizeMaterial(material);
  const normalizedPrinting = normalizePrinting(printing);
  
  return productCatalog.find(product => {
    const sizeMatch = product.size.toUpperCase() === size.toUpperCase() || 
                      product.sizeFormatted.toUpperCase().includes(size.toUpperCase()) ||
                      size.toUpperCase().includes(product.size.toUpperCase());
    
    const productMaterial = normalizeMaterial(product.material);
    const materialMatch = productMaterial === normalizedMaterial || 
                         productMaterial.includes(normalizedMaterial) ||
                         normalizedMaterial.includes(productMaterial);
    
    const productPrinting = normalizePrinting(product.printing);
    const printingMatch = productPrinting === normalizedPrinting || 
                         productPrinting.includes(normalizedPrinting) || 
                         normalizedPrinting.includes(productPrinting);
    
    return sizeMatch && materialMatch && printingMatch;
  });
};
