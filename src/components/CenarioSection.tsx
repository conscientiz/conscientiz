import { motion } from "framer-motion";
import { Brain, AlertTriangle, BookOpen, Lightbulb, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "O Fator GenAI",
    desc: "Com a IA Generativa, a distinção entre e-mails legítimos e maliciosos desapareceu. A gramática é impecável e o contexto é hiper-personalizado.",
  },
  {
    icon: AlertTriangle,
    title: "Treinamentos Tradicionais Falham",
    desc: "Palestras anuais e slides de compliance geram conhecimento teórico que não sobrevive ao estresse do dia a dia.",
  },
  {
    icon: BookOpen,
    title: "Comportamento sob Estresse",
    desc: "O comportamento humano em rotinas de alta velocidade não é alterado por teoria passiva. O cérebro recorre aos hábitos automáticos.",
  },
  {
    icon: Lightbulb,
    title: "A Solução: Aprender Errando",
    desc: "Precisamos de 'Momentos de Aprendizado' práticos. Aprender errando em ambiente seguro gera uma resposta emocional que fixa o aprendizado.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const CenarioSection = () => {
  return (
    <section id="cenario" className="py-24 bg-navy-deep relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            O Cenário Atual
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-3 mb-6">
            A Tecnologia Evoluiu, mas o Alvo é o{" "}
            <span className="text-gradient-green">Humano</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg italic">
            "A vasta maioria das violações de dados inicia-se com um e-mail de
            phishing. A caixa de entrada é o campo de batalha decisivo."
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeInUp}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6 hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Maturity comparison */}
        <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 border-destructive/30">
            <h4 className="font-display font-bold text-lg text-destructive mb-4">
              Estado Atual
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                Programa desenhado para auditoria
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                Treinamento anual
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                Baixo impacto na redução de risco real
              </li>
            </ul>
          </div>
          <div className="glass-card p-6 border-primary/30">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-display font-bold text-lg text-primary">
                Estado Alvo
              </h4>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Segurança é parte da cultura
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Métricas focam em comportamento
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Redução mensurável de risco
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CenarioSection;
