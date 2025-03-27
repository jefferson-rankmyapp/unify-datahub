
import { Link } from 'react-router-dom';
import { Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-funnel-green text-white py-16">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Logo and brand */}
        <div className="mb-16">
          <div className="inline-block text-8xl font-bold">FUNNEL</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Platform Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">PLATAFORMA</h6>
            <ul className="space-y-2">
              <li><Link to="/visao-geral" className="hover:underline">Visão geral</Link></li>
              <li><Link to="/centro-de-dados" className="hover:underline">Centro de Dados</Link></li>
              <li><Link to="/conectores" className="hover:underline">Conectores</Link></li>
              <li><Link to="/destinos" className="hover:underline">Destinos</Link></li>
              <li><Link to="/integracao-de-dados" className="hover:underline">Integração de dados</Link></li>
              <li><Link to="/medicao-avancada" className="hover:underline">Medição avançada</Link></li>
              <li><Link to="/relatorio-de-campanha" className="hover:underline">Relatório de campanha</Link></li>
            </ul>
          </div>
          
          {/* Solutions Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">SOLUÇÕES</h6>
            <ul className="space-y-2">
              <li><Link to="/marketing-digital" className="hover:underline">Marketing digital</Link></li>
              <li><Link to="/analistas-de-dados" className="hover:underline">Analistas de dados / BI</Link></li>
              <li><Link to="/ti-engenharia" className="hover:underline">TI / Engenharia</Link></li>
              <li><Link to="/agencias" className="hover:underline">Agências</Link></li>
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">RECURSOS</h6>
            <ul className="space-y-2">
              <li><Link to="/blogue" className="hover:underline">Blogue</Link></li>
              <li><Link to="/base-de-conhecimento" className="hover:underline">Base de conhecimento</Link></li>
              <li><Link to="/estudos-de-caso" className="hover:underline">Estudos de caso</Link></li>
              <li><Link to="/clientes" className="hover:underline">Clientes</Link></li>
              <li><Link to="/atualizacoes-de-produtos" className="hover:underline">Atualizações de produtos</Link></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">EMPRESA</h6>
            <ul className="space-y-2">
              <li><Link to="/sobre-nos" className="hover:underline">Sobre nós</Link></li>
              <li><Link to="/contate-nos" className="hover:underline">Contate-nos</Link></li>
              <li><Link to="/carreiras" className="hover:underline">Carreiras</Link></li>
              <li><Link to="/privacidade-e-seguranca" className="hover:underline">Privacidade e segurança</Link></li>
              <li><Link to="/corporativo" className="hover:underline">Corporativo</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media and Legal Links */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center md:text-left">
            <Link to="/privacidade" className="hover:underline">Aviso de privacidade e cookies</Link>
            <Link to="/vigilancia" className="hover:underline">Aviso de vigilância por vídeo</Link>
            <Link to="/termos" className="hover:underline">Termos e Condições Gerais</Link>
            <Link to="/seguranca" className="hover:underline">Visão geral da segurança da informação</Link>
            <span>&copy; Funnel.io</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
