import ScrollReveal from "@/components/ui/ScrollReveal";

const certificates = [
  {
    id: "zed-bronze",
    title: "ZED BRONZE",
    issuer: "MSME Sustainable Certification",
    image: "/WhatsApp Image 2025-12-09 at 15.19.14.jpeg",
  },
  {
    id: "iec",
    title: "IEC Certificate",
    issuer: "Importer-Exporter Code",
    image: "/WhatsApp Image 2025-12-09 at 15.31.20.jpeg",
  },
  {
    id: "udyam",
    title: "UDYAM Registration",
    issuer: "MSME Registration",
    image: "/image.png",
  },
];

const CertificatesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <ScrollReveal className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium">Certifications</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Certified Quality & Safety
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Recognized standards that ensure our bags meet rigorous quality, safety, and sustainability benchmarks.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-border/70 bg-background shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="w-full bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

