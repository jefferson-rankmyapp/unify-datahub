import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import ClientLogos from '@/components/ClientLogos';
import { ArrowRight } from 'lucide-react';
import Connectors from '@/components/Connectors';
import Destinations from '@/components/Destinations';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import TeamTabs from '@/components/TeamTabs';
import TestimonialsSection from '@/components/TestimonialsSection';

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
        subtitle="Diga adeus às suposições. Prove a eficácia do seu marketing e conduza campanhas de alto desempenho com a inteligência de dados precisa do Unify DataHub."
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
                alt="Dashboard do Unify DataHub mostrando análises de marketing" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <InteractiveFeatures />

      {/* Client Logos Section */}
      <section className="bg-funnel-green py-16">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Desbloqueando inteligência de marketing para centenas de clientes
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <img src="/lovable-uploads/1113bd9a-71a1-4030-b648-ba09b67b57d6.png" alt="Logos dos clientes" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Connectors Section */}
      <Connectors 
        id="conectores"
        title="Conectores poderosos"
        description="Integre-se facilmente com todas as plataformas de marketing e publicidade que você utiliza no seu dia a dia."
        platforms={[
          { name: "Google Play Store", icon: "https://via.placeholder.com/64x64/4285F4/FFFFFF?text=GP" },
          { name: "Apple Store", icon: "https://via.placeholder.com/64x64/000000/FFFFFF?text=AS" },
          { name: "Google Ads", icon: "https://via.placeholder.com/64x64/4285F4/FFFFFF?text=GA" },
          { name: "GA4", icon: "https://via.placeholder.com/64x64/F4B400/FFFFFF?text=GA4" },
          { name: "DV 360", icon: "https://via.placeholder.com/64x64/0F9D58/FFFFFF?text=DV" },
          { name: "AppsFlyer", icon: "https://via.placeholder.com/64x64/FF6B22/FFFFFF?text=AF" },
          { name: "Amplitude", icon: "https://via.placeholder.com/64x64/4169E1/FFFFFF?text=AM" },
          { name: "LinkedIn", icon: "https://via.placeholder.com/64x64/0077B5/FFFFFF?text=LI" },
          { name: "X", icon: "https://via.placeholder.com/64x64/1DA1F2/FFFFFF?text=X" },
          { name: "Instagram", icon: "https://via.placeholder.com/64x64/C13584/FFFFFF?text=IG" },
          { name: "TikTok", icon: "https://via.placeholder.com/64x64/000000/FFFFFF?text=TT" },
          { name: "Salesforce", icon: "https://via.placeholder.com/64x64/00A1E0/FFFFFF?text=SF" },
          { name: "HubSpot", icon: "https://via.placeholder.com/64x64/FF7A59/FFFFFF?text=HS" },
        ]}
        buttonText="Navegar pelos conectores"
        buttonLink="#conectores"
      />

      {/* Destinations Section */}
      <Destinations
        id="destinos"
        title="Destinos de dados"
        description="Envie seus dados para qualquer ferramenta de análise ou plataforma de BI que você precisar."
        destinations={[
          { name: "Power BI", icon: "https://via.placeholder.com/64x64/F2C811/000000?text=PBI" },
          { name: "Looker", icon: "https://via.placeholder.com/64x64/4285F4/FFFFFF?text=LK" },
          { name: "Tableau", icon: "https://via.placeholder.com/64x64/E97627/FFFFFF?text=TB" },
          { name: "Excel", icon: "https://via.placeholder.com/64x64/217346/FFFFFF?text=XL" },
          { name: "Google Sheets", icon: "https://via.placeholder.com/64x64/0F9D58/FFFFFF?text=GS" },
          { name: "Big Query", icon: "https://via.placeholder.com/64x64/4285F4/FFFFFF?text=BQ" },
          { name: "Parquet", icon: "https://via.placeholder.com/64x64/8797FF/FFFFFF?text=PQ" },
          { name: "CSV", icon: "https://via.placeholder.com/64x64/54585A/FFFFFF?text=CSV" },
        ]}
        buttonText="Procurar destinos"
        buttonLink="#destinos"
      />

      {/* Team Collaboration Section */}
      <TeamTabs />

      {/* Testimonials Section */}
      <TestimonialsSection />

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
              O Unify DataHub é mais do que apenas uma ferramenta de dados de marketing. Com dados e análises juntos em uma plataforma, você obtém inteligência robusta e confiável que pode colocar em prática todos os dias.
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
                  Os clientes do Unify veem um aumento médio nos retornos sobre os gastos com publicidade de 26% nos primeiros dois anos de uso da plataforma ¹
                </p>
                
                <Button 
                  variant="primary" 
                  href="/beneficios-b2c"
                  className="mt-4"
                >
                  Veja os benefícios para B2C
                </Button>
                
                <div className="text-sm text-gray-500 mt-8">
                  ¹ Dados de uma pesquisa conduzida pela Unify em julho de 2024. Dados agregados de gastos com publicidade e receita foram coletados de clientes participantes no setor de comércio eletrônico e varejo.
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
                  <span className="text-white font-bold">U</span>
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
                Interessado em descobrir se o Unify DataHub pode funcionar para você?
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
                  <div>Explore os recursos mais relevantes do Unify DataHub</div>
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
