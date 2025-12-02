import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/section/hero-section";
import { MethodologySection } from "@/components/section/methodology-section";
import { PromptLibrary } from "@/components/section/prompt-library-section";
import { TutorialSection } from "@/components/section/tutorial-section";
import { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <MethodologySection />
      <PromptLibrary />
      <TutorialSection />
      <Footer />
    </Fragment>
  );
};
