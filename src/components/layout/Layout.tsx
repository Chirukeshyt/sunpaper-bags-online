import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SocialProofBanner from "./SocialProofBanner";
import MobileWhatsAppCTA from "../MobileWhatsAppCTA";
import CustomOrderPopup from "../CustomOrderPopup";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <SocialProofBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileWhatsAppCTA />
      <CustomOrderPopup />
    </div>
  );
};

export default Layout;
