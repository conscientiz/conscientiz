import { motion } from "framer-motion";

const ChecklistCTASection = () => {
  return (
    <section className="py-24 bg-navy-deep border-t border-border/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Material Gratuito
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-3 mb-6">
            Sua empresa está <span className="text-gradient-green">preparada?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Baixe grátis o checklist e descubra em 5 minutos quais são os maiores
            riscos humanos de segurança na sua organização.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://raw.githubusercontent.com/conscientiz/conscientiz/main/public/conscientiz-checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold text-white bg-[#7dc242] hover:bg-[#7dc242]/90 transition-colors shadow-green-glow"
              style={{ borderRadius: "8px", padding: "14px 28px" }}
            >
              📋 Baixar Checklist Gratuito
            </a>
            <a
              href="https://wa.me/5511951943047"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold text-[#7dc242] border-2 border-[#7dc242] hover:bg-[#7dc242]/10 transition-colors"
              style={{ borderRadius: "8px", padding: "12px 26px" }}
            >
              📅 Quero agendar meu Diagnóstico Gratuito
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Sem compromisso. Uma conversa de 60 minutos que pode mudar a segurança da sua organização.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChecklistCTASection;
