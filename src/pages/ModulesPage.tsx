import React from 'react';
import { 
  ArrowRight, Check, Users, Wrench, PackageCheck, BarChart3, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModulesPageProps {
  onOpenLiveModal?: () => void;
  onOpenDemoModal: () => void;
}

export const ModulesPage: React.FC<ModulesPageProps> = ({ onOpenDemoModal }) => {
  return (
    <div className="pb-24 bg-white text-slate-900 space-y-12">
      
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
              href="#overview-section"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('overview-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black shadow-xs flex items-center gap-2 transition cursor-pointer"
            >
              <span>Explore All-in-One ERP ↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ALL-IN-ONE ERP OVERVIEW SECTION WITH B1.JPEG ON RIGHT */}
      <section id="overview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 scroll-mt-20">
        <div className="bg-gradient-to-br from-slate-50 via-white to-keshav-50/20 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: TEXT CONTENT */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-keshav-700" />
                <span>Everything Your Business Needs</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
                Everything Your Business Needs,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
                  All in One Place.
                </span>
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                <p className="text-slate-600">
                  Managing multiple departments, employees, assets, and inventory through separate systems can be time-consuming and complicated.
                </p>
                <p className="text-slate-900 font-bold">
                  Our ERP software brings essential business operations together in one organized platform, helping teams work more efficiently and management make informed decisions.
                </p>
              </div>

              {/* 4 Feature Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-3 bg-white border border-slate-200 p-3.5 rounded-2xl shadow-2xs hover:border-keshav-400 transition">
                  <div className="w-9 h-9 rounded-xl bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">Employee Records</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Departments, roles & attendance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 p-3.5 rounded-2xl shadow-2xs hover:border-keshav-400 transition">
                  <div className="w-9 h-9 rounded-xl bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">Company Assets</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Machinery, cranes & maintenance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 p-3.5 rounded-2xl shadow-2xs hover:border-keshav-400 transition">
                  <div className="w-9 h-9 rounded-xl bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0 mt-0.5">
                    <PackageCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">Tracking Inventory</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Raw materials, stock & indents</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 p-3.5 rounded-2xl shadow-2xs hover:border-keshav-400 transition">
                  <div className="w-9 h-9 rounded-xl bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0 mt-0.5">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">Reviewing Reports</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Daily DPR & analytics</p>
                  </div>
                </div>
              </div>

              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-keshav-50 to-lime-50/50 border border-keshav-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-keshav-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  Whether you're managing employee records, monitoring company assets, tracking inventory, or reviewing reports, everything stays connected and accessible.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="btn-gradient px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-md hover:brightness-105 transition cursor-pointer active:scale-95"
                >
                  <span>Schedule ERP Walkthrough</span>
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

            {/* RIGHT SIDE: IMAGE B1.JPEG */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl group bg-slate-950">
                <img
                  src="/b1.jpeg"
                  alt="Everything Your Business Needs, All in One Place"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white shadow-xl flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-keshav-300 block">
                        Enterprise Steel & Infra ERP
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-white">
                        Connected Multi-Department Platform
                      </h4>
                    </div>
                    <span className="bg-keshav-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-lg shrink-0">
                      All-in-One
                    </span>
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
