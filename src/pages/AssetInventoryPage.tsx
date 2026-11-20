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
  CheckCircle2, 
  Users, 
  Boxes,
  ArrowDownToLine,
  ArrowUpFromLine,
  FileBarChart,
  Warehouse,
  Tag,
  Activity,
  Database,
  Zap,
  UserCheck,
  Eye,
  TrendingUp,
  Building2,
  Package,
  QrCode
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AssetInventoryPageProps {
  onOpenDemoModal: () => void;
}

// 12 KEY FEATURES FROM USER PROMPT
const KEY_FEATURES = [
  {
    title: 'Asset Registration & Management',
    description: 'Create, update, and maintain detailed records of company assets, including machinery, equipment, tools, and other resources.',
    icon: Wrench,
  },
  {
    title: 'Asset Categories & Classification',
    description: 'Organize assets into structured categories for easier identification, tracking, and management.',
    icon: Tag,
  },
  {
    title: 'Asset Allocation & Tracking',
    description: 'Assign assets to employees, departments, or teams and maintain organized allocation records.',
    icon: UserCheck,
  },
  {
    title: 'Asset Status Monitoring',
    description: 'Track asset availability, condition, and operational status for better resource management.',
    icon: Activity,
  },
  {
    title: 'Inventory Item Management',
    description: 'Create and manage inventory items, materials, product details, and stock information from one centralized system.',
    icon: PackageCheck,
  },
  {
    title: 'Inventory Categories Management',
    description: 'Create, update, and organize inventory categories for systematic material classification.',
    icon: Boxes,
  },
  {
    title: 'Stock Inward Management',
    description: 'Record incoming materials, received quantities, and inventory additions.',
    icon: ArrowDownToLine,
  },
  {
    title: 'Stock Outward Management',
    description: 'Track issued, dispatched, or allocated materials and maintain stock movement records.',
    icon: ArrowUpFromLine,
  },
  {
    title: 'Stock Availability Monitoring',
    description: 'View available stock quantities and maintain accurate inventory information.',
    icon: Layers,
  },
  {
    title: 'Asset & Inventory Reports',
    description: 'Generate organized reports of assets, allocation records, stock levels, and material movements.',
    icon: FileBarChart,
  },
  {
    title: 'Centralized Resource Records',
    description: 'Keep asset details, inventory information, and stock movement history organized in one platform.',
    icon: Database,
  },
  {
    title: 'Simplified Administration',
    description: 'Reduce manual record-keeping and streamline asset tracking, inventory monitoring, and material management.',
    icon: Zap,
  },
];

// 7 BUSINESS BENEFITS FROM USER PROMPT
const BUSINESS_BENEFITS = [
  {
    title: 'Better Asset Visibility',
    description: 'Maintain a clear overview of company-owned equipment, machinery, and resources.',
    icon: Eye,
  },
  {
    title: 'Improved Inventory Control',
    description: 'Monitor stock availability and material movements more efficiently.',
    icon: Boxes,
  },
  {
    title: 'Enhanced Resource Accountability',
    description: 'Keep track of asset assignments and inventory transactions.',
    icon: ShieldCheck,
  },
  {
    title: 'Reduced Administrative Workload',
    description: 'Simplify asset registration, stock updates, and routine inventory management.',
    icon: Zap,
  },
  {
    title: 'Accurate Stock Records',
    description: 'Maintain organized inward and outward stock information to reduce recording errors.',
    icon: CheckCircle2,
  },
  {
    title: 'Efficient Resource Utilization',
    description: 'Make better use of available assets and materials with improved operational visibility.',
    icon: TrendingUp,
  },
  {
    title: 'Organized Business Operations',
    description: 'Bring asset management and inventory activities into one connected system.',
    icon: Building2,
  },
];

