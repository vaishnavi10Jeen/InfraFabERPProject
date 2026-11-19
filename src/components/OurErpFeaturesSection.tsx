import React, { useState } from 'react';
import { 
  Zap, Cog, Sliders, ShieldCheck, 
  CheckSquare, FileText, Award, LayoutDashboard, 
  FileSpreadsheet, MessageSquare, Layers, 
  TrendingUp, Sparkles, CheckCircle2, RotateCw
} from 'lucide-react';
import { Button } from './ui/Button';

interface OurErpFeaturesSectionProps {
  onOpenDemoModal: () => void;
}

interface ErpFeatureItem {
  id: number;
  title: string;
  subtitle: string;
  metric: string;
  detail: string;
  category: 'all' | 'floor' | 'engineering' | 'qc';
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ERP_FEATURES: ErpFeatureItem[] = [
  {
    id: 1,
    title: 'Real-time Data',
    subtitle: 'Live Shop-Floor Telemetry',
    metric: '0.2s Sync',
    detail: 'Direct shop-floor machine telemetry and live digital weighbridge sync with zero operator delay.',
    category: 'floor',
    categoryLabel: 'Shop Floor',
    icon: Zap
  },
  {
    id: 2,
    title: 'Automation',
    subtitle: 'Automated Slitting & BOM Sync',
    metric: '14-22% Scrap Cut',
    detail: 'Automated mother-to-baby slitting width calculation and direct Tekla 3D piece-mark import.',
    category: 'floor',
    categoryLabel: 'Shop Floor',
    icon: Cog
  },
  {
    id: 3,
    title: 'Customization',
    subtitle: 'Configurable PEB Workflows',
    metric: '100% Modular',
    detail: 'Tailor fabrication stages, approval gates, and multi-store workflows to your plant layout.',
    category: 'engineering',
    categoryLabel: 'Engineering',
    icon: Sliders
  },
  {
    id: 4,
    title: 'Data Security',
    subtitle: 'ISO 27001 Grade RBAC',
    metric: 'Role-Based Access',
    detail: 'Strict role-based access control (RBAC) keeping steel margins private from floor supervisors.',
    category: 'qc',
    categoryLabel: 'QC & Compliance',
    icon: ShieldCheck
  },
  {
    id: 5,
    title: 'Task Management',
    subtitle: 'Daily Bay Fabrication DPR',
    metric: '100% Daily DPR',
    detail: 'Digital daily production records logged per bay, eliminating paper clipboards and delays.',
    category: 'floor',
    categoryLabel: 'Shop Floor',
    icon: CheckSquare
  },
  {
    id: 6,
    title: 'Document Management',
    subtitle: 'Mill Test Certs & CAD 3D',
    metric: 'Zero Lost MTCs',
    detail: 'Centralized Mill Test Certificates, Tekla 3D drawings, and client inspection dossiers.',
    category: 'engineering',
    categoryLabel: 'Engineering',
    icon: FileText
  },
  {
    id: 7,
    title: 'Audit Reports',
    subtitle: '1-Click Compliance Dossiers',
    metric: '1-Click Clearance',
    detail: 'Instant generation of TPI inspection books, welder WPQ registers, and Sa 2.5 blast dossiers.',
    category: 'qc',
    categoryLabel: 'QC & Compliance',
    icon: Award
  },
  {
    id: 8,
    title: 'Dynamic Dashboard',
    subtitle: 'Live Executive & Floor KPIs',
    metric: 'Live Plant Telemetry',
    detail: 'Real-time monitoring of tonnage throughput, welding meters, and pending trailer axles.',
    category: 'floor',
    categoryLabel: 'Shop Floor',
    icon: LayoutDashboard
  },
  {
    id: 9,
    title: 'Export Documents',
    subtitle: 'Customs & Shipping Manifests',
    metric: '100% Itemized',
    detail: 'Automated GST e-Way bills, customs manifests, and trailer axle weight distribution logs.',
    category: 'qc',
    categoryLabel: 'QC & Compliance',
    icon: FileSpreadsheet
  },
  {
    id: 10,
    title: 'Auto Mail & SMS',
    subtitle: 'Instant Gate & Dispatch Alerts',
    metric: 'Instant Alerts',
    detail: 'Automated dispatch notifications, client delivery milestones, and retention payment reminders.',
    category: 'qc',
    categoryLabel: 'QC & Compliance',
    icon: MessageSquare
  },
  {
    id: 11,
    title: 'Component Tracking',
    subtitle: 'Piece-Mark Life Cycle Flow',
    metric: 'QR Piece-Marks',
    detail: 'Weatherproof thermal QR tags tracked across 8 stages from raw coil to site erection sign-off.',
    category: 'engineering',
    categoryLabel: 'Engineering',
    icon: Layers
  },
  {
    id: 12,
    title: 'Analytics & Reporting',
    subtitle: 'Mother-Baby Scrap Yield %',
    metric: 'Yield Optimization',
    detail: 'Accurate reconciliation of coils, remnant scrap weights, and fabrication labor efficiency.',
    category: 'engineering',
    categoryLabel: 'Engineering',
    icon: TrendingUp
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Capabilities', count: 12 },
  { id: 'floor', label: 'Shop Floor', count: 5 },
  { id: 'engineering', label: 'Engineering', count: 4 },
  { id: 'qc', label: 'QC & Compliance', count: 3 }
];

export const OurErpFeaturesSection: React.FC<OurErpFeaturesSectionProps> = ({ onOpenDemoModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'floor' | 'engineering' | 'qc'>('all');
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const handleToggleFlip = (id: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFeatures = selectedCategory === 'all' 
    ? ERP_FEATURES 
    : ERP_FEATURES.filter(f => f.category === selectedCategory);

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          OUR ERP{' '}
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-keshav-800">
            Features & Capabilities
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium leading-relaxed">
          Hover or click any individual card below to trigger its 3D swipe rotation and inspect its specialized PEB execution capabilities.
        </p>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'btn-gradient text-white shadow-md scale-105'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 12 CARDS GRID WITH 3D SWIPE ROTATION ON INDIVIDUAL HOVER OR CLICK */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredFeatures.map((feat) => {
          const Icon = feat.icon;
          const isFlipped = !!flippedCards[feat.id];

          return (
            <div
              key={feat.id}
              onClick={() => handleToggleFlip(feat.id)}
              className="card-perspective h-[340px] sm:h-[360px] cursor-pointer group/card select-none"
            >
              <div
                className={`relative w-full h-full card-preserve-3d transition-transform duration-700 ease-out ${
                  isFlipped ? 'card-rotate-y-180' : 'group-hover/card:card-rotate-y-180'
                }`}
              >
                {/* FRONT FACE OF CARD */}
                <div className="absolute inset-0 w-full h-full card-backface-hidden bg-white rounded-3xl border border-slate-200/90 group-hover/card:border-keshav-500 shadow-sm group-hover/card:shadow-xl transition-all p-6 flex flex-col justify-between overflow-hidden">
                  
                  {/* Top Glowing Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-keshav-400 via-keshav-600 to-lime-500" />
                  
                  {/* Header: Category Badge + Metric Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 group-hover/card:bg-keshav-50 group-hover/card:text-keshav-800 transition-colors">
                      {feat.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-keshav-100 text-keshav-900 border border-keshav-300/80">
                      {feat.metric}
                    </span>
                  </div>

                  {/* Body: Icon + Title + Subtitle */}
                  <div className="space-y-3 flex-1 flex flex-col justify-center">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl btn-gradient text-white flex items-center justify-center shadow-md shadow-keshav-500/20 group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover/card:text-keshav-800 transition-colors leading-tight">
                        {feat.title}
                      </h3>
                      <p className="text-xs font-semibold text-keshav-700 mt-1">
                        {feat.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-2">
                      {feat.detail}
                    </p>
                  </div>

                  {/* Front Footer: Rotate prompt */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 text-keshav-700 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-keshav-600" />
                      <span>PEB Ready</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 group-hover/card:text-keshav-700 transition-colors">
                      <RotateCw className="w-3 h-3 group-hover/card:rotate-180 transition-transform duration-500" />
                      <span>Hover / Click to Flip</span>
                    </span>
                  </div>
                </div>

                {/* BACK FACE OF CARD (REVEALED ON 3D SWIPE ROTATION) */}
                <div className="absolute inset-0 w-full h-full card-backface-hidden card-rotate-y-180 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl border-2 border-keshav-500 shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Ambient Lime Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-keshav-500/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Back Header */}
                  <div className="flex items-center justify-between gap-2 relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-keshav-300 border border-keshav-400/30">
                      {feat.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-keshav-500/20 text-keshav-300 border border-keshav-400/40">
                      {feat.metric}
                    </span>
                  </div>

                  {/* Back Body: In-depth Detail */}
                  <div className="space-y-3 flex-1 flex flex-col justify-center relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg btn-gradient text-slate-950 font-black flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-black text-white leading-tight">
                        {feat.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {feat.detail}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center gap-2 text-[11px] text-keshav-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-keshav-400 shrink-0" />
                        <span>Real-time shop-floor sync</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-keshav-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-keshav-400 shrink-0" />
                        <span>Zero paperwork bottlenecks</span>
                      </div>
                    </div>
                  </div>

                  {/* Back Footer */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium relative z-10">
                    <span className="font-mono text-[10px] text-slate-400 font-bold">
                      #{String(feat.id).padStart(2, '0')} infraFab
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-keshav-400">
                      <RotateCw className="w-3 h-3" />
                      <span>Click to Flip Back</span>
                    </span>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
