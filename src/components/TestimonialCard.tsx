
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  image,
  className
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-8 shadow-sm",
      className
    )}>
      <blockquote className="text-lg md:text-xl font-medium mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-gray-600 text-sm">{role}</div>
          <div className="text-gray-600 text-sm">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
