
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  className?: string;
  bgColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  link,
  linkText = "Saber mais",
  className,
  bgColor = "bg-white"
}) => {
  return (
    <div className={cn(
      "rounded-lg p-8 transition-all duration-300 animate-fade-in",
      bgColor,
      className
    )}>
      <div className="mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-gray-700 mb-6">
        {description}
      </p>
      
      {link && (
        <Link 
          to={link} 
          className="inline-flex items-center text-funnel-green font-medium hover:underline"
        >
          {linkText}
          <ArrowRight size={16} className="ml-2" />
        </Link>
      )}
    </div>
  );
};

export default FeatureCard;
