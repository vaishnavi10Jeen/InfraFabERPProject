import React, { useState } from 'react';
import { 
  CheckCircle2, ExternalLink, ArrowRight, Layers, 
  Truck, ShieldCheck, Flame, BarChart3, 
  Cpu, Sparkles, Activity
} from 'lucide-react';
import { Button } from './ui/Button';

interface LiveDashboardPreviewProps {
  onOpenLiveModal?: () => void;
  onOpenDemoModal?: () => void;
}

type StagePhaseKey = 'all' | 'cutting' | 'welding' | 'qc' | 'dispatch';

interface StagePhaseDetail {
  id: StagePhaseKey;
  tabLabel: string;
  badge: string;
  stageNumbers: string;
  title: string;
  pieceCount: string;
  summary: string;
  bullets: string[];
  stats: { label: string; value: string }[];
}

const STAGE_PHASES: Record<StagePhaseKey, StagePhaseDetail> = {
  all: {
    id: 'all',
    tabLabel: 'Full 12 Stages',
    badge: '0–12 Production Stages',
    stageNumbers: 'Stages S1 to S12',
    title: 'Complete BOQ Piece-Mark Progression Flow',
    pieceCount: '5,594 Pcs (156.89 MT)',
    summary: 'Real-time visibility from raw plate cut lists to numbered trailer gate-out with zero missing parts.',
    bullets: [
      'Every piece-mark (e.g. C-101, R-204) tracked through 12 discrete shop-floor fabrication stages.',
      'Instant bottleneck identification across Cutting, Fit-up, SAW Welding, NDT, and Surface Painting.',
      '100% itemized trailer delivery challans synchronized with 3D Tekla erection sequencing.'
    ],
    stats: [
      { label: 'Total Project BOQ', value: '5,594 Pcs' },
      { label: 'Ready / Staged', value: '3,530+ Pcs' },
      { label: 'Live Traceability', value: '100% QR Synced' }
    ]
  },
  cutting: {
    id: 'cutting',
    tabLabel: 'Cutting & Jointing',
    badge: 'Stages S1 – S2',
    stageNumbers: 'S1 Cutting • S2 Jointing',
    title: 'CNC Plasma Profiling & Beam Jointing',
    pieceCount: '69 Pieces In-Process',
    summary: 'High-precision plate cutting and beam flange-web jointing with automated remnant scrap tracking.',
    bullets: [
      'Mother plate nesting profiles linked to Mill Test Certificates (MTC) and Heat Numbers.',
      'S1 Cutting (66 pcs active) with automated kerf and camber compensation.',
      'S2 Jointing (3 pcs) ensuring exact beam splicing alignment before built-up assembly.'
    ],
    stats: [
      { label: 'Cutting Queue', value: '66 Pcs Active' },
      { label: 'Jointing Bay', value: '3 Pcs Active' },
      { label: 'Scrap Recovery', value: '18.4% Saved' }
    ]
  },
  welding: {
    id: 'welding',
    tabLabel: 'SAW & Fit-Up',
    badge: 'Stages S3 – S5',
    stageNumbers: 'S3 SAW • S4 Fitting • S5 Welding',
    title: 'Automated Submerged Arc Welding & Fit-Up',
    pieceCount: '15 Pieces In-Process',
    summary: 'Heavy built-up column and rafter fabrication with digital Welder WPQ and WPS logging.',
    bullets: [
      'S3 SAW (6 pcs) running submerged arc welding lines for high-strength web-to-flange seams.',
      'S4 Fitting (9 pcs) assembling cleats, stiffeners, and base plates to millimetre tolerance.',
      'Welder Performance Qualification (WPQ) logged digitally for every seam with operator ID.'
    ],
    stats: [
      { label: 'SAW Welding Line', value: '6 Pcs Active' },
      { label: 'Fit-Up Assembly', value: '9 Pcs Active' },
      { label: 'Weld Procedure', value: '100% WPS Logged' }
    ]
  },
  qc: {
    id: 'qc',
    tabLabel: 'Finishing & QC',
    badge: 'Stages S6 – S10',
    stageNumbers: 'S6 Finishing • S7 QC • S8-S10 Paint',
    title: 'Ultrasonic NDT & Sa 2.5 Paint Clearance',
    pieceCount: '13 Pieces In-Process',
    summary: 'Multi-point quality assurance, ultrasonic weld testing, and dry film thickness (DFT) compliance.',
    bullets: [
      'S6 Finishing (7 pcs) edge beveling, weld cleaning, and grinding to architectural grade.',
      'S7 Fab QC (6 pcs) ultrasonic NDT weld testing and dimensional verification sign-off.',
      'S8-S10 Shot blasting to Sa 2.5 profile and multi-coat primer DFT gauge inspection (120µm).'
    ],
    stats: [
      { label: 'Finishing Station', value: '7 Pcs Active' },
      { label: 'NDT Inspection', value: '6 Pcs Passed' },
      { label: 'Surface Profile', value: 'Sa 2.5 Blasted' }
    ]
  },
  dispatch: {
    id: 'dispatch',
    tabLabel: 'Ready & Dispatch',
    badge: 'Stages S11 – S12',
    stageNumbers: 'S11 Ready • S12 Gate Pass',
    title: 'Numbered Staging & 40T Trailer Loading',
    pieceCount: '3,530+ Pieces Ready',
    summary: 'Erection sequence bundling, 3-level trailer axle balancing, and automated weighbridge gate passes.',
    bullets: [
      '3,530+ pieces cleared and staged in numbered bays matching site erection grid lines.',
      'Trailer axle balancing (16T, 25T, 40T) preventing highway overload penalties.',
      '100% itemized delivery challans matching packing lists to eliminate missing bolts or cleats.'
    ],
    stats: [
      { label: 'Ready for Dispatch', value: '3,530+ Pcs' },
      { label: 'Trailer Capacity', value: '16T / 25T / 40T' },
      { label: 'Missing Parts', value: 'Zero Incident' }
    ]
  }
};

