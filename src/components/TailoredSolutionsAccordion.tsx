import React, { useState } from 'react';
import { Plus, ArrowRight, CheckCircle2, Sparkles, Building2, Layers } from 'lucide-react';

interface ArchitectureItem {
  id: string;
  number: string;
  verticalTitle: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  features: string[];
}

const ARCHITECTURES: ArchitectureItem[] = [
  {
    id: 'peb-plant',
    number: '01',
    verticalTitle: 'PEB PLANT ERP',
    tag: 'OPERATIONS & PEB MANUFACTURING',
    title: 'Custom ERP — Pre-Engineered Building Systems',
    subtitle: '• Manufacturing & Erection Dispatch',
    desc: 'Consolidate Tekla 3D drawing BOM imports, automated plate cutting, submerged arc welding (SAW), purlin roll-forming, and sequential erection trailer dispatch into one unified system engineered specifically for how your Gujarat operations run.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    features: ['Tekla 3D BOM Piece-Marks', 'Mother/Baby Purlin Slitting', 'Sequential Trailer Staging']
  },
  {
    id: 'heavy-structural',
    number: '02',
    verticalTitle: 'HEAVY STRUCTURAL STEEL',
    tag: 'EPC CONTRACTORS & BRIDGE TRUSSES',
    title: 'Heavy Structural Steel — Infrastructure & EPC',
    subtitle: '• 40mm+ Plates, NDT & Third-Party Inspection',
    desc: 'Engineered for steel yards handling 40mm+ thick plates, ultrasonic testing (UT), Sa 2.5 shot blasting profile gauges, welder WPQ registers, and third-party inspection (TPI) sign-offs for government and EPC tenders.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    features: ['Heat No. & Mill Test Cert Linkage', 'Ultrasonic NDT & Sa 2.5 DFT Logs', '1-Click TPI IRN Dossiers']
  },
  {
    id: 'coil-slitting',
    number: '03',
    verticalTitle: 'COIL SLITTING LINES',
    tag: 'COIL SERVICE CENTERS & ROLL-FORMING',
    title: 'Coil Service Centers & High-Speed Slitting Lines',
    subtitle: '• 0.1mm Camber & Remnant Scrap Control',
    desc: 'Stop losing money on unmeasured mother coil ends and edge-trim scrap. Trace master mother coils through high-speed slitters and roll-formers with automated yield reconciliation and durable thermal QR labels.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
    features: ['Mother-to-Child Genealogy', 'Automated Edge-Trim Scrap Yield', 'Weatherproof Recoiler QR Tags']
  },
  {
    id: 'multi-store',
    number: '04',
    verticalTitle: 'MULTI-STORE INVENTORY',
    tag: 'RAW STEEL & CONSUMABLES STORES',
    title: 'Multi-Store Inventory & Raw Steel Stockyards',
    subtitle: '• Plates, Consumables & Weighbridge Sync',
    desc: 'Centralize multi-plant raw steel yards, welding electrodes, industrial paints, and hardware stores with live digital weighbridge integration, safety re-order alerts, and zero misplaced inventory.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
    features: ['Real-Time Weighbridge Sync', 'Material Issue Store Indents', 'Multi-Store Batch & Heat Audits']
  },
  {
    id: 'trailer-dispatch',
    number: '05',
    verticalTitle: 'TRAILER LOGISTICS',
    tag: 'DISPATCH & ERECTION STAGING',
    title: 'Trailer Logistics & Erection Delivery Sequencing',
    subtitle: '• 16T, 25T & 40T Multi-Axle Balance',
    desc: 'Match member tonnage and length to trailer axle capacities. Ensure columns, rafters, and anchor bolts are staged on Trailer 1 so erection crews never sit idle waiting for structural components.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
    features: ['100% Itemized e-Way Challans', 'Multi-Axle Weight Distribution', 'Erection Site Handover Sign-Off']
  },
  {
    id: 'qc-compliance',
    number: '06',
    verticalTitle: 'QC & NDT COMPLIANCE',
    tag: 'QUALITY ASSURANCE & WPS/PQR',
    title: 'QC Inspection — Ultrasonic NDT & Sa 2.5 DFT',
    subtitle: '• Digital Procedure Qualification Registers',
    desc: 'Eliminate 5-day manual binder collation. Centralize ultrasonic NDT logs, multi-point paint dry film thickness (DFT) gauges, and welder WPQ certificates into 1-click inspection packages.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85',
    features: ['Instant TPI Inspection Packages', 'Multi-Point Paint DFT Gauge Logs', 'Sa 2.5 Shot Blast Certification']
  },
  {
    id: 'workforce-attendance',
    number: '07',
    verticalTitle: 'WORKFORCE & ATTENDANCE',
    tag: 'WORKFORCE & SHIFT GANGS',
    title: 'Workforce Teams & Designation Attendance',
    subtitle: '• Shift Rosters, 6G Welders & Piece-Rates',
    desc: 'Structure plant labor into specialized bay teams (Fitters, 6G Welders, Riggers). Automatically reconcile daily biometric shift attendance with QC-cleared steel tonnage for piece-rate compensation.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=85',
    features: ['Contractor Gang Piece-Rate Pay', '6G Welder Qualification Registers', 'Shift Bay Attendance Telemetry']
  }
];

