import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  QrCode, 
  ScanQrCode, 
  Truck, 
  FolderKanban, 
  Boxes, 
  ShieldCheck, 
  Database, 
  UserCheck, 
  Eye, 
  Layers, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Users, 
  PackageCheck,
  Smartphone,
  Lock,
  SlidersHorizontal,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface DispatchQrPageProps {
  onOpenDemoModal: () => void;
}

// 10 KEY FEATURES FROM USER PROMPT
const KEY_FEATURES = [
  {
    title: '1. Project Creation & Management',
    description: 'Create, update, and manage project information from a centralized dashboard. Maintain organized project records and monitor project-related activities.',
    icon: FolderKanban,
  },
  {
    title: '2. Project-Wise Product Tracking',
    description: 'Organize products and materials according to their respective projects, making it easier to identify and access project-related product information.',
    icon: Boxes,
  },
  {
    title: '3. Dispatch Management',
    description: 'Manage product dispatch activities, maintain dispatch records, and track the materials dispatched against different projects.',
    icon: Truck,
  },
  {
    title: '4. QR Code-Based Product Identification',
    description: 'Generate QR codes for dispatched products, allowing users to scan and access relevant product information quickly and conveniently.',
    icon: QrCode,
  },
  {
    title: '5. Product Information Through QR Scanning',
    description: 'Access available product details through QR code scanning, reducing manual searching and improving product identification.',
    icon: ScanQrCode,
  },
  {
    title: '6. Controlled Information Sharing',
    description: 'Manage which product and project details are accessible through QR code scanning based on the intended audience.',
    icon: ShieldCheck,
  },
  {
    title: '7. Full Information Access',
    description: 'Provide authorized internal users with access to comprehensive product and project information for operational tracking and management.',
    icon: Database,
  },
  {
    title: '8. Client-Specific Information Access',
    description: 'Allow clients to view selected product and dispatch information without exposing confidential internal business records.',
    icon: UserCheck,
  },
  {
    title: '9. Customizable Information Visibility',
    description: 'Control how much information is displayed to clients, helping businesses share relevant details while maintaining information privacy.',
    icon: SlidersHorizontal,
  },
  {
    title: '10. Centralized Project & Dispatch Records',
    description: 'Maintain project information, product records, dispatch activities, and QR code references within one organized system.',
    icon: Layers,
  },
];

// 7 BUSINESS BENEFITS FROM USER PROMPT
const BUSINESS_BENEFITS = [
  {
    title: 'Better Project Organization',
    description: 'Maintain structured project records and product information.',
    icon: FolderKanban,
  },
  {
    title: 'Improved Dispatch Visibility',
    description: 'Organize and monitor product dispatch activities.',
    icon: Truck,
  },
  {
    title: 'Faster Product Identification',
    description: 'Access product information conveniently through QR code scanning.',
    icon: QrCode,
  },
  {
    title: 'Controlled Data Sharing',
    description: 'Decide which product details are visible to internal users and clients.',
    icon: ShieldCheck,
  },
  {
    title: 'Improved Client Transparency',
    description: 'Provide clients with relevant product information without unnecessary manual communication.',
    icon: CheckCircle2,
  },
  {
    title: 'Reduced Manual Work',
    description: 'Simplify product identification, information retrieval, and dispatch record management.',
    icon: Zap,
  },
  {
    title: 'Better Operational Coordination',
    description: 'Connect project, product, dispatch, and client information in one system.',
    icon: TrendingUp,
  },
];

