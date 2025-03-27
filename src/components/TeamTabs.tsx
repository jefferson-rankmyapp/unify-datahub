
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TeamTabsProps {
  className?: string;
}

const TeamTabs: React.FC<TeamTabsProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<'marketing' | 'data' | 'agency'>('marketing');

  const tabContent = {
    marketing: {
      items: [
        "Conte com conectores de dados sempre ativos e totalmente mantidos",
        "Forneça dados confiáveis e normalizados para sua organização",
        "Envie dados para mais de 20 ferramentas, incluindo data warehouses"
      ],
      testimonial: {
        metric: "41%",
        metricDesc: "economia em custos de processamento de dados",
        quote: "Com os dados consolidados no Unify, podemos gerar tabelas de dados limpas apenas com as dimensões e métricas necessárias, em vez de ter que consolidar centenas de tabelas.",
        author: "Ana Costa",
        role: "Diretora de Marketing",
        company: "E-commerce Brasil"
      }
    },
    data: {
      items: [
        "Acesso simplificado a dados de múltiplas fontes em um único local",
        "Transformações e normalizações automáticas para consistência de dados",
        "Integração perfeita com ferramentas de BI e visualização de dados"
      ],
      testimonial: {
        metric: "67%",
        metricDesc: "redução no tempo de preparação de dados",
        quote: "O Unify eliminou a necessidade de scripts complexos para integração de dados, permitindo que nossa equipe foque em análises de alto valor.",
        author: "Roberto Mendes",
        role: "Líder de Engenharia de Dados",
        company: "TechSolutions"
      }
    },
    agency: {
      items: [
        "Gerencie dados de múltiplos clientes em uma única plataforma",
        "Crie relatórios personalizados e dashboards de forma ágil",
        "Ofereça insights valiosos com base em dados confiáveis e atualizados"
      ],
      testimonial: {
        metric: "36%",
        metricDesc: "aumento na retenção de clientes",
        quote: "Com o Unify, conseguimos mostrar resultados tangíveis para nossos clientes, o que melhorou significativamente nossa taxa de retenção.",
        author: "Júlia Santos",
        role: "Diretora de Estratégia Digital",
        company: "Agência Performance"
      }
    }
  };

  return (
    <section className={cn(
      "bg-gray-100 py-24",
      className
    )}>
      <div className="container-padding max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-funnel-green">
            Trabalhar com o Unify abre canais de comunicação entre equipes. Marketing, TI e finanças podem colaborar intuitivamente com dados para entender o impacto do seu negócio juntos.
          </h2>
        </div>
        
        <div className="relative">
          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-8 overflow-x-auto">
            <button 
              className={`py-4 px-6 font-medium transition-colors ${
                activeTab === 'marketing' 
                  ? 'text-funnel-green border-b-2 border-funnel-green' 
                  : 'text-gray-500 hover:text-funnel-green'
              }`}
              onClick={() => setActiveTab('marketing')}
            >
              Profissionais de marketing
            </button>
            <button 
              className={`py-4 px-6 font-medium transition-colors ${
                activeTab === 'data' 
                  ? 'text-funnel-green border-b-2 border-funnel-green' 
                  : 'text-gray-500 hover:text-funnel-green'
              }`}
              onClick={() => setActiveTab('data')}
            >
              Equipes de dados e TI
            </button>
            <button 
              className={`py-4 px-6 font-medium transition-colors ${
                activeTab === 'agency' 
                  ? 'text-funnel-green border-b-2 border-funnel-green' 
                  : 'text-gray-500 hover:text-funnel-green'
              }`}
              onClick={() => setActiveTab('agency')}
            >
              Agências
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <ul className="space-y-4 mb-8">
              {tabContent[activeTab].items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3 text-funnel-green">•</div>
                  <div>{item}</div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Testimonial */}
          <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <div className="text-5xl font-bold text-funnel-green mb-2">{tabContent[activeTab].testimonial.metric}</div>
            <div className="text-gray-500 mb-8">{tabContent[activeTab].testimonial.metricDesc}</div>
            
            <blockquote className="text-gray-700 mb-8">
              "{tabContent[activeTab].testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="mr-4">
                <img src="/lovable-uploads/73c1dba3-b542-43ad-9447-e1da66ce0f52.png" alt={tabContent[activeTab].testimonial.author} className="w-12 h-12 rounded-full" />
              </div>
              <div>
                <div className="font-semibold">{tabContent[activeTab].testimonial.author}</div>
                <div className="text-gray-500">{tabContent[activeTab].testimonial.role}</div>
                <div className="text-gray-500">{tabContent[activeTab].testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTabs;
