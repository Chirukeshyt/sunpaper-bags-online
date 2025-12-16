import ScrollReveal from "@/components/ui/ScrollReveal";

const certificates = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    issuer: "Quality Management",
    image: "https://dummyimage.com/640x420/ffffff/e5e7eb&text=ISO+9001%3A2015",
  },
  {
    id: "fssai",
    title: "FSSAI Compliant",
    issuer: "Food Safety",
    image: "https://dummyimage.com/640x420/ffffff/e5e7eb&text=FSSAI+Compliant",
  },
  {
    id: "sustainability",
    title: "Sustainability Certified",
    issuer: "Eco Friendly",
    image: "https://dummyimage.com/640x420/ffffff/e5e7eb&text=Sustainability",
  },
  {
    id: "gmp",
    title: "GMP Ready",
    issuer: "Good Manufacturing",
    image: "https://dummyimage.com/640x420/ffffff/e5e7eb&text=GMP",
  },
  {
    id: "custom",
    title: "Custom Compliance",
    issuer: "Client Specific",
    image: "https://dummyimage.com/640x420/ffffff/e5e7eb&text=Compliance",
  },
];

const CertificatesSection = () => {
  const loop = [...certificates, ...certificates];

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

        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-4 md:p-6">
          <style>{`
            @keyframes certificates-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          <div
            className="flex gap-4 md:gap-6"
            style={{
              width: "calc(200%)",
              animation: "certificates-scroll 35s linear infinite",
            }}
          >
            {loop.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[220px] md:w-[260px] flex-shrink-0 overflow-hidden rounded-xl border border-border/70 bg-background shadow-sm"
              >
                <div className="aspect-[4/3] bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

