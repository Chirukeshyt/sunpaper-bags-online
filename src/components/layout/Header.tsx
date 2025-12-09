import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/#about" },
    { label: "FAQ", path: "/#faq" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path.includes("#")) return false;
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SunPaper Industries Logo" className="h-12 w-12 object-contain rounded-lg" />
          <span className="font-heading text-xl font-semibold text-foreground hidden sm:inline-block">
            SunPaperIndustries
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            item.path.includes("#") ? (
              <a
                key={item.path}
                href={item.path}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="whatsapp" size="sm" asChild>
            <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Get Quote
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              item.path.includes("#") ? (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button variant="whatsapp" size="sm" className="w-full" asChild>
              <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Get Quote on WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
