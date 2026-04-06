import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-surface-soft">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="SunPaper Industries Logo" className="h-10 w-10 object-contain rounded-lg" />
              <span className="font-heading text-lg font-semibold text-green-600 dark:text-green-500">
                SUN PAPER INDUSTRIES
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium printed paper bags for weddings, retail, food & hospitals. 
              Custom designs with bulk pricing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/products" className="transition-colors hover:text-primary">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Wedding Bags</li>
              <li>Retail Bags</li>
              <li>Food Packaging</li>
              <li>Hospital Bags</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>3rd Line, 8-3-42, BTR Colony, Mangalam, Tirupati, Andhra Pradesh 517509</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919866038338" className="transition-colors hover:text-primary">
                  +91 96667784645
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919866038338" className="transition-colors hover:text-primary">
                  +91 9866038338
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:sunpapersind@gmail.com" className="transition-colors hover:text-primary">
                sunpapersind@gmail.com
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6 space-y-2">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SUN PAPER INDUSTRIES. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Designed and Developed by{" "}
            <a 
              href="https://www.tekloomy.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Tekloomy (OPC) Private Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
