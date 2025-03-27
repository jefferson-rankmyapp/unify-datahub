
import React from 'react';
import { cn } from '@/lib/utils';

interface ClientLogosProps {
  title?: string;
  logos: {
    name: string;
    image: string;
  }[];
  className?: string;
}

const ClientLogos: React.FC<ClientLogosProps> = ({
  title,
  logos,
  className
}) => {
  return (
    <section className={cn(
      "py-16",
      className
    )}>
      <div className="container-padding max-w-7xl mx-auto">
        {title && (
          <h2 className="text-center text-2xl font-semibold mb-12">
            {title}
          </h2>
        )}
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="w-24 md:w-32 lg:w-40 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={logo.image} 
                alt={logo.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