// 3 QR CODE INFORMATION ACCESS TIERS FROM USER PROMPT
const QR_ACCESS_TIERS = [
  {
    title: 'Internal / Full Information View',
    badge: 'Internal Authorized Teams',
    description: 'Designed for authorized company users who require complete product, project, and dispatch information.',
    details: 'Possible information includes project details, product identification, material specifications, dispatch records, and internal tracking information.',
    icon: Lock,
    accent: 'from-blue-50 to-indigo-50/60 border-blue-200',
    iconColor: 'bg-blue-600 text-white',
    fields: ['Project ID & Cost Code', 'Fabrication Drawings & Heat #', 'Complete Dispatch & Vehicle Logs', 'Internal QA/QC Inspection Notes', 'Departmental Ownership'],
  },
  {
    title: 'Client Information View',
    badge: 'Customer & Site Client View',
    description: 'Designed to provide customers with relevant product and dispatch details through QR scanning.',
    details: 'Share selected details such as product identification, specifications, project references, and dispatch information according to the configured access settings.',
    icon: UserCheck,
    accent: 'from-keshav-50 to-lime-50/60 border-keshav-300',
    iconColor: 'bg-keshav-500 text-slate-950',
    fields: ['Client Project Reference', 'Product Mark & Dimensions', 'Dispatch Date & Delivery Note #', 'Material Test Certificate (MTC)', 'Erection Site Instructions'],
  },
  {
    title: 'Custom / Limited Information View',
    badge: 'Audience-Specific Privacy',
    description: 'Control the specific fields visible when a QR code is scanned, ensuring that different users receive only the information intended for them.',
    details: 'Customizable information visibility allows you to configure exact fields per client or project contract, safeguarding sensitive business data.',
    icon: SlidersHorizontal,
    accent: 'from-slate-50 to-amber-50/50 border-amber-200',
    iconColor: 'bg-amber-600 text-white',
    fields: ['Custom Dynamic Fields', 'Restricted Financials & Margin', 'Masked Subcontractor Data', 'Public Verification Token', 'Configurable Expiry Dates'],
  },
];

