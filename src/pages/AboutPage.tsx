import React from 'react';
import { 
  Building2, Factory, Award, ShieldCheck, 
  Users, CheckCircle2, ArrowRight, 
  Layers, HardHat, HeartHandshake, AlertTriangle,
  ExternalLink, Phone, Mail, MapPin, Sparkles,
  Compass, Target, Check, Box, Wrench, PackageCheck,
  Clock, KeyRound
} from 'lucide-react';
import { PLANT_GALLERY_IMAGES } from '../data/imageAssets';

interface AboutPageProps {
  onOpenDemoModal: () => void;
  onOpenLiveModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenDemoModal, onOpenLiveModal }) => {
  const PARENT_WEBSITE_URL = "https://shreejiinfrastructure.com/";
  const LIVE_ERP_URL = "https://erp.shreejiinfrastructure.com/dashboard";

  const SHREEJI_PRODUCTS = [
    {
      title: 'Pre-Engineered Buildings (PEB)',
      desc: 'Turnkey industrial factory sheds, logistics warehouses, commercial structures, sports arenas & agricultural buildings.',
      badge: 'Turnkey PEB'
    },
    {
      title: 'Profile PUF Panels (IMP)',
      desc: 'High-density insulated sandwich metal panels offering superior thermal insulation and acoustic barrier performance.',
      badge: 'Insulated Panels'
    },
    {
      title: 'High-Tensile C & Z Purlins',
      desc: 'Cold roll-formed galvanized high-tensile purlins with pre-punched holes for rapid on-site bolt assembly.',
      badge: 'Secondary Framing'
    },
    {
      title: 'Roof & Wall Cladding Sheets',
      desc: 'Colour-coated profile sheets manufactured with premium anti-corrosion alloys for industrial longevity.',
      badge: 'Cladding Systems'
    },
    {
      title: 'Industrial Ventilation & Turbo Fans',
      desc: 'Weatherproof louvers and wind-driven centrifugal turbo ventilators ensuring optimal airflow and air changes.',
      badge: 'Air Ventilation'
    },
    {
      title: 'Anchor Bolts & Structural Fasteners',
      desc: 'Grade 8.8 foundation bolts, high-tensile SAG rods, tie rods, and self-drilling screws (SDS) with EPDM washers.',
      badge: 'Hardware & Anchor'
    }
  ];

  return (
    <div className="space-y-20 pb-20 bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-keshav-50/70 via-white to-slate-50 py-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-keshav-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
         

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Engineered Inside One of Gujarat’s Premier{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-keshav-800">
              PEB Manufacturing Plants
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            We didn’t build infraFab ERP in an isolated tech incubator. We engineered and perfected it inside the operating 50,000+ sq.ft fabrication bays of <strong>Shreeji Infrastructure</strong>, backed by over 30 years of steel manufacturing heritage.
          </p>

        </div>
      </section>

      {/* 2. OPERATIONAL PLANT VISUAL SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group relative">
            <img 
              src={PLANT_GALLERY_IMAGES[0].url} 
              alt="Coil Slitting Line" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-xs font-bold text-keshav-300">Shreeji Manufacturing Yard</span>
              <h4 className="font-black text-sm">Automated Coil Slitting & Shearing Lines</h4>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group relative">
            <img 
              src={PLANT_GALLERY_IMAGES[1].url} 
              alt="50,000 Sq.Ft Bay" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-xs font-bold text-keshav-300">Fabrication Bay #1</span>
              <h4 className="font-black text-sm">50,000+ Sq.Ft Structural Primary Bay</h4>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group relative">
            <img 
              src={PLANT_GALLERY_IMAGES[4].url} 
              alt="Erection Site" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-xs font-bold text-keshav-300">Site Execution</span>
              <h4 className="font-black text-sm">Zero Missing Piece-Mark PEB Erection</h4>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ABOUT SHREEJI INFRASTRUCTURE (PARENT COMPANY PROFILE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase font-black tracking-widest text-keshav-700 bg-keshav-100 px-3 py-1 rounded-full border border-keshav-300">
                <Building2 className="w-3.5 h-3.5 text-keshav-600" />
                <span>Parent Company Profile</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                About Shreeji Infrastructure
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                Headquartered in <strong>Gujarat, India</strong>, <a href={PARENT_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="text-keshav-700 font-bold hover:underline">Shreeji Infrastructure</a> is a premier manufacturer and turnkey contractor specializing in <strong>Pre-Engineered Buildings (PEB)</strong> and <strong>high-specification structural steel systems</strong> built to international engineering standards.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                The company delivers tailored, durable, and sustainable steel structures across multiple industries—including industrial manufacturing plants, commercial logistics warehouses, agricultural storage facilities, sports complexes, and infrastructure utilities. By integrating advanced 3D structural engineering (Tekla, AutoCAD), off-site CNC precision fabrication, and multi-trailer logistics dispatch, Shreeji Infrastructure guarantees structural safety, minimal material waste, and rapid on-site commissioning.
              </p>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-500 pb-2 border-b border-slate-200">
                Corporate At A Glance
              </h3>
              
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-keshav-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Registered Office:</strong>
                    <span>FF 15, 16 Dwarkesh Complex, Opp. HCG Cancer Hospital, Sun Pharma Road, Vadodara, Gujarat – 390012, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-keshav-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Official Contact:</strong>
                    <a href="tel:+919924266466" className="text-keshav-700 font-mono font-bold hover:underline">
                      +91 99242 66466
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-keshav-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Corporate Email:</strong>
                    <a href="mailto:info@shreejiinfrastructure.com" className="text-keshav-700 font-mono font-bold hover:underline">
                      info@shreejiinfrastructure.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 text-keshav-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Official Web Portal:</strong>
                    <a href={PARENT_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="text-keshav-700 font-bold hover:underline">
                      www.shreejiinfrastructure.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. VISION & MISSION */}
          <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            <div className="bg-gradient-to-br from-keshav-50/70 to-white border border-keshav-200 p-6 sm:p-8 rounded-3xl space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-keshav-100 text-keshav-800 flex items-center justify-center font-black">
                <Compass className="w-5 h-5 text-keshav-700" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                "To act as a trusted framework and trendsetter of excellence and innovation in modern engineering and pre-engineered construction, continuously delivering top-notch, performance-driven structures that align with contemporary architecture, sustainability, and industrial demands."
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-black">
                <Target className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                "To build long-term, enduring relationships with clients anchored on performance, integrity, core values, on-time project completion, and total satisfaction. To address changing industry needs by leveraging advanced fabrication technology, precision software, and highly qualified engineering professionals."
              </p>
            </div>
          </div>

          {/* 5. PRODUCTS MANUFACTURED BY SHREEJI INFRASTRUCTURE */}
          <div className="pt-6 border-t border-slate-200 space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase font-black tracking-widest text-slate-500 mb-1">
                <span>Manufacturing Portfolio</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Products Manufactured by Shreeji Infrastructure
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                From pre-engineered building frames to roll-formed purlins, PUF insulated panels, and structural hardware.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SHREEJI_PRODUCTS.map((prod, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-keshav-300 p-5 rounded-2xl transition-all duration-300 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-keshav-700 bg-keshav-100/80 px-2 py-0.5 rounded-md border border-keshav-200 inline-block">
                      {prod.badge}
                    </span>
                    <h4 className="text-sm font-black text-slate-900">{prod.title}</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] text-keshav-700 font-bold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Manufactured In-House</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. THE ORIGIN STORY: WHY SHREEJI BUILT INFRAFAB ERP */}
          <div className="pt-6 border-t border-slate-200 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              The Journey of Hiren Goswami & Why infraFab ERP Was Born
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <p>
                In <strong>1992</strong>, Hiren Goswami entered the steel fabrication industry not from an air-conditioned software boardroom, but as a machine operator on the plant floor. Over three decades of relentless dedication, he rose through every position on the factory floor: fabricator, welding supervisor, plant manager, and general manager, before establishing <strong>Shreeji Infrastructure</strong>.
              </p>

              <p>
                When Shreeji Infrastructure expanded into a premier manufacturer of Pre-Engineered Buildings, heavy steel structures, coil slitting, and purlins in Gujarat, they encountered the same frustration that plagues every growing steel fabricator: <em>every generic accounting software on the market was completely useless on a steel shop floor</em>.
              </p>

              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-3">
                <h4 className="text-slate-900 font-black text-base flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  The Breaking Point: Why Generic ERPs (Tally & SAP) Failed
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  "We tried Tally, SAP, and various off-the-shelf ERPs. None of them could track what happened when a 30-ton mother coil was slit into 5 baby coils with variable widths and edge scrap. None of them could print QR codes for structural rafters, verify ultrasonic welding NDT tests, track EOT crane maintenance, or tell us if trailer #3 had the anchor bolts required by the erection crew 500 km away. The software sat abandoned in the office while our floor supervisors went back to paper clipboards."
                </p>
              </div>

              <p>
                Frustrated by expensive software that couldn't solve real floor bottlenecks, Shreeji Infrastructure assembled an elite team of full-stack software engineers directly on the shop floor. For over three years, engineers sat shoulder-to-shoulder with slitter operators, fitters, certified welders, QC inspectors, and dispatch managers.
              </p>

              <p>
                The result is <strong>infraFab ERP</strong> (<a href={LIVE_ERP_URL} target="_blank" rel="noopener noreferrer" className="text-keshav-700 font-bold hover:underline">erp.shreejiinfrastructure.com/dashboard</a>): a battle-tested enterprise system forged in the heat of daily steel manufacturing, managing User Access, Departments, Teams, Attendance, Project Assets, Multi-Store Inventory, Company Project Lists, and DPR Reports with 99.4% dispatch accuracy and zero missing piece-marks.
              </p>

              <p className="font-bold text-slate-900">
                Today, we are opening this battle-proven platform to structural fabricators, PEB manufacturers, and coil service centers worldwide who want to run their plants with mathematical precision.
              </p>
            </div>
          </div>

          {/* 7. THREE PILLARS OF OUR HERITAGE */}
          <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-800 flex items-center justify-center mx-auto font-black text-lg">
                30+
              </div>
              <h4 className="font-black text-slate-900 text-sm">Years Steel Heritage</h4>
              <p className="text-xs text-slate-600 font-medium">Deep shop-floor domain experience starting from the plant floor in 1992.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-800 flex items-center justify-center mx-auto font-black text-lg">
                50,000+
              </div>
              <h4 className="font-black text-slate-900 text-sm">Sq.Ft Live Testbed</h4>
              <p className="text-xs text-slate-600 font-medium">Tested and refined daily inside an active high-volume PEB manufacturing yard.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-800 flex items-center justify-center mx-auto font-black text-lg">
                100%
              </div>
              <h4 className="font-black text-slate-900 text-sm">Fabricator Owned</h4>
              <p className="text-xs text-slate-600 font-medium">Built by people who understand tonnage, camber, weld NDT, and slitting yields.</p>
            </div>
          </div>

          {/* 8. ACTION CTAs */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
              Want to see the system running live or visit our Gujarat manufacturing yard?
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PARENT_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition"
              >
                <span>shreejiinfrastructure.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenDemoModal}
                className="btn-gradient px-6 py-3 rounded-xl text-xs font-black shadow-md cursor-pointer"
              >
                Schedule Plant Walkthrough
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
