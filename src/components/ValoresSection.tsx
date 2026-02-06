import { motion } from "framer-motion";
import { Users, Eye, MessageCircle, Heart, BookOpen, ShieldCheck } from "lucide-react";

const valores = [
  {
    icon: Users,
    title: "Responsabilidade Compartilhada",
    desc: "Segurança é responsabilidade de todos, não apenas do time de TI.",
  },
  {
    icon: Eye,
    title: "Consciência antes do Controle",
    desc: "Preferimos educar a restringir. Pessoas conscientes tomam decisões seguras.",
  },
  {
    icon: MessageCircle,
    title: "Clareza e Simplicidade",
    desc: "Comunicação clara e acessível. Segurança não precisa ser complexa.",
  },
  {
    icon: Heart,
    title: "Pessoas no Centro",
    desc: "Tecnologia serve às pessoas, não o contrário. O humano é o foco.",
  },
  {
    icon: BookOpen,
    title: "Educação Continuada",
    desc: "Aprendizado constante através de experiências práticas e feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Ética e Confiança",
    desc: "Abordagem educativa, nunca punitiva. Construímos confiança, não medo.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const ValoresSection = () => {
  return (
    <section id="valores" className="py-24 bg-navy-deep relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-6">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Nossa Essência
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-3 mb-6">
            Valores <span className="text-gradient-green">Inegociáveis</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
            "A Segurança Digital só é efetiva quando as pessoas entendem, se
            importam e agem conscientemente."
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {valores.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValoresSection;
