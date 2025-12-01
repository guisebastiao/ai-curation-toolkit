import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { prompts } from "@/utils/prompts";
import { motion } from "framer-motion";
import { useState } from "react";

const promptLibrary = {
  apresentation: {
    tool: "Gemini Pro",
    title: "Unidade de Aprendizagem Teórica",
    description: "Transforme materiais brutos em uma unidade de aprendizagem estruturada e completa",
    prompt: prompts.apresentation,
  },
  theory: {
    tool: "Gemini Pro",
    title: "Unidade de Aprendizagem Teórica",
    description: "Transforme materiais brutos em uma unidade de aprendizagem estruturada e completa",
    prompt: prompts.theory,
  },
  practice: {
    tool: "Gemini Pro",
    title: "Projeto de Simulador Interativo",
    description: "Crie projetos conceituais para simuladores educacionais interativos",
    prompt: prompts.practice,
  },
  quiz: {
    tool: "Gemini Pro",
    title: "Projeto de Simulador Interativo",
    description: "Crie projetos conceituais para simuladores educacionais interativos",
    prompt: prompts.quiz,
  },
  case: {
    tool: "Gemini Pro",
    title: "Estudo de Caso Acadêmico",
    description: "Transforme fatos reais em estudos de caso educacionais estruturados",
    prompt: prompts.case,
  },
};

export const PromptLibrary = () => {
  const [activeTab, setActiveTab] = useState("theory");

  return (
    <section
      id="library"
      className="py-24 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Biblioteca de Prompts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Prompts especializados e validados para cada tipo de conteúdo educacional</p>
        </motion.div>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 h-12">
            <TabsTrigger
              value="theory"
              className="text-base"
            >
              Teoria
            </TabsTrigger>
            <TabsTrigger
              value="practice"
              className="text-base"
            >
              Prática
            </TabsTrigger>
            <TabsTrigger
              value="case"
              className="text-base"
            >
              Estudo de Caso
            </TabsTrigger>
          </TabsList>
          {Object.entries(promptLibrary).map(([key, content]) => (
            <TabsContent
              key={key}
              value={key}
              className="mt-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl mx-auto"
              >
                <div className="flex-1 border rounded-lg p-4 bg-foreground/5">
                  <p>{content.prompt}</p>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
