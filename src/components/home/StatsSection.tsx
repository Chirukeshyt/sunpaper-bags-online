import { Package, Users, MapPin, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  {
    icon: Calendar,
    value: "18+",
    label: "Years Experience",
    description: "Since 2006",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500"
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Across India",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-500"
  },
  {
    icon: Package,
    value: "10L+",
    label: "Bags Delivered",
    description: "Every Year",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500"
  },
  {
    icon: MapPin,
    value: "25+",
    label: "Cities Served",
    description: "Pan India",
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-500"
  }
];

const StatsSection = () => {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-3">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Our Growth</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Trusted by Businesses Across India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Numbers that speak for our commitment to quality and customer satisfaction
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center">
                  <div className={`relative p-3 rounded-xl bg-background/80 ${stat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 md:w-7 md:h-7" />
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>
                  </div>
                </div>

                {/* Value */}
                <motion.p 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.p>

                {/* Label */}
                <p className="font-semibold text-foreground text-sm md:text-base mb-1">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground">
                  {stat.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
