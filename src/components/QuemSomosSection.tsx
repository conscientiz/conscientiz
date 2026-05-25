import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const QuemSomosSection = () => {
  return (
    <section id="quem-somos" className="py-24 section-light relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Quem Somos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-3 mb-6">
            Nascemos de dentro do{" "}
            <span className="text-gradient-green">problema</span>
          </h2>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            A ConscientiZ não foi criada em uma sala de reunião. Foi construída por
            profissionais que, por anos, operaram programas de security awareness
            dentro de grandes organizações — e viram de perto o que funciona e o
            que é só teatro de compliance.
          </p>
          <p>
            Somos um time com experiência real em comunicação e conscientização em
            segurança da informação. Não chegamos ao tema pela tecnologia. Chegamos
            pelas pessoas — pela dificuldade de engajar um colaborador ocupado, de
            transformar um treinamento chato em algo que realmente muda comportamento.
          </p>
          <p>
            Essa experiência prática é o que nos diferencia. Sabemos o que um gestor
            de RH precisa ouvir. Sabemos o que um CISO precisa mostrar para o board.
            E sabemos, acima de tudo, que segurança só funciona quando as pessoas
            entendem por que ela importa.
          </p>
        </motion.div>

        <motion.p
          {...fadeInUp}
          className="text-center mt-12 max-w-3xl mx-auto font-display font-bold text-2xl md:text-3xl text-gradient-green"
        >
          A ConscientiZ existe para fazer essa ponte.
        </motion.p>
      </div>
    </section>
  );
};

export default QuemSomosSection;
