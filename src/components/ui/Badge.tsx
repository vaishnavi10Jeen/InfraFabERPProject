import React from 'react';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'alert' | 'dark';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  dot = false,
  children,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 rounded-md font-bold',
    md: 'text-xs px-3.5 py-1.5 rounded-full font-black'
  };

  const variantClasses = {
    primary: 'bg-keshav-100 text-keshav-800 border border-keshav-300 shadow-sm',
    secondary: 'bg-slate-100 text-slate-700 border border-slate-200',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    alert: 'bg-amber-50 text-amber-800 border border-amber-200',
    dark: 'bg-slate-900 text-white border border-slate-700'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-keshav-500 animate-pulse"></span>}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
