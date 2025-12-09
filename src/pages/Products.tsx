import { Package } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { productsPageProducts, ProductImage } from "@/data/products";

const ProductImageCard = ({ product, index }: { product: ProductImage; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl aspect-square bg-muted"
    >
      <a 
        href={product.imageLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        <img 
          src={product.imageLink} 
          alt="Product"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </a>
    </motion.div>
  );
};

const Products = () => {

  return (
    <Layout>
      <SEO
        title="Our Products - Customer Gallery"
        description="Explore our complete range of printed paper bags and custom bags trusted by our customers. All products are fully customizable — from size to printing. Get a custom quote via WhatsApp."
        keywords="paper bag products, custom bag gallery, printed bag examples, wedding bag designs, retail bag samples, food bag products, hospital bag gallery, kraft bag designs, duplex bag samples"
        url="https://sunpaperindustries.com/products"
      />
      <section className="bg-background py-12 md:py-16">
        <div className="container">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl mb-4">
              Our Customers Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete range of printed paper bags trusted by our customers. All products are fully customizable 
              — from size to printing. Get a custom quote via WhatsApp.
            </p>
          </div>

          {/* Product Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {productsPageProducts.map((product, index) => (
              <ProductImageCard 
                key={index} 
                product={product} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;

