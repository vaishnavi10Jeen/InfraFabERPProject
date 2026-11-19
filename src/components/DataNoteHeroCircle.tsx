import React, { useState, useEffect } from 'react';
import { 
  Disc, QrCode, Layers, ShieldCheck, Truck, Building2
} from 'lucide-react';

interface CircleModule {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  metric: string;
}

const CIRCLE_MODULES: CircleModule[] = [
  {
    id: 1,
    title: 'Coil Slitting & Shearing',
    subtitle: '0.1mm camber tolerance, baby coil genealogy & real-time edge scrap yield tracking.',
    tag: 'Raw Steel Hub',
    icon: Disc,
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80',
    metric: '18% Scrap Cut'
  },
  {
    id: 2,
    title: 'Tekla 3D & BOM Piece-Marks',
    subtitle: 'Direct Tekla drawing import, automatic piece-mark generation & weather-proof QR tags.',
    tag: 'Engineering Sync',
    icon: QrCode,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    metric: '100% Traceable'
  },
  {
    id: 3,
    title: 'Built-Up Bay Assembly',
    subtitle: 'Submerged arc welding (SAW), fit-up line tracking & piece completion logs via mobile PWA.',
    tag: 'PEB Shop Floor',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    metric: 'Greasy Hands Ready'
  },
  {
    id: 4,
    title: 'WPS / PQR & QC Dossiers',
    subtitle: 'Ultrasonic NDT inspection logs, Sa 2.5 blast profile & multi-point paint DFT gauge verification.',
    tag: 'Quality Compliance',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    metric: 'Zero Rejection'
  },
  {
    id: 5,
    title: 'Trailer Logistics & Dispatch',
    subtitle: '16T, 25T & 40T multi-axle trailer capacity matching with 100% itemized delivery challans.',
    tag: 'Erection Staging',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    metric: '99.4% Accuracy'
  },
  {
    id: 6,
    title: 'Site Delivery & Sign-Off',
    subtitle: 'Columns, rafters, purlins & anchor bolts delivered in precise erection sequence.',
    tag: 'Erection Site',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    metric: 'Zero Missing Parts'
  }
];

export const DataNoteHeroCircle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-cycle through the 6 modules like DataNote's circle rotator
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev >= CIRCLE_MODULES.length ? 1 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Radius for positioning item dots around the circle
  // Desktop circle width is 450px (radius ~ 185px), mobile is 340px (radius ~ 135px)
  const totalItems = CIRCLE_MODULES.length;
  const angleStep = 360 / totalItems; // 60 degrees

  // Current rotation of the outer dotCircle track
  const currentRotation = 360 - (activeTab - 1) * angleStep;
  const activeModule = CIRCLE_MODULES.find((m) => m.id === activeTab) || CIRCLE_MODULES[0];

  return (
    <div 
      className="relative flex items-center justify-center lg:justify-start select-none py-4 sm:py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Glow using #8CC12C */}
      <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] bg-keshav-100/60 rounded-full blur-3xl pointer-events-none -z-0"></div>

      {/* Main Container (DataNote's holderCircle) */}
      <div className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] flex items-center justify-center">

        {/* Rotating DotCircle Track containing the Satellite Module Buttons */}
        <div 
          className="absolute inset-0 rounded-full z-20 pointer-events-none"
          style={{
            transform: `rotate(${currentRotation}deg)`,
            transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          {CIRCLE_MODULES.map((mod, index) => {
            // Position each dot along the perimeter
            const angleInRad = ((index * angleStep - 90) * Math.PI) / 180;
            const isActive = mod.id === activeTab;
            const Icon = mod.icon;

            return (
              <div
                key={mod.id}
                className="absolute top-1/2 left-1/2 pointer-events-auto"
                style={{
                  // Position radially around center
                  transform: `translate(-50%, -50%) translate(${Math.cos(angleInRad) * 175}px, ${Math.sin(angleInRad) * 175}px)`
                }}
              >
                {/* Counter-rotate each itemDot so icon remains perfectly upright */}
                <button
                  type="button"
                  onClick={() => setActiveTab(mod.id)}
                  aria-label={mod.title}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'btn-gradient scale-110 shadow-[0_10px_25px_rgba(140,193,44,0.5)] border-2 border-white ring-4 ring-keshav-200 text-white'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-md hover:scale-105'
                  }`}
                  style={{
                    transform: `rotate(${-currentRotation}deg)`,
                    transition: 'transform 1.6s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s, box-shadow 0.3s'
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

                  {/* Active Indicator Pulse Ring */}
                  {isActive && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-keshav-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-keshav-600 border border-white"></span>
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Center Content Wrapper with Outside Added Dotted Border & Clockwise Spin */}
        <div className="relative flex items-center justify-center z-10 animate-hero-image-spin">
          {/* Inside Dotted Border Framing the Image with Added Space */}
          <div className="absolute -inset-4 sm:-inset-6 md:-inset-7 rounded-full border-2 border-dotted border-keshav-500/90 pointer-events-none"></div>

          {/* Center Image Container - Reduced Inside Border Width */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 sm:border-[5px] md:border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.22)] bg-slate-950 group">
          
            {/* Active Module Image with Cross-Fade */}
            {CIRCLE_MODULES.map((mod) => (
              <div
                key={mod.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  mod.id === activeTab ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <img
                  src={mod.image}
                  alt={mod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark Gradient Vignette for readable text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20"></div>

                {/* Centered Content Overlay (DataNote's .cc style) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-5 pb-5 sm:pb-6 text-white space-y-1 animate-hero-text-fade">
                  {/* Module Category Tag */}
                  <span className="inline-block text-[10px] uppercase font-black tracking-wider text-keshav-300 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-keshav-400/40 backdrop-blur-sm">
                    {mod.tag}
                  </span>

                  {/* Module Title */}
                  <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight drop-shadow-sm">
                    {mod.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Interactive Helper Text Below Circle */}
      
    </div>
  );
};
