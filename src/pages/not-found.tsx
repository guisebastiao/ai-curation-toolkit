import NotFoundImg from "@/assets/not-found.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl min-h-screen flex flex-col justify-center items-center gap-6 px-8 py-3">
      <img src={NotFoundImg} alt="not-found-img" className="max-w-xs" />
      <h1 className="text-2xl font-bold">Página Não Encontrada</h1>
      <p className="text-lg text-foreground/70 text-center">Desculpe, não conseguimos encontrar o que você estava procurando. Que tal voltar para a página inicial?</p>
      <Button onClick={() => navigate("/")} className="w-full h-10 text-[15px]">
        Voltar para o início
      </Button>
    </div>
  );
};
