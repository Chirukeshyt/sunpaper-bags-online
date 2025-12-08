import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ProductFilters from "@/components/products/ProductFilters";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { Package } from "lucide-react";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [materialFilter, setMaterialFilter] = useState("all");
  const [printingFilter, setPrintingFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          product.purpose.toLowerCase().includes(query) ||
          product.material.toLowerCase().includes(query) ||
          product.size.toLowerCase().includes(query) ||
          product.printing.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Size filter
      if (sizeFilter && sizeFilter !== "all" && product.size !== sizeFilter) {
        return false;
      }

      // Material filter
      if (materialFilter && materialFilter !== "all" && product.material !== materialFilter) {
        return false;
      }

      // Printing filter
      if (printingFilter && printingFilter !== "all" && product.printing !== printingFilter) {
        return false;
      }

      return true;
    });
  }, [searchQuery, sizeFilter, materialFilter, printingFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setSizeFilter("all");
    setMaterialFilter("all");
    setPrintingFilter("all");
  };

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our Products
            </h1>
            <p className="mt-2 text-muted-foreground">
              Browse our complete range of printed paper bags
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-soft">
            <ProductFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sizeFilter={sizeFilter}
              setSizeFilter={setSizeFilter}
              materialFilter={materialFilter}
              setMaterialFilter={setMaterialFilter}
              printingFilter={printingFilter}
              setPrintingFilter={setPrintingFilter}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Results Count */}
          <p className="mb-6 text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16">
              <Package className="mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="font-heading text-lg font-semibold text-foreground">
                No products found
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
