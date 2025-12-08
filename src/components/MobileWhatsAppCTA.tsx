import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

const MobileWhatsAppCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-3 md:hidden">
      <Button variant="whatsapp" className="w-full" size="lg" asChild>
        <a href={getGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-5 w-5" />
          Order via WhatsApp
        </a>
      </Button>
    </div>
  );
};

export default MobileWhatsAppCTA;
