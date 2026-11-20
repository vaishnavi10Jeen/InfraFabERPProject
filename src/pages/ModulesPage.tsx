import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Layers, 
  Target, 
  TrendingUp, 
  ShieldCheck,
  CalendarCheck2,
  FileSpreadsheet,
  UserCog,
  Building2,
  BadgeCheck,
  Users,
  FolderKanban,
  Zap,
  CheckCircle2,
  Lock,
  Eye,
  Shield,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModulesPageProps {
  onOpenLiveModal?: () => void;
  onOpenDemoModal: () => void;
}

const KEY_BENEFITS = [
  {
    title: 'Centralized Management',
    description: 'Manage essential business information from a single platform.',
    icon: Layers,
  },
  {
    title: 'Better Accuracy',
    description: 'Reduce repetitive data entry and manual record-keeping errors.',
    icon: Target,
  },
  {
    title: 'Improved Productivity',
    description: 'Simplify daily administrative tasks and operational workflows.',
    icon: TrendingUp,
  },
  {
    title: 'Secure Access',
    description: 'Control information access according to user responsibilities.',
    icon: ShieldCheck,
  },
];

const WORKFORCE_FEATURES = [
  {
    title: 'Employee Attendance Tracking',
    description: 'Maintain daily attendance records and monitor employee working days.',
    icon: CalendarCheck2,
  },
  {
    title: 'Attendance History & Reports',
    description: 'Access employee-wise attendance history and generate structured attendance reports.',
    icon: FileSpreadsheet,
  },
  {
    title: 'User Account Management',
    description: 'Create, update, and manage employee user accounts from one centralized system.',
    icon: UserCog,
  },
  {
    title: 'Role-Based Access Control',
    description: 'Assign user roles and manage system permissions according to employee responsibilities.',
    icon: Lock,
  },
  {
    title: 'Department Creation & Management',
    description: 'Create, update, and organize company departments to maintain a structured organizational system.',
    icon: Building2,
  },
  {
    title: 'Designation Creation & Management',
    description: 'Define and manage employee designations, job titles, and positions within different departments.',
    icon: BadgeCheck,
  },
  {
    title: 'Team Creation & Management',
    description: 'Create teams, assign employees to teams, and maintain organized team structures for better coordination.',
    icon: Users,
  },
  {
    title: 'Centralized Employee Records',
    description: 'Maintain employee profiles, attendance details, department information, designations, and team assignments in one place.',
    icon: FolderKanban,
  },
  {
    title: 'Simplified Administration',
    description: 'Reduce manual record-keeping and streamline employee, department, designation, team, and user management.',
    icon: Zap,
  },
];

