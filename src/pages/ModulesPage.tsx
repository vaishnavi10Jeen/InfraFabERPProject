import React, { useState } from 'react';
import { 
  Disc, Cpu, ShieldCheck, Truck, PackageCheck, 
  FolderKanban, Users, BarChart3, Check, ArrowRight, 
  KeyRound, ChevronRight, Wrench, UserCheck, Building2
} from 'lucide-react';

interface ModulesPageProps {
  onOpenLiveModal?: () => void;
  onOpenDemoModal: () => void;
}

interface PhaseItem {
  id: string;
  phaseNumber: string;
  title: string;
  badge: string;
  image: string;
  imageTag: string;
  imageCaption: string;
  imageStat: string;
  steps: {
    stepNumber: string;
    name: string;
    route: string;
    desc: string;
    highlights: string[];
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

const LIFECYCLE_PHASES: PhaseItem[] = [
  {
    id: 'planning',
    phaseNumber: '1',
    title: '1. Planning & Setup',
    badge: '3 Core Steps',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    imageTag: 'Planning & Setup Workflow',
    imageCaption: 'Tekla 3D BIM, Machine Mobilization & Multi-Store Inventory',
    imageStat: '3 Connected Setup Workflows',
    steps: [
      {
        stepNumber: '01',
        name: 'Planning & BOQ Management',
        route: '/projects/list',
        desc: 'Centralized company project portfolio tracking: client scope, committed tonnage, drawings, progress pipeline, and retention billing.',
        highlights: ['Centralized Project Directory', 'Tekla 3D Drawing ECO', 'Milestone Retention Billing'],
        icon: FolderKanban
      },
      {
        stepNumber: '02',
        name: 'Heavy Machinery & Plant Maintenance',
        route: '/assets/machinery',
        desc: 'Plant equipment tracking for EOT cranes, CNC plasma cutters, SAW welding beds, runtime hours, and preventive maintenance alerts.',
        highlights: ['15T EOT Overhead Cranes', 'CNC Plasma & SAW Beds', 'Automated Preventive Tickets'],
        icon: Wrench
      },
      {
        stepNumber: '03',
        name: 'Stores & Multi-Location Stock',
        route: '/inventory/store',
        desc: 'Raw steel yard, consumables, welding electrodes, digital bay supervisor indents, and automated safety stock reorders.',
        highlights: ['Digital Store Indents', 'Mill Cert (MTC) Sync', 'Auto-Reorder Thresholds'],
        icon: PackageCheck
      }
    ]
  },
  {
    id: 'workforce',
    phaseNumber: '2',
    title: '2. Workforce & Org',
    badge: '4 Core Steps',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    imageTag: 'Workforce Organization',
    imageCaption: 'Fabrication Gangs, Biometric Attendance, Role RBAC & Org Hierarchy',
    imageStat: '4 Integrated Workforce Systems',
    steps: [
      {
        stepNumber: '04',
        name: 'Teams & Team Members',
        route: '/teams/list',
        desc: 'Structure fitters, 6G welders, riggers & painters into assigned fabrication gangs with designated bay supervisors.',
        highlights: ['Gang Bay Allocations', 'Certified Team Leaders', 'Shift Work Orders'],
        icon: Users
      },
      {
        stepNumber: '05',
        name: 'Attendance & Designation',
        route: '/attendance/daily',
        desc: 'Biometric and mobile shift attendance logging, designation masters (Fitter, 6G Welder), and QC-verified piece-rate pay.',
        highlights: ['Biometric / Mobile Punch', 'Overtime Approval Chain', 'QC-Verified Piece-Rate'],
        icon: UserCheck
      },
      {
        stepNumber: '06',
        name: 'User Management & Roles',
        route: '/users/roles',
        desc: 'Role-based access control (RBAC), multi-plant authorization, supervisor logins, and immutable tamper-proof audit trails.',
        highlights: ['Granular Security Roles', 'Mobile & Desktop Access', 'Complete Audit Logs'],
        icon: KeyRound
      },
      {
        stepNumber: '07',
        name: 'Department Hierarchy',
        route: '/departments/list',
        desc: 'Interlinked departmental sync across Engineering, Production, Stores, Quality, Logistics, and Accounts.',
        highlights: ['Department Head Links', 'Cross-Dept Approval Chains', 'SLA Bottleneck Alerts'],
        icon: Building2
      }
    ]
  },
  {
    id: 'production',
    phaseNumber: '3',
    title: '3. Floor Execution',
    badge: '3 Core Steps',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
    imageTag: 'Floor Execution Line',
    imageCaption: 'Executive DPR, Slitting Line Yield & Piece-Mark QR Tracking',
    imageStat: '3 Real-Time Production Lines',
    steps: [
      {
        stepNumber: '08',
        name: 'Executive DPR & Reports',
        route: '/reports/production',
        desc: 'Multi-station telemetry capturing shop-floor scans, attendance, scrap %, and automated 6:00 PM DPR sent to Director phone.',
        highlights: ['Automated 6:00 PM DPR', 'Multi-Station Telemetry', 'Cost-per-MT BI Dashboard'],
        icon: BarChart3
      },
      {
        stepNumber: '09',
        name: 'Coil Slitting & Shearing',
        route: '/coils/slitting',
        desc: 'Mother coil inward, MTC heat cert verification, mathematical slitting yield planning, and offcut remnant return.',
        highlights: ['Mother Coil Inward MTC', 'Slit Plan Optimization', 'Remnant Return Tracking'],
        icon: Disc
      },
      {
        stepNumber: '10',
        name: 'Production QR Tracking',
        route: '/production/tracking',
        desc: 'Tekla 3D piece-mark import, mobile PWA shop-floor QR barcode scans across Cut → Fit-Up → SAW Weld → Sa 2.5 Paint.',
        highlights: ['Tekla 3D BOM Import', 'Shop-Floor QR Scanning', 'Sa 2.5 Blast & DFT Paint'],
        icon: Cpu
      }
    ]
  },
  {
    id: 'quality',
    phaseNumber: '4',
    title: '4. QC & Dispatch',
    badge: '2 Core Steps',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
    imageTag: 'QC & Logistics Gate',
    imageCaption: 'NDT Ultrasonic Inspection, Paint DFT Gauge & Trailer Load Balancing',
    imageStat: '2 Final Gate Checkpoints',
    steps: [
      {
        stepNumber: '11',
        name: 'Quality Control & NDT',
        route: '/quality/inspections',
        desc: 'IS 2062 steel inward tensile tests, 100% UT/MPT weld clearances, paint DFT gauge checks, and 1-click client inspection dossiers.',
        highlights: ['Raw Steel IS 2062 MTC', 'UT/MPT Weld Compliance', '1-Click IRN Dossier'],
        icon: ShieldCheck
      },
      {
        stepNumber: '12',
        name: 'Dispatch & Logistics',
        route: '/dispatch/shipments',
        desc: 'Erection sequencing, 40ft multi-axle trailer balance, gross/tare weighbridge sync, itemized delivery challans, and site receipt.',
        highlights: ['Erection Sequencing', 'Trailer Axle Balancing', 'Itemized e-Way Bill Challan'],
        icon: Truck
      }
    ]
  }
];

export const ModulesPage: React.FC<ModulesPageProps> = ({ onOpenDemoModal }) => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>('planning');

  const currentPhase = LIFECYCLE_PHASES.find(p => p.id === selectedPhaseId) || LIFECYCLE_PHASES[0];

  return (
    <div className="space-y-12 pb-24 bg-white text-slate-900">
      
      {/* 1. HERO HEADER WITH LIGHT INDUSTRIAL STEEL FABRICATION BACKGROUND */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-keshav-50/70 via-white to-slate-50 text-slate-900">
        {/* Background Image Layer with Light Tone */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.14] scale-105 transition-transform duration-1000 mix-blend-multiply"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85')` 
          }}
        />

        {/* Ambient Lime & Sky Radial Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-keshav-200/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lime-100/60 rounded-full blur-3xl pointer-events-none"></div>

        {/* Subtle Engineering Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center max-w-4xl relative z-10 space-y-5">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 border border-keshav-300 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-keshav-900 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-keshav-600 animate-pulse"></span>
            <span>Comprehensive Steel Fabrication & PEB Suite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] text-slate-950">
            12 Enterprise Modules Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
              Steel & Infrastructure ERP
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Experience our complete enterprise steel ERP software: from User Management, Departments, Teams, Attendance & Designation to Project Assets, Multi-Store Inventory, Company Project List, and Executive DPR Reports.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={onOpenDemoModal}
              className="btn-gradient px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-lg hover:brightness-105 transition cursor-pointer active:scale-95"
            >
              <span>Book 1-on-1 Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#modules-overview"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('modules-overview');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black shadow-xs flex items-center gap-2 transition cursor-pointer"
            >
              <span>Explore Operational Modules ↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. LIFECYCLE PHASES WORKBENCH - 4 PHASES (SPLIT LAYOUT: LEFT STEPS & RIGHT DUMMY IMAGE) */}
      <section id="modules-overview" className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 space-y-6 scroll-mt-20">
        
        {/* Phase Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {LIFECYCLE_PHASES.map((phase) => {
            const isActive = phase.id === selectedPhaseId;
            return (
              <button
                key={phase.id}
                onClick={() => setSelectedPhaseId(phase.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'btn-gradient text-slate-950 shadow-md ring-2 ring-keshav-400/20 scale-102'
                    : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-700'
                }`}
              >
                <span>{phase.title}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                  isActive ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {phase.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Split Card: Left Side Basic Information of Steps & Right Side Dummy Image */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
          
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-keshav-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phase 0{currentPhase.phaseNumber} Overview
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-bold text-keshav-700">
                  All {currentPhase.steps.length} Integrated Steps
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                {currentPhase.title}
              </h3>
            </div>

            <button
              onClick={onOpenDemoModal}
              className="btn-gradient px-4 py-2 rounded-xl text-xs font-black text-slate-950 shadow-xs flex items-center gap-2 transition hover:brightness-105 cursor-pointer self-start sm:self-auto"
            >
              <span>Schedule Walkthrough</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* TWO-COLUMN SPLIT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: All Steps in this Phase Shown with Basic Information (No Selection UI) */}
            <div className="lg:col-span-7 space-y-4">
              {currentPhase.steps.map((step) => {
                const StepIcon = step.icon;

                return (
                  <div
                    key={step.stepNumber}
                    className="group relative rounded-2xl p-5 transition-all duration-300 border bg-white hover:bg-slate-50/80 border-slate-200 hover:border-keshav-300 shadow-2xs"
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Icon */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all bg-slate-100 text-slate-700 group-hover:bg-keshav-100 group-hover:text-keshav-800">
                        <StepIcon className="w-6 h-6" />
                      </div>

                      {/* Basic Information */}
                      <div className="flex-1 min-w-0 space-y-2">
                        {/* Header line: Step number, title, and route */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 group-hover:bg-slate-950 group-hover:text-white transition">
                              Step {step.stepNumber}
                            </span>
                            <h4 className="text-base font-black text-slate-950">
                              {step.name}
                            </h4>
                          </div>

                          <span className="text-[11px] font-mono text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                            {step.route}
                          </span>
                        </div>

                        {/* Short Description / Basic Information */}
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          {step.desc}
                        </p>

                        {/* Capabilities Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                          {step.highlights.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-slate-100/90 border border-slate-200/90 px-2.5 py-1 rounded-lg"
                            >
                              <Check className="w-3 h-3 text-keshav-700 stroke-[3]" />
                              <span>{feat}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Dummy Image Card */}
            <div className="lg:col-span-5 sticky top-24 self-start">
              <div className="relative rounded-3xl overflow-hidden border border-slate-300 shadow-2xl group bg-slate-950 aspect-[4/3] sm:aspect-[16/11]">
                
                {/* High-Resolution Industrial Dummy Image */}
                <img
                  src={currentPhase.image}
                  alt={currentPhase.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 pointer-events-none" />

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <div className="inline-flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-keshav-400 animate-pulse"></span>
                    <span>{currentPhase.imageTag}</span>
                  </div>

                  <span className="bg-keshav-500 text-slate-950 font-mono font-black text-xs px-2.5 py-1 rounded-lg shadow-md">
                    Phase 0{currentPhase.phaseNumber}
                  </span>
                </div>

                {/* Bottom Overlaid Glassmorphism Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-white shadow-2xl space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-keshav-300 font-bold">
                        Shop Floor Telemetry Preview
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 bg-white/10 px-2 py-0.5 rounded-md">
                        Connected
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                      {currentPhase.imageCaption}
                    </h4>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/15">
                      <span className="text-xs font-bold text-keshav-300">
                        ⚡ {currentPhase.imageStat}
                      </span>
                      <button
                        onClick={onOpenDemoModal}
                        className="text-xs font-black text-white hover:text-keshav-300 transition flex items-center gap-1 cursor-pointer"
                      >
                        <span>Book Demo</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
};