export const DispatchQrPage: React.FC<DispatchQrPageProps> = ({ onOpenDemoModal }) => {
  return (
    <div className="pb-24 bg-white text-slate-900 space-y-12">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-keshav-50/70 via-white to-slate-50 text-slate-900">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.10] scale-105 mix-blend-multiply"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85')` 
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-keshav-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lime-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10 space-y-5">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 border border-keshav-300 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-keshav-900 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-keshav-600 animate-pulse" />
            <span>MODULE 03 — Project, Dispatch & QR Code Management</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] text-slate-950">
            Manage Every Project. Track Every Dispatch.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
              Share the Right Information.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Simplify project management, product dispatch tracking, and client communication through one centralized ERP system.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={onOpenDemoModal}
              className="btn-gradient px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-lg hover:brightness-105 transition cursor-pointer active:scale-95"
            >
              <span>Book 1-on-1 Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/modules/employee-user-management"
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black shadow-xs flex items-center gap-2 transition cursor-pointer"
            >
              <Users className="w-4 h-4 text-keshav-600" />
              <span>Explore All ERP Modules</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MODULE SWITCHER TABS (3 MODULES) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-center gap-2 shadow-2xs">
          <Link
            to="/modules/employee-user-management"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white/70 transition"
          >
            <Users className="w-4 h-4 text-slate-500" />
            <span>1. Employee & User Management</span>
          </Link>
          <Link
            to="/modules/asset-inventory-management"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white/70 transition"
          >
            <PackageCheck className="w-4 h-4 text-slate-500" />
            <span>2. Asset & Inventory Management</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-white text-slate-900 shadow-xs border border-slate-200">
            <QrCode className="w-4 h-4 text-keshav-600" />
            <span>3. Dispatch & QR Code Management</span>
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
                <QrCode className="w-3.5 h-3.5 text-keshav-700" />
                <span>Project, Dispatch & QR Code Management</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
                Manage Every Project. Track Every Dispatch.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
                  Share the Right Information.
                </span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                Simplify project management, product dispatch tracking, and client communication through one centralized ERP system.
              </p>

              <div className="bg-gradient-to-r from-keshav-50 to-lime-50/50 border border-keshav-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-keshav-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  Our <span className="text-keshav-800 font-black">Project, Dispatch & QR Code Management</span> module helps businesses organize project information, maintain dispatch records, generate QR codes for product identification, and control the information shared with clients.
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                From project creation and product dispatch to QR code scanning and client-specific information access, everything is managed through one connected platform.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="btn-gradient px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-md hover:brightness-105 transition cursor-pointer active:scale-95"
                >
                  <span>Schedule QR Walkthrough</span>
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

            {/* Right Card: Interactive Simulated QR Dispatch Tag */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 text-white group">
                
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-keshav-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-keshav-500 text-slate-950 flex items-center justify-center font-black">
                        <QrCode className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-keshav-300 font-bold uppercase tracking-wider block">
                          Live QR Scanner
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-white">
                          Smart Dispatch Verification
                        </h4>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-keshav-500/20 text-keshav-300 border border-keshav-400/40 px-2 py-0.5 rounded-full">
                      VERIFIED
                    </span>
                  </div>

                  {/* QR Code Graphical Visual */}
                  <div className="bg-white p-4 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center space-y-2">
                      <div className="w-40 h-40 mx-auto bg-slate-950 p-2.5 rounded-xl flex items-center justify-center relative shadow-inner">
                        <QrCode className="w-32 h-32 text-white stroke-[1.8]" />
                        <div className="absolute inset-0 border-2 border-keshav-400/80 rounded-xl animate-pulse pointer-events-none" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-800 block">
                        SCAN-ID: INF-PRJ-8842-MB
                      </span>
                    </div>
                  </div>

                  {/* Scanned Payload Preview Card */}
                  <div className="bg-slate-900/90 border border-white/15 rounded-xl p-3.5 space-y-2 text-xs">
                    <div className="flex justify-between items-center text-slate-400 border-b border-white/10 pb-1.5">
                      <span>Project:</span>
                      <span className="text-white font-bold">Viaduct Pier Girders #04</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400 border-b border-white/10 pb-1.5">
                      <span>Dispatch Ref:</span>
                      <span className="text-keshav-300 font-mono font-bold">DSP-2026-9921</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Client Access Mode:</span>
                      <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded">
                        Controlled Client View
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. QR CODE INFORMATION ACCESS ARCHITECTURE (3 TIERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
            <ScanQrCode className="w-3.5 h-3.5 text-keshav-700" />
            <span>Tiered Security Architecture</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            QR Code Information Access
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Decide exactly what data gets shared when a QR code is scanned: comprehensive internal specs or client-safe dispatch verification.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {QR_ACCESS_TIERS.map((tier, idx) => {
            const TierIcon = tier.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-b ${tier.accent} border-2 rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:shadow-2xl hover:scale-[1.01] transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${tier.iconColor} flex items-center justify-center font-bold shadow-xs`}>
                      <TierIcon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-bold font-mono px-3 py-1 rounded-full bg-white/90 border border-slate-200 text-slate-800 shadow-2xs">
                      {tier.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-slate-950 mb-2">
                      {tier.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed mb-2">
                      {tier.description}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-medium">
                      {tier.details}
                    </p>
                  </div>
                </div>

                {/* Visible Fields Checklist */}
                <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Accessible Information:
                  </span>
                  <div className="space-y-1.5">
                    {tier.fields.map((field, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-keshav-700 shrink-0 stroke-[2.5]" />
                        <span>{field}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 4. LIVE SOFTWARE CONSOLE MOCKUP WITH ERP-DISPATCH.PNG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-keshav-700" />
            <span>Live System Experience</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            Project Dispatch & QR Tracking Console
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Inspect real-time dispatch schedules, vehicle gate passes, project-wise delivery logs, and generated QR code matrices directly from the ERP console.
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
                InfraFab ERP • Projects & Logistics • Dispatch & QR Code Console
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-keshav-400 animate-pulse" />
              <span className="text-[11px] font-bold text-keshav-300 font-mono">LIVE ERP VIEW</span>
            </div>
          </div>

          {/* ERP Screen Image erp-dispatch.png */}
          <div className="relative group overflow-hidden bg-slate-950">
            <img
              src="/erp-dispatch.png"
              alt="InfraFab ERP Dispatch and QR Code Management Screen"
              className="w-full h-auto object-cover object-top hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 5. KEY FEATURES (10 CARDS FROM USER PROMPT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-keshav-700" />
            <span>Core Capabilities</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            Key Features
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            From project creation and QR tagging to vehicle dispatches and client access permissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_FEATURES.map((feature, idx) => {
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

      {/* 6. BUSINESS BENEFITS (7 CARDS FROM USER PROMPT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-keshav-700" />
            <span>Operational Value</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            Business Benefits
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Streamlining product identification, client trust, and delivery verification for steel fabrication projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_BENEFITS.map((benefit, idx) => {
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

      {/* 7. ONE PLATFORM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-keshav-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-keshav-300">
              <Sparkles className="w-3.5 h-3.5 text-keshav-300" />
              <span>Complete Project & Dispatch Tracking</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              One Platform. Complete Project Visibility.{' '}
              <span className="text-keshav-400">Smarter Dispatch & QR Tracking.</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
              Manage projects, organize dispatches, identify products using QR codes, and share the right information with the right people—all through one centralized ERP system.
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
                <span>Switch to Employee & User Module</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
