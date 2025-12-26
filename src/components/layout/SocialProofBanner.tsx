import { useState, useEffect, useRef } from "react";
import { Instagram, Facebook, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Update these with your actual social media URLs and follower counts
const socialLinks = {
  instagram: {
    url: "https://www.instagram.com/sunpaperindustries?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // Replace with actual Instagram URL
    followers: "900+", // Replace with actual follower count
    icon: Instagram,
    color: "text-pink-600 hover:text-pink-700 dark:text-pink-400"
  },
  facebook: {
    url: "https://facebook.com/your_page", // Replace with actual Facebook URL
    followers: "1.8K", // Replace with actual follower count
    icon: Facebook,
    color: "text-blue-600 hover:text-blue-700 dark:text-blue-400"
  }
};

// Recent posts preview - Update with actual post images/links


const SocialProofBanner = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Update CSS variable for banner height
  useEffect(() => {
    if (bannerRef.current && !isDismissed) {
      const updateHeight = () => {
        const height = bannerRef.current?.offsetHeight || 0;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      };
      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    } else {
      document.documentElement.style.setProperty('--banner-height', '0px');
    }
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={bannerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="sticky top-0 z-[60] bg-background/95 backdrop-blur-sm border-b border-border/50"
      >
        <div className="container">
          {/* Main Banner - Always Visible */}
          <div className="flex items-center justify-between gap-3 py-1.5">
            {/* Left: Social Icons */}
            <div className="flex items-center gap-2 md:gap-3">
              {Object.entries(socialLinks).map(([platform, data]) => {
                const Icon = data.icon;
                return (
                  <a
                    key={platform}
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-1.5 px-2 py-1 rounded transition-colors hover:opacity-80",
                      data.color
                    )}
                    aria-label={`Follow us on ${platform}`}
                  >
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="hidden sm:inline text-xs font-medium">
                      {data.followers}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Right: Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 rounded hover:bg-muted transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SocialProofBanner;

