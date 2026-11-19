import React, { useState, useEffect } from 'react';
import { 
  Disc, Layers, QrCode, Cpu, ShieldCheck, 
  PackageCheck, Truck, Building2
} from 'lucide-react';

interface LifecycleStage {
  step: string;
  id: number;
  title: string;
  line1: string;
  line2: string;
  tag: string;
  desc: string;
  metric: string;
  erpRoute: string;
  color: string;
  bgLight: string;
  icon: React.ComponentType<{ className?: string }>;
}

const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    step: '01',
    id: 1,
    title: 'Raw Coil Inward',
    line1: 'Raw Coil',
    line2: 'Inward',
    tag: 'Stage 01 • Inward Gate',
    desc: 'Log Goods Receipt Note (GRN), Mill Test Certificate (MTC), Heat No., exact steel grade (IS 2062), thickness, and weighbridge gross weight.',
    metric: '100% Inward Accuracy',
    erpRoute: '/inventory/raw-coil-grn',
    color: '#10B981', // Vibrant Green
    bgLight: '#ECFDF5',
    icon: Disc
  },
  {
    step: '02',
    id: 2,
    title: 'Slitting & Scrap Yield',
    line1: 'Slitting &',
    line2: 'Scrap Yield',
    tag: 'Stage 02 • Coil Processing',
    desc: 'Mathematical mother-to-baby coil planning. Calculates custom slit widths, tracks camber tolerances, and reconciles edge-trim scrap.',
    metric: '14-22% Scrap Loss Cut',
    erpRoute: '/coil/slitting-yield',
    color: '#06B6D4', // Cyan Blue
    bgLight: '#ECFEFF',
    icon: Layers
  },
  {
    step: '03',
    id: 3,
    title: 'Tekla 3D & Fitting',
    line1: 'Tekla 3D &',
    line2: 'CAD Fitting',
    tag: 'Stage 03 • Shop Floor',
    desc: 'Direct Tekla & CAD 3D drawing piece-mark assignment. Automated generation and thermal printing of durable, weatherproof QR code labels.',
    metric: 'Direct Tekla 3D Import',
    erpRoute: '/engineering/piece-marks',
    color: '#F97316', // Orange
    bgLight: '#FFF7ED',
    icon: QrCode
  },
  {
    step: '04',
    id: 4,
    title: 'Welding & NDT QC',
    line1: 'Welding &',
    line2: 'NDT Clearance',
    tag: 'Stage 04 • Fabrication Bay',
    desc: 'Submerged arc (SAW) & MIG welding logs with real-time welder performance qualification (WPQ) and digital ultrasonic NDT test clearance.',
    metric: 'Zero Rework Delay',
    erpRoute: '/qc/ndt-welding-clearance',
    color: '#BE185D', // Magenta / Rose
    bgLight: '#FDF2F8',
    icon: Cpu
  },
  {
    step: '05',
    id: 5,
    title: 'Blasting & Painting',
    line1: 'Blasting &',
    line2: 'Paint DFT',
    tag: 'Stage 05 • Surface Treatment',
    desc: 'Sa 2.5 shot blast surface profile verification and multi-point wet/dry paint DFT gauge logs to comply with ISO & client specifications.',
    metric: '100% DFT Dossier Verified',
    erpRoute: '/surface/dft-blasting',
    color: '#14B8A6', // Teal / Aqua
    bgLight: '#F0FDFA',
    icon: ShieldCheck
  },
  {
    step: '06',
    id: 6,
    title: 'Bundling & Staging',
    line1: 'Bundling &',
    line2: 'Hardware Staging',
    tag: 'Stage 06 • Assembly Staging',
    desc: 'Pre-erection staging of columns, rafters, purlins, sag rods, anchor bolts, and cleats into numbered bundles matching site erection drawings.',
    metric: 'Zero Site Missing Parts',
    erpRoute: '/staging/bundle-packing',
    color: '#8B5CF6', // Purple
    bgLight: '#F5F3FF',
    icon: PackageCheck
  },
  {
    step: '07',
    id: 7,
    title: 'Trailer Logistics',
    line1: 'Trailer Axle',
    line2: 'Dispatch',
    tag: 'Stage 07 • Dispatch Yard',
    desc: '3-level trailer balancing (16T, 25T, 40T) preventing highway axle overload fines, weighbridge gross/tare sync, and GST e-Way bills.',
    metric: '100% Itemized Challans',
    erpRoute: '/dispatch/trailer-axles',
    color: '#E11D48', // Crimson Red
    bgLight: '#FFF1F2',
    icon: Truck
  },
  {
    step: '08',
    id: 8,
    title: 'Site Erection Sign-Off',
    line1: 'Site Erection',
    line2: 'Sign-Off',
    tag: 'Stage 08 • Erection Site',
    desc: 'GPS delivery tracking, crane unloading confirmation, and instant digital client milestone sign-off for accelerated retention billing.',
    metric: '0-Day Billing Lags',
    erpRoute: '/site/erection-signoff',
    color: '#EAB308', // Warm Gold
    bgLight: '#FEFCE8',
    icon: Building2
  }
];

