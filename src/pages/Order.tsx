import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { MessageCircle, Search } from 'lucide-react';
import {
  getUniqueMaterials,
  getUniquePrintingOptions,
  getUniqueSizes,
  productCatalog,
  findProductFromCatalog,
} from '@/data/productCatalog';

const Order = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || '';

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedPrinting, setSelectedPrinting] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1000);
  const [searchQuery, setSearchQuery] = useState('');

  const uniqueSizes = getUniqueSizes();
  const uniqueMaterials = getUniqueMaterials();
  const uniquePrintingOptions = getUniquePrintingOptions();

  const filteredProducts = useMemo(() => {
    return productCatalog.filter((product) => {
      const sizeMatch =
        !selectedSize || product.sizeFormatted === selectedSize || product.size === selectedSize;
      const materialMatch =
        !selectedMaterial || product.material.toUpperCase() === selectedMaterial.toUpperCase();
      const printingMatch =
        !selectedPrinting ||
        product.printing.toUpperCase().includes(selectedPrinting.toUpperCase()) ||
        selectedPrinting.toUpperCase().includes(product.printing.toUpperCase());

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          (product.sizeFormatted.toLowerCase().includes(query) ||
            product.material.toLowerCase().includes(query) ||
            product.printing.toLowerCase().includes(query)) &&
          sizeMatch &&
          materialMatch &&
          printingMatch
        );
      }

      return sizeMatch && materialMatch && printingMatch;
    });
  }, [selectedSize, selectedMaterial, selectedPrinting, searchQuery]);

  const selectedProduct = useMemo(() => {
    if (selectedSize && selectedMaterial && selectedPrinting) {
      const sizeObj = uniqueSizes.find((s) => s.id === selectedSize || s.label === selectedSize);
      return findProductFromCatalog(sizeObj?.label || selectedSize, selectedMaterial, selectedPrinting);
    }
    return null;
  }, [selectedSize, selectedMaterial, selectedPrinting, uniqueSizes]);

  const selectedSizeLabel = useMemo(() => {
    const sizeObj = uniqueSizes.find((s) => s.id === selectedSize || s.label === selectedSize);
    return sizeObj?.label || selectedSize || 'Not selected';
  }, [selectedSize, uniqueSizes]);

  const selectedMaterialLabel = useMemo(() => {
    const materialObj = uniqueMaterials.find((m) => m.id === selectedMaterial);
    return materialObj?.label || selectedMaterial || 'Not selected';
  }, [selectedMaterial, uniqueMaterials]);

  const selectedPrintingLabel = useMemo(() => {
    const printingObj = uniquePrintingOptions.find((p) => p.id === selectedPrinting);
    return printingObj?.label || selectedPrinting || 'Not selected';
  }, [selectedPrinting, uniquePrintingOptions]);

  const summaryMinQuantity = useMemo(() => {
    if (selectedProduct) {
      return selectedProduct.minQuantity;
    }
    if (filteredProducts.length > 0) {
      return Math.min(...filteredProducts.map((product) => product.minQuantity));
    }
    return null;
  }, [selectedProduct, filteredProducts]);

  const hasSummarySelection = Boolean(selectedSize && selectedMaterial && selectedPrinting);

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(`Hi SUN PAPER INDUSTRIES
I want to place an order:

- Category: ${categoryFromUrl || 'Paper Bags'}
- Size: ${selectedSizeLabel}
- Material: ${selectedMaterialLabel}
- Printing: ${selectedPrintingLabel}
- Min. Quantity: ${summaryMinQuantity?.toLocaleString('en-IN') || 'On request'}

Please confirm availability and share payment details.`);

    return `https://wa.me/919866038338?text=${message}`;
  };

  return (
    <Layout>
      <SEO
        title="Customize Your Order - Get Instant Quote"
        description="Customize your paper bag order with our comprehensive product catalog. Select size, material, printing options, and quantity. Get instant pricing and order via WhatsApp. Bulk discounts available."
        keywords="customize paper bags, order paper bags, paper bag configurator, custom size bags, bulk bag orders, paper bag pricing, instant quote, WhatsApp order"
        url="https://sunpaperindustries.com/order"
      />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              Customize Your Order
            </h1>
            {categoryFromUrl && (
              <p className="text-lg text-muted-foreground">
                Category: <span className="text-primary font-medium">{categoryFromUrl}</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <Label className="text-base font-semibold mb-4 block">Search Products</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by size, material, or printing..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <Label className="text-base font-semibold mb-4 block">Select Size</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-64 overflow-y-auto">
                  {uniqueSizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.label)}
                      className={`p-3 rounded-lg border-2 transition-all text-left text-sm ${
                        selectedSize === size.label
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="font-medium">{size.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <Label className="text-base font-semibold mb-4 block">Select Material</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {uniqueMaterials.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedMaterial === material.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="font-medium">{material.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <Label className="text-base font-semibold mb-4 block">Select Printing</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {uniquePrintingOptions.map((printing) => (
                    <button
                      key={printing.id}
                      onClick={() => setSelectedPrinting(printing.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedPrinting === printing.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="font-medium">{printing.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <Label className="text-base font-semibold mb-4 block">
                  Select Quantity
                  {selectedProduct && (
                    <span className="text-sm text-muted-foreground font-normal ml-2">
                      (Min: {selectedProduct.minQuantity.toLocaleString('en-IN')})
                    </span>
                  )}
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                  {[ 1000, 2000, 5000, 10000].map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setSelectedQuantity(qty)}
                      disabled={selectedProduct ? qty < selectedProduct.minQuantity : false}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        selectedQuantity === qty
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      } ${selectedProduct && qty < selectedProduct.minQuantity ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span className="font-medium text-sm">{qty.toLocaleString('en-IN')}</span>
                    </button>
                  ))}
                </div>
                <div>
                  <Label className="text-xs">Custom Quantity</Label>
                  <Input
                    type="number"
                    min={selectedProduct?.minQuantity || 500}
                    value={selectedQuantity}
                    onChange={(e) =>
                      setSelectedQuantity(
                        Math.max(
                          selectedProduct?.minQuantity || 500,
                          parseInt(e.target.value, 10) || selectedProduct?.minQuantity || 500,
                        ),
                      )
                    }
                    placeholder={`Min: ${selectedProduct?.minQuantity || 500}`}
                  />
                </div>
              </div>

              {filteredProducts.length > 0 && (
                <div className="bg-card rounded-xl border border-border p-6">
                  <Label className="text-base font-semibold mb-4 block">
                    Available Options ({filteredProducts.length})
                  </Label>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {filteredProducts.slice(0, 10).map((product) => (
                      <div
                        key={product.id}
                        className={`p-3 rounded-lg border transition-all cursor-pointer ${
                          selectedProduct?.id === product.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/30'
                        }`}
                        onClick={() => {
                          const sizeObj = uniqueSizes.find((s) => s.label === product.sizeFormatted);
                          setSelectedSize(sizeObj?.label || product.sizeFormatted);
                          setSelectedMaterial(product.material.toUpperCase());
                          setSelectedPrinting(product.printing.toUpperCase());
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-medium text-sm">{product.sizeFormatted}</span>
                            <span className="text-xs text-muted-foreground ml-2">
                              {product.material} • {product.printing}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                {hasSummarySelection ? (
                  <>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Size</span>
                        <span className="font-medium text-right">{selectedSizeLabel}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Material</span>
                        <span className="font-medium text-right">{selectedMaterialLabel}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Printing</span>
                        <span className="font-medium text-right">{selectedPrintingLabel}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Min. Quantity</span>
                        <span className="font-medium text-right">
                          {summaryMinQuantity?.toLocaleString('en-IN') || 'On request'}
                        </span>
                      </div>
                    </div>

                    <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block mt-6">
                      <Button variant="whatsapp" size="lg" className="w-full text-lg py-6">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Order via WhatsApp
                      </Button>
                    </a>
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p className="text-sm">Please select size, material, and printing to continue</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
