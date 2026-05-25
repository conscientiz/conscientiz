import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const ChecklistCTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Checklist a caminho!",
      description: `Enviaremos o material para ${email} em instantes.`,
    });
    setEmail("");
  };

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

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail corporativo"
              className="flex-1 h-12 bg-background/50 border-border/40"
            />
            <Button type="submit" size="lg" className="h-12 shadow-green-glow">
              Quero o Checklist Gratuito
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Sem spam. Apenas conteúdo relevante sobre segurança humana.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChecklistCTASection;
