
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/plataforma" element={<NotFound />} />
          <Route path="/solucoes" element={<NotFound />} />
          <Route path="/clientes" element={<NotFound />} />
          <Route path="/recursos" element={<NotFound />} />
          <Route path="/precos" element={<NotFound />} />
          <Route path="/demonstracao" element={<NotFound />} />
          <Route path="/comece-gratis" element={<NotFound />} />
          <Route path="/cadastro" element={<NotFound />} />
          <Route path="/integracao-dados" element={<NotFound />} />
          <Route path="/medicao-avancada" element={<NotFound />} />
          <Route path="/relatorio-campanha" element={<NotFound />} />
          <Route path="/centro-dados" element={<NotFound />} />
          <Route path="/conectores" element={<NotFound />} />
          <Route path="/destinos" element={<NotFound />} />
          <Route path="/beneficios-b2c" element={<NotFound />} />
          <Route path="/saber-mais" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
