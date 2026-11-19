/**
 * infraFab ERP Reusable Theme System
 * Centralized design tokens, color palette, gradients, and component presets
 */

export const THEME = {
  // Brand Color Palette
  colors: {
    primary: '#8CC12C', // Core Brand Lime Green
    primaryDark: '#6E9F17', // Gradient Dark Stop
    primaryHover: '#9AD733', // Gradient Hover Light Stop
    primaryDeep: '#486811', // Deep Forest Accent
    primaryLight: '#F5FBEA', // Soft Tint Background
    primaryBorder: '#D5EDA3', // Border Accent
    slate950: '#020617',
    slate900: '#0F172A',
    slate800: '#1E293B',
    slate700: '#334155',
    slate600: '#475569',
    slate500: '#64748B',
    slate300: '#CBD5E1',
    slate200: '#E2E8F0',
    slate100: '#F1F5F9',
    slate50: '#F8FAFC',
    white: '#FFFFFF',
  },

  // Reusable Gradients
  gradients: {
    primaryBtn: 'linear-gradient(135deg, #8CC12C 0%, #6E9F17 100%)',
    primaryBtnHover: 'linear-gradient(135deg, #9AD733 0%, #5E8912 100%)',
    heroBg: 'linear-gradient(to bottom, rgba(245, 251, 234, 0.7), #FFFFFF, #F8FAFC)',
    darkCardBg: 'linear-gradient(to bottom right, #1D2C04, #0F172A)',
    subtleGreen: 'linear-gradient(135deg, rgba(140, 193, 44, 0.15), rgba(110, 159, 23, 0.05))',
  },

  // Reusable Component Class Presets
  classes: {
    // Buttons
    btnGradient: 'btn-gradient',
    btnOutline: 'px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-bold transition shadow-sm hover:bg-slate-50',
    btnSecondary: 'px-4 py-2 rounded-xl bg-keshav-50 hover:bg-keshav-100 text-keshav-800 border border-keshav-200 font-bold transition',
    
    // Cards
    card: 'bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition',
    cardElevated: 'bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl',
    cardDark: 'bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl',

    // Badges & Pills
    badgePrimary: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-keshav-100 text-keshav-800 border border-keshav-300',
    badgeSecondary: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200',
    badgeDark: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white backdrop-blur-md',

    // Inputs
    input: 'w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-keshav-500 focus:ring-2 focus:ring-keshav-200 transition',
    select: 'w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-keshav-500 focus:ring-2 focus:ring-keshav-200 transition',
  }
};

export default THEME;
