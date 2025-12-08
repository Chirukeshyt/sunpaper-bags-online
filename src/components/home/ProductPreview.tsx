import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { products, Product } from "@/data/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:shadow-card">
      {/* Product Header */}
      <div className="mb-4">
        <span className="inline-block rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
          {product.material}
        </span>
      </div>

      {/* Product Info */}
      <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
        {product.purpose || "Paper Bag"}
      </h3>
      
      <div className="mb-4 space-y-1 text-sm text-muted-foreground">
        <p>Size: {product.size} {product.unit}</p>
        <p>Printing: {product.printing}</p>
        <p>Min Qty: {product.min_quantity.toLocaleString()}</p>
      </div>

      {/* Price */}
      <div className="mb-4 mt-auto">
        {product.cost ? (
          <div>
            <span className="text-xl font-bold text-foreground">₹{product.cost}</span>
            <span className="text-sm text-muted-foreground">/pc</span>
            {product.gst && (
              <span className="ml-2 text-xs text-muted-foreground">+{product.gst}% GST</span>
            )}
          </div>
        ) : (
          <span className="text-sm text-muted-foreground">Contact for price</span>
        )}
      </div>

      {/* CTA */}
      <Button variant="whatsapp" size="sm" className="w-full" asChild>
        <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" />
          Order via WhatsApp
        </a>
      </Button>
    </div>
  );
};

const ProductPreview = () => {
  // Show first 6 products with prices
  const featuredProducts = products.filter(p => p.cost !== null).slice(0, 6);

  return (
    <section className="bg-surface-soft py-16 md:py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Popular Products
            </h2>
            <p className="mt-2 text-muted-foreground">
              Explore our bestselling paper bag designs
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/products">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
