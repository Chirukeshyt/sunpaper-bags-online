import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const exampleOrders = [
  {
    id: 1,
    name: "Wedding Bags",
    size: "Medium",
    material: "Duplex",
    quantity: "1000+",
  },
  {
    id: 2,
    name: "Retail Shopping",
    size: "Large",
    material: "Kraft",
    quantity: "2000+",
  },
  {
    id: 3,
    name: "Food & Bakery",
    size: "Custom",
    material: "Kraft",
    quantity: "500+",
  },
];

const CustomOrderPopup = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when page loads
    const timer = setTimeout(() => {
      setIsDialogOpen(true);
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="w-[95vw] max-w-[420px] lg:max-w-[480px] max-h-[90vh] overflow-y-auto p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl">
        <DialogHeader className="px-0 sm:px-0">
          <DialogTitle className="text-center text-lg sm:text-xl lg:text-2xl font-semibold lg:font-bold px-1 sm:px-2">
            Order Your Customized Product
          </DialogTitle>
          <DialogDescription className="text-center text-xs sm:text-sm lg:text-base pt-2 px-1 sm:px-2 leading-relaxed lg:leading-normal">
            All our products are fully customizable to match your brand needs. 
            Choose your preferred size, material, and printing options to create 
            the perfect paper bags for your business.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 sm:mt-5 lg:mt-6 space-y-3 sm:space-y-3 lg:space-y-4">
          {/* Rounded Order Cards */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xs sm:text-sm lg:text-sm text-center mb-3">Popular Orders</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-h-[200px] lg:max-h-none overflow-y-auto lg:overflow-visible">
              {exampleOrders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-full lg:rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-2.5 sm:p-3 lg:p-3 flex items-center gap-2 sm:gap-3 hover:from-primary/15 hover:to-primary/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-9 lg:h-9 rounded-full bg-primary/20 flex items-center justify-center">
                    <Package className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs sm:text-sm lg:text-xs text-foreground truncate">
                      {order.name}
                    </p>
                    <p className="text-xs lg:text-[10px] text-muted-foreground truncate">
                      {order.size} • {order.material} • {order.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full customization list */}
          <div className="rounded-lg lg:rounded-xl bg-primary/5 p-3 sm:p-3 lg:p-4">
            <h4 className="font-semibold mb-2 lg:mb-3 text-xs sm:text-sm lg:text-sm">What you can customize:</h4>
            <ul className="space-y-1.5 lg:space-y-2 text-xs sm:text-sm lg:text-sm text-muted-foreground">
              <li className="flex items-start gap-2 lg:gap-2.5">
                <span className="text-primary mt-0.5 flex-shrink-0">•</span> 
                <span>Size & Dimensions - Choose from standard sizes or specify custom dimensions</span>
              </li>
              <li className="flex items-start gap-2 lg:gap-2.5">
                <span className="text-primary mt-0.5 flex-shrink-0">•</span> 
                <span>Paper Material - Duplex, Kraft, Catlumina (Laminated), and more</span>
              </li>
              <li className="flex items-start gap-2 lg:gap-2.5">
                <span className="text-primary mt-0.5 flex-shrink-0">•</span> 
                <span>Printing Type - Single color, Multi-color, or UV printing</span>
              </li>
              <li className="flex items-start gap-2 lg:gap-2.5">
                <span className="text-primary mt-0.5 flex-shrink-0">•</span> 
                <span>Quantity & Bulk Orders - From 500 to 10,000+ units with volume discounts</span>
              </li>
            </ul>
          </div>

          {/* Additional info for large screens */}
          <div className="hidden lg:block rounded-xl bg-muted/50 p-4 border border-border/50">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              <span className="font-semibold text-foreground">Fast Delivery:</span> Pan-India shipping available. 
              Get instant quotes via WhatsApp and quick turnaround times.
            </p>
          </div>

          <Button 
            className="w-full font-medium lg:font-semibold text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 lg:py-3.5" 
            size="lg"
            asChild
            onClick={() => setIsDialogOpen(false)}
          >
            <Link to="/order" className="flex items-center justify-center">
              <span className="text-xs sm:text-sm lg:text-base">Order Customized Product</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomOrderPopup;