interface LifecycleCircularDiagramProps {
  onOpenDemoModal?: () => void;
}

export const LifecycleCircularDiagram: React.FC<LifecycleCircularDiagramProps> = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-cycle through the 8 stages every 4.2 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStageId((prev) => (prev >= LIFECYCLE_STAGES.length ? 1 : prev + 1));
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeStage = LIFECYCLE_STAGES.find((s) => s.id === activeStageId) || LIFECYCLE_STAGES[0];
  const ActiveIcon = activeStage.icon;

  // Geometry configuration for the circular diagram (Coordinate space: 640 x 540, center: 320, 270)
  const cx = 320;
  const cy = 270;
  const rOrbit = 125;
  const rBadge = 165;
  const totalStages = LIFECYCLE_STAGES.length;

  // Calculate arc paths for the segmented colored orbit ring
  const orbitArcs = LIFECYCLE_STAGES.map((st, idx) => {
    const angleCenter = idx * (360 / totalStages) - 90;
    const angleStart = (angleCenter - 22.5) * (Math.PI / 180);
    const angleEnd = (angleCenter + 22.5) * (Math.PI / 180);

    const x1 = cx + rOrbit * Math.cos(angleStart);
    const y1 = cy + rOrbit * Math.sin(angleStart);
    const x2 = cx + rOrbit * Math.cos(angleEnd);
    const y2 = cy + rOrbit * Math.sin(angleEnd);

    const d = `M ${x1} ${y1} A ${rOrbit} ${rOrbit} 0 0 1 ${x2} ${y2}`;
    return { ...st, d, angleCenter };
  });

  return (
    <div 
      className="w-full bg-white border-y border-slate-200 relative select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* DESKTOP GREEN BACKGROUND WAVY DESIGN (MATCHING REFERENCE IMAGE EXACTLY) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <svg 
          viewBox="0 0 1440 600" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="mainGreenWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E440A" />
              <stop offset="30%" stopColor="#446411" />
              <stop offset="65%" stopColor="#5E8617" />
              <stop offset="100%" stopColor="#7DAE22" />
            </linearGradient>
            <linearGradient id="darkGreenWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#142103" />
              <stop offset="100%" stopColor="#263806" />
            </linearGradient>
            <filter id="waveShadow" x="-5%" y="-5%" width="115%" height="115%">
              <feDropShadow dx="8" dy="4" stdDeviation="16" floodColor="#000000" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* Bottom dark under-wave layer for visual depth */}
          <path 
            d="M 0,0 
               C 280,30 460,90 560,190 
               C 670,270 670,360 560,430 
               C 460,490 500,550 630,600 
               L 0,600 
               L 0,0 Z" 
            fill="url(#darkGreenWave)" 
          />

          {/* Main prominent organic fluid green wave */}
          <path 
            d="M 0,0 
               C 260,20 440,80 540,180 
               C 650,260 650,350 540,420 
               C 440,480 480,540 600,600 
               L 0,600 
               L 0,0 Z" 
            fill="url(#mainGreenWave)" 
            filter="url(#waveShadow)" 
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* MAIN BODY: 2-COLUMN SPLIT (LEFT GREEN WAVE & RIGHT WHEEL DIAGRAM) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[520px]">
          
          {/* LEFT COLUMN: CLEAN WHITE HEADLINE INSIDE GREEN WAVE (LOGO REMOVED & PERFECTLY ALIGNED) */}
          <div className="lg:col-span-5 flex flex-col justify-center py-4 lg:py-8 pl-2 sm:pl-4 lg:pl-6 xl:pl-8 relative z-10">
            
            {/* Mobile Gradient Card Fallback (< lg) */}
            <div className="lg:hidden bg-gradient-to-br from-[#2E440A] via-[#446411] to-[#7DAE22] p-6 sm:p-8 rounded-3xl text-white shadow-lg text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.25] text-white">
                A Comprehensive Guide<br />
                To The 8 Stages of<br />
                Steel Fabrication<br />
                Life Cycle
              </h2>
            </div>

            {/* Desktop Center: ONLY Clean White Headline Inside Green Wave (No clutter, Vertically Centered) */}
            <div className="hidden lg:block max-w-[420px]">
              <h2 className="text-3xl lg:text-[34px] xl:text-[40px] font-black tracking-tight leading-[1.22] text-white drop-shadow-md">
                A Comprehensive Guide<br />
                To The 8 Stages of<br />
                Steel Fabrication<br />
                Life Cycle
              </h2>
            </div>

          </div>

          {/* RIGHT COLUMN: CIRCULAR WHEEL DIAGRAM (EXACT UI OF REFERENCE IMAGE) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative z-10">
            
            {/* Diagram Canvas: Coordinate space 640 x 540 */}
            <div className="relative w-full max-w-[600px] aspect-[640/540] flex items-center justify-center">

              {/* 1. SVG Layer for Orbit Ring, Connection Lines, and Donut Rings */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 640 540"
              >
                {/* Segmented Orbit Ring Arcs in Theme Colors */}
                {orbitArcs.map((arc) => {
                  const isActive = arc.id === activeStageId;
                  return (
                    <path
                      key={`arc-${arc.id}`}
                      d={arc.d}
                      fill="none"
                      stroke={arc.color}
                      strokeWidth={isActive ? "5" : "3"}
                      strokeLinecap="round"
                      opacity={isActive ? 1 : 0.75}
                      className="transition-all duration-500"
                    />
                  );
                })}

                {/* Leader Lines and Donut Rings connecting to Badges */}
                {LIFECYCLE_STAGES.map((st, idx) => {
                  const angle = (idx * (360 / totalStages) - 90) * (Math.PI / 180);
                  const orbitX = cx + rOrbit * Math.cos(angle);
                  const orbitY = cy + rOrbit * Math.sin(angle);
                  const badgeX = cx + rBadge * Math.cos(angle);
                  const badgeY = cy + rBadge * Math.sin(angle);
                  const isActive = st.id === activeStageId;

                  return (
                    <g key={`leader-${st.id}`} className="transition-all duration-300">
                      {/* Radial Line from Orbit to Badge */}
                      <line
                        x1={orbitX}
                        y1={orbitY}
                        x2={badgeX}
                        y2={badgeY}
                        stroke={st.color}
                        strokeWidth={isActive ? "2.5" : "1.8"}
                        strokeDasharray={isActive ? "none" : "3 3"}
                        opacity={isActive ? 1 : 0.6}
                      />

                      {/* Small Donut Ring directly ON the Orbit Path */}
                      <circle
                        cx={orbitX}
                        cy={orbitY}
                        r={isActive ? "6.5" : "5"}
                        fill="#FFFFFF"
                        stroke={st.color}
                        strokeWidth="2.5"
                      />
                      <circle
                        cx={orbitX}
                        cy={orbitY}
                        r="2.5"
                        fill={isActive ? st.color : "#FFFFFF"}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* 2. Central White Hub */}
              <div 
                className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-white shadow-[0_15px_45px_rgba(0,0,0,0.10)] border-4 border-slate-50 flex flex-col items-center justify-center p-3 text-center transition-all duration-500"
                style={{
                  boxShadow: `0 20px 45px rgba(0,0,0,0.08), 0 0 0 3px ${activeStage.color}33`
                }}
              >
                <div 
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white mb-1 shadow-md transition-colors duration-500"
                  style={{ backgroundColor: activeStage.color }}
                >
                  <ActiveIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                
                <span className="text-[11px] sm:text-xs font-bold text-slate-500 leading-tight">
                  Steel
                </span>
                <span className="text-sm sm:text-base md:text-lg font-black text-slate-900 leading-tight">
                  Fabrication
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mt-0.5" style={{ color: activeStage.color }}>
                  Life Cycle
                </span>
              </div>

              {/* 3. 8 Interactive Circular Badges & Outward Text Labels */}
              {LIFECYCLE_STAGES.map((st, idx) => {
                const angleDeg = idx * (360 / totalStages) - 90;
                const angleRad = angleDeg * (Math.PI / 180);
                const badgeX = cx + rBadge * Math.cos(angleRad);
                const badgeY = cy + rBadge * Math.sin(angleRad);
                const isActive = st.id === activeStageId;
                const StageIcon = st.icon;

                const leftPct = (badgeX / 640) * 100;
                const topPct = (badgeY / 540) * 100;

                // Labels on right (idx 1, 2, 3) align to the right of the badge
                // Labels on left (idx 0, 4, 5, 6, 7) align to the left of the badge
                const isRightSide = idx === 1 || idx === 2 || idx === 3;

                return (
                  <div
                    key={`node-${st.id}`}
                    className="absolute"
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: isActive ? 30 : 20
                    }}
                  >
                    {/* Floating Circular Badge with Icon */}
                    <button
                      type="button"
                      onClick={() => setActiveStageId(st.id)}
                      onMouseEnter={() => setActiveStageId(st.id)}
                      aria-label={st.title}
                      className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'scale-115 ring-4 ring-offset-2 ring-white shadow-xl'
                          : 'hover:scale-110 shadow-md opacity-95'
                      }`}
                      style={{
                        backgroundColor: st.color,
                        boxShadow: isActive ? `0 10px 25px ${st.color}77` : `0 4px 14px ${st.color}55`
                      }}
                    >
                      <StageIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                    </button>

                    {/* Outward 2-Line Text Label (Exact style as reference image) */}
                    <div
                      onClick={() => setActiveStageId(st.id)}
                      className={`absolute cursor-pointer transition-all duration-300 w-[88px] sm:w-[105px] ${
                        isRightSide
                          ? 'left-full ml-2.5 sm:ml-3 text-left'
                          : 'right-full mr-2.5 sm:mr-3 text-right'
                      }`}
                      style={{
                        top: '50%',
                        transform: 'translateY(-50%)'
                      }}
                    >
                      <div
                        className={`text-[11px] sm:text-[12px] leading-[1.15] transition-colors duration-300 ${
                          isActive 
                            ? 'font-black scale-105' 
                            : 'font-bold text-slate-700 hover:text-slate-900'
                        }`}
                        style={{
                          color: isActive ? st.color : undefined
                        }}
                      >
                        <div>{st.line1}</div>
                        <div>{st.line2}</div>
                      </div>
                      <div className="text-[9px] font-mono text-slate-400 mt-0.5">
                        Stage {st.step}
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Bottom-Right: Contact Email (Exact match to info@techrish.com in reference image) */}
            <div className="w-full flex items-center justify-end pt-4 pr-4 text-xs font-bold text-slate-500">
              <a 
                href="mailto:info@infrafaberp.com" 
                className="hover:text-keshav-700 transition"
              >
                info@infrafaberp.com
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
