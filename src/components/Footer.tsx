
import { Link } from 'react-router-dom';
import { Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-unify-blue text-white py-16">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Logo and brand */}
        <div className="mb-16">
          <div className="inline-block text-8xl font-bold">UNIFY</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Essential Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">RECURSOS</h6>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:underline">Nossos recursos</a></li>
              <li><a href="#conectores" className="hover:underline">Conectores</a></li>
              <li><a href="#destinos" className="hover:underline">Destinos</a></li>
              <li><a href="#testimonials" className="hover:underline">Depoimentos</a></li>
            </ul>
          </div>
          
          {/* Contact Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">CONTATO</h6>
            <ul className="space-y-2">
              <li><Link to="/demonstracao" className="hover:underline">Agende uma demonstração</Link></li>
              <li><a href="mailto:contato@rankmyapp.com.br" className="hover:underline">contato@rankmyapp.com.br</a></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">LEGAL</h6>
            <ul className="space-y-2">
              <li><Link to="/privacidade" className="hover:underline">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="hover:underline">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media and Copyright */}
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
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Unify DataHub. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
