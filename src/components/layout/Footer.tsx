import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-surface-soft">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="font-heading text-lg font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-heading text-lg font-semibold text-foreground">
                SunPaperIndustries
              </span>
            </div>
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
                <a href="/" className="transition-colors hover:text-primary">Home</a>
              </li>
              <li>
                <a href="/products" className="transition-colors hover:text-primary">Products</a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
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
                <span>Industrial Area, Sector 5, Chennai, Tamil Nadu 600001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919876543210" className="transition-colors hover:text-primary">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@sunpaperindustries.com" className="transition-colors hover:text-primary">
                  info@sunpaperindustries.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SunPaperIndustries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
