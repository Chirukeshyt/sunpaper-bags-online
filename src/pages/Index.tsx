import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProductGallery from "@/components/home/ProductGallery";
import IndustrySection from "@/components/home/IndustrySection";
import AboutSection from "@/components/home/AboutSection";
import CustomQuoteSection from "@/components/home/CustomQuoteSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import StatsSection from "@/components/home/StatsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProductGallery />
      <FeaturesSection />
      <IndustrySection />
      <AboutSection />
      <TestimonialsSection />
      <div id="faq">
        <FAQSection />
      </div>
      <CustomQuoteSection />
    </Layout>
  );
};

export default Index;
