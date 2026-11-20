import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, KeyRound, 
  ExternalLink, Disc, Cpu, ShieldCheck, Truck, 
  PackageCheck, FolderKanban, Users, BarChart3, 
  Smartphone, AlertTriangle, Layers, Clock, TrendingUp, 
  Building2, Factory, ShieldAlert, Award, FileSpreadsheet,
  Check, QrCode, Wrench, UserCheck, Sparkles, Eye
} from 'lucide-react';
import { LiveDashboardPreview } from '../components/LiveDashboardPreview';
import { ComparisonTable } from '../components/ComparisonTable';
import { ObjectionFaq } from '../components/ObjectionFaq';
import { PlantGallerySection } from '../components/PlantGallerySection';
import { DataNoteHeroCircle } from '../components/DataNoteHeroCircle';
import { LifecycleCircularDiagram } from '../components/LifecycleCircularDiagram';
import { OurErpFeaturesSection } from '../components/OurErpFeaturesSection';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ERP_MODULES } from '../data/modulesData';
import { INDUSTRY_SECTORS } from '../data/imageAssets';

const MODULE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Disc,
  Cpu,
  ShieldCheck,
  Truck,
  PackageCheck,
  FolderKanban,
  Users,
  BarChart3,
  Layers,
  Factory,
  Building2,
  Wrench,
  Clock,
  UserCheck
};

const BLOB_STYLES = [
  'rounded-[42%_58%_70%_30%/45%_45%_55%_55%] bg-amber-100 text-amber-700 border border-amber-200/90',
  'rounded-[55%_45%_35%_65%/60%_40%_60%_40%] bg-lime-100 text-lime-700 border border-lime-200/90',
  'rounded-[68%_32%_45%_55%/40%_60%_40%_60%] bg-orange-100 text-orange-700 border border-orange-200/90',
  'rounded-[38%_62%_50%_50%/50%_35%_65%_50%] bg-rose-100 text-rose-700 border border-rose-200/90',
  'rounded-[50%_50%_65%_35%/35%_65%_35%_65%] bg-sky-100 text-sky-700 border border-sky-200/90',
  'rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-emerald-100 text-emerald-700 border border-emerald-200/90',
  'rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-pink-100 text-pink-700 border border-pink-200/90',
  'rounded-[52%_48%_40%_60%/48%_52%_60%_40%] bg-purple-100 text-purple-700 border border-purple-200/90',
];

