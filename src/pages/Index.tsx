import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import ProductGallery from "@/components/home/ProductGallery";
import IndustrySection from "@/components/home/IndustrySection";
import AboutSection from "@/components/home/AboutSection";
import CustomQuoteSection from "@/components/home/CustomQuoteSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CertificatesSection from "@/components/home/CertificatesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import StatsSection from "@/components/home/StatsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import CustomOrderPopup from "@/components/CustomOrderPopup";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="SunPaperIndustries - Premium All Types of Bags for Your Brand"
        description="Custom bags for Wedding, Retail, Food & Healthcare industries. We manufacture all types of bags — paper, fabric, and more. Fully customizable — from size to print. Premium quality at competitive prices. Pan-India delivery."
        keywords="paper bags, custom bags, printed bags, wedding bags, retail bags, food bags, hospital bags, kraft bags, duplex bags, custom printed bags, bulk bags, paper bag manufacturer, India, custom size bags, wholesale bags, fabric bags"
        url="https://sunpaperindustries.com"
      />
      <HeroSection />
      <StatsSection />
      <ProductGallery />
      <HowItWorksSection />
      <PricingSection />
      <FeaturesSection />
      <IndustrySection />
      <AboutSection />
      <CertificatesSection />
      <TestimonialsSection />
      <div id="faq">
        <FAQSection />
      </div>
      <CustomQuoteSection />
      <CustomOrderPopup />
    </Layout>
  );
};

export default Index;
