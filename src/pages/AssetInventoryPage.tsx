import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  PackageCheck, 
  Wrench, 
  Layers, 
  ShieldCheck, 
  BarChart3, 
  Truck, 
  AlertTriangle, 
  CheckCircle2, 
  Users, 
  RotateCcw, 
  Boxes,
  FileCheck2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AssetInventoryPageProps {
  onOpenDemoModal: () => void;
}

const ASSET_FEATURES = [
  {
    title: 'Heavy Machinery & Equipment Tracking',
    description: 'Track cranes, CNC cutters, blasters, and plant machinery with location and operational status.',
    icon: Wrench,
  },
  {
    title: 'Preventive Maintenance & Repair Logs',
    description: 'Schedule routine servicing, track breakdown histories, and maintain fitness certificates.',
    icon: RotateCcw,
  },
  {
    title: 'Multi-Store Inventory Management',
    description: 'Manage stocks across Central Yards, Shop Floor Stores, and Project Site Locations seamlessly.',
    icon: Boxes,
  },
  {
    title: 'Raw Materials & Fasteners Tracking',
    description: 'Real-time stock of steel plates, coils, structural beams, welding consumables, and bolts.',
    icon: PackageCheck,
  },
  {
    title: 'Project Indent & Requisition Workflow',
    description: 'Site engineers request materials digitally; storekeepers verify stock and approve issues.',
    icon: FileCheck2,
  },
  {
    title: 'MRN & Gate Pass Administration',
    description: 'Generate Material Receipt Notes (MRN) and Returnable / Non-Returnable vehicle gate passes.',
    icon: Truck,
  },
  {
    title: 'Cutting Remnant & Scrap Control',
    description: 'Track plate remnants and scrap generation to optimize material yield and minimize wastage.',
    icon: Layers,
  },
  {
    title: 'Safety Stock & Low Inventory Alerts',
    description: 'Automated notifications when critical items fall below minimum reorder thresholds.',
    icon: AlertTriangle,
  },
  {
    title: 'Asset Depreciation & Compliance',
    description: 'Monitor asset book values, equipment insurance renewals, and statutory safety certificates.',
    icon: BarChart3,
  },
];

const ASSET_BENEFITS = [
  {
    title: 'Zero Material Leakage',
    description: 'Complete traceability of every ton of steel from procurement to fabrication.',
    icon: ShieldCheck,
  },
  {
    title: 'Maximized Equipment Uptime',
    description: 'Timely preventive maintenance prevents costly machinery breakdowns during peak fabrication.',
    icon: CheckCircle2,
  },
  {
    title: 'Accurate Project Costing',
    description: 'Project-wise consumption logs show actual material and equipment usage per project.',
    icon: BarChart3,
  },
  {
    title: 'Instant Indent Approvals',
    description: 'Eliminate paper slips with real-time digital indents and instant material issue tracking.',
    icon: CheckCircle2,
  },
  {
    title: 'Optimized Working Capital',
    description: 'Avoid capital lock-up in excess raw materials through live inventory visibility.',
    icon: Layers,
  },
  {
    title: 'Audit-Ready Equipment Logs',
    description: 'Maintain complete digital logs of calibration, safety audits, and machinery certifications.',
    icon: ShieldCheck,
  },
];

