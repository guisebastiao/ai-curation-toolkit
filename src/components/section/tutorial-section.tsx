import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Presentation, BookOpen, Code2, Flag, Brain, Footprints } from "lucide-react";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  tutorial: string[];
}

const tutorialSteps: TutorialStep[] = [
  {
    id: "first-steps",
    title: "Primeiros Passos",
    description: "Aqui você poderá dar os primeiros passos para usar arsenal de criação de conteúdo acadêmico - AI Curation Toolkit.",
    icon: <Footprints className="size-5" />,
    tutorial: [
      "Primeiramente você deve selecionar um modelo mais recente para usar a IA.",
      "Caso não tenha uma conta crie-a e autentique nela.",
      "É importante você estar autenticado(a) para possuir um histórico de interação com a IA",
    ],
  },
  {
    id: "apresentation",
    title: "Gerar Material de Apresentação",
    description: "Gera roteiros, vídeos e apresentações envolventes a partir dos seus materiais, com narrativa clara e estruturada.",
    icon: <Presentation className="size-5" />,
    tutorial: [
      "Clique no botão 'Copiar e Abrir IA'",
      "Você será redirecionado para o Gemini com o prompt na sua area de transferência.",
      "Agora você faz um CTRL + V e o prompt será colado no chat.",
      "Após isso inicie o chat com ENTER.",
      "E siga as instruções que a IA mandar.",
      "A IA gerará um prompt para usar no NotebookLM.",
      "Copie o prompt final, abra o NotebookLM e crie um novo notebook.",
      'Suba suas fontes, e use a ferramenta à direita "Resumo em Vídeo".',
      "Clique no ícone de lápis da ferramenta e cole o prompt copiado.",
    ],
  },
  {
    id: "theory",
    title: "Gerar Teoria",
    description: "Converte conteúdos complexos em explicações didáticas, usando analogias e exemplos que facilitam o aprendizado.",
    icon: <BookOpen className="size-5" />,
    tutorial: [
      "Clique no botão 'Copiar e Abrir IA'",
      "Você será redirecionado para o Gemini com o prompt na sua area de transferência.",
      "Agora você faz um CTRL + V e o prompt será colado no chat.",
      "Após isso inicie o chat com ENTER.",
      "E siga as instruções que a IA mandar",
    ],
  },
  {
    id: "practice",
    title: "Gerar Prática",
    description: "Cria simulações baseadas no conteúdo, com aplicação prática.",
    icon: <Code2 className="size-5" />,
    tutorial: [
      "Clique no botão 'Copiar e Abrir IA'",
      "Você será redirecionado para o Gemini com o prompt na sua area de transferência.",
      "Agora você faz um CTRL + V e o prompt será colado no chat.",
      "Após isso, inicie o chat com ENTER.",
      "E siga as instruções que a IA mandar",
      "Ao final da interação você receberá um prompt para a geração do simulador",
      "Basta copiar e colar esse prompt em um novo chat para gerar o simulador",
    ],
  },
  {
    id: "case",
    title: "Estudo de Caso",
    description: "Gera casos de estudo completos e realistas, organizando cenário, contexto e problema central para incentivar análise crítica e aplicação prática do conhecimento.",
    icon: <Flag className="size-5" />,
    tutorial: [
      "Clique no botão 'Copiar e Abrir IA'",
      "Você será redirecionado para o Gemini com o prompt na sua area de transferência.",
      "Agora você faz um CTRL + V e o prompt será colado no chat.",
      "Após isso inicie o chat com ENTER.",
      "E siga as instruções que a IA mandar",
    ],
  },
  {
    id: "quiz",
    title: "Quiz",
    description: "Transforma qualquer conteúdo em quizzes personalizados, com perguntas variadas e desafios progressivos alinhados aos objetivos de aprendizagem.",
    icon: <Brain className="size-5" />,
    tutorial: [
      "Clique no botão 'Copiar e Abrir IA'",
      "Você será redirecionado para o Gemini com o prompt na sua area de transferência.",
      "Agora você faz um CTRL + V e o prompt será colado no chat.",
      "Após isso inicie o chat com ENTER.",
      "E siga as instruções que a IA mandar",
      "O conteúdo gerado será um prompt para a criação de um quiz",
      "Copie esse prompt e cole em uma nova conversa (importante!)",
    ],
  },
];

export const TutorialSection = () => {
  return (
    <section id="tutorial" className="w-full py-24 px-4" data-container={3}>
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text leading-16 mb-4">Tutorial</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Siga o passo a passo para criar suas unidades de aprendizagem com IA</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Accordion type="single" defaultValue={tutorialSteps[0].id} collapsible className="w-full space-y-4">
            {tutorialSteps.map((step, index) => (
              <AccordionItem key={step.id} value={step.id} className="w-full border border-border/80 rounded-lg px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/50 transition-colors">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold text-sm">{index + 1}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">{step.icon}</span>
                      <span className="text-left font-medium text-foreground">{step.title}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-2 pl-14">
                  <p className="text-foreground/80 leading-relaxed text-base mb-6">{step.description}</p>
                  <ul className="list-decimal pl-7 space-y-1.5">
                    {step.tutorial.map((txt, index) => (
                      <li key={index} className="text-foreground/75 indent-2">
                        {txt}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
