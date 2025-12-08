import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductPreview from "@/components/home/ProductPreview";
import HowItWorks from "@/components/home/HowItWorks";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProductPreview />
      <HowItWorks />
    </Layout>
  );
};

export default Index;
