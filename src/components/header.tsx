import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 b bg-background/80 backdrop-blur-md border-b">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 gradient-primary rounded-md flex items-center justify-center p-1.5">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg gradient-text">AI Toolkit</span>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" onClick={() => scrollToSection("hero")}>
            <span>Início</span>
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("methodology")}>
            <span>Metodologia</span>
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("library")}>
            <span>Biblioteca de Prompts</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};
