import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const NAV_ITEMS = [
  { label: "Início", id: 0, to: "hero" },
  { label: "Metodologia", id: 1, to: "methodology" },
  { label: "Biblioteca de Prompts", id: 2, to: "library" },
];

export const Header = () => {
  const [active, setActive] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("[data-container]");
    const options = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) {
        const index = Array.from(sections).indexOf(visible.target);
        setActive(index);
      }
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 b bg-background/50 backdrop-blur-md border-b">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <div className="size-8 gradient-primary rounded-md flex items-center justify-center p-1.5">
            <img src="./favicon.svg" />
          </div>
          <span className="font-bold text-lg text-white">AI Curation Toolkit</span>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          {NAV_ITEMS.map(({ label, id, to }) => (
            <Button key={id} variant="ghost" className={twMerge(active === id && "bg-accent text-accent-foreground border border-border")} onClick={() => scrollToSection(to)}>
              <span>{label}</span>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};
