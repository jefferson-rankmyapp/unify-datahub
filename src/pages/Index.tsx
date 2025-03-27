
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import ClientLogos from '@/components/ClientLogos';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Load first hero image
  const heroImage = "/lovable-uploads/ea649eec-c777-4ad0-8176-3cc5b42fa2e6.png";

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Transforme dados em decisões de marketing impactantes"
        subtitle="Diga adeus às suposições. Prove a eficácia do seu marketing e conduza campanhas de alto desempenho com a inteligência de dados precisa do Funnel."
        primaryCta={{ text: "Comece de graça", href: "/cadastro" }}
        secondaryCta={{ text: "Obtenha uma demonstração", href: "/demonstracao" }}
        image={heroImage}
        imageAlt="Mulher com roupas estilizadas representando transformação de dados em marketing"
      />

      {/* Dashboard Preview Section */}
      <section className="bg-funnel-red relative py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-2">
              <nav className="flex flex-row lg:flex-col gap-4">
                <a href="#" className="p-3 rounded-full bg-funnel-red/30 text-white hover:bg-funnel-red/50 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-funnel-red/10 text-white hover:bg-funnel-red/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-funnel-red/10 text-white hover:bg-funnel-red/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-funnel-red/10 text-white hover:bg-funnel-red/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21L8.5 18.5L12 21L15.5 18.5L19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-funnel-red/10 text-white hover:bg-funnel-red/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 3H15L16.5 7.5L12 9.5L7.5 7.5L9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </nav>
            </div>
            <div className="lg:col-span-10 overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="/lovable-uploads/dc8074ef-2f7f-40fa-b366-208172acb19f.png" 
                alt="Dashboard do Funnel mostrando análises de marketing" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-funnel-green text-white py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <FeatureCard
              icon={
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Integração de dados"
              description="Envie todos os seus dados de marketing para seu depósito."
              link="/integracao-dados"
              linkText="Saber mais"
              bgColor="bg-funnel-green"
              className="border border-white/20"
            />
            
            {/* Feature 2 */}
            <FeatureCard
              icon={
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Medição avançada"
              description="Maximize o crescimento com medição unificada."
              link="/medicao-avancada"
              linkText="Saber mais"
              bgColor="bg-funnel-green"
              className="border border-white/20"
            />
            
            {/* Feature 3 */}
            <FeatureCard
              icon={
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Relatório de campanha"
              description="Crie e compartilhe relatórios de marketing poderosos."
              link="/relatorio-campanha"
              linkText="Saber mais"
              bgColor="bg-funnel-green"
              className="border border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="bg-funnel-green py-16">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Desbloqueando inteligência de marketing para mais de 2.500 clientes
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <img src="/lovable-uploads/1113bd9a-71a1-4030-b648-ba09b67b57d6.png" alt="Logos dos clientes" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-funnel-green text-white py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h5 className="text-sm uppercase tracking-wider mb-3 animate-fade-in opacity-80">INTEGRAÇÕES PODEROSAS</h5>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Unifique dados sem limites</h2>
            <p className="text-lg max-w-3xl mx-auto animate-fade-in opacity-90">
              Com integrações robustas da maior biblioteca de conectores e destinos de dados do setor, você pode reunir todos os seus dados em um só lugar, sem nenhuma limitação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <Button 
              variant="secondary" 
              className="bg-white text-funnel-green hover:bg-white/90"
              href="/conectores"
            >
              Navegar pelos conectores
            </Button>
            <Button 
              variant="secondary" 
              className="bg-white text-funnel-green hover:bg-white/90"
              href="/destinos"
            >
              Procurar destinos
            </Button>
          </div>
          
          <div className="mt-16 bg-funnel-green/30 p-4 rounded-xl overflow-x-auto">
            <div className="flex space-x-6 min-w-max py-4">
              <img src="/lovable-uploads/78fd1264-e7aa-43ff-9b47-39b52a1e860d.png" alt="Social and advertising platforms integrations" className="h-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="bg-gray-100 py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-funnel-green">
              Trabalhar com o Funnel abre canais de comunicação entre equipes. Marketing, TI e finanças podem colaborar intuitivamente com dados para entender o impacto do seu negócio juntos.
            </h2>
          </div>
          
          <div className="relative">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 mb-8 overflow-x-auto">
              <button className="py-4 px-6 font-medium text-funnel-green border-b-2 border-funnel-green">
                Profissionais de marketing
              </button>
              <button className="py-4 px-6 font-medium text-gray-500 hover:text-funnel-green transition-colors">
                Equipes de dados e TI
              </button>
              <button className="py-4 px-6 font-medium text-gray-500 hover:text-funnel-green transition-colors">
                Agências
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-funnel-green">•</div>
                  <div>Conte com conectores de dados sempre ativos e totalmente mantidos</div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-funnel-green">•</div>
                  <div>Forneça dados confiáveis e normalizados para sua organização</div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-funnel-green">•</div>
                  <div>Envie dados para mais de 20 ferramentas, incluindo data warehouses</div>
                </li>
              </ul>
            </div>
            
            {/* Testimonial */}
            <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="mb-4">
                <img src="https://via.placeholder.com/150x60" alt="Sephora" className="h-8" />
              </div>
              
              <div className="text-5xl font-bold text-funnel-green mb-2">41%</div>
              <div className="text-gray-500 mb-8">saved on data processing costs</div>
              
              <blockquote className="text-gray-700 mb-8">
                "With data consolidated in Funnel, we can output clean data tables with just the dimensions and metrics we need, instead of having to consolidate hundreds of tables in BigQuery."
              </blockquote>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img src="https://via.placeholder.com/48x48" alt="Hamis Badarou" className="w-12 h-12 rounded-full" />
                </div>
                <div>
                  <div className="font-semibold">Hamis Badarou</div>
                  <div className="text-gray-500">Chief Analytics Officer</div>
                  <div className="text-gray-500">Hanalytics, partner of Sephora</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Movement Section */}
      <section className="py-24 bg-gray-100">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-funnel-green">
              Nós damos a você os movimentos que você precisa para ter sucesso
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-funnel-red mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Biblioteca de conectores</h3>
              <p className="text-gray-700">A maior seleção de conectores do setor.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-funnel-red mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Suporte excepcional</h3>
              <p className="text-gray-700">Atendimento ao cliente rápido, ágil e prático.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              href="/demonstracao"
              className="bg-black text-white hover:bg-black/90"
            >
              Obtenha uma demonstração
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              href="/comece-gratis"
              className="border-black text-black hover:bg-black/5"
            >
              Comece de graça
            </Button>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="bg-black text-white py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Desempenho de potência</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              O Funnel é mais do que apenas uma ferramenta de dados de marketing. Com dados e análises juntos em uma plataforma, você obtém inteligência robusta e confiável que pode colocar em prática todos os dias.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-16">
            <div className="flex items-center">
              <div className="text-amber-400">★★★★½</div>
              <img src="https://via.placeholder.com/100x30" alt="G2 rating" className="h-6 ml-2" />
            </div>
            <div className="flex items-center">
              <div className="text-amber-400">★★★★½</div>
              <img src="https://via.placeholder.com/100x30" alt="Capterra rating" className="h-6 ml-2" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Feature cards will go here as needed */}
          </div>
        </div>
      </section>
      
      {/* Feature Sections */}
      <section className="py-16 bg-funnel-pink">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="p-8">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-funnel-green">
                  <path d="M6 18C7.65685 18 9 16.6569 9 15C9 13.3431 7.65685 12 6 12C4.34315 12 3 13.3431 3 15C3 16.6569 4.34315 18 6 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12C16.3431 12 15 13.3431 15 15C15 16.6569 16.3431 18 18 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 15H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 15L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Integração de dados</h3>
              <p className="text-gray-700 mb-4">
                Obtenha seus dados onde você quiser, perfeitamente. Manutenção zero, sem erros manuais – apenas insights e implementação mais rápidos.
              </p>
              
              <a 
                href="/integracao-dados" 
                className="inline-flex items-center text-funnel-green font-medium hover:underline"
              >
                Reúna seus dados <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-funnel-red">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="p-8 text-white">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Medição avançada</h3>
              <p className="mb-4 opacity-90">
                Veja o verdadeiro impacto de suas campanhas com modelagem de IA, insights profundos e recomendações precisas.
              </p>
              
              <a 
                href="/medicao-avancada" 
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Obtenha insights que valem a pena <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-funnel-blue">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="p-8 text-white">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Relatório de campanha</h3>
              <p className="mb-4 opacity-90">
                Economize horas de trabalho com relatórios automatizados. Com atualizações em tempo real e dados precisos, você está sempre pronto para compartilhar resultados.
              </p>
              
              <a 
                href="/relatorio-campanha" 
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Comece a automatizar relatórios <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-funnel-gray">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="p-8">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-funnel-green">
                  <path d="M22 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 2L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Centro de dados de funil</h3>
              <p className="text-gray-700 mb-4">
                A base que torna o Funnel diferente. O Data Hub armazena seus dados com segurança – em escala – e os leva para onde eles precisam estar.
              </p>
              
              <a 
                href="/centro-dados" 
                className="inline-flex items-center text-funnel-green font-medium hover:underline"
              >
                Gerencie seus dados <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-black text-white py-16">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Transforme dados em inteligência</h2>
              <p className="text-lg mb-6 opacity-80">
                Desbloqueie insights avançados para um crescimento perene.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary" 
                  href="/plataforma"
                  className="bg-white text-black hover:bg-white/90"
                >
                  Descubra a plataforma
                </Button>
                <Button 
                  variant="primary" 
                  href="/demonstracao"
                  className="bg-black border border-white text-white hover:bg-white/10"
                >
                  Obtenha uma demonstração
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/76ab8a41-c5f7-46a4-8b09-9f92ab8168db.png" 
                  alt="Digital Reach case study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/b3477c1d-7be9-44e5-9de9-ecd3a0c79abd.png" 
                  alt="Sparro case study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/4f78fb1a-1512-4ecf-b3c2-59923ed8949a.png" 
                  alt="Broadhead case study" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Note Section */}
      <section className="bg-funnel-pink py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/lovable-uploads/396724b3-eb28-429f-b1ea-863382101fc1.png" 
                alt="Marketing guide" 
                className="w-full max-w-md mx-auto shadow-xl rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Marketing é torcida</h2>
              <p className="text-lg mb-8">
                Quando algo está fora de sincronia, isso fica evidente. Saiba como o Funnel Measurement pode ajudar a alinhar sua estratégia e obter o máximo de seus gastos.
              </p>
              <Button 
                variant="primary" 
                href="/saber-mais"
                className="bg-black text-white hover:bg-black/90"
              >
                Saber mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-black text-white py-24">
        <div className="container-padding max-w-4xl mx-auto">
          <blockquote className="text-3xl md:text-4xl font-bold mb-8 text-center">
            "Antes do Funnel, olhávamos 100% pelo espelho retrovisor – e agora olhamos pela janela da frente para ver o que está por vir"
          </blockquote>
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="/lovable-uploads/73c1dba3-b542-43ad-9447-e1da66ce0f52.png" 
              alt="Nick Cudahy" 
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <div className="font-semibold">Nick Cudahy,</div>
            <div className="text-gray-400">Diretor de Desempenho e Crescimento de Mídia do Grupo</div>
            <div className="text-xl font-bold mt-2">Digicel</div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="bg-gray-100 py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-funnel-red rounded-full opacity-70"></div>
              <img 
                src="/lovable-uploads/2a961a0e-dfd7-4d0c-a70a-a740ba98ec03.png" 
                alt="Performance chart" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-funnel-green">
                  Aumento de 26% <span className="text-2xl">na eficiência de marketing</span>
                </h2>
                
                <p className="text-lg">
                  Os clientes do Funnel veem um aumento médio nos retornos sobre os gastos com publicidade de 26% nos primeiros dois anos de uso do Funnel ¹
                </p>
                
                <Button 
                  variant="primary" 
                  href="/beneficios-b2c"
                  className="mt-4"
                >
                  Veja os benefícios para B2C
                </Button>
                
                <div className="text-sm text-gray-500 mt-8">
                  ¹ Dados de uma pesquisa conduzida pela Funnel em julho de 2024. Dados agregados de gastos com publicidade e receita foram coletados de 350 clientes participantes no setor de comércio eletrônico e varejo. A eficiência de marketing foi calculada como a receita online relatada dividida pelo gasto agregado com publicidade.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Demo Section */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex space-x-2 mb-6">
                <div className="h-12 w-12 rounded-full bg-funnel-green flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/48x48" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/48x48" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">
                Interessado em descobrir se o Funnel pode funcionar para você?
              </h2>
              
              <p className="text-lg mb-4">
                Agende uma ligação rápida e sem compromisso.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="mr-2 text-funnel-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>Discuta suas necessidades e desafios</div>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-funnel-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>Explore os recursos mais relevantes do Funnel</div>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-funnel-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>Fale sobre como desbloquear mais valor dos seus dados</div>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <img 
                  src="/lovable-uploads/36786d39-790c-4377-ae20-eb1166084deb.png" 
                  alt="Award badges" 
                  className="h-24 w-auto"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Agende sua demonstração gratuita</h3>
              <p className="mb-6">
                Compartilhe seu e-mail e selecione uma data e hora convenientes para sua demonstração.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail de trabalho*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-funnel-green focus:border-funnel-green"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <Button 
                  variant="primary" 
                  className="w-full"
                  type="submit"
                >
                  Obtenha uma demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