// 6 RADIAL DIAGRAM NODES MATCHING THE USER'S ATTACHED IMAGE
const RADIAL_NODES = [
  {
    id: 'stock-items',
    title: 'Stock Items & Categories',
    icon: Boxes,
    iconBg: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-200',
    position: 'top',
  },
  {
    id: 'stock-inward',
    title: 'Stock Inward (Receive)',
    icon: ArrowDownToLine,
    iconBg: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-emerald-200',
    position: 'top-right',
  },
  {
    id: 'stock-outward',
    title: 'Stock Outward (Issue / Dispatch)',
    icon: ArrowUpFromLine,
    iconBg: 'bg-amber-50 text-amber-600',
    borderColor: 'border-amber-200',
    position: 'bottom-right',
  },
  {
    id: 'inventory-reports',
    title: 'Inventory Reports',
    icon: FileBarChart,
    iconBg: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-200',
    position: 'bottom',
  },
  {
    id: 'stock-availability',
    title: 'Stock Availability',
    icon: Layers,
    iconBg: 'bg-sky-50 text-sky-600',
    borderColor: 'border-sky-200',
    position: 'bottom-left',
  },
  {
    id: 'item-management',
    title: 'Item Management',
    icon: PackageCheck,
    iconBg: 'bg-orange-50 text-orange-600',
    borderColor: 'border-orange-200',
    position: 'top-left',
  },
];