export const LiveDashboardPreview: React.FC<LiveDashboardPreviewProps> = ({ 
  onOpenLiveModal, 
  onOpenDemoModal 
}) => {
  const [activePhase, setActivePhase] = useState<StagePhaseKey>('all');
  const activeData = STAGE_PHASES[activePhase];

  return (
    <div className="w-full text-slate-800">
      
      {/* 1. TITLE ON LEFT SIDE (Left-Aligned Section Header) */}
      <div className="text-left mb-8 sm:mb-10 max-w-3xl">
       

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Experience The Live{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-keshav-800">
            ERP Floor Dashboard
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 mt-2.5 font-medium leading-relaxed">
          Real-time visibility from raw plate cutting to weighbridge dispatch. Track every piece-mark, detect WIP bottlenecks, and eliminate site missing parts.
        </p>
      </div>

      {/* 2. 2-COLUMN LAYOUT */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* LEFT SIDE: LIVE ERP PRODUCTION & DISPATCH STAGE BREAKDOWN SCREENSHOT */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white group">
            


            {/* Main Live ERP Software Interface Screenshot (Full Natural Aspect Ratio - No Clipping) */}
            <div className="relative w-full bg-slate-950 overflow-hidden flex items-center justify-center">
              <img
                src="/erp.png"
                alt="infraFab ERP Live Floor Dashboard - Production & Dispatch Stage Breakdown"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/erp-dashboard.png';
                }}
                className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            {/* Clean Browser Footer Bar with Status Telemetry */}
            <div className="bg-slate-900 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Activity className="w-4 h-4 text-keshav-400 shrink-0" />
                <span>Production & Dispatch Stage Breakdown • 0–12 Stages Active</span>
              </div>

              {onOpenDemoModal && (
                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className="flex items-center justify-center gap-1.5 btn-gradient text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-lg transition shadow-md hover:brightness-105 shrink-0 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Plant Walkthrough</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* RIGHT SIDE: PRODUCTION & DISPATCH STAGE DETAILS & CONTROLS */}
        <div className="lg:col-span-5 space-y-5 text-left">
          
          {/* Header & Sub-Header */}
          <div className="border-b border-slate-200 pb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-black uppercase tracking-wider text-keshav-700">
                Stage Bar Intelligence
              </span>
             
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Production & Dispatch Progression
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">
              Real-time BOQ piece progression through 12 shop-floor stages shown in the chart.
            </p>
          </div>

          {/* Interactive Stage Phase Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { id: 'all' as StagePhaseKey, label: '0–12 All Stages', icon: Layers },
              { id: 'cutting' as StagePhaseKey, label: 'S1–S2 Cutting', icon: Cpu },
              { id: 'welding' as StagePhaseKey, label: 'S3–S5 Assembly', icon: Flame },
              { id: 'qc' as StagePhaseKey, label: 'S6–S10 Fab & QC', icon: ShieldCheck },
              { id: 'dispatch' as StagePhaseKey, label: 'S11–S12 Dispatch', icon: Truck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activePhase === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePhase(tab.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-keshav-50 border-keshav-500 text-slate-900 shadow-sm font-black ring-1 ring-keshav-400'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 font-bold hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'btn-gradient text-slate-950 font-black' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Details Card */}
          <div className="bg-slate-50/90 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-sm">
            
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-keshav-700 bg-keshav-100/70 px-2 py-0.5 rounded mr-2">
                  {activeData.badge}
                </span>
                <span className="font-extrabold text-slate-800 text-xs sm:text-sm">
                  {activeData.title}
                </span>
              </div>
              <span className="font-bold text-xs text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                {activeData.pieceCount}
              </span>
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {activeData.summary}
            </p>

            {/* 3 Key Operational Bullets */}
            <div className="space-y-2 text-xs sm:text-[13px] text-slate-700 font-medium">
              {activeData.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-keshav-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Dynamic Metric Stat Chips */}
            <div className="pt-2.5 border-t border-slate-200 grid grid-cols-3 gap-2">
              {activeData.stats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-2 sm:p-2.5 rounded-xl text-center shadow-xs">
                  <span className="text-slate-400 font-bold text-[9px] block uppercase truncate">
                    {stat.label}
                  </span>
                  <span className="font-black text-slate-900 text-xs sm:text-sm block truncate">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

       
        </div>

      </div>
    </div>
  );
};