interface HomePageProps {
  onOpenLiveModal?: () => void;
  onOpenDemoModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenLiveModal, onOpenDemoModal }) => {
  const location = useLocation();
  const [quickEmail, setQuickEmail] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickTonnage, setQuickTonnage] = useState('200-500 MT');
  const [leadSuccess, setLeadSuccess] = useState(false);

  const handleQuickLead = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSuccess(true);
    setTimeout(() => {
      onOpenDemoModal();
    }, 1000);
  };

  return (
    <div className="space-y-24 pb-20 bg-white text-slate-900">
      {/* 1. HERO SECTION - DATANOTE INSPIRED WITH CIRCLE IMAGE ON LEFT & TEXT ON RIGHT */}
      <section 
        key={location.key}
        className="relative pt-10 sm:pt-16 pb-16 overflow-hidden bg-gradient-to-b from-keshav-50/70 via-white to-slate-50 border-b border-slate-200"
      >
        {/* Ambient subtle light-green glow with gentle pulse */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-keshav-100/60 rounded-full blur-3xl pointer-events-none -z-0 animate-hero-glow"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          {/* Main 2-Column Split: Left Circle Image, Right Side Text */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT COLUMN: DATANOTE-INSPIRED INTERACTIVE ROTATING CIRCULAR WHEEL */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start items-center animate-hero-left">
              <DataNoteHeroCircle />
            </div>

            {/* RIGHT COLUMN: RIGHT SIDE TEXT (DYNAMIC TOP-TO-BOTTOM ENTRANCE EFFECT) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge - Step 1: Slide down from top */}
            

              {/* H1 Headline - Step 2: Slide down from top */}
              <h1 className="animate-hero-slide-down-delay-1 text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-black tracking-tight leading-[1.18] text-slate-900">
                The Only ERP Purpose-Built for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-keshav-800">
                  Pre-Engineered Buildings
                </span>{' '}
                & Steel Fabrication.
              </h1>

              {/* Sub-headline - Step 3: Slide down from top */}
              <p className="animate-hero-slide-down-delay-2 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                Stop forcing generic accounting software on complex shop floors. infraFab ERP tracks raw coils from arrival to slitting, monitors fabrication piece-marks with QR codes, eliminates cutting scrap, and dispatches trailers with 100% bill-of-materials accuracy.
              </p>

              {/* Live Metric Pills - Step 4: Slide down from top */}
              <div className="animate-hero-slide-down-delay-3 flex flex-wrap items-center gap-2.5 text-xs font-bold text-slate-700">
                <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
                  <Check className="w-3.5 h-3.5 text-keshav-600" />
                  <span>14–22% Remnant Scrap Cut</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
                  <Check className="w-3.5 h-3.5 text-keshav-600" />
                  <span>100% Tekla BOM QR Traceability</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
                  <Check className="w-3.5 h-3.5 text-keshav-600" />
                  <span>Zero Missing Site Parts</span>
                </span>
              </div>

              {/* CTA Buttons - Step 5: Slide down from top */}
              <div className="animate-hero-slide-down-delay-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button
                  variant="gradient"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={onOpenDemoModal}
                  className="justify-center shadow-lg hover:shadow-keshav-glow"
                >
                  Book a Live Demo
                </Button>

                <Link
                  to="/modules"
                  className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-extrabold text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-sm hover:border-keshav-400 group"
                >
                  <span>Explore Live Modules</span>
                  <ArrowRight className="w-4 h-4 text-keshav-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE THE LIVE ERP FLOOR DASHBOARD (ABOVE SERVICES SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiveDashboardPreview 
          onOpenLiveModal={onOpenLiveModal} 
          onOpenDemoModal={onOpenDemoModal} 
        />
      </section>

      {/* 4. OUR ERP: FEATURES & CAPABILITIES (DATANOTE SIGNATURE 18-FEATURE BORDER-LINE GRID) */}
      <OurErpFeaturesSection onOpenDemoModal={onOpenDemoModal} />

      {/* 5. REAL STEEL PLANT OPERATIONS GALLERY (NEW DYNAMIC IMAGERY SECTION) */}
      <PlantGallerySection onOpenDemoModal={onOpenDemoModal} />

      {/* 3. THE 4 EXPENSIVE HEADACHES FABRICATORS FACE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The 4 Expensive Headaches Steel Fabricators Face Every Day
          </h2>
          <p className="text-slate-600 text-sm mt-3 font-medium">
            Why trying to force generic accounting software onto a steel shop floor drains lakhs of rupees every month in invisible leakage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Headache 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-shreeji-300 transition shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 font-black text-lg border border-rose-200">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              The Black Hole of Steel Coils & Slitting Remnants
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You purchase 30-ton mother coils, slit them into custom strip widths, and immediately lose track of remnant coils and side-trim scrap yields. At ₹65/kg, untracked remnant scrap drains ₹15 Lakhs+ every single year into unmeasured scrap yards.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-shreeji-800 font-bold flex items-center gap-1.5 bg-shreeji-50 p-2.5 rounded-xl border border-shreeji-200">
              <span>infraFab ERP Fix: Complete Mother-Baby genealogy with automated scrap yield %.</span>
            </div>
          </div>

          {/* Headache 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-shreeji-300 transition shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 font-black text-lg border border-amber-200">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              The Erection Site Blame Game & Idling Cranes
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your erection team calls from 500 km away: "Beam B-12 and the foundation anchor bolts are missing." Rented heavy hydraulic cranes sit idle costing ₹40,000/day, trailers get detained, and your client withholds final milestone retention payments.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-shreeji-800 font-bold flex items-center gap-1.5 bg-shreeji-50 p-2.5 rounded-xl border border-shreeji-200">
              <span>infraFab ERP Fix: QR-code bundle packing & 100% itemized delivery challans.</span>
            </div>
          </div>

          {/* Headache 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-shreeji-300 transition shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 font-black text-lg border border-rose-200">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Paper Clipboards & 48-Hour Delayed DPRs
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Daily production reports (DPR) are scribbled on grease-stained paper pads and take 48 hours to reach management. By the time you notice welding bottlenecks, fit-up rework, or contractor slowdowns, committed project deadlines have already slipped.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-shreeji-800 font-bold flex items-center gap-1.5 bg-shreeji-50 p-2.5 rounded-xl border border-shreeji-200">
              <span>infraFab ERP Fix: Live mobile PWA for supervisors to log completions instantly.</span>
            </div>
          </div>

          {/* Headache 4 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-shreeji-300 transition shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 font-black text-lg border border-amber-200">
              04
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Store Leakage & Missing Power Tools
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Welding electrodes, grinding wheels, epoxy paints, and high-value tools (magnetic drills, torque wrenches) disappear into thin air with no requisition or contractor allocation records. Machine breakdowns happen with zero preventive service logs.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-shreeji-800 font-bold flex items-center gap-1.5 bg-shreeji-50 p-2.5 rounded-xl border border-shreeji-200">
              <span>infraFab ERP Fix: Multi-store approval workflows & asset maintenance history.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 8-STAGE DIGITAL STEEL FABRICATION LIFECYCLE (CIRCULAR PROCESS WHEEL) - FULL SCREEN WIDTH */}
      <section className="w-full">
        <LifecycleCircularDiagram onOpenDemoModal={onOpenDemoModal} />
      </section>

      {/* 5. CORE MODULES GRID: 8 CARDS (REFERENCE MOCKUP UI) */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-16 sm:py-20">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-keshav-50 border border-keshav-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-keshav-800 mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-keshav-500 animate-pulse"></span>
              <span>Shop-Floor Aligned Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Engineered Specifically for the Demands of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-keshav-800">
                Steel Plants
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-medium">
              Every module maps directly to daily shop-floor reality, eliminating Excel disconnects, remnant scrap leakage, and site missing parts.
            </p>
          </div>

          <Link
            to="/modules"
            className="inline-flex items-center gap-2 btn-gradient text-slate-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md hover:brightness-105 transition self-start md:self-auto shrink-0"
          >
            <span>Explore All 8 Modules</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 MODULE CARDS IN 4 COLUMNS (EXACT REFERENCE MOCKUP UI) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ERP_MODULES.slice(0, 8).map((mod, idx) => {
            const Icon = MODULE_ICONS[mod.iconName] || Factory;
            const blobStyle = BLOB_STYLES[idx % BLOB_STYLES.length];
            return (
              <Link
                key={mod.id}
                to={`/modules#${mod.id}`}
                className="bg-white border border-slate-200/90 rounded-2xl px-4 py-5 sm:px-5 sm:py-6 transition-all duration-300 flex flex-col justify-start group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-keshav-400 hover:-translate-y-1 relative text-left"
              >
                {/* 1. Title at Top (Exact match to reference mockup) */}
                <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-keshav-700 transition-colors leading-snug mb-3">
                  {mod.name.replace(' Management', '').replace(' Traceability', '').replace(' Compliance', '')}
                </h3>

                {/* 2. Organic Blob Icon Badge (Exact match to reference mockup) */}
                <div className="mb-3">
                  <div className={`w-12 h-12 ${blobStyle} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* 3. Clean Description Text (Exact match to reference mockup) */}
                <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                  {mod.shortDesc}
                </p>
              </Link>
            );
          })}
        </div>

      </section>

      {/* 6. BUILT-IN MOBILE PWA SPOTLIGHT */}
      <section className="bg-gradient-to-r from-shreeji-50/80 via-white to-shreeji-50/80 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                No Expensive Barcode Scanners. No Fragile Office Computers on the Floor.
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Supervisors and machine operators use standard Android smartphones or ₹8,000 tablets. The built-in Progressive Web App (PWA) operates with large, high-contrast buttons and instant camera QR scanning.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-shreeji-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Offline-First Caching</strong>
                    Continues scanning even when factory Wi-Fi drops. Syncs automatically upon reconnection.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-shreeji-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Camera Barcode / QR Scan</strong>
                    Reads weather-resistant structural labels instantly under low-light workshop lighting.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-shreeji-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">30-Minute Learning Curve</strong>
                    If your supervisor knows WhatsApp, they already know how to use this ERP.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-shreeji-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Zero App Store Installs</strong>
                    Runs directly in Chrome/Safari with 1-click home screen install.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="gradient"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  onClick={onOpenDemoModal}
                >
                  See Mobile Shop-Floor Demo
                </Button>
              </div>
            </div>

            {/* Mobile Mockup Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-72 bg-slate-900 border-4 border-slate-700 rounded-[36px] p-3 shadow-2xl relative">
                {/* Speaker pill */}
                <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-3"></div>

                {/* Mobile screen content */}
                <div className="bg-slate-950 rounded-[24px] p-4 text-white space-y-3 font-sans text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="font-bold text-shreeji-400">Shreeji Floor PWA</span>
                    <span className="text-[10px] text-shreeji-400">● Online (Bay #2)</span>
                  </div>

                  <div className="bg-shreeji-900/40 p-2.5 rounded-xl border border-shreeji-700/50 text-center space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase">Active Job</span>
                    <div className="font-bold text-white text-sm">Scan Structural Piece-Mark</div>
                  </div>

                  {/* Camera QR Viewfinder simulation */}
                  <div className="aspect-square bg-slate-900 rounded-xl border-2 border-dashed border-shreeji-500/60 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                    <div className="w-24 h-24 border-2 border-shreeji-400 rounded-lg flex items-center justify-center">
                      <Cpu className="w-10 h-10 text-shreeji-400 animate-pulse" />
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2 font-medium">Align QR Code inside box</span>
                  </div>

                  {/* Scanned result */}
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 space-y-1 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Piece Mark:</span>
                      <strong className="text-white">COL-101-A</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Stage:</span>
                      <strong className="text-shreeji-400">Welding Passed</strong>
                    </div>
                  </div>

                  <button className="w-full bg-shreeji-600 hover:bg-shreeji-500 text-white font-bold py-2 rounded-lg text-xs transition">
                    Confirm & Send to Painting
                  </button>
                </div>

                {/* Bottom home indicator */}
                <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMPARISON MATRIX: INFRAFAB ERP VS TALLY VS SAP VS EXCEL */}
      <section id="comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonTable onBookDemo={onOpenDemoModal} />
      </section>

      {/* 8. WHY CHOOSE OUR ERP? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-keshav-100/90 border border-keshav-300 px-4 py-1.5 rounded-full text-xs font-black text-keshav-900 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-keshav-700" />
            <span>Why Choose Our ERP?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]">
            Built for Real Business Operations.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-lime-700">
              Designed for Everyday Efficiency.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Our ERP software is designed to address practical operational challenges and make everyday business management more organized.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: One Connected Platform */}
          <div className="bg-white border border-slate-200 hover:border-keshav-500 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-keshav-100 to-lime-100 text-keshav-800 flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-keshav-500 group-hover:text-slate-950 transition-all duration-300 shadow-2xs">
                <Layers className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-keshav-900 transition-colors">
                  One Connected Platform
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Manage multiple operational activities without switching between disconnected systems.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Practical Business Workflows */}
          <div className="bg-white border border-slate-200 hover:border-keshav-500 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-keshav-100 to-lime-100 text-keshav-800 flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-keshav-500 group-hover:text-slate-950 transition-all duration-300 shadow-2xs">
                <TrendingUp className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-keshav-900 transition-colors">
                  Practical Business Workflows
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Organize essential activities such as attendance, asset tracking, stock management, and reporting.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Controlled User Access */}
          <div className="bg-white border border-slate-200 hover:border-keshav-500 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-keshav-100 to-lime-100 text-keshav-800 flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-keshav-500 group-hover:text-slate-950 transition-all duration-300 shadow-2xs">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-keshav-900 transition-colors">
                  Controlled User Access
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Organize responsibilities and ERP access according to different user roles.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Better Operational Visibility */}
          <div className="bg-white border border-slate-200 hover:border-keshav-500 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-keshav-100 to-lime-100 text-keshav-800 flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-keshav-500 group-hover:text-slate-950 transition-all duration-300 shadow-2xs">
                <Eye className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-keshav-900 transition-colors">
                  Better Operational Visibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Keep important business records organized for easier monitoring and management reviews.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 5th Highlight Card: Used in a Real Business Environment */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-keshav-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-keshav-500/20 border border-keshav-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-keshav-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-keshav-400" />
              <span>Real-World Industrial Validation</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              Used in a Real Business Environment
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
              The software is already being used by <strong className="text-keshav-300 font-bold">Shreeji Infrastructure</strong> to support its business operations.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenDemoModal}
              className="btn-gradient px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 flex items-center gap-2 shadow-lg hover:brightness-105 transition cursor-pointer active:scale-95"
            >
              <span>Schedule Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

      {/* 9. SOCIAL PROOF & METRICS THAT MATTER */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Real Performance Metrics from Operating Steel Plants
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 font-medium">
              Based on thousands of tons of structural steel fabricated across verified PEB projects.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <div className="text-3xl sm:text-5xl font-black text-shreeji-700 mb-2">99.4%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Dispatch Accuracy</div>
              <p className="text-[11px] text-slate-500">Zero missing pieces at construction & erection sites.</p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <div className="text-3xl sm:text-5xl font-black text-amber-600 mb-2">14-22%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Scrap Loss Reduction</div>
              <p className="text-[11px] text-slate-500">Recovered via mother/baby slitting and remnant coil reuse.</p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <div className="text-3xl sm:text-5xl font-black text-shreeji-600 mb-2">100%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Contractor Transparency</div>
              <p className="text-[11px] text-slate-500">Zero piece-rate overbilling on unverified fabricated tonnage.</p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <div className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">14 Days</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Average Turnkey Go-Live</div>
              <p className="text-[11px] text-slate-500">Pre-configured steel workflows ready out of the box.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OBJECTION HANDLING & FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ObjectionFaq />
      </section>

      {/* 11. HIGH-CONVERTING BOTTOM CTA LEAD FORM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-shreeji-900 via-shreeji-950 to-slate-950 border border-shreeji-700/50 rounded-3xl p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              See How Shreeji Infrastructure ERP Can Digitize Your Factory in Less Than 14 Days.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Book a live, tailored walkthrough with a senior steel manufacturing specialist. We will show you how to import your Tekla drawings and track coils immediately.
            </p>

            {leadSuccess ? (
              <div className="bg-shreeji-800/80 border border-shreeji-600 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-shreeji-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Request Received! Opening Calendar...</h4>
                <p className="text-xs text-shreeji-200">
                  We are opening your direct appointment scheduler right now.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickLead} className="pt-6 space-y-4 max-w-xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="email"
                    placeholder="Work Email (name@company.com)"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-shreeji-500"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="WhatsApp Number (+91 ...)"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-shreeji-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    value={quickTonnage}
                    onChange={(e) => setQuickTonnage(e.target.value)}
                    className="w-full sm:w-1/2 bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-shreeji-500"
                  >
                    <option value="< 200 MT">&lt; 200 MT / Month</option>
                    <option value="200-500 MT">200 - 500 MT / Month</option>
                    <option value="500-1500 MT">500 - 1,500 MT / Month</option>
                    <option value="> 1500 MT">&gt; 1,500 MT / Month</option>
                  </select>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="md"
                    className="w-full sm:w-1/2"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Live 1-on-1 Demo
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-3 text-[11px] text-slate-300 pt-2 font-medium">
                  <span>✓ 30-min tailored demo</span>
                  <span>•</span>
                  <span>✓ Live sandbox login included</span>
                  <span>•</span>
                  <span>✓ Zero spam guarantee</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
