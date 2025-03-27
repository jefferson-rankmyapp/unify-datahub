
import React from 'react';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  companyLogo?: string; 
  className?: string;
  bgColor?: string;
  textColor?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  image,
  companyLogo,
  className,
  bgColor = "bg-white",
  textColor = "text-gray-800"
}) => {
  // Get the initials of the author for the avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className={cn(
      "rounded-lg p-8 shadow-sm",
      bgColor,
      className
    )}>
      {companyLogo && (
        <div className="mb-6">
          <img 
            src={companyLogo} 
            alt={company} 
            className="h-8 object-contain"
          />
        </div>
      )}
      
      <blockquote className={cn("text-lg md:text-xl font-medium mb-6", textColor)}>
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <Avatar className="w-12 h-12 mr-4">
          {image ? (
            <AvatarImage src={image} alt={author} />
          ) : (
            <AvatarFallback className="bg-funnel-green text-white">{getInitials(author)}</AvatarFallback>
          )}
        </Avatar>
        
        <div>
          <div className={cn("font-semibold", textColor)}>{author}</div>
          <div className="text-gray-600 text-sm">{role}</div>
          <div className="text-gray-600 text-sm">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
