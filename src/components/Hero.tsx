
import React from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
  bgColor?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "Hero image",
  bgColor = "bg-funnel-green",
  className
}) => {
  return (
    <section className={cn(
      "min-h-screen flex items-center relative overflow-hidden",
      bgColor,
      className
    )}>
      <div className="container-padding max-w-7xl mx-auto py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl opacity-90">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="accent" 
                size="lg"
                href={primaryCta.href}
              >
                {primaryCta.text}
              </Button>
              
              {secondaryCta && (
                <Button 
                  variant="secondary" 
                  size="lg"
                  href={secondaryCta.href}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
          
          {image && (
            <div className="relative animate-fade-in-right">
              <img
                src={image}
                alt={imageAlt}
                className="w-full rounded-lg shadow-xl object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