const WORKFORCE_BENEFITS = [
  {
    title: 'Improved Workforce Visibility',
    description: 'Access organized employee information and attendance records.',
    icon: Eye,
  },
  {
    title: 'Better Organizational Structure',
    description: 'Manage departments, designations, and teams through a centralized system.',
    icon: Building2,
  },
  {
    title: 'Efficient Team Coordination',
    description: 'Keep employee assignments and team information organized.',
    icon: Users,
  },
  {
    title: 'Reduced Administrative Workload',
    description: 'Simplify routine workforce management and record-keeping.',
    icon: Zap,
  },
  {
    title: 'Accurate Employee Records',
    description: 'Maintain consistent employee information across departments and teams.',
    icon: CheckCircle2,
  },
  {
    title: 'Controlled System Access',
    description: 'Ensure employees have appropriate access based on their assigned roles and responsibilities.',
    icon: Shield,
  },
];

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

      {/* 3. KEY BENEFITS SECTION (IMAGE-MATCHED CIRCULAR CARDS WITH HEXAGON BADGES) */}
      <section className="relative py-16 sm:py-24 border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-keshav-50/20 overflow-hidden">
        
        {/* Ambient Theme Radial Glows */}
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-keshav-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Geometric Background Lattice */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e293b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-4 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-keshav-700" />
              <span>Key Benefits</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
              Key Benefits of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
                Our ERP Solution
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              Empowering steel fabrication, PEB, and infrastructure teams with a unified, accurate, and secure operational backbone.
            </p>
          </div>

          {/* 4 Circular Cards with Hexagon Badges Grid matching the attached image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-5 xl:gap-8 justify-items-center">
            {KEY_BENEFITS.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center group pt-12 sm:pt-14 w-full max-w-[270px]"
                >
                  {/* Top Overlapping Pointy-Topped Hexagon Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-20 h-24 sm:w-22 sm:h-26 drop-shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <svg viewBox="0 0 90 102" className="w-full h-full">
                      <defs>
                        <linearGradient id={`hex-grad-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#A6D247" />
                          <stop offset="35%" stopColor="#8CC12C" />
                          <stop offset="100%" stopColor="#5E8617" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="45,3 86,26.5 86,75.5 45,99 4,75.5 4,26.5"
                        fill={`url(#hex-grad-${idx})`}
                        stroke="#ffffff"
                        strokeWidth="4"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {/* White Icon Inside Hexagon */}
                    <div className="absolute inset-0 flex items-center justify-center text-white pb-0.5">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2] drop-shadow-xs" />
                    </div>
                  </div>

                  {/* Circular Body Card with Theme Green Ring Border */}
                  <div className="w-full aspect-square rounded-full bg-white border-[3.5px] border-keshav-500 shadow-xl group-hover:shadow-2xl group-hover:border-keshav-600 transition-all duration-300 flex flex-col items-center justify-center text-center px-5 sm:px-6 pt-12 sm:pt-14 pb-5 group-hover:-translate-y-1">
                    <h3 className="text-sm sm:text-base xl:text-lg font-black text-slate-950 mb-2 leading-snug tracking-tight group-hover:text-keshav-900 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs xl:text-sm text-slate-600 font-medium leading-relaxed max-w-[200px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Highlight Banner */}
          <div className="mt-16 sm:mt-20 max-w-4xl mx-auto bg-gradient-to-r from-keshav-50 via-white to-lime-50/60 border border-keshav-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-base sm:text-lg font-black text-slate-950">
                Ready to experience these benefits in your business?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Get a personalized walkthrough with our ERP specialists today.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenDemoModal}
                className="btn-gradient px-6 py-3 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-md hover:brightness-105 transition cursor-pointer active:scale-95"
              >
                <span>Schedule Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WORKFORCE & EMPLOYEE MANAGEMENT MODULE (WITH B2.JPG & ERP1.PNG) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
        
        {/* PART 1: OVERVIEW SPLIT LAYOUT WITH B2.JPG */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-keshav-50/20 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
                <Users className="w-3.5 h-3.5 text-keshav-700" />
                <span>Employee & User Management</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
                Manage Your Workforce. Organize Teams.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
                  Control Every Access.
                </span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                Simplify employee attendance, user administration, department management, designations, and team organization through one centralized ERP system.
              </p>

              <div className="bg-gradient-to-r from-keshav-50 to-lime-50/50 border border-keshav-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-keshav-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  Our <span className="text-keshav-800 font-black">Employee & User Management</span> module helps businesses maintain accurate attendance records, manage employee information, create departments and designations, organize teams, and control system access efficiently.
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                From tracking daily attendance to assigning roles, managing departments, and organizing team structures, everything is connected within one platform for smoother workforce administration.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="btn-gradient px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-md hover:brightness-105 transition cursor-pointer active:scale-95"
                >
                  <span>Schedule Workforce Walkthrough</span>
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

            {/* Right Image: b2.jpg */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl group bg-slate-950">
                <img
                  src="/b2.jpg"
                  alt="Workforce and Team Management"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Bottom Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white shadow-xl flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-keshav-300 block">
                        Workforce Coordination
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-white">
                        Connected Team & Attendance Structure
                      </h4>
                    </div>
                    <span className="bg-keshav-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-lg shrink-0">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* PART 2: LIVE ERP INTERFACE CONSOLE MOCKUP WITH ERP1.PNG */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-keshav-700" />
              <span>Live System Experience</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Intuitive ERP Control Console for Entire Workforce
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
              Inspect real-time user accounts, team allocations, departmental records, and daily attendance logs directly from the centralized dashboard console.
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
                  InfraFab ERP • Administration • Employee & User Management Console
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-keshav-400 animate-pulse" />
                <span className="text-[11px] font-bold text-keshav-300 font-mono">LIVE ERP VIEW</span>
              </div>
            </div>

            {/* ERP Screen Image erp1.png */}
            <div className="relative group overflow-hidden bg-slate-950">
              <img
                src="/erp1.png"
                alt="InfraFab ERP Employee and User Management Screen"
                className="w-full h-auto object-cover object-top hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* PART 3: KEY FEATURES (9 CARDS) */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-keshav-700" />
              <span>Core Capabilities</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Key Features
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
              Everything required to configure workforce structure, track working days, and secure enterprise data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFORCE_FEATURES.map((feature, idx) => {
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
        </div>

        {/* PART 4: BUSINESS BENEFITS (6 CARDS) */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5 text-keshav-700" />
              <span>Measurable Value</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Business Benefits
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
              Empowering leadership and department heads with streamlined records and full organizational accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFORCE_BENEFITS.map((benefit, idx) => {
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
        </div>

        {/* PART 5: ONE PLATFORM BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-keshav-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-keshav-300">
              <Sparkles className="w-3.5 h-3.5 text-keshav-300" />
              <span>Unified Workforce Platform</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              One Platform. Better Workforce Management.{' '}
              <span className="text-keshav-400">Smarter Team Organization.</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
              Bring employees, departments, designations, teams, attendance, and user access together in a unified ERP environment for efficient business operations.
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
                to="/solutions"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer flex items-center gap-2"
              >
                <span>Explore All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
