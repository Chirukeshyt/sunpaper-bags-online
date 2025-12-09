import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "SunPaperIndustries - Premium All Types of Bags for Your Brand",
  description = "Custom bags for Wedding, Retail, Food & Healthcare industries. We manufacture all types of bags — paper, fabric, and more. Fully customizable — from size to print. Premium quality at competitive prices. Pan-India delivery.",
  keywords = "paper bags, custom bags, printed bags, wedding bags, retail bags, food bags, hospital bags, kraft bags, duplex bags, custom printed bags, bulk bags, paper bag manufacturer, India, custom size bags, wholesale bags",
  image = "https://sunpaperindustries.com/logo.png",
  url = "https://sunpaperindustries.com",
  type = "website",
  noindex = false,
}: SEOProps) => {
  const fullTitle = title.includes("SunPaperIndustries") 
    ? title 
    : `${title} | SunPaperIndustries`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SunPaperIndustries" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="SunPaperIndustries" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@SunPaperIndustries" />
      <meta name="twitter:creator" content="@SunPaperIndustries" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SunPaperIndustries",
          "url": "https://sunpaperindustries.com",
          "logo": "https://sunpaperindustries.com/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9866038338",
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://wa.me/919866038338"
          ]
        })}
      </script>

      {/* Structured Data - Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "SunPaperIndustries",
          "url": "https://sunpaperindustries.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sunpaperindustries.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

