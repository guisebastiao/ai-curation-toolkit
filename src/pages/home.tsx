import { Detail } from "@/components/detail";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MethodologySection } from "@/components/methodology-section";
import { PromptLibrary } from "@/components/prompt-library";

export const Home = () => {
  return (
    <main className="relative min-h-screen">
      <Detail />
      <Header />
      <HeroSection />
      <MethodologySection />
      <PromptLibrary />
    </main>
  );
};
