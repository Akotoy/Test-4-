import React from 'react';
import { ButtonProps } from '../types';
import { ArrowRight } from 'lucide-react';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "group relative inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full overflow-hidden active:scale-95";
  
  const variants = {
    primary: "px-10 py-5 text-lg text-white bg-gradient-to-r from-fresh-500 to-fresh-600 shadow-soft hover:shadow-soft-hover hover:-translate-y-1",
    secondary: "px-10 py-4 bg-gradient-to-r from-coral-400 to-coral-500 text-white shadow-lg hover:shadow-xl hover:scale-105",
    outline: "px-8 py-3 bg-white border border-fresh-200 text-fresh-600 hover:bg-fresh-50 shadow-sm",
  };

  const isPrimary = variant === 'primary';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {isPrimary && <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />}
      </span>
      {isPrimary && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:animate-shimmer z-0"></div>
      )}
    </button>
  );
};