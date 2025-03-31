
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
      primary: "bg-unify-blue text-white hover:bg-unify-blue/90 focus:ring-unify-blue",
      secondary: "bg-white text-unify-blue border border-unify-blue hover:bg-unify-blue/5 focus:ring-unify-blue",
      accent: "bg-unify-pink text-white hover:bg-unify-pink/90 focus:ring-unify-pink",
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
