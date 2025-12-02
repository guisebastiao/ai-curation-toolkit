import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToLibrary = () => {
    const element = document.getElementById("library");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center pt-20 px-4" data-container="0">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="max-w-xl mx-auto text-3xl md:text-5xl font-bold mb-6 leading-tight">
            O Kit de Ferramentas do <br />
            <span className="gradient-text">Professor Curador</span>
          </h1>

          <motion.p className="text-xl md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Uma coleção de métodos validados para criar Unidades de Aprendizagem com Inteligência Artificial. De Teoria a Simuladores.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Button size="lg" onClick={scrollToLibrary} className="gradient-primary text-white text-base py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Explorar Prompts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
