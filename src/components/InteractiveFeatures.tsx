
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FeatureCard from './FeatureCard';

interface InteractiveFeaturesProps {
  className?: string;
}

const InteractiveFeatures: React.FC<InteractiveFeaturesProps> = ({ className }) => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'data-integration',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={activeFeature === 'data-integration' ? "text-white" : "text-funnel-green"}>
          <path d="M6 18C7.65685 18 9 16.6569 9 15C9 13.3431 7.65685 12 6 12C4.34315 12 3 13.3431 3 15C3 16.6569 4.34315 18 6 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12C16.3431 12 15 13.3431 15 15C15 16.6569 16.3431 18 18 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 15H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Integração de dados",
      description: "Obtenha seus dados onde você quiser, perfeitamente. Manutenção zero, sem erros manuais – apenas insights e implementação mais rápidos.",
      link: "#conectores",
      linkText: "Reúna seus dados",
      bgColor: activeFeature === 'data-integration' ? "bg-funnel-green" : "bg-white",
    },
    {
      id: 'advanced-measurement',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={activeFeature === 'advanced-measurement' ? "text-white" : "text-funnel-green"}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Medição avançada",
      description: "Veja o verdadeiro impacto de suas campanhas com modelagem de IA, insights profundos e recomendações precisas.",
      link: "#destinos",
      linkText: "Obtenha insights que valem a pena",
      bgColor: activeFeature === 'advanced-measurement' ? "bg-funnel-green" : "bg-white",
    },
    {
      id: 'campaign-report',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={activeFeature === 'campaign-report' ? "text-white" : "text-funnel-green"}>
          <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Relatório de campanha",
      description: "Economize horas de trabalho com relatórios automatizados. Com atualizações em tempo real e dados precisos, você está sempre pronto para compartilhar resultados.",
      link: "#",
      linkText: "Comece a automatizar relatórios",
      bgColor: activeFeature === 'campaign-report' ? "bg-funnel-green" : "bg-white",
    },
    {
      id: 'data-hub',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={activeFeature === 'data-hub' ? "text-white" : "text-funnel-green"}>
          <path d="M22 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 2L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Centro de dados Unify",
      description: "A base que torna o Unify diferente. O Data Hub armazena seus dados com segurança – em escala – e os leva para onde eles precisam estar.",
      link: "#",
      linkText: "Gerencie seus dados",
      bgColor: activeFeature === 'data-hub' ? "bg-funnel-green" : "bg-white",
    }
  ];

  const handleFeatureClick = (id: string) => {
    if (activeFeature === id) {
      setActiveFeature(null);
    } else {
      setActiveFeature(id);
    }
  };

  return (
    <section id="features" className={cn(
      "py-24 bg-gray-100",
      className
    )}>
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-funnel-green">Recursos principais</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Descubra como o Unify DataHub pode revolucionar a forma como você trabalha com dados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              linkText={feature.linkText}
              bgColor={feature.bgColor}
              isActive={activeFeature === feature.id}
              onClick={() => handleFeatureClick(feature.id)}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
