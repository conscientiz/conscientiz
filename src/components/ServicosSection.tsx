import { motion } from "framer-motion";
import { Crosshair, ClipboardList, Megaphone, Settings, Check, GraduationCap, Shield } from "lucide-react";

const servicos = [
  {
    icon: Crosshair,
    title: "Simulação de Phishing",
    desc: "Teste a resiliência do seu time com campanhas sob medida — do disparo mensal ao plano anual — e transforme cada clique em aprendizado com feedback imediato via 'Teachable Moments'.",
    items: ["Phishing mensal, trimestral ou anual", "Spear phishing direcionado", "Templates personalizados", "Relatórios de evolução"],
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
    items: ["Planejamento estratégico", "Execução contínua", "Métricas de evolução", "Suporte"],
  },
  {
    icon: GraduationCap,
    title: "Treinamentos para Colaboradores",
    desc: "90% dos ataques começam com erro humano. Programas de conscientização e compliance que blindam sua empresa de dentro para fora, atendendo ISO 27001, NIST e LGPD.",
    items: ["Firewall Humano: Conscientização", "Phishing e Engenharia Social", "Segurança no Home Office", "Senhas e MFA"],
  },
  {
    icon: Shield,
    title: "Treinamentos de Compliance",
    desc: "Programas especializados para conformidade regulatória e públicos específicos, da LGPD na prática à defesa executiva contra fraudes.",
    items: ["LGPD e Proteção de Dados", "Classificação e Mesa Limpa", "Defesa Executiva (CEO/BEC)", "Resposta a Incidentes"],
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
    <section id="servicos" className="py-24 section-light relative">
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
              className="glass-card p-6 hover:border-primary/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
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
          <h3 className="font-display font-bold text-2xl text-center mb-14">
            Nosso Processo
          </h3>
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-primary/30" />
            
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  {...fadeInUp}
                  transition={{ delay: i * 0.15 }}
                  className="flex-1 flex flex-col items-center text-center relative"
                >
                  {/* Circle dot */}
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm mb-4 relative z-10 shadow-green-glow">
                    {step.num}
                  </div>
                  <h4 className="font-display font-bold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground max-w-[160px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicosSection;
