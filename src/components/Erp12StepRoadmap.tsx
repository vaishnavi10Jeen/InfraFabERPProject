import React from 'react';
import { 
  FolderKanban, Cpu, PackageCheck, Users, 
  Clock, KeyRound, Building2, BarChart3, 
  Disc, Layers, ShieldCheck, Truck
} from 'lucide-react';
import { ERP_MODULES } from '../data/modulesData';

interface Erp12StepRoadmapProps {
  selectedModuleId: string;
  onSelectModule: (moduleId: string) => void;
}

interface StepNodeConfig {
  id: string;
  stepNum: string;
  shortLabel: string;
  subLabel: string;
  x: number;
  y: number;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEP_CONFIGS: StepNodeConfig[] = [
  // TIER 1 (Moving Left -> Right): Steps 01 to 04
  { id: 'company-projects', stepNum: '01', shortLabel: 'Projects List', subLabel: 'Milestones & BOQ', x: 90, y: 75, color: '#2563eb', icon: FolderKanban },
  { id: 'project-assets', stepNum: '02', shortLabel: 'Project Assets', subLabel: 'Cranes & Machinery', x: 310, y: 75, color: '#0284c7', icon: Cpu },
  { id: 'inventory-store', stepNum: '03', shortLabel: 'Store Inventory', subLabel: 'Raw Steel & Stores', x: 530, y: 75, color: '#0891b2', icon: PackageCheck },
  { id: 'teams-management', stepNum: '04', shortLabel: 'Teams Setup', subLabel: 'Gangs & Bay Rosters', x: 750, y: 75, color: '#0d9488', icon: Users },

  // TIER 2 (Moving Right -> Left): Steps 05 to 08
  { id: 'attendance-designation', stepNum: '05', shortLabel: 'Attendance', subLabel: 'Designation & Pay', x: 750, y: 255, color: '#059669', icon: Clock },
  { id: 'user-management', stepNum: '06', shortLabel: 'Users & Roles', subLabel: 'RBAC Security', x: 530, y: 255, color: '#16a34a', icon: KeyRound },
  { id: 'department-management', stepNum: '07', shortLabel: 'Departments', subLabel: 'Plant Hierarchy', x: 310, y: 255, color: '#65a30d', icon: Building2 },
  { id: 'reports-analytics', stepNum: '08', shortLabel: 'Executive DPR', subLabel: 'Plant Analytics', x: 90, y: 255, color: '#8CC12C', icon: BarChart3 },

  // TIER 3 (Moving Left -> Right): Steps 09 to 12
  { id: 'coil-management', stepNum: '09', shortLabel: 'Coil Slitting', subLabel: 'Scrap Yield %', x: 90, y: 435, color: '#d97706', icon: Disc },
  { id: 'production-tracking', stepNum: '10', shortLabel: 'Production QR', subLabel: 'Piece-Mark Trace', x: 310, y: 435, color: '#ea580c', icon: Layers },
  { id: 'quality-control', stepNum: '11', shortLabel: 'QC & NDT Logs', subLabel: 'Weld Inspections', x: 530, y: 435, color: '#4f46e5', icon: ShieldCheck },
  { id: 'dispatch-logistics', stepNum: '12', shortLabel: 'Trailer Dispatch', subLabel: 'Axle Balance & Gate', x: 750, y: 435, color: '#8CC12C', icon: Truck },
];

export const Erp12StepRoadmap: React.FC<Erp12StepRoadmapProps> = ({
  selectedModuleId,
  onSelectModule
}) => {
  return (
    <div className="relative w-full flex flex-col justify-center">
      
      {/* Background Subtle Lime Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-keshav-100/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

      {/* DESKTOP/TABLET SERPENTINE WINDING ROADMAP SVG (12 INTERACTIVE CLICKABLE NODES) */}
      <div className="hidden md:block relative w-full my-auto z-10">
        <svg viewBox="0 0 880 520" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="roadGradient12" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="35%" stopColor="#cbd5e1" />
              <stop offset="65%" stopColor="#D5EDA3" />
              <stop offset="100%" stopColor="#8CC12C" />
            </linearGradient>

            <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.18" />
            </filter>

            <filter id="activeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#8CC12C" floodOpacity="0.75" />
            </filter>
          </defs>

          {/* S-Shaped Serpentine Winding Track */}
          {/* Row 1: (90,75) -> (750,75) */}
          {/* Curve 1: (750,75) around to (750,255) */}
          {/* Row 2: (750,255) -> (90,255) */}
          {/* Curve 2: (90,255) around to (90,435) */}
          {/* Row 3: (90,435) -> (750,435) */}
          <path
            d="M 90 75 L 750 75 C 840 75, 840 255, 750 255 L 90 255 C 0 255, 0 435, 90 435 L 750 435 L 810 435"
            stroke="url(#roadGradient12)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* White Center Dashed Line */}
          <path
            d="M 90 75 L 750 75 C 840 75, 840 255, 750 255 L 90 255 C 0 255, 0 435, 90 435 L 750 435 L 810 435"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />

          {/* Directional Flow Arrows on Track */}
          <polygon points="420,68 435,75 420,82" fill="#94a3b8" />
          <polygon points="430,248 415,255 430,262" fill="#94a3b8" />
          <polygon points="420,428 435,435 420,442" fill="#8CC12C" />

          {/* End Milestone Arrow */}
          <polygon points="805,423 828,435 805,447" fill="#8CC12C" />

          {/* RENDER 12 CLICKABLE INTERACTIVE NODES */}
          {STEP_CONFIGS.map((step) => {
            const isSelected = step.id === selectedModuleId;
            const isLast = step.stepNum === '12';

            return (
              <g
                key={step.id}
                transform={`translate(${step.x}, ${step.y})`}
                onClick={() => onSelectModule(step.id)}
                className="cursor-pointer group"
                filter={isSelected ? "url(#activeGlow)" : "url(#nodeShadow)"}
                style={{ transition: 'transform 0.25s ease' }}
              >
                {/* Active Outer Pulsing Ring */}
                {isSelected && (
                  <circle
                    r="44"
                    fill="none"
                    stroke="#8CC12C"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                    className="animate-spin"
                    style={{ animationDuration: '8s' }}
                  />
                )}

                {/* Concentric Soft Outer Ring (Similar to Reference Image) */}
                <circle
                  r={isLast ? "40" : "36"}
                  fill="none"
                  stroke={isSelected ? "#8CC12C" : step.color}
                  strokeWidth="2.5"
                  strokeOpacity={isSelected ? "0.9" : "0.3"}
                />

                {/* Base Outer White Circle */}
                <circle
                  r={isLast ? "34" : "30"}
                  fill="#ffffff"
                  stroke={isSelected ? "#8CC12C" : step.color}
                  strokeWidth={isSelected ? "4" : "3"}
                  className="transition-all duration-300 group-hover:scale-105"
                />

                {/* Inner Colored Circle */}
                <circle
                  r={isLast ? "28" : "24"}
                  fill={isSelected ? "#8CC12C" : step.color}
                  className="transition-all duration-300"
                />

                {/* Step Number in Center Circle */}
                <text
                  x="0"
                  y="-3"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize={isLast ? "13" : "11.5"}
                  fontWeight="900"
                  fontFamily="monospace"
                >
                  {step.stepNum}
                </text>

                {/* Subtext inside node */}
                <text
                  x="0"
                  y="9"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="7"
                  fontWeight="800"
                  fontFamily="sans-serif"
                >
                  STEP
                </text>

                {/* Text Label Below Node (Matching Attached Graphic Layout) */}
                <g transform="translate(0, 46)">
                  <rect
                    x="-78"
                    y="-5"
                    width="156"
                    height="36"
                    rx="8"
                    fill={isSelected ? "#0f172a" : "#ffffff"}
                    stroke={isSelected ? "#8CC12C" : "#cbd5e1"}
                    strokeWidth={isSelected ? "2" : "1"}
                  />
                  {/* Step Number in matching color */}
                  <text
                    x="-64"
                    y="18"
                    textAnchor="start"
                    fill={isSelected ? "#8CC12C" : step.color}
                    fontSize="13"
                    fontWeight="900"
                    fontFamily="monospace"
                  >
                    {step.stepNum}
                  </text>
                  {/* Title */}
                  <text
                    x="-40"
                    y="11"
                    textAnchor="start"
                    fill={isSelected ? "#ffffff" : "#0f172a"}
                    fontSize="9.5"
                    fontWeight="900"
                    fontFamily="sans-serif"
                  >
                    {step.shortLabel}
                  </text>
                  {/* Subtitle */}
                  <text
                    x="-40"
                    y="22"
                    textAnchor="start"
                    fill={isSelected ? "#8CC12C" : "#64748b"}
                    fontSize="7.5"
                    fontWeight="600"
                    fontFamily="sans-serif"
                  >
                    {step.subLabel}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* MOBILE RESPONSIVE STEP GRID (TOUCH-FRIENDLY BUTTONS FOR SMARTPHONES) */}
      <div className="block md:hidden space-y-2 my-2">
        <div className="grid grid-cols-2 gap-2 max-h-[360px] overflow-y-auto p-1">
          {STEP_CONFIGS.map((step) => {
            const isSelected = step.id === selectedModuleId;
            const Icon = step.icon;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onSelectModule(step.id)}
                className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'btn-gradient text-slate-950 font-black shadow-md border-keshav-500 scale-[1.02]'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className={`w-6 h-6 rounded-lg font-mono text-[10px] font-black flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-slate-950 text-white' : 'bg-white text-slate-700 border border-slate-200'
                }`}>
                  {step.stepNum}
                </span>

                <div className="truncate">
                  <div className="text-[11px] font-black truncate">{step.shortLabel}</div>
                  <div className="text-[9px] opacity-75 truncate">{step.subLabel}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