export const AssetInventoryPage: React.FC<AssetInventoryPageProps> = ({ onOpenDemoModal }) => {
  return (
    <div className="pb-24 bg-white text-slate-900 space-y-12">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-keshav-50/70 via-white to-slate-50 text-slate-900">
        {/* Background Image Layer with b3.jpg */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.14] scale-105 mix-blend-multiply"
          style={{ 
            backgroundImage: `url('/b3.jpg')` 
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-keshav-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lime-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10 space-y-5">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 border border-keshav-300 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-keshav-900 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-keshav-600 animate-pulse" />
            <span>MODULE 02 — Asset & Inventory Management</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] text-slate-950">
            Track Every Asset.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
              Control Every Stock Movement.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Simplify asset tracking, inventory control, and material management with one centralized ERP system.
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
              <span>Switch to Employee & User Module</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-white text-slate-900 shadow-xs border border-slate-200">
            <PackageCheck className="w-4 h-4 text-keshav-600" />
            <span>2. Asset & Inventory Management</span>
            <span className="w-2 h-2 rounded-full bg-keshav-500 animate-pulse" />
          </div>
          <Link
            to="/modules/dispatch-qr-management"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white/70 transition"
          >
            <QrCode className="w-4 h-4 text-slate-500" />
            <span>3. Dispatch & QR Code Management</span>
          </Link>
        </div>
      </div>

      {/* 2. OVERVIEW SPLIT SECTION WITH B3.JPG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 via-white to-keshav-50/20 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-keshav-700" />
                <span>Centralized ERP Asset & Inventory</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.18]">
                Track Every Asset.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
                  Control Every Stock Movement.
                </span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                Simplify asset tracking, inventory control, and material management with one centralized ERP system.
              </p>

              <div className="bg-gradient-to-r from-keshav-50 to-lime-50/50 border border-keshav-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-keshav-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  Our <span className="text-keshav-800 font-black">Asset & Inventory Management</span> module helps businesses maintain accurate records of company assets, machinery, equipment, tools, stock items, and materials. From asset registration and allocation to stock inward, outward, and inventory monitoring, everything is managed through one connected platform.
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                The module provides better visibility into available resources, helps track asset assignments, and keeps inventory movements organized for smoother daily operations.
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

            {/* Right Card with b3.jpg */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl group bg-slate-950">
                <img
                  src="/b3.jpg"
                  alt="Industrial Asset and Inventory Management"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white shadow-xl flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-keshav-300 block">
                        Central Yard & Stores
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-white">
                        Connected Warehouse & Materials
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

      {/* 3. RADIAL INVENTORY FLOW DIAGRAM (MATCHING THE ATTACHED IMAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-3.5 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
            <Boxes className="w-3.5 h-3.5 text-keshav-700" />
            <span>Connected Operations</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            Inventory Management Organized.
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            From stock items & categories to inward receipt, stock availability, outward issue, and executive reports — all coordinated in one connected architecture.
          </p>
        </div>

        {/* DIAGRAM CONTAINER WITH THEME STYLING & RADIAL SPOKES */}
        <div className="relative rounded-3xl border-2 border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-keshav-50/30 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-xl">
          
          {/* Subtle Ambient Radial Glow & Watermark Background with b3.jpg */}
          <div 
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-cover bg-right-top opacity-[0.06] mix-blend-multiply pointer-events-none rounded-tr-3xl"
            style={{ backgroundImage: `url('/b3.jpg')` }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-keshav-100/40 rounded-full blur-3xl pointer-events-none" />

          {/* DESKTOP / TABLET RADIAL CANVAS */}
          <div className="hidden md:block relative w-full max-w-3xl mx-auto h-[540px] lg:h-[580px]">
            
            {/* Concentric Soft Wave Rings Around Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] rounded-full border-2 border-keshav-200/50 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] lg:w-[520px] lg:h-[520px] rounded-full border border-keshav-100/60 pointer-events-none" />

            {/* SVG Connecting Spokes from Center (50%, 50%) to 6 Nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="spoke-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8CC12C" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#5E8617" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Spoke 1: Top (400, 300) -> (400, 100) */}
              <line x1="400" y1="300" x2="400" y2="110" stroke="url(#spoke-grad)" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="400" cy="115" r="5" fill="#8CC12C" stroke="#ffffff" strokeWidth="2" />

              {/* Spoke 2: Top-Right (400, 300) -> (660, 190) */}
              <line x1="400" y1="300" x2="630" y2="190" stroke="url(#spoke-grad)" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="625" cy="190" r="5" fill="#8CC12C" stroke="#ffffff" strokeWidth="2" />

              {/* Spoke 3: Bottom-Right (400, 300) -> (660, 410) */}
              <line x1="400" y1="300" x2="630" y2="410" stroke="url(#spoke-grad)" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="625" cy="410" r="5" fill="#8CC12C" stroke="#ffffff" strokeWidth="2" />

              {/* Spoke 4: Bottom (400, 300) -> (400, 490) */}
              <line x1="400" y1="300" x2="400" y2="480" stroke="url(#spoke-grad)" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="400" cy="480" r="5" fill="#8CC12C" stroke="#ffffff" strokeWidth="2" />

              {/* Spoke 5: Bottom-Left (400, 300) -> (170, 410) */}
              <line x1="400" y1="300" x2="175" y2="410" stroke="url(#spoke-grad)" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="178" cy="410" r="5" fill="#8CC12C" stroke="#ffffff" strokeWidth="2" />

              {/* Spoke 6: Top-Left (400, 300) -> (170, 190) */}
              <line x1="400" y1="300" x2="175" y2="190" stroke="url(#spoke-grad)" strokeWidth="2.5" strokeDasharray="5 5" />
              <circle cx="178" cy="190" r="5" fill="#8CC12C" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* CENTER HUB */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-white border-4 border-keshav-500 shadow-2xl flex flex-col items-center justify-center p-4 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 text-amber-700 flex items-center justify-center mb-2 shadow-xs group-hover:rotate-6 transition-transform">
                <Warehouse className="w-9 h-9 lg:w-11 lg:h-11 stroke-[2.2] text-amber-600" />
              </div>
              <h4 className="text-sm lg:text-base font-black text-slate-950 leading-tight">
                Inventory
              </h4>
              <h4 className="text-sm lg:text-base font-black text-keshav-800 leading-tight">
                Management
              </h4>
            </div>

            {/* 1. TOP NODE: Stock Items & Categories */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-52 bg-white rounded-2xl border border-slate-200/90 shadow-lg p-3 text-center hover:scale-105 hover:border-keshav-400 transition-all duration-300">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5 shadow-2xs">
                <Boxes className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h5 className="text-xs font-black text-slate-900 leading-tight">
                Stock Items & Categories
              </h5>
            </div>

            {/* 2. TOP RIGHT NODE: Stock Inward (Receive) */}
            <div className="absolute top-[20%] right-2 lg:right-6 z-20 w-52 bg-white rounded-2xl border border-slate-200/90 shadow-lg p-3 text-center hover:scale-105 hover:border-keshav-400 transition-all duration-300">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 shadow-2xs">
                <ArrowDownToLine className="w-5 h-5 stroke-[2.4]" />
              </div>
              <h5 className="text-xs font-black text-slate-900 leading-tight">
                Stock Inward
              </h5>
              <span className="text-[10px] text-emerald-700 font-bold block">(Receive)</span>
            </div>

            {/* 3. BOTTOM RIGHT NODE: Stock Outward (Issue / Dispatch) */}
            <div className="absolute bottom-[20%] right-2 lg:right-6 z-20 w-52 bg-white rounded-2xl border border-slate-200/90 shadow-lg p-3 text-center hover:scale-105 hover:border-keshav-400 transition-all duration-300">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5 shadow-2xs">
                <ArrowUpFromLine className="w-5 h-5 stroke-[2.4]" />
              </div>
              <h5 className="text-xs font-black text-slate-900 leading-tight">
                Stock Outward
              </h5>
              <span className="text-[10px] text-amber-700 font-bold block">(Issue / Dispatch)</span>
            </div>

            {/* 4. BOTTOM NODE: Inventory Reports */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-52 bg-white rounded-2xl border border-slate-200/90 shadow-lg p-3 text-center hover:scale-105 hover:border-keshav-400 transition-all duration-300">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5 shadow-2xs">
                <FileBarChart className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h5 className="text-xs font-black text-slate-900 leading-tight">
                Inventory Reports
              </h5>
            </div>

            {/* 5. BOTTOM LEFT NODE: Stock Availability */}
            <div className="absolute bottom-[20%] left-2 lg:left-6 z-20 w-52 bg-white rounded-2xl border border-slate-200/90 shadow-lg p-3 text-center hover:scale-105 hover:border-keshav-400 transition-all duration-300">
              <div className="w-10 h-10 mx-auto rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-1.5 shadow-2xs">
                <Layers className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h5 className="text-xs font-black text-slate-900 leading-tight">
                Stock Availability
              </h5>
            </div>

            {/* 6. TOP LEFT NODE: Item Management */}
            <div className="absolute top-[20%] left-2 lg:left-6 z-20 w-52 bg-white rounded-2xl border border-slate-200/90 shadow-lg p-3 text-center hover:scale-105 hover:border-keshav-400 transition-all duration-300">
              <div className="w-10 h-10 mx-auto rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-1.5 shadow-2xs">
                <PackageCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h5 className="text-xs font-black text-slate-900 leading-tight">
                Item Management
              </h5>
            </div>

          </div>

          {/* MOBILE RESPONSIVE ADAPTATION (Clean card layout with central core) */}
          <div className="md:hidden space-y-4">
            {/* Center Core Card */}
            <div className="bg-white rounded-2xl border-2 border-keshav-500 shadow-md p-5 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-2 shadow-xs">
                <Warehouse className="w-9 h-9 stroke-[2.2]" />
              </div>
              <h4 className="text-base font-black text-slate-950">
                Inventory Management
              </h4>
              <p className="text-xs text-keshav-800 font-bold">
                Central Operation Hub
              </p>
            </div>

            {/* 6 Nodes in 2-Column Mobile Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {RADIAL_NODES.map((node) => {
                const NodeIcon = node.icon;
                return (
                  <div
                    key={node.id}
                    className="bg-white rounded-xl border border-slate-200 shadow-xs p-3 text-center flex flex-col items-center justify-center"
                  >
                    <div className={`w-9 h-9 rounded-lg ${node.iconBg} flex items-center justify-center mb-1.5 shadow-2xs`}>
                      <NodeIcon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-black text-slate-900 leading-tight">
                      {node.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. LIVE SOFTWARE CONSOLE MOCKUP WITH ERP2.PNG */}
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

      {/* 5. KEY FEATURES (12 CARDS FROM USER PROMPT) */}
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
            Comprehensive tools to track company assets, machinery, stock items, and material inward & outward movements.
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
            Delivering complete inventory accountability and proactive equipment uptime for steel fabrication teams.
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
              <span>Unified Asset & Inventory Environment</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              One Platform. Complete Asset Visibility.{' '}
              <span className="text-keshav-400">Smarter Inventory Control.</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
              Manage your company assets, track inventory movements, monitor available resources, and maintain organized records through a unified ERP system.
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
