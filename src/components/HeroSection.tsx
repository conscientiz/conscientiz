import { motion } from "framer-motion";
import { Shield, ChevronRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "86%", label: "Redução de Phishing", color: "text-green-brand" },
  { value: "100%", label: "Conformidade LGPD", color: "text-green-light" },
  { value: "0", label: "Custo de Licença", color: "text-foreground" },
  { value: "On-Premise", label: "Soberania de Dados", color: "text-green-brand" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
        >
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Segurança Digital Consciente</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-4xl"
        >
          Transforme suas{" "}
          <span className="text-gradient-green">pessoas</span>
          <br />
          na sua principal defesa
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          Da conscientização passiva à engenharia de comportamento. Proteja sua
          organização com simulações reais de phishing e uma metodologia que
          realmente muda hábitos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-green text-accent-foreground font-semibold text-lg hover:opacity-90 transition-all shadow-green-glow"
          >
            <Shield className="w-5 h-5" />
            Agendar Diagnóstico
            <ChevronRight className="w-5 h-5" />
          </a>
          <a
            href="#solucao"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary/40 text-foreground font-semibold text-lg hover:border-primary/70 transition-all"
          >
            <Shield className="w-5 h-5" />
            Conhecer Soluções
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card px-4 py-5 text-center"
            >
              <div className={`font-display font-bold text-2xl md:text-3xl ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <a href="#cenario">
            <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