export const AssetInventoryPage: React.FC<AssetInventoryPageProps> = ({ onOpenDemoModal }) => {
  return (
    <div className="pb-24 bg-white text-slate-900 space-y-12">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-keshav-50/70 via-white to-slate-50 text-slate-900">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] scale-105 mix-blend-multiply"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85')` 
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-keshav-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lime-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10 space-y-5">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 border border-keshav-300 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-keshav-900 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-keshav-600 animate-pulse" />
            <span>ERP Module 02 • Heavy Machinery & Multi-Store Inventory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] text-slate-950">
            Industrial Assets &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
              Inventory Management
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Centralize plant machinery, cranes, preventive maintenance schedules, and multi-store raw materials across fabrication shops and erection sites in real time.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={onOpenDemoModal}
              className="btn-gradient px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-lg hover:brightness-105 transition cursor-pointer active:scale-95"
            >
              <span>Book Asset Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/modules/employee-user-management"
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black shadow-xs flex items-center gap-2 transition cursor-pointer"
            >
              <Users className="w-4 h-4 text-keshav-600" />
              <span>View Employee & User Module</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MODULE SWITCHER TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-center gap-2 shadow-2xs">
          <Link
            to="/modules/employee-user-management"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white/70 transition"
          >
            <Users className="w-4 h-4 text-slate-500" />
            <span>1. Employee & User Management</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-white text-slate-900 shadow-xs border border-slate-200">
            <PackageCheck className="w-4 h-4 text-keshav-600" />
            <span>2. Asset & Inventory Management</span>
            <span className="w-2 h-2 rounded-full bg-keshav-500 animate-pulse" />
          </div>
        </div>
      </div>

      {/* 2. OVERVIEW SPLIT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 via-white to-keshav-50/20 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-keshav-700" />
                <span>Heavy Industry Inventory & Machinery</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
                Eliminate Machinery Downtime.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
                  Control Every Ton of Steel.
                </span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                Managing heavy machinery, cranes, raw materials, steel plates, sections, and site indents across multiple project locations can lead to expensive delays if handled manually.
              </p>

              <div className="bg-gradient-to-r from-keshav-50 to-lime-50/50 border border-keshav-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-keshav-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  Our <span className="text-keshav-800 font-black">Asset & Inventory Management</span> module connects heavy equipment, crane maintenance, multi-store stock tracking, raw material procurement, and project-wise consumption across your fabrication shops and erection yards.
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                From tracking machine running hours and logging service reminders to generating site material issues and gate passes, everything is centralized for zero material wastage and maximum asset reliability.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="btn-gradient px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-md hover:brightness-105 transition cursor-pointer active:scale-95"
                >
                  <span>Schedule Asset Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black shadow-xs flex items-center gap-2 transition cursor-pointer"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl group bg-slate-950">
                <img
                  src="/erp.png"
                  alt="Industrial Asset and Inventory Management"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white shadow-xl flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-keshav-300 block">
                        Multi-Store & Plant Assets
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-white">
                        Connected Yards, Stores & Machinery
                      </h4>
                    </div>
                    <span className="bg-keshav-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-lg shrink-0">
                      Module 02
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LIVE ERP CONSOLE MOCKUP WITH ERP2.PNG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-keshav-700" />
            <span>Live System Experience</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            Centralized Asset & Multi-Store Stock Console
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Inspect real-time machinery logs, multi-store stock levels, project requisitions, and material receipt notes directly from the ERP console.
          </p>
        </div>

        {/* Software Window Shell */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-900 shadow-2xl">
          {/* Window Top Navigation Bar */}
          <div className="bg-slate-950/95 border-b border-slate-800 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/90" />
              <div className="w-3 h-3 rounded-full bg-amber-400/90" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
              <span className="text-xs font-mono text-slate-400 pl-3 hidden sm:inline">
                InfraFab ERP • Operations • Asset & Inventory Management Console
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-keshav-400 animate-pulse" />
              <span className="text-[11px] font-bold text-keshav-300 font-mono">LIVE ERP VIEW</span>
            </div>
          </div>

          {/* ERP Screen Image erp2.png */}
          <div className="relative group overflow-hidden bg-slate-950">
            <img
              src="/erp2.png"
              alt="InfraFab ERP Asset and Inventory Management Screen"
              className="w-full h-auto object-cover object-top hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES (9 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-keshav-700" />
            <span>Core Capabilities</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            Key Features of Asset & Inventory ERP
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Everything required to manage plant machinery, monitor store issues, and track raw materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSET_FEATURES.map((feature, idx) => {
            const IconComp = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-keshav-500 p-6 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-keshav-100 to-lime-100 text-keshav-800 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-keshav-500 group-hover:text-slate-950 transition-all duration-300 shadow-2xs">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-950 mb-1.5 group-hover:text-keshav-900 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BUSINESS BENEFITS (6 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-keshav-700" />
            <span>Operational Value</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            Measurable Business Benefits
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Delivering complete inventory accountability and proactive equipment uptime for steel fabrication teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSET_BENEFITS.map((benefit, idx) => {
            const IconComp = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-white via-slate-50/50 to-keshav-50/20 border border-slate-200/90 hover:border-keshav-400 p-6 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-keshav-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <IconComp className="w-5 h-5 stroke-[2.4]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-950 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ONE PLATFORM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-keshav-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-keshav-300">
              <Sparkles className="w-3.5 h-3.5 text-keshav-300" />
              <span>Heavy Industry ERP</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              One Platform. Complete Asset Control.{' '}
              <span className="text-keshav-400">Zero Material Wastage.</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
              Bring machinery maintenance, multi-store stock, digital indents, and raw material tracking together in a unified ERP system.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4">
              <button
                onClick={onOpenDemoModal}
                className="btn-gradient px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-lg hover:brightness-105 transition cursor-pointer active:scale-95"
              >
                <span>Book 1-on-1 Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/modules/employee-user-management"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Switch to Employee Module</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
