import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { MessageCircle } from 'lucide-react';
import { materials, colorOptions, sizes, quantityOptions, calculatePrice } from '@/data/orderOptions';

const Order = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || '';

  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedMaterial, setSelectedMaterial] = useState('duplex');
  const [selectedColor, setSelectedColor] = useState('single');
  const [selectedQuantity, setSelectedQuantity] = useState('1000');
  const [customQuantity, setCustomQuantity] = useState<number>(500);
  const [customSize, setCustomSize] = useState({ width: '', height: '', gusset: '', unit: 'Inc' });

  const pricing = useMemo(() => {
    return calculatePrice(selectedSize, selectedMaterial, selectedColor, selectedQuantity, customQuantity);
  }, [selectedSize, selectedMaterial, selectedColor, selectedQuantity, customQuantity]);

  const generateWhatsAppLink = () => {
    const size = sizes.find(s => s.id === selectedSize);
    const material = materials.find(m => m.id === selectedMaterial);
    const color = colorOptions.find(c => c.id === selectedColor);
    
    const sizeText = selectedSize === 'custom' 
      ? `Custom (${customSize.width}×${customSize.height}×${customSize.gusset} ${customSize.unit})`
      : size?.name || '';

    const message = encodeURIComponent(`Hi SunPaperIndustries 👋
I want to place an order:

• Category: ${categoryFromUrl || 'Paper Bags'}
• Size: ${sizeText}
• Material: ${material?.name || ''}
• Printing: ${color?.name || ''}
• Quantity: ${pricing.quantity}
• Unit Price: ₹${pricing.unitPrice}
• Total: ₹${pricing.totalPrice.toLocaleString('en-IN')}

Please confirm availability and share payment details.`);

    return `https://wa.me/919876543210?text=${message}`;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
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

          <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-soft">
            {/* Size Selection */}
            <div className="mb-8">
              <Label className="text-base font-semibold mb-4 block">Select Size</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedSize === size.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium text-sm">{size.name}</span>
                  </button>
                ))}
              </div>
              
              {selectedSize === 'custom' && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-muted/30 rounded-lg">
                  <div>
                    <Label className="text-xs">Width</Label>
                    <Input
                      type="text"
                      placeholder="e.g., 10"
                      value={customSize.width}
                      onChange={(e) => setCustomSize({ ...customSize, width: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Height</Label>
                    <Input
                      type="text"
                      placeholder="e.g., 12"
                      value={customSize.height}
                      onChange={(e) => setCustomSize({ ...customSize, height: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Gusset</Label>
                    <Input
                      type="text"
                      placeholder="e.g., 4"
                      value={customSize.gusset}
                      onChange={(e) => setCustomSize({ ...customSize, gusset: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Unit</Label>
                    <select
                      value={customSize.unit}
                      onChange={(e) => setCustomSize({ ...customSize, unit: e.target.value })}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="Inc">Inches</option>
                      <option value="Cms">Cms</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Material Selection */}
            <div className="mb-8">
              <Label className="text-base font-semibold mb-4 block">Select Material</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {materials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => setSelectedMaterial(material.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedMaterial === material.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium">{material.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <Label className="text-base font-semibold mb-4 block">Select Printing</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedColor === color.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium">{color.name}</span>
                    {color.priceAdd > 0 && (
                      <span className="text-xs text-muted-foreground ml-2">(+₹{color.priceAdd}/pc)</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <Label className="text-base font-semibold mb-4 block">Select Quantity</Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {quantityOptions.map((qty) => (
                  <button
                    key={qty.id}
                    onClick={() => setSelectedQuantity(qty.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selectedQuantity === qty.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium">{qty.id === 'custom' ? 'Custom' : qty.value.toLocaleString()}</span>
                    {qty.discount > 0 && (
                      <span className="block text-xs text-primary">-{qty.discount * 100}% off</span>
                    )}
                  </button>
                ))}
              </div>
              
              {selectedQuantity === 'custom' && (
                <div className="mt-4 max-w-xs">
                  <Label className="text-xs">Enter Quantity (min 500)</Label>
                  <Input
                    type="number"
                    min={500}
                    value={customQuantity}
                    onChange={(e) => setCustomQuantity(Math.max(500, parseInt(e.target.value) || 500))}
                  />
                </div>
              )}
            </div>

            {/* Price Summary */}
            <div className="bg-muted/50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unit Price</span>
                  <span className="font-medium">₹{pricing.unitPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quantity</span>
                  <span className="font-medium">{pricing.quantity.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (18%)</span>
                  <span className="font-medium">₹{(pricing.totalPrice * 0.18).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-primary">
                      ₹{(pricing.totalPrice * 1.18).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Button */}
            <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="w-full text-lg py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
