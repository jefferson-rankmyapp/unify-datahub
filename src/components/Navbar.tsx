
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#top" 
            className="flex items-center"
            aria-label="Unify home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="h-10 w-10 rounded-full bg-funnel-green flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            >
              Recursos
            </a>
            <a 
              href="#conectores" 
              className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('conectores'); }}
            >
              Conectores
            </a>
            <a 
              href="#destinos" 
              className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('destinos'); }}
            >
              Destinos
            </a>
            <a 
              href="#testimonials" 
              className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
            >
              Depoimentos
            </a>
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
              <a 
                href="#features" 
                className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors py-2"
                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              >
                Recursos
              </a>
              <a 
                href="#conectores" 
                className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors py-2"
                onClick={(e) => { e.preventDefault(); scrollToSection('conectores'); }}
              >
                Conectores
              </a>
              <a 
                href="#destinos" 
                className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors py-2"
                onClick={(e) => { e.preventDefault(); scrollToSection('destinos'); }}
              >
                Destinos
              </a>
              <a 
                href="#testimonials" 
                className="text-funnel-green hover:text-funnel-green/80 font-medium transition-colors py-2"
                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              >
                Depoimentos
              </a>
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
