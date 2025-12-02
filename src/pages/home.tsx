import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MethodologySection } from "@/components/methodology-section";
import { PromptLibrary } from "@/components/prompt-library";
import { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <MethodologySection />
      <PromptLibrary />
    </Fragment>
  );
};
