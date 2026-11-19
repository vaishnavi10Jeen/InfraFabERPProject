import React, { useState } from 'react';

interface ShreejiLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const ShreejiLogo: React.FC<ShreejiLogoProps> = ({
  variant = 'light',
  size = 'sm',
  showSubtitle = true
}) => {
  const isDark = variant === 'dark';
  const [imgError, setImgError] = useState(false);

  const imgHeights = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13',
    lg: 'h-12 sm:h-14 lg:h-[54px]',
    xl: 'h-14 sm:h-16 lg:h-18'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl'
  };

  const logoSrc ='/logo.png';

  return (
    <div className="flex items-center gap-3 group">
      {/* Official Logo Image */}
      {!imgError ? (
        <img
          src={logoSrc}
          alt="infraFab ERP Logo"
          onError={() => setImgError(true)}
          className={`${imgHeights[size]} w-auto object-contain transition-transform group-hover:scale-105 shrink-0 ${
            isDark ? 'drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]' : ''
          }`}
        />
      ) : (
        <div className="flex items-center gap-2.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#8CC12C] to-[#5E8617] p-2 flex items-center justify-center shadow-md shrink-0">
            <span className="text-white font-black text-xl">iF</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block leading-tight">
              infra<span className="text-keshav-600">Fab</span> <span className="text-xs sm:text-sm font-black px-1.5 py-0.5 rounded bg-slate-900 text-white ml-1 tracking-wider uppercase">ERP</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
