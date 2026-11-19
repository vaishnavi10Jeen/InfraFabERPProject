import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'outline' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gradient',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs rounded-xl font-bold',
    md: 'px-5 py-2.5 text-xs sm:text-sm rounded-xl font-black',
    lg: 'px-8 py-3.5 sm:py-4 text-sm sm:text-base rounded-2xl font-black'
  };

  const variantClasses = {
    gradient: 'btn-gradient active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
    outline: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-extrabold shadow-sm active:scale-95',
    secondary: 'bg-keshav-50 hover:bg-keshav-100 text-keshav-800 border border-keshav-200 font-extrabold active:scale-95',
    ghost: 'hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold active:scale-95',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white font-extrabold shadow-md active:scale-95'
  };

  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 transition-all ${fullWidth ? 'w-full' : ''} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

export default Button;
