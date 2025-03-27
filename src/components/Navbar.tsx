
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="Funnel home"
          >
            <div className="h-10 w-10 rounded-full bg-funnel-green flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/plataforma" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors">
              Plataforma
            </Link>
            <Link to="/solucoes" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors">
              Soluções
            </Link>
            <Link to="/clientes" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors">
              Clientes
            </Link>
            <Link to="/recursos" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors">
              Recursos
            </Link>
            <Link to="/precos" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors">
              Preços
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/demonstracao" className="btn-primary">
              Obtenha uma demonstração
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-funnel-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <X size={32} />
            ) : (
              <Menu size={32} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-padding py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/plataforma" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors py-2">
                Plataforma
              </Link>
              <Link to="/solucoes" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors py-2">
                Soluções
              </Link>
              <Link to="/clientes" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors py-2">
                Clientes
              </Link>
              <Link to="/recursos" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors py-2">
                Recursos
              </Link>
              <Link to="/precos" className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors py-2">
                Preços
              </Link>
            </nav>
            <div className="pt-4 border-t border-gray-100">
              <Link to="/demonstracao" className="block w-full btn-primary text-center">
                Obtenha uma demonstração
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
