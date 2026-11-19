import React from 'react';
import { 
  ClipboardCheck, Database, Sliders, 
  ShieldCheck, CheckCircle2, ArrowUpRight, 
  Sparkles, Layers
} from 'lucide-react';

interface RoadmapStep {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    number: '01',
    title: 'Define Plan & Team',
    subtitle: 'Scope & Project Team',
    desc: 'Audit plant bays, define user roles, set designation masters & milestone gates.',
    icon: ClipboardCheck,
    color: 'text-keshav-700',
    bgColor: 'bg-keshav-500',
    borderColor: 'border-keshav-200'
  },
  {
    number: '02',
    title: 'Data & Tekla Sync',
    subtitle: 'Data Migration & Quality',
    desc: 'Migrate raw steel coils, machinery assets, and direct Tekla 3D piece-mark BOM import.',
    icon: Database,
    color: 'text-sky-600',
    bgColor: 'bg-sky-500',
    borderColor: 'border-sky-200'
  },
  {
    number: '03',
    title: 'PEB Customization',
    subtitle: 'Configurable Workflows',
    desc: 'Tailor slitting yield logic, bay routing, WPS/PQR gates & store approval rules.',
    icon: Sliders,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500',
    borderColor: 'border-emerald-200'
  },
  {
    number: '04',
    title: 'Testing & QC Trials',
    subtitle: 'Effective Shop Testing',
    desc: 'Simulate digital weighbridge, ultrasonic NDT logs, and mobile bay DPR sign-offs.',
    icon: ShieldCheck,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-500',
    borderColor: 'border-indigo-200'
  },
  {
    number: '05',
    title: 'Go-Live & Rollout',
    subtitle: 'Certified Implementation',
    desc: 'Shift-level operator cutover, live plant telemetry & erection dispatch handover.',
    icon: CheckCircle2,
    color: 'text-keshav-800',
    bgColor: 'btn-gradient',
    borderColor: 'border-keshav-300'
  }
];

