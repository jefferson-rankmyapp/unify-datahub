
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-funnel-green py-32">
      <div className="container-padding max-w-md mx-auto text-center">
        <div className="text-9xl font-bold text-white mb-6 animate-fade-in">404</div>
        <h1 className="text-3xl font-bold text-white mb-6 animate-fade-in animation-delay-100">
          Página não encontrada
        </h1>
        <p className="text-white/80 mb-8 animate-fade-in animation-delay-200">
          Parece que você está tentando acessar uma página que não existe ou foi movida.
        </p>
        <div className="animate-fade-in animation-delay-300">
          <Button 
            variant="secondary" 
            href="/"
            className="bg-white text-funnel-green hover:bg-white/90"
          >
            Voltar para a página inicial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
