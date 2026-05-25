import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContatoFinalSection = () => {
  return (
    <section className="py-20 section-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Pronto para proteger sua organização?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Fale com a gente e descubra qual solução faz mais sentido para o seu momento.
          </p>
          <Button asChild size="lg" className="h-14 px-8 text-base shadow-green-glow">
            <a
              href="https://wa.me/551152418998"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Falar pelo WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContatoFinalSection;
