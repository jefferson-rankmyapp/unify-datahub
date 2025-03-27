
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-funnel-green text-white hover:bg-funnel-green/90 focus:ring-funnel-green",
      secondary: "bg-white text-funnel-green border border-funnel-green hover:bg-funnel-green/5 focus:ring-funnel-green",
      accent: "bg-funnel-red text-white hover:bg-funnel-red/90 focus:ring-funnel-red",
    };
    
    const sizes = {
      sm: "py-2 px-4 text-sm",
      md: "py-3 px-6 text-base",
      lg: "py-4 px-8 text-lg",
    };
    
    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );
    
    if (href) {
      return (
        <Link 
          to={href} 
          className={buttonClasses}
        >
          {children}
        </Link>
      );
    }
    
    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
