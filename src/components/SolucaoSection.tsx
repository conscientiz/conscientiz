import { motion } from "framer-motion";
import { Search, MessageSquareHeart, GraduationCap, LineChart, Check, X } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Diagnóstico de Comportamento",
    desc: "Antes de qualquer treinamento, entendemos como sua organização se comporta de verdade. Não assumimos — medimos. O programa começa com dados, não com suposições.",
  },
  {
    icon: MessageSquareHeart,
    title: "Comunicação que Engaja",
    desc: "Segurança precisa ser entendida por pessoas, não por sistemas. Criamos campanhas, materiais e experiências que falam a língua do seu colaborador — do operador ao C-level.",
  },
  {
    icon: GraduationCap,
    title: "Teachable Moment",
    desc: "Quando alguém erra, esse é o melhor momento para aprender. Nossa metodologia captura o erro em tempo real e o transforma em aprendizado imediato — sem punição, com impacto.",
  },
  {
    icon: LineChart,
    title: "Gestão Contínua e Métricas Reais",
    desc: "Entregamos relatórios para gestores com evolução real de comportamento, não só taxas de clique. Planejamos, executamos e ajustamos o programa mês a mês.",
  },
];

const comparison = [
  { label: "Custo de Licença Anual", gophish: "R$ 0", market: "R$ 50-200k", gophishGood: true },
  { label: "Controle de Dados", gophish: "Total (On-Premise)", market: "Nuvem do fornecedor", gophishGood: true },
  { label: "Conformidade LGPD", gophish: "Garantida", market: "Depende", gophishGood: true },
  { label: "Customização", gophish: "Sob medida por projeto", market: "Limitada ao plano", gophishGood: true },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const SolucaoSection = () => {
  return (
    <section id="solucao" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Metodologia ConscientiZ
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-3 mb-6">
            Metodologia{" "}
            <span className="text-gradient-green">ConscientiZ</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A maioria dos programas de segurança é criada por times de TI que aprenderam a comunicar. O nosso foi criado por especialistas em comunicação que dominam segurança — e que operam programas assim todos os dias.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center hover:shadow-green-glow hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <h3 className="font-display font-bold text-2xl text-center mb-8">
            Comparativo de ROI
          </h3>
          <div className="glass-card overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-border/30 bg-primary/5">
              <div className="font-semibold text-sm text-muted-foreground">Característica</div>
              <div className="font-semibold text-sm text-primary text-center">Gophish + ConscientiZ</div>
              <div className="font-semibold text-sm text-muted-foreground text-center">Soluções de Mercado</div>
            </div>
            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 gap-4 p-4 ${i < comparison.length - 1 ? "border-b border-border/20" : ""}`}
              >
                <div className="text-sm text-muted-foreground">{row.label}</div>
                <div className="text-sm text-center font-medium flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-primary">{row.gophish}</span>
                </div>
                <div className="text-sm text-center text-muted-foreground flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span>{row.market}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-green text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-green-glow"
            >
              Solicitar Proposta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolucaoSection;
