
import React from 'react';
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
  textColor?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  link,
  linkText = "Saber mais",
  className,
  bgColor = "bg-white",
  textColor = "text-gray-700",
  isActive = false,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "rounded-lg p-8 transition-all duration-300 animate-fade-in cursor-pointer",
        bgColor,
        isActive ? "shadow-lg transform -translate-y-1" : "hover:shadow-md hover:-translate-y-1",
        className
      )}
      onClick={onClick}
    >
      <div className="mb-6">
        {icon}
      </div>
      
      <h3 className={cn("text-xl font-bold mb-3", isActive ? "text-white" : "text-funnel-green")}>{title}</h3>
      
      <p className={cn("mb-6", isActive ? "text-white/90" : textColor)}>
        {description}
      </p>
      
      {link && (
        <a 
          href={link} 
          className={cn(
            "inline-flex items-center font-medium hover:underline",
            isActive ? "text-white" : "text-funnel-green"
          )}
        >
          {linkText}
          <ArrowRight size={16} className="ml-2" />
        </a>
      )}
    </div>
  );
};

export default FeatureCard;
