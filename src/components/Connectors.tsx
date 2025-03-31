
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Plus } from 'lucide-react';

interface ConnectorsProps {
  className?: string;
  title: string;
  description: string;
  platforms: {
    name: string;
    icon: string;
  }[];
  buttonText: string;
  buttonLink: string;
  id?: string;
}

const Connectors: React.FC<ConnectorsProps> = ({
  className,
  title,
  description,
  platforms,
  buttonText,
  buttonLink,
  id
}) => {
  return (
    <section id={id} className={cn(
      "py-24 bg-unify-blue text-white",
      className
    )}>
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">{title}</h2>
          <p className="text-lg max-w-3xl mx-auto animate-fade-in opacity-90">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square hover:bg-white/90 transition-colors cursor-pointer shadow-md"
            >
              {platform.icon ? (
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  className="w-12 h-12 object-contain mb-3"
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center mb-3 text-unify-blue">
                  <Plus className="w-8 h-8" />
                </div>
              )}
              <span className="text-sm text-center font-medium text-gray-800">{platform.name}</span>
            </div>
          ))}
          
          <div className="bg-white/80 rounded-lg p-4 flex flex-col items-center justify-center aspect-square hover:bg-white/90 transition-colors shadow-md">
            <div className="w-12 h-12 flex items-center justify-center mb-3 text-unify-blue">
              <Plus className="w-8 h-8" />
            </div>
            <span className="text-sm text-center font-medium text-gray-800">E muito mais</span>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href={buttonLink} 
            className="inline-flex items-center text-white bg-unify-pink px-6 py-3 rounded-md font-medium hover:bg-unify-pink/90 transition-colors"
          >
            {buttonText}
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connectors;