export const ErpImplementationRoadmap: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 lg:p-7 shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-keshav-100/50 rounded-full blur-3xl pointer-events-none -z-0"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-keshav-500 animate-pulse"></span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              Best Practices for ERP Implementation
            </h3>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Streamlined 5-step roadmap engineered for steel fabrication & PEB manufacturing.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 self-start sm:self-auto text-[11px] font-black uppercase tracking-wider text-keshav-800 bg-keshav-100 border border-keshav-300 px-3 py-1 rounded-full shrink-0 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-keshav-600" />
          <span>Reduced to 5 Core Steps</span>
        </span>
      </div>

      {/* DESKTOP WINDING ROADMAP SVG (S-CURVE WINDING PIPELINE) */}
      <div className="hidden md:block relative my-3 z-10">
        <svg viewBox="0 0 760 310" className="w-full h-auto drop-shadow-sm select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="40%" stopColor="#cbd5e1" />
              <stop offset="70%" stopColor="#D5EDA3" />
              <stop offset="100%" stopColor="#8CC12C" />
            </linearGradient>

            <linearGradient id="heroNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8CC12C" />
              <stop offset="100%" stopColor="#6E9F17" />
            </linearGradient>

            <filter id="shadowFilter" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* S-Shaped Winding Pipeline Path */}
          <path
            d="M 60 230 C 140 230, 150 270, 210 270 C 270 270, 290 190, 360 190 C 430 190, 440 100, 510 100 C 570 100, 590 150, 660 150 L 710 80"
            stroke="url(#roadGradient)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dashed Center Guide Line */}
          <path
            d="M 60 230 C 140 230, 150 270, 210 270 C 270 270, 290 190, 360 190 C 430 190, 440 100, 510 100 C 570 100, 590 150, 660 150 L 710 80"
            stroke="#ffffff"
            strokeWidth="3"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />

          {/* End Arrow */}
          <polygon points="705,70 725,82 712,98" fill="#8CC12C" />

          {/* NODE 01 (x=70, y=230) */}
          <g transform="translate(70, 230)" filter="url(#shadowFilter)">
            <circle r="34" fill="#ffffff" stroke="#8CC12C" strokeWidth="4" />
            <circle r="26" fill="#8CC12C" />
            <text x="0" y="-3" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">01</text>
            <text x="0" y="11" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PLAN</text>
          </g>

          {/* NODE 02 (x=210, y=270) */}
          <g transform="translate(210, 270)" filter="url(#shadowFilter)">
            <circle r="32" fill="#ffffff" stroke="#0284c7" strokeWidth="4" />
            <circle r="24" fill="#0284c7" />
            <text x="0" y="-3" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">02</text>
            <text x="0" y="11" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">DATA</text>
          </g>

          {/* NODE 03 (x=360, y=190) */}
          <g transform="translate(360, 190)" filter="url(#shadowFilter)">
            <circle r="32" fill="#ffffff" stroke="#10b981" strokeWidth="4" />
            <circle r="24" fill="#10b981" />
            <text x="0" y="-3" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">03</text>
            <text x="0" y="11" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">CUSTOM</text>
          </g>

          {/* NODE 04 (x=510, y=100) */}
          <g transform="translate(510, 100)" filter="url(#shadowFilter)">
            <circle r="32" fill="#ffffff" stroke="#6366f1" strokeWidth="4" />
            <circle r="24" fill="#6366f1" />
            <text x="0" y="-3" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">04</text>
            <text x="0" y="11" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TEST</text>
          </g>

          {/* NODE 05 - HERO CENTERED (x=660, y=150) */}
          <g transform="translate(660, 150)" filter="url(#shadowFilter)">
            <circle r="44" fill="#ffffff" stroke="#8CC12C" strokeWidth="5" />
            <circle r="36" fill="url(#heroNodeGrad)" />
            <circle r="40" fill="none" stroke="#D5EDA3" strokeWidth="2" strokeDasharray="4 4" />
            <text x="0" y="-6" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900" fontFamily="sans-serif">05</text>
            <text x="0" y="10" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">GO-LIVE</text>
            <text x="0" y="21" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">ROLLOUT</text>
          </g>
        </svg>

        {/* Floating Captions below/above Nodes for High Clarity */}
        <div className="grid grid-cols-5 gap-2 pt-1 text-center">
          {ROADMAP_STEPS.map((step) => (
            <div key={step.number} className="space-y-0.5">
              <span className="font-mono text-[10px] font-black text-slate-400 block">
                STEP {step.number}
              </span>
              <h5 className="text-[11px] font-extrabold text-slate-900 leading-tight">
                {step.title}
              </h5>
              <p className="text-[10px] text-slate-500 line-clamp-2 leading-tight">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE RESPONSIVE ROADMAP (STACKED VERTICAL PIPELINE FOR SMALL SCREENS) */}
      <div className="block md:hidden space-y-3 my-3">
        {ROADMAP_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isHero = step.number === '05';

          return (
            <div 
              key={step.number}
              className={`p-3 rounded-2xl border transition-all flex items-start gap-3 relative ${
                isHero
                  ? 'bg-gradient-to-r from-keshav-50/70 to-white border-keshav-400 shadow-sm'
                  : 'bg-slate-50/80 border-slate-200'
              }`}
            >
              {/* Connector line for mobile */}
              {idx < ROADMAP_STEPS.length - 1 && (
                <div className="absolute left-[27px] top-[40px] bottom-[-16px] w-0.5 bg-slate-300 -z-0" />
              )}

              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-black text-xs text-white relative z-10 shadow-xs ${
                isHero ? 'btn-gradient ring-2 ring-keshav-200' : step.bgColor
              }`}>
                {step.number}
              </div>

              <div className="space-y-0.5 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-slate-900">{step.title}</h4>
                  <span className="text-[10px] font-mono text-keshav-700 font-bold">{step.subtitle}</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Footer Note */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5 font-semibold text-slate-700">
          <Layers className="w-3.5 h-3.5 text-keshav-600" />
          <span>Reduced from 7 to 5 Core Best Practices</span>
        </span>
        <span className="font-mono text-keshav-700 font-bold">100% PEB Verified</span>
      </div>

    </div>
  );
};
