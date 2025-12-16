import { Award } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";

const certificates = [
  {
    id: "zed-bronze",
    title: "ZED BRONZE",
    issuer: "MSME Sustainable Certification",
    description: "MSME Sustainable (ZED) Certification Scheme - Zero Defect Zero Effect. Awarded by Ministry of Micro, Small & Medium Enterprises, Government of India. Certificate No. 28092024_345154, valid for three years from September 28, 2024.",
    image: "/WhatsApp Image 2025-12-09 at 15.19.14.jpeg",
  },
  {
    id: "iec",
    title: "IEC Certificate",
    issuer: "Importer-Exporter Code",
    description: "Importer-Exporter Code (IEC) Certificate issued by Ministry of Commerce and Industry, Government of India. IEC Number: BDIPK6567N, issued on March 2, 2020. Enables international trade operations.",
    image: "/WhatsApp Image 2025-12-09 at 15.31.20.jpeg",
  },
  {
    id: "udyam",
    title: "UDYAM Registration",
    issuer: "MSME Registration",
    description: "UDYAM Registration Certificate from Ministry of Micro, Small & Medium Enterprises, Government of India. Registration Number: UDYAM-AP-23-0005561, registered on January 10, 2023. Classified as Micro Enterprise in Manufacturing.",
    image: "/image.png",
  },
];

const CertificationCard = ({ certificate, index }: { certificate: typeof certificates[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/50"
    >
      <div className="aspect-[3/4] bg-muted overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
            {certificate.issuer}
          </span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {certificate.title}
        </h3>
       
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <Layout>
      <SEO
        title="Our Certifications - Quality & Compliance"
        description="Explore our certifications and compliance standards including ISO 9001:2015, FSSAI, Sustainability, and GMP. We maintain the highest quality and safety standards in our manufacturing processes."
        keywords="ISO 9001, FSSAI compliant, sustainability certified, GMP, quality certifications, paper bag certifications, manufacturing standards, compliance certificates"
        url="https://sunpaperindustries.com/certifications"
      />
      <section className="bg-background py-12 md:py-16">
        <div className="container">
          {/* Page Header */}
          <ScrollReveal className="mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">Certifications</span>
              </div>
              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl mb-4">
                Certified Quality & Safety
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognized standards that ensure our bags meet rigorous quality, safety, and sustainability benchmarks. 
                We are committed to maintaining the highest standards in manufacturing and compliance.
              </p>
            </div>
          </ScrollReveal>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certificates.map((certificate, index) => (
              <CertificationCard 
                key={certificate.id} 
                certificate={certificate} 
                index={index}
              />
            ))}
          </div>

          {/* Additional Information Section */}
          <ScrollReveal className="mt-16 md:mt-20">
            <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Committed to Excellence
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our certifications reflect our dedication to quality, safety, and environmental responsibility. 
                We continuously invest in maintaining and improving our standards to ensure that every product 
                we deliver meets or exceeds industry requirements. Trust in our certified processes for your 
                packaging needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;

