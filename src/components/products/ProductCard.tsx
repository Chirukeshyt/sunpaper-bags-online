import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
      {/* Header Badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="inline-block rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
          {product.material}
        </span>
        <span className="inline-block rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
          {product.printing}
        </span>
      </div>

      {/* Product Title */}
      <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
        {product.purpose || "Paper Bag"}
      </h3>

      {/* Product Details */}
      <div className="mb-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Size</span>
          <span className="font-medium text-foreground">{product.size} {product.unit}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Material</span>
          <span className="font-medium text-foreground">{product.material}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Printing</span>
          <span className="font-medium text-foreground">{product.printing}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Min Quantity</span>
          <span className="font-medium text-foreground">{product.min_quantity.toLocaleString()}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-4 border-t border-border" />

      {/* Price */}
      <div className="mb-4 mt-auto">
        {product.cost ? (
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-foreground">₹{product.cost}</span>
            <span className="text-sm text-muted-foreground">/pc</span>
            {product.gst && (
              <span className="ml-auto rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                +{product.gst}% GST
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">Contact for Price</span>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <Button variant="whatsapp" className="w-full" asChild>
        <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" />
          Order via WhatsApp
        </a>
      </Button>
    </div>
  );
};

export default ProductCard;
