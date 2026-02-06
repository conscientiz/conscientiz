import { motion } from "framer-motion";
import { Crosshair, ClipboardList, Megaphone, Settings, Check } from "lucide-react";

const servicos = [
  {
    icon: Crosshair,
    title: "Simulação de Phishing",
    desc: "Campanhas realistas de phishing com templates personalizados e feedback imediato através de 'Teachable Moments'.",
    items: ["Phishing personalizado", "Spear phishing", "Smishing (SMS)", "Vishing (Voz)"],
  },
  {
    icon: ClipboardList,
    title: "Pesquisa de Comportamento",
    desc: "Diagnóstico completo da maturidade em segurança da organização através de pesquisas culturais.",
    items: ["Análise de maturidade", "Mapeamento de riscos", "Benchmarking", "Relatórios executivos"],
  },
  {
    icon: Megaphone,
    title: "Comunicação",
    desc: "Campanhas de conscientização alinhadas aos objetivos e desafios específicos da sua organização.",
    items: ["Materiais educativos", "Newsletters", "Vídeos interativos", "Gamificação"],
  },
  {
    icon: Settings,
    title: "Gestão Completa",
    desc: "Operação end-to-end do programa de segurança humana, do planejamento à execução e medição.",
    items: ["Planejamento estratégico", "Execução contínua", "Métricas de evolução", "Suporte dedicado"],
  },
];

const steps = [
  { num: "01", title: "Levantamento de Maturidade", desc: "Pesquisa cultural de comportamento seguro" },
  { num: "02", title: "Relatório de Necessidades", desc: "Planejamento das ações prioritárias" },
  { num: "03", title: "Conscientização", desc: "Comunicação alinhada aos objetivos" },
  { num: "04", title: "Reforço", desc: "Treinamentos e testes direcionados" },
  { num: "05", title: "Aumento de Maturidade", desc: "Evolução mensurável em segurança" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const ServicosSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-3 mb-6">
            Soluções <span className="text-gradient-green">Completas</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Do diagnóstico à transformação cultural, oferecemos tudo que você
            precisa para criar resiliência humana.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {servicos.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {s.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process steps */}
        <motion.div {...fadeInUp}>
          <h3 className="font-display font-bold text-2xl text-center mb-10">
            Nosso Processo
          </h3>
          <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex-1 glass-card p-5 text-center relative"
              >
                <div className="font-display font-bold text-3xl text-primary/30 mb-2">
                  {step.num}
                </div>
                <h4 className="font-display font-bold text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicosSection;
