import { Card, CardContent } from "@/components/ui/card";
import { Book, Cpu, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const methodologyCards = [
  {
    icon: Book,
    title: "Curadoria",
    description: "Seleção criteriosa de conteúdos e recursos pedagógicos relevantes",
  },
  {
    icon: Cpu,
    title: "Geração via IA",
    description: "Transformação de materiais através de prompts especializados",
  },
  {
    icon: CheckCircle2,
    title: "Validação Pedagógica",
    description: "Revisão e ajustes para garantir qualidade educacional",
  },
];

export const MethodologySection = () => {
  return (
    <section id="methodology" className="w-full py-24 px-4" data-container="1">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text leading-16 mb-4">Metodologia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Um fluxo estruturado para criar experiências de aprendizagem transformadoras</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {methodologyCards.map((card, index) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }}>
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="py-6 px-3 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
