import { useState, useEffect, useRef } from "react";
import { Instagram, Facebook, X, ExternalLink, Users } from "lucide-react";
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
  const [isExpanded, setIsExpanded] = useState(false);
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
  }, [isExpanded, isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={bannerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="sticky top-0 z-[60] bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-primary/20 backdrop-blur-sm bg-background/95"
      >
        <div className="container">
          {/* Main Banner - Always Visible */}
          <div className="flex items-center justify-between gap-4 py-2 md:py-3">
            {/* Left: Social Icons & Followers */}
            <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
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
                        "flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all hover:scale-105 group",
                        "bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10",
                        "border border-white/20 hover:border-white/40",
                        "backdrop-blur-sm shadow-sm hover:shadow-md",
                        data.color
                      )}
                      aria-label={`Follow us on ${platform}`}
                    >
                      <div className={cn(
                        "p-1.5 rounded-md bg-white/10 group-hover:bg-white/20 transition-colors",
                        platform === "instagram" && "bg-gradient-to-br from-pink-500/20 to-purple-500/20 group-hover:from-pink-500/30 group-hover:to-purple-500/30",
                        platform === "facebook" && "bg-blue-500/20 group-hover:bg-blue-500/30"
                      )}>
                        <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5">
                        <Users className="w-3 h-3 md:w-4 md:h-4 opacity-80" />
                        <span className="text-xs md:text-sm font-bold">
                          {data.followers}
                        </span>
                      </div>
                      <span className="hidden md:inline text-xs font-medium capitalize opacity-90">
                        {platform}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Follow Us CTA - Enhanced */}
              <div className={cn(
                "hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg",
                "bg-primary/10 border border-primary/20",
                "text-xs md:text-sm font-medium text-primary",
                isExpanded && "md:hidden"
              )}>
                <span className="hidden lg:inline">✨ Follow us for updates & offers</span>
                <span className="lg:hidden">✨ Follow us</span>
              </div>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-2">
              {/* Expand/Collapse Button - Mobile */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="md:hidden p-1.5 rounded-lg hover:bg-primary/10 transition-colors border border-border/50"
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-4 h-4 text-foreground"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              {/* Dismiss Button */}
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 rounded-lg hover:bg-primary/10 transition-colors border border-border/50"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Expanded Content - Mobile */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-primary/20"
              >
                <div className="py-4 space-y-4">
                  {/* Follow Us CTA */}
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span>Follow us for updates & offers</span>
                  </div>

                  {/* Social Links with Followers - Enhanced */}
                  <div className="flex items-center justify-center gap-4">
                    {Object.entries(socialLinks).map(([platform, data]) => {
                      const Icon = data.icon;
                      return (
                        <a
                          key={platform}
                          href={data.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "flex flex-col items-center gap-3 p-4 rounded-xl transition-all group relative overflow-hidden",
                            "bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10",
                            "border-2 border-white/20 hover:border-white/40",
                            "backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105",
                            data.color
                          )}
                        >
                          {/* Background gradient effect */}
                          <div className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
                            platform === "instagram" && "bg-gradient-to-br from-pink-500/10 to-purple-500/10",
                            platform === "facebook" && "bg-blue-500/10"
                          )} />
                          
                          <div className={cn(
                            "relative p-3 rounded-xl mb-1",
                            platform === "instagram" && "bg-gradient-to-br from-pink-500/20 to-purple-500/20 group-hover:from-pink-500/30 group-hover:to-purple-500/30",
                            platform === "facebook" && "bg-blue-500/20 group-hover:bg-blue-500/30"
                          )}>
                            <Icon className="w-8 h-8" />
                          </div>
                          
                          <div className="flex items-center gap-1.5 relative z-10">
                            <Users className="w-4 h-4 opacity-80" />
                            <span className="text-base font-bold">{data.followers}</span>
                          </div>
                          
                          <span className="text-sm font-semibold capitalize relative z-10">
                            {platform}
                          </span>
                          
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
                        </a>
                      );
                    })}
                  </div>

                  {/* Recent Posts Preview - Mobile */}
             
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SocialProofBanner;

