import React from 'react';
import { 
  Building2, Factory, Disc, Check, ArrowRight, 
  ShieldCheck, Award, KeyRound, ExternalLink,
  Users, UserCheck, Clock, Wrench, PackageCheck,
  FolderKanban, BarChart3, Layers, Sparkles, CheckCircle2
} from 'lucide-react';
import { SOLUTIONS_DATA, IndustrySolution } from '../data/solutionsData';
import { TailoredSolutionsAccordion } from '../components/TailoredSolutionsAccordion';

interface SolutionsPageProps {
  onOpenLiveModal?: () => void;
  onOpenDemoModal: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenLiveModal, onOpenDemoModal }) => {
  const LIVE_ERP_DASHBOARD_URL = "https://erp.shreejiinfrastructure.com/dashboard";

  const ERP_CORE_PILLARS = [
    {
      icon: FolderKanban,
      title: 'Our Company Project List',
      desc: 'Centralized project portfolio tracking BOQ, drawing revisions, fabrication stages, and client milestone billing.',
      route: '/projects/list'
    },
    {
      icon: Wrench,
      title: 'Project Assets & Machinery',
      desc: 'Plant equipment tracking for EOT cranes, CNC plasma beds, SAW welders, mobile hydras, and preventive maintenance.',
      route: '/assets/machinery'
    },
    {
      icon: PackageCheck,
      title: 'Multi-Store Inventory',
      desc: 'Raw steel yard, coils, plates, consumables (electrodes, paint, gas), digital store indents, and safety stock alerts.',
      route: '/inventory/store'
    },
    {
      icon: Users,
      title: 'Teams & Team Members',
      desc: 'Structure workforce and contractor gangs into specialized fabrication teams with designated leaders and bay scheduling.',
      route: '/teams/list'
    },
    {
      icon: Clock,
      title: 'Attendance & Set Designation',
      desc: 'Biometric and mobile shift attendance logging, designation masters (Fitter, 6G Welder, Rigger), and verified piece-rate pay.',
      route: '/attendance/daily'
    },
    {
      icon: UserCheck,
      title: 'User Management & Roles',
      desc: 'Granular role-based access control (RBAC), multi-level authorization, supervisor logins, and immutable audit logs.',
      route: '/users/roles'
    },
    {
      icon: Building2,
      title: 'Department Hierarchy',
      desc: 'Structured departmental sync across Engineering, Production, Quality, Stores, Logistics, and Accounts.',
      route: '/departments/list'
    },
    {
      icon: BarChart3,
      title: 'Executive Reports & DPR',
      desc: 'Automated 6:00 PM Daily Production Report (DPR), team attendance, store consumption, and scrap yield analytics.',
      route: '/reports/production'
    }
  ];

  return (
    <div className="space-y-16 pb-20 bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-keshav-50/70 via-white to-slate-50 py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-keshav-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
            End-to-End ERP Solution for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-keshav-800">
              Steel Fabricators & Infrastructure EPC
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
            A complete ERP platform built for steel manufacturing. Seamlessly manage User Access, Departments, Teams, Attendance & Designation, Project Assets, Store Inventory, Company Project List, and Executive Reports.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <button
              onClick={onOpenDemoModal}
              className="btn-gradient px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 shadow-md hover:brightness-105 transition cursor-pointer"
            >
              <span>Schedule Solution Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. CORE ERP SOFTWARE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-black tracking-widest text-keshav-700 bg-keshav-100 px-3 py-1 rounded-full border border-keshav-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-keshav-600" />
            <span>Core Software Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            What's Inside Our ERP Software
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 font-medium">
            Explore the 8 integrated modules powering our enterprise steel production ERP.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ERP_CORE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200 hover:border-keshav-400 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-keshav-50 border border-keshav-200 text-keshav-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 group-hover:text-keshav-800 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="font-bold text-keshav-700">{pillar.route}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-keshav-600" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TAILORED INDUSTRY SOLUTIONS HORIZONTAL ACCORDION SLATS (JEENWEB TECH-STACK UI CLONE) */}
      <TailoredSolutionsAccordion onOpenDemoModal={onOpenDemoModal} />

    </div>
  );
};
