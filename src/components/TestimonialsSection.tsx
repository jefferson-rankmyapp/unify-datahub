
import React from 'react';
import { cn } from '@/lib/utils';
import TestimonialCard from './TestimonialCard';

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className }) => {
  return (
    <section id="testimonials" className={cn(
      "py-24 bg-funnel-blue text-white",
      className
    )}>
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O que nossos clientes dizem</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Conheça as experiências reais dos usuários da plataforma Unify DataHub
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="O Unify transformou completamente nossa forma de analisar dados. Conseguimos reduzir o tempo de processamento em 41% e melhorar nossas decisões estratégicas."
            author="Carlos Silva"
            role="Diretor de Marketing"
            company="TechBrasil"
            image="https://randomuser.me/api/portraits/men/54.jpg"
            bgColor="bg-white/10"
            textColor="text-white"
          />
          
          <TestimonialCard 
            quote="Antes do Unify, olhávamos 100% pelo espelho retrovisor – e agora olhamos pela janela da frente para ver o que está por vir."
            author="Fernanda Rocha"
            role="Analista de Dados"
            company="E-commerce Express"
            image="https://randomuser.me/api/portraits/women/68.jpg"
            bgColor="bg-white/10"
            textColor="text-white"
          />
          
          <TestimonialCard 
            quote="A facilidade de integração com diferentes plataformas e a qualidade dos insights gerados pelo Unify mudaram completamente nossa estratégia de marketing digital."
            author="Pedro Almeida"
            role="CEO"
            company="Agência Digital"
            image="https://randomuser.me/api/portraits/men/32.jpg"
            bgColor="bg-white/10"
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
