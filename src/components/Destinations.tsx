
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Plus } from 'lucide-react';

interface DestinationsProps {
  className?: string;
  title: string;
  description: string;
  destinations: {
    name: string;
    icon: string;
  }[];
  buttonText: string;
  buttonLink: string;
  id?: string; // Add the id prop
}

const Destinations: React.FC<DestinationsProps> = ({
  className,
  title,
  description,
  destinations,
  buttonText,
  buttonLink,
  id
}) => {
  return (
    <section id={id} className={cn(
      "py-24 bg-gray-100",
      className
    )}>
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-funnel-green animate-fade-in">{title}</h2>
          <p className="text-lg max-w-3xl mx-auto animate-fade-in text-gray-700">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center justify-center aspect-square hover:shadow-md transition-shadow cursor-pointer"
            >
              {destination.icon ? (
                <img 
                  src={destination.icon} 
                  alt={destination.name}
                  className="w-12 h-12 object-contain mb-3"
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center mb-3 text-funnel-green">
                  <Plus className="w-8 h-8" />
                </div>
              )}
              <span className="text-sm text-center font-medium text-gray-800">{destination.name}</span>
            </div>
          ))}
          
          <div className="bg-white/80 rounded-lg p-6 shadow-sm flex flex-col items-center justify-center aspect-square hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center mb-3 text-funnel-green">
              <Plus className="w-8 h-8" />
            </div>
            <span className="text-sm text-center font-medium text-gray-800">E muito mais</span>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href={buttonLink} 
            className="inline-flex items-center text-white bg-funnel-green px-6 py-3 rounded-md font-medium hover:bg-funnel-green/90 transition-colors"
          >
            {buttonText}
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
