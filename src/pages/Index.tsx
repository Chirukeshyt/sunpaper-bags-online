import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProductGallery from "@/components/home/ProductGallery";
import IndustrySection from "@/components/home/IndustrySection";
import AboutSection from "@/components/home/AboutSection";
import CustomQuoteSection from "@/components/home/CustomQuoteSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductGallery />
      <IndustrySection />
      <AboutSection />
      <CustomQuoteSection />
    </Layout>
  );
};

export default Index;
