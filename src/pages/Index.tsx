import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import ClientLogos from '@/components/ClientLogos';
import { ArrowRight, Database, FileText, BarChart3, Share, Network } from 'lucide-react';
import Connectors from '@/components/Connectors';
import Destinations from '@/components/Destinations';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import TeamTabs from '@/components/TeamTabs';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  // State for auto-scrolling client logos with smoother transition
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Set up the infinite scroll animation for client logos with much smoother transition
    const interval = setInterval(() => {
      setScrollPosition(prev => {
        // Make the transition even smoother by using an even smaller increment
        return (prev + 0.05) % 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Section with updated image */}
      <Hero
        title="Transforme dados em decisões de marketing impactantes"
        subtitle="Diga adeus às suposições. Prove a eficácia do seu marketing e conduza campanhas de alto desempenho com a inteligência de dados precisa do Unify DataHub."
        primaryCta={{ text: "Comece de graça", href: "#conectores" }}
        secondaryCta={{ text: "Obtenha uma demonstração", href: "#testimonials" }}
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
        imageAlt="Profissional de marketing satisfeito com resultados do Unify DataHub"
        bgColor="bg-unify-blue"
      />

      {/* Dashboard Preview Section with improved visualization */}
      <section className="bg-unify-pink relative py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-2xl relative">
            <img 
              src="https://assets-global.website-files.com/5fac161927bf86485ba43fd0/625af20b317b511651fc49ac_dash-1616-feature-library.png" 
              alt="Dashboard do Unify DataHub mostrando análises de marketing" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-unify-pink/20"></div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <InteractiveFeatures />

      {/* Client Logos Section with even smoother infinite scroll */}
      <section className="bg-unify-blue py-16 overflow-hidden">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Desbloqueando inteligência de marketing para centenas de clientes
            </h2>
          </div>
          
          <div className="relative h-[400px]" style={{ overflow: 'hidden' }}>
            <div 
              className="absolute w-full transition-transform duration-10000 ease-linear"
              style={{ transform: `translateY(-${scrollPosition}%)` }}
            >
              <img 
                src="/lovable-uploads/0bfe6c90-659d-4ec7-9668-5db2fe33ed6f.png" 
                alt="Logos dos clientes em scroll infinito" 
                className="w-full"
              />
              {/* Duplicate the image for seamless loop */}
              <img 
                src="/lovable-uploads/0bfe6c90-659d-4ec7-9668-5db2fe33ed6f.png" 
                alt="Logos dos clientes em scroll infinito" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connectors Section */}
      <Connectors 
        id="conectores"
        title="Conectores poderosos"
        description="Integre-se facilmente com todas as plataformas de marketing e publicidade que você utiliza no seu dia a dia."
        platforms={[
          { name: "Google Play Store", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" },
          { name: "Apple App Store", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png" },
          { name: "Google Ads", icon: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" },
          { name: "GA4", icon: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" },
          { name: "DV 360", icon: "https://www.gstatic.com/images/branding/product/2x/display_video_48dp.png" },
          { name: "AppsFlyer", icon: "https://www.appsflyer.com/wp-content/uploads/2018/10/af-logo-small.png" },
          { name: "Amplitude", icon: "https://cdn.worldvectorlogo.com/logos/amplitude-1.svg" },
          { name: "LinkedIn", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
          { name: "X", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2023.svg/800px-X_icon_2023.svg.png" },
          { name: "Instagram", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" },
          { name: "TikTok", icon: "https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpogiyf/tiktok-icon2.png" },
          { name: "Salesforce", icon: "https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg" },
          { name: "HubSpot", icon: "https://cdn2.hubspot.net/hubfs/53/HubSpot_Logos/HubSpot-logo-color.svg" },
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
          { name: "Power BI", icon: "https://powerbi.microsoft.com/pictures/application-logos/svg/powerbi.svg" },
          { name: "Looker", icon: "https://www.gstatic.com/analytics-suite/header/suite/v2/looker/logo_looker.svg" },
          { name: "Tableau", icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
          { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png" },
          { name: "Google Sheets", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png" },
          { name: "Big Query", icon: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg" },
          { name: "Parquet", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Apache_Parquet_logo.svg/1200px-Apache_Parquet_logo.svg.png" },
          { name: "CSV", icon: "https://cdn-icons-png.flaticon.com/512/6133/6133991.png" },
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
            <h2 className="text-4xl font-bold mb-4 text-unify-blue">
              Nós damos a você os movimentos que você precisa para ter sucesso
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-unify-pink mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Biblioteca de conectores</h3>
              <p className="text-gray-700">A maior seleção de conectores do setor.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-unify-pink mb-6">
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
              href="#conectores"
              className="bg-black text-white hover:bg-black/90"
            >
              Obtenha uma demonstração
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              href="#destinos"
              className="border-black text-black hover:bg-black/5"
            >
              Comece de graça
            </Button>
          </div>
        </div>
      </section>

      {/* Performance Section - Updated rating display */}
      <section className="bg-black text-white py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Desempenho de potência</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              O Unify DataHub é mais do que apenas uma ferramenta de dados de marketing. Com dados e análises juntos em uma plataforma, você obtém inteligência robusta e confiável que pode colocar em prática todos os dias.
            </p>
          </div>
          
          <div className="flex justify-center mb-16">
            <div className="text-amber-400 text-3xl">★★★★★</div>
          </div>
        </div>
      </section>
      
      {/* Performance Metrics Section with updated image */}
      <section className="bg-gray-100 py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-unify-pink rounded-full opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Performance chart showing growth" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-unify-blue">
                  Aumento de 26% <span className="text-2xl">na eficiência de marketing</span>
                </h2>
                
                <p className="text-lg">
                  Os clientes do Unify veem um aumento médio nos retornos sobre os gastos com publicidade de 26% nos primeiros dois anos de uso da plataforma ¹
                </p>
                
                <Button 
                  variant="primary" 
                  href="#conectores"
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

      {/* Booking Demo Section with updated contact info */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex space-x-2 mb-6">
                <div className="h-12 w-12 rounded-full bg-unify-blue flex items-center justify-center">
                  <span className="text-white font-bold">U</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
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
                  <div className="mr-2 text-unify-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>Discuta suas necessidades e desafios</div>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-unify-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>Explore os recursos mais relevantes do Unify DataHub</div>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-unify-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>Fale sobre como desbloquear mais valor dos seus dados</div>
                </li>
              </ul>
              
              <p className="text-gray-600 mt-4">
                Email: contato@rankmyapp.com.br
              </p>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-unify-blue focus:border-unify-blue"
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
