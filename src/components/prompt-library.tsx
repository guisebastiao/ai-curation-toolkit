import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { prompts } from "@/utils/prompts";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Check, Copy } from "lucide-react";
import ReactMarkdown from "react-markdown";

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

const theory = `
  Atue como um Professor Curador de Engenharia com uma abordagem moderna, próxima e conversacional. Seu objetivo é criar o conteúdo introdutório para uma nova Unidade de Aprendizagem (UA).

  TEMA DA UA: [ ? ]

  Por favor, gere uma resposta estruturada exatamente nas duas seções abaixo:

  ---

  ## 1. Abertura Conversacional (O Texto)

  Escreva uma introdução cativante. Não inicie com definições teóricas chatas. Siga este fluxo:

  - **O Gancho (A Dor):** Comece descrevendo uma situação real de campo, um desastre evitado ou um desafio cotidiano da engenharia que se relaciona com o tema. Fale diretamente com o aluno ("Você já parou para pensar...").
  - **A Solução:** Apresente o TEMA DA UA como a ferramenta fundamental para resolver esse problema.
  - **O Mercado:** Finalize motivando o aluno, explicando por que dominar esse conceito fará dele um engenheiro mais valorizado e competente.

  ---

  ## 2. Experiência Visual (A Mídia)

  Para enriquecer essa UA, descreva uma sugestão criativa de recurso visual que deve acompanhar o texto acima. Escolha a opção que melhor se adapta ao tema:

  - **Opção A — Animação:** Escreva um breve roteiro (passo a passo) para uma animação que demonstre o conceito físico acontecendo.
  - **Opção B — Infográfico/Imagem:** Descreva detalhadamente uma imagem ou esquema técnico que sintetize o tópico, incluindo cores sugeridas e elementos de destaque.
`;

export const PromptLibrary = () => {
  const [activeTab, setActiveTab] = useState("apresentation");
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopy = async (promptKey: string) => {
    const promptText = promptLibrary[promptKey as keyof typeof promptLibrary].prompt;
    await navigator.clipboard.writeText(promptText);

    setCopiedStates((prev) => ({ ...prev, [promptKey]: true }));
    toast.success("Prompt copiado! Cole no seu chat de IA.");

    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [promptKey]: false }));
    }, 2000);
  };

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
                <Card className="border-2 p-6 space-y-4">
                  <CardHeader className="flex gap-2 items-center">
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-2xl">{content.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{content.description}</CardDescription>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{content.tool}</div>
                  </CardHeader>
                  <div className="flex-1 bg-foreground/5 rounded-lg p-4">
                    <pre className="whitespace-pre-wrap">
                      <code>{content.prompt}</code>
                    </pre>
                  </div>
                </Card>

                {/* <Button
                  onClick={() => handleCopy(key)}
                  variant="outline"
                  size="icon-sm"
                >
                  {copiedStates[key] ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copiar
                    </>
                  )}
                </Button> */}

                {/* <Card className="border-2 border-primary/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Prompt</CardTitle>
                        
                      </div>
                    </CardHeader>
                  </Card> */}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