interface TailoredSolutionsAccordionProps {
  onOpenDemoModal: () => void;
}

export const TailoredSolutionsAccordion: React.FC<TailoredSolutionsAccordionProps> = ({ onOpenDemoModal }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeItem = ARCHITECTURES[activeIdx];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* SECTION HEADER (MATCHING USER SCREENSHOT: LEFT TITLE + RIGHT EXPLANATORY SUBTITLE) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
        <div className="lg:max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.18] uppercase">
            Tailored Software Solutions Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-keshav-800">
              Operational Efficiency
            </span>
          </h2>
        </div>

        <div className="lg:max-w-md text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
          <p>
            Explore our battle-tested enterprise architectures deployed across PEB manufacturing plants, commercial steel yards, coil service centers, and logistics networks across Gujarat.
          </p>
        </div>
      </div>

      {/* HORIZONTAL EXPANDING ACCORDION SLATS (JEENWEB TECH-STACK UI CLONE) */}
      <div className="bg-white border border-slate-200/90 rounded-3xl shadow-xl overflow-hidden min-h-[480px] lg:min-h-[520px]">
        
        {/* DESKTOP / TABLET: HORIZONTAL EXPANDING ACCORDION */}
        <div className="hidden md:flex w-full h-[520px] select-none">
          {ARCHITECTURES.map((item, index) => {
            const isExpanded = index === activeIdx;

            if (isExpanded) {
              return (
                <div
                  key={item.id}
                  className="flex-1 flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white overflow-hidden"
                >
                  <div className="grid grid-cols-12 gap-8 items-center h-full">
                    {/* Left: Plant Photo */}
                    <div className="col-span-5 h-[340px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                        <span className="text-[10px] font-mono font-bold text-keshav-300 uppercase">
                          infraFab Plant Deployment
                        </span>
                        <h4 className="text-xs font-black text-white">{item.subtitle}</h4>
                      </div>
                    </div>

                    {/* Right: Architecture Content */}
                    <div className="col-span-7 space-y-4 pr-2">
                      {/* Red/Lime Dot + Tag */}
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                        <span className="text-[11px] font-mono font-bold text-rose-600 tracking-wider uppercase">
                          • ARCHITECTURE {item.number} • {item.tag}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                        {item.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-xs sm:text-sm font-bold text-keshav-700">
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>

                      {/* Feature Chips */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {item.features.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-keshav-600" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>

                      {/* Action Button (Styled to Match Jeenweb Dark Navy Button) */}
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={onOpenDemoModal}
                          className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl text-xs font-black tracking-wider uppercase flex items-center gap-2 shadow-md hover:shadow-lg transition cursor-pointer group/btn"
                        >
                          <span>Explore Architecture Scope</span>
                          <ArrowRight className="w-4 h-4 text-keshav-400 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Collapsed Slat (Vertical Accordion Column)
            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(index)}
                onMouseEnter={() => setActiveIdx(index)}
                className="w-14 sm:w-16 lg:w-20 shrink-0 border-l border-slate-200/90 hover:bg-keshav-50/40 transition-all duration-500 cursor-pointer flex flex-col items-center justify-between py-8 px-1 group"
              >
                {/* Top Plus Icon */}
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 group-hover:text-keshav-700 group-hover:scale-110 transition-all">
                  <Plus className="w-4 h-4" />
                </div>

                {/* Rotated Vertical Title */}
                <div className="my-auto py-4">
                  <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] lg:text-xs font-black uppercase tracking-widest text-slate-700 group-hover:text-keshav-800 transition-colors block text-center whitespace-nowrap">
                    {item.verticalTitle}
                  </span>
                </div>

                {/* Bottom Number */}
                <span className="font-mono text-xs font-black text-slate-400 group-hover:text-keshav-700 transition-colors">
                  {item.number}
                </span>
              </div>
            );
          })}
        </div>

        {/* MOBILE RESPONSIVE ACCORDION (STACKED VERTICAL PANELS) */}
        <div className="block md:hidden divide-y divide-slate-200">
          {ARCHITECTURES.map((item, index) => {
            const isExpanded = index === activeIdx;

            return (
              <div key={item.id} className="transition-colors">
                {/* Collapsed Header Bar */}
                <button
                  type="button"
                  onClick={() => setActiveIdx(index)}
                  className={`w-full p-4 flex items-center justify-between text-left transition-colors cursor-pointer ${
                    isExpanded ? 'bg-keshav-50/60' : 'bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-slate-400">
                      {item.number}
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900">
                      {item.title.split('—')[0]}
                    </h4>
                  </div>
                  <Plus className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-45 text-keshav-600' : 'text-slate-400'}`} />
                </button>

                {/* Expanded Content on Mobile */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 bg-slate-50/50 space-y-4 animate-fadeIn">
                    <div className="h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-rose-600 block">
                        • ARCHITECTURE {item.number} • {item.tag}
                      </span>
                      <h3 className="text-base font-black text-slate-900">{item.title}</h3>
                      <p className="text-xs font-semibold text-keshav-700">{item.subtitle}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>

                    <button
                      type="button"
                      onClick={onOpenDemoModal}
                      className="w-full bg-slate-900 text-white py-3 rounded-xl text-xs font-black uppercase flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Explore Architecture Scope</span>
                      <ArrowRight className="w-4 h-4 text-keshav-400" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
