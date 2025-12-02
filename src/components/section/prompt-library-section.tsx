import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, Bot, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { prompts } from "@/utils/prompts";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const promptLibrary = {
  presentation: {
    tool: "Gemini Pro 3.0",
    label: "Apresentação",
    title: "Apresentação de Conteúdo",
    description: "Gere roteiros de vídeo e apresentações cativantes a partir dos seus materiais.",
    prompt: prompts.presentation,
    instructions: [
      "Clique no botão copiar abaixo para pegar o prompt.",
      "Abra o NotebookLM na nova aba que será carregada.",
      "Faça o upload dos seus PDFs ou textos de referência na ferramenta.",
      "Cole o prompt no chat e aguarde a mágica acontecer.",
    ],
  },
  theory: {
    tool: "Gemini Pro 3.0",
    label: "Teoria",
    title: "Unidade Teórica Completa",
    description: "Estruture uma unidade de aprendizagem completa com base na ABNT.",
    prompt: prompts.theory,
    instructions: [
      "Clique no botão copiar abaixo.",
      "No Gemini, cole o prompt para iniciar a 'Máquina de Estados'.",
      "O Chat pedirá o nome da UA e os arquivos.",
      "Copie e cole o conteúdo gerado para o seu documento oficial.",
    ],
  },
  practice: {
    tool: "Gemini Pro 3.0",
    label: "Prática",
    title: "Simulador Interativo",
    description: "Crie especificações funcionais para simuladores e jogos educacionais.",
    prompt: prompts.practice,
    instructions: [
      "Copie o prompt clicando no botão.",
      "Inicie um novo chat no Gemini.",
      "Informe o Conceito Chave e o Público Alvo quando solicitado.",
      "O prompt gerará uma especificação técnica para desenvolvedores.",
    ],
  },
  case: {
    tool: "Gemini Pro 3.0",
    label: "Estudo de Caso",
    title: "Estudo de Caso Real",
    description: "Transforme notícias ou relatórios em estudos de caso acadêmicos.",
    prompt: prompts.case,
    instructions: [
      "Tenha em mãos o PDF/Texto do caso real (notícia ou relatório).",
      "Clique em copiar e vá para o Gemini.",
      "Cole o prompt e anexe o seu arquivo PDF.",
      "A IA criará o material do aluno e o guia do professor.",
    ],
  },
  quiz: {
    tool: "Gemini Pro 3.0",
    label: "Quiz",
    title: "Gerador de Quiz Dinâmico",
    description: "Crie avaliações interativas e gamificadas instantaneamente.",
    prompt: prompts.quiz,
    instructions: ["Copie o prompt.", "Cole no chat da IA.", "Responda às 6 perguntas de configuração (Público, Qtd Perguntas, etc).", "Receba o quiz formatado pronto para uso."],
  },
};

export const PromptLibrary = () => {
  const [activeTab, setActiveTab] = useState("presentation");
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopyRedirect = async (promptKey: string) => {
    const item = promptLibrary[promptKey as keyof typeof promptLibrary];
    if (!item) return;

    await navigator.clipboard.writeText(item.prompt);

    setCopiedStates((prev) => ({ ...prev, [promptKey]: true }));
    toast.success("Prompt copiado!");

    window.open("https://gemini.google.com/app", "_blank");

    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [promptKey]: false }));
    }, 3000);
  };

  return (
    <section id="library" className="w-full py-24 px-4" data-container="2">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Biblioteca de Prompts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Prompts especializados. Selecione o tipo de conteúdo e siga as instruções.</p>
        </motion.div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col items-center">
          <TabsList className="inline-flex h-auto p-1 bg-zinc-900/80 backdrop-blur-sm rounded-3xl text-zinc-400 mb-12 border border-white/10">
            {Object.entries(promptLibrary).map(([key, content]) => (
              <TabsTrigger key={key} value={key} className="rounded-full px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                {content.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(promptLibrary).map(([key, content]) => (
            <TabsContent key={key} value={key} className="mt-0 w-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-4xl mx-auto">
                <Card className="border-2 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-3 p-8 flex flex-col justify-between space-y-8 border-r border-border/50">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Bot className="w-6 h-6" />
                          </div>
                          <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{content.tool}</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-3 text-foreground">{content.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{content.description}</p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Como utilizar:</h4>
                        <ul className="space-y-3">
                          {content.instructions.map((step, index) => (
                            <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">{index + 1}</span>
                              <span className="pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:col-span-2 bg-muted/10 p-8 flex flex-col items-center justify-center text-center space-y-6">
                      <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-2">
                        <FileText className="w-10 h-10 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">Pronto para começar?</h4>
                        <p className="text-xs text-muted-foreground px-4">O prompt completo será copiado para sua área de transferência.</p>
                      </div>
                      <Button
                        onClick={() => handleCopyRedirect(key)}
                        size="lg"
                        className={twMerge("w-full max-w-60 shadow-lg transition-all duration-500", copiedStates[key] ? "bg-green-600 hover:bg-green-700 text-white" : "hover:scale-105 text-white")}>
                        {copiedStates[key] ? (
                          <>
                            <Check className="mr-2 w-5 h-5" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            Copiar e Abrir IA
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
