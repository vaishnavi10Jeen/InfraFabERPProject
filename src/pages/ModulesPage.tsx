import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Disc, Cpu, ShieldCheck, Truck, PackageCheck, 
  FolderKanban, Users, BarChart3, Check, ArrowRight, 
  KeyRound, ExternalLink, Layers, Search, Sparkles, 
  Activity, CheckCircle2, AlertTriangle, ArrowLeft, 
  RefreshCw, Terminal, Play, ShieldAlert, Clock,
  ChevronRight, Laptop, SlidersHorizontal, Eye,
  Wrench, UserCheck, Building2, LayoutGrid, Filter
} from 'lucide-react';
import { ERP_MODULES, ErpModule } from '../data/modulesData';
import { Button } from '../components/ui/Button';

interface ModulesPageProps {
  onOpenLiveModal?: () => void;
  onOpenDemoModal: () => void;
}

const MODULE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Disc,
  Cpu,
  PackageCheck,
  Truck,
  ShieldCheck,
  FolderKanban,
  Users,
  BarChart3,
  Layers,
  Wrench,
  Clock,
  UserCheck,
  Building2,
  KeyRound
};


const WORKFLOW_PIPELINES: Record<string, { step: string; title: string; desc: string }[]> = {
  'company-projects': [
    { step: '01', title: 'Scope & Drawing Inward', desc: 'Client master, BOQ tonnage, and approved structural drawing revisions' },
    { step: '02', title: 'Station Milestone Routing', desc: 'Detailed → Cut → Welded → Painted → Staged milestone allocations' },
    { step: '03', title: 'Live Progress Pipeline', desc: 'Shop-floor QR scans update fabricated tonnage in real time' },
    { step: '04', title: 'Retention Billing Sign-off', desc: 'Client verified milestone releases prompt retention payment' }
  ],
  'project-assets': [
    { step: '01', title: 'Asset Master & Mobilization', desc: 'EOT cranes, CNC plasma & SAW beds mapped to active projects' },
    { step: '02', title: 'Run-Time & Telemetry Log', desc: 'Real-time operating hours and power/fuel utilization monitoring' },
    { step: '03', title: 'Preventive Service Trigger', desc: 'Automated maintenance tickets prevent sudden factory downtime' },
    { step: '04', title: 'Calibration Certification', desc: 'Load cell, DFT gauge and NDT probe digital compliance records' }
  ],
  'inventory-store': [
    { step: '01', title: 'Digital Requisition', desc: 'Bay supervisor mobile indents with store manager approval' },
    { step: '02', title: 'Consumable Issue', desc: 'Electrodes, gas & wire tracked per contractor gang & piece-mark' },
    { step: '03', title: 'Auto Reorder Alerts', desc: 'Minimum safety thresholds trigger PO indents to procurement' },
    { step: '04', title: 'GRN & Valuation Sync', desc: 'Mill cert linkage with FIFO and weighted average stock value' }
  ],
  'teams-management': [
    { step: '01', title: 'Team Formation', desc: 'Organize fitters, 6G welders, riggers & painters into assigned gangs' },
    { step: '02', title: 'Supervisor Allocation', desc: 'Assign certified team leaders, bay in-charges & safety marshals' },
    { step: '03', title: 'Project & Shift Work Order', desc: 'Route assigned project drawing bundles to specific contractor teams' },
    { step: '04', title: 'Daily Tonnage Audit', desc: 'Track MT output fabricated per team per shift for productivity review' }
  ],
  'attendance-designation': [
    { step: '01', title: 'Designation Master Setup', desc: 'Standardize skill titles: Detailer, 6G Welder, Structural Fitter, NDT' },
    { step: '02', title: 'Biometric / Mobile Punch', desc: 'Daily Shift A/B in-out logging with geofenced mobile verification' },
    { step: '03', title: 'Overtime Shift Approval', desc: 'Bay in-charge validates shift extension and machine run hours' },
    { step: '04', title: 'QC-Verified Piece-Rate', desc: 'Only QC-cleared steel weights count toward contractor billing' }
  ],
  'user-management': [
    { step: '01', title: 'User Account Setup', desc: 'Create employee accounts with secure 2FA and corporate credentials' },
    { step: '02', title: 'Role & Permission RBAC', desc: 'Configure granular read, edit, approve and export security rules' },
    { step: '03', title: 'Device & Bay Provisioning', desc: 'Assign mobile PWA tablets for shop floor and desktop for directors' },
    { step: '04', title: 'Complete Audit Trail', desc: 'Timestamped immutable logs of every piece-mark scan, indent & PO' }
  ],
  'department-management': [
    { step: '01', title: 'Department Structure', desc: 'Map Engineering, Production, QC, Stores, Logistics & Accounts' },
    { step: '02', title: 'HOD Leadership Link', desc: 'Assign Department Heads with approval thresholds and delegation' },
    { step: '03', title: 'Cross-Dept Approval Chains', desc: 'Automate handoffs from Drawing Revision → Cutting → Store Issue' },
    { step: '04', title: 'Departmental SLA Review', desc: 'Real-time bottleneck identification across inter-department handoffs' }
  ],
  'reports-analytics': [
    { step: '01', title: 'Multi-Station Telemetry', desc: 'Capture shop-floor scans, attendance logs and store consumption' },
    { step: '02', title: 'Automated Reconciliation', desc: 'Reconcile tons fabricated, scrap %, and active contractor efficiency' },
    { step: '03', title: '6:00 PM Executive DPR', desc: 'Automated daily progress report delivered to Managing Director' },
    { step: '04', title: 'Director BI Dashboard', desc: 'Multi-plant productivity, tonnage and cost per ton mobile overview' }
  ],
  'coil-management': [
    { step: '01', title: 'Mother Coil Inward', desc: 'MTC, Heat No. & gross weighbridge weight log' },
    { step: '02', title: 'Slit Planning & Yield', desc: 'Mathematical width optimization cutting edge trim' },
    { step: '03', title: 'Baby Coil Tagging', desc: 'Thermal weatherproof QR barcodes per slit' },
    { step: '04', title: 'Scrap Reconciliation', desc: 'Automatic remnant return to inventory at current wt' }
  ],
  'production-tracking': [
    { step: '01', title: 'Tekla 3D BOM Import', desc: 'Piece-marks imported directly into cutting queues' },
    { step: '02', title: 'Shop-Floor QR Scan', desc: 'Supervisors log fit-up and cutting via mobile PWA' },
    { step: '03', title: 'Welding & NDT Clear', desc: 'Certified WPQ qualification and ultrasonic sign-off' },
    { step: '04', title: 'Sa 2.5 & Paint DFT', desc: 'Shot blast profile and dry film thickness verification' }
  ],
  'quality-control': [
    { step: '01', title: 'Steel Inward Testing', desc: 'IS 2062 yield and tensile mill cert validation' },
    { step: '02', title: 'Fit-Up & Weld NDT', desc: '100% UT and MPT weld seam compliance records' },
    { step: '03', title: 'Surface Profile Sa 2.5', desc: 'Grit blasting cleanliness verification log' },
    { step: '04', title: '1-Click IRN Dossier', desc: 'Instant third-party inspection binder generation' }
  ],
  'dispatch-logistics': [
    { step: '01', title: 'Erection Sequencing', desc: 'Columns, rafters, cleats and anchor bolts bundled' },
    { step: '02', title: 'Trailer Balancing', desc: 'Axle weight distribution preventing highway fines' },
    { step: '03', title: 'Itemized e-Way Bill', desc: '1-click gross/tare sync and GST delivery challan' },
    { step: '04', title: 'Site Receipt Sign-Off', desc: 'Zero missing-part claims with instant client handover' }
  ]
};

const SIMULATION_CONFIGS: Record<string, { label: string; successMsg: string }> = {
  'company-projects': {
    label: 'Sync Company Project Milestone Pipeline',
    successMsg: '✓ Synced 6 active company projects. Metro Depot Station #4 reached 88% completion milestone (Phase 2 dispatch clearance approved).'
  },
  'project-assets': {
    label: 'Run Plant Machinery Health & Calibration Audit',
    successMsg: '✓ Checked 48 project assets: EOT Crane #1 load-tested at 15T. CNC Plasma bed nozzle alignment verified. 0 critical breakdown risks detected.'
  },
  'inventory-store': {
    label: 'Run Multi-Store Inventory & Safety Stock Audit',
    successMsg: '✓ Multi-Store Audit Complete: 420 pkts E7018 electrodes healthy. Zinc Primer at 85L (automated reorder indent dispatched to procurement).'
  },
  'teams-management': {
    label: 'Re-Balance Shop-Floor Team Allocations',
    successMsg: '✓ Teams Re-balanced: Allocated 6 certified welders from Shiva SAW to Metro Depot Bay #1 to meet weekend milestone delivery.'
  },
  'attendance-designation': {
    label: 'Process Daily Shift Attendance & Overtime',
    successMsg: '✓ Shift Attendance Processed: 138 team members verified present. 18 hours justified overtime synced with contractor piece-rate ledger.'
  },
  'user-management': {
    label: 'Audit User Roles & Security Permissions',
    successMsg: '✓ Security Audit Complete: 26 active user accounts checked. All role permissions, supervisor session timeouts, and audit trails healthy.'
  },
  'department-management': {
    label: 'Trigger Inter-Departmental Workflow Sync',
    successMsg: '✓ Inter-Department Sync Triggered: Tekla BOM revision from Engineering instantly pushed to Production cutting queue and Stores allocation.'
  },
  'reports-analytics': {
    label: 'Compile 6:00 PM Executive Daily DPR',
    successMsg: '✓ Daily Production Report compiled: 48.5 MT output today, average slitting yield 96.2%, zero machine downtime. Sent to Director phone.'
  },
  'coil-management': {
    label: 'Simulate Slitting Line Cut & Scrap Yield',
    successMsg: '✓ Mother Coil MC-2024-8842 (28,450 kg) slit into 4 baby coils with 95.3% yield. 1,330 kg remnant scrap logged into inventory yard.'
  },
  'production-tracking': {
    label: 'Simulate Shop-Floor QR Piece-Mark Scan',
    successMsg: '✓ Scanned Column COL-101-A at Bay #2. Stage updated to "Finished Paint (Sa 2.5, DFT 120μm)". Synced with Tekla 3D model.'
  },
  'quality-control': {
    label: 'Generate Digital TPI Client Inspection Dossier',
    successMsg: '✓ Client Dossier compiled: 184 QC logs, 100% AWS D1.1 weld clearances, and MTC certs linked to Heat #8942.'
  },
  'dispatch-logistics': {
    label: 'Calculate 40ft Multi-Axle Trailer Balance',
    successMsg: '✓ Trailer GJ-01-BX-9044 loaded at 26.85 MT (within 28.0 MT highway axle limit). 100% itemized delivery challan generated.'
  }
};

interface PhaseConfig {
  id: string;
  phaseNumber: string;
  title: string;
  badge: string;
  subtitle: string;
  sectionsLabel: string;
  moduleIds: string[];
}

const LIFECYCLE_PHASES: PhaseConfig[] = [
  {
    id: 'planning',
    phaseNumber: '1',
    title: '1. Planning & Setup',
    badge: '3 Core Sections',
    subtitle: 'Covers: Planning & BOQ, Heavy Machinery, Stores & Stock',
    sectionsLabel: 'Planning & BOQ, Heavy Machinery, Stores & Stock',
    moduleIds: ['company-projects', 'project-assets', 'inventory-store']
  },
  {
    id: 'workforce',
    phaseNumber: '2',
    title: '2. Workforce & Org',
    badge: '4 Core Sections',
    subtitle: 'Covers: Teams Setup, Shift Attendance, Users & Roles, Departments',
    sectionsLabel: 'Teams Setup, Attendance, Users & Roles, Departments',
    moduleIds: ['teams-management', 'attendance-designation', 'user-management', 'department-management']
  },
  {
    id: 'production',
    phaseNumber: '3',
    title: '3. Floor Execution',
    badge: '3 Core Sections',
    subtitle: 'Covers: Executive DPR, Coil Slitting, Piece-Mark QR Production',
    sectionsLabel: 'Executive DPR, Coil Slitting, Production QR',
    moduleIds: ['reports-analytics', 'coil-management', 'production-tracking']
  },
  {
    id: 'quality',
    phaseNumber: '4',
    title: '4. QC & Dispatch',
    badge: '2 Core Sections',
    subtitle: 'Covers: QC & NDT Logs, Trailer Dispatch & Weighbridge Gate',
    sectionsLabel: 'QC & NDT Logs, Trailer Dispatch',
    moduleIds: ['quality-control', 'dispatch-logistics']
  }
];

const MODULE_STAGE_MAP: Record<string, { phaseId: string; phaseBadge: string; stepNumber: string; shortTitle: string }> = {
  'company-projects': { phaseId: 'planning', phaseBadge: 'Planning & Setup', stepNumber: '01', shortTitle: 'Planning & BOQ' },
  'project-assets': { phaseId: 'planning', phaseBadge: 'Planning & Setup', stepNumber: '02', shortTitle: 'Heavy Machinery' },
  'inventory-store': { phaseId: 'planning', phaseBadge: 'Planning & Setup', stepNumber: '03', shortTitle: 'Stores & Stock' },
  'teams-management': { phaseId: 'workforce', phaseBadge: 'Workforce & Org', stepNumber: '04', shortTitle: 'Teams Setup' },
  'attendance-designation': { phaseId: 'workforce', phaseBadge: 'Workforce & Org', stepNumber: '05', shortTitle: 'Shift Attendance' },
  'user-management': { phaseId: 'workforce', phaseBadge: 'Workforce & Org', stepNumber: '06', shortTitle: 'Users & Roles' },
  'department-management': { phaseId: 'workforce', phaseBadge: 'Workforce & Org', stepNumber: '07', shortTitle: 'Departments' },
  'reports-analytics': { phaseId: 'production', phaseBadge: 'Floor Execution', stepNumber: '08', shortTitle: 'Executive DPR' },
  'coil-management': { phaseId: 'production', phaseBadge: 'Floor Execution', stepNumber: '09', shortTitle: 'Coil Slitting' },
  'production-tracking': { phaseId: 'production', phaseBadge: 'Floor Execution', stepNumber: '10', shortTitle: 'Production QR' },
  'quality-control': { phaseId: 'quality', phaseBadge: 'QC & Dispatch', stepNumber: '11', shortTitle: 'QC & NDT Logs' },
  'dispatch-logistics': { phaseId: 'quality', phaseBadge: 'QC & Dispatch', stepNumber: '12', shortTitle: 'Trailer Dispatch' },
};

const MODULE_IMAGE_MAP: Record<string, { image: string; tag: string; caption: string; statBadge: string }> = {
  'company-projects': {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    tag: 'Planning & BOQ Telemetry',
    caption: 'Tekla 3D Model Milestone Sequencing & Contract BOQ Management',
    statBadge: '6 Live PEB Plants • 4,850 MT Committed'
  },
  'project-assets': {
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
    tag: 'Heavy Machinery Telemetry',
    caption: '15T EOT Overhead Cranes & High-Def CNC Plasma Maintenance',
    statBadge: '48 Tracked Assets • 99.2% Uptime'
  },
  'inventory-store': {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
    tag: 'Stores & Stock Telemetry',
    caption: 'Multi-Store Raw Steel, Consumables & Digital Store Indents',
    statBadge: 'Real-Time GRN • Safety Stock Auto-Alerts'
  },
  'teams-management': {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    tag: 'Workforce Gang Rosters',
    caption: 'Fitter-Welder Bay Allocations & Gang Shift Rosters',
    statBadge: '8 Fabrication Gangs • Daily Bay Routing'
  },
  'attendance-designation': {
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85',
    tag: 'Biometric Attendance & Pay',
    caption: 'Shift In/Out, Overtime Hours & Skill Designation Registry',
    statBadge: '100% Payroll Sync • Real-Time Headcount'
  },
  'user-management': {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    tag: 'RBAC Security & Audits',
    caption: 'Role-Based Access Control, Multi-Plant Permissions & Audit Logs',
    statBadge: 'Strict Role Hierarchy • Multi-Plant Auditing'
  },
  'department-management': {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tag: 'Department Org Structure',
    caption: 'Interlinked Engineering, Stores, Quality & Accounts Hierarchy',
    statBadge: '6 Departments Linked • Unified Workflow'
  },
  'reports-analytics': {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tag: 'Executive DPR Analytics',
    caption: 'Daily Production Rate, Cost-per-MT & Bottleneck Heatmap',
    statBadge: '100% Real-Time Executive KPIs'
  },
  'coil-management': {
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
    tag: 'Coil Slitting & Shearing',
    caption: 'Mother Coil Inward, Slitting Plan & Offcut Scrap Control',
    statBadge: '8.2% Scrap Yield • Zero Camber Loss'
  },
  'production-tracking': {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    tag: 'Piece-Mark QR Production',
    caption: 'Cut → Fit-Up → SAW Weld → Shot-Blast → Sa 2.5 Paint Workflow',
    statBadge: '100% Piece-Mark Traceability'
  },
  'quality-control': {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    tag: 'QC & NDT Inspection',
    caption: 'UT Flaw Detector, DFT Paint Gauge & Digital Client Dossier',
    statBadge: 'AWS D1.1 Weld Compliance • TPI Clearance'
  },
  'dispatch-logistics': {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
    tag: 'Trailer Dispatch & Weighbridge',
    caption: 'Trailer Axle Load Balancing & Gross Weight Gate Pass',
    statBadge: 'Zero Site Shortage • 100% Itemized Challan'
  }
};

export const ModulesPage: React.FC<ModulesPageProps> = ({ onOpenDemoModal }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(ERP_MODULES[0].id);
  const [selectedPhase, setSelectedPhase] = useState<string>('planning');
  const [activeTab, setActiveTab] = useState<'telemetry' | 'pain-solution' | 'features' | 'workflow'>('telemetry');
  const [tableFilter, setTableFilter] = useState<string>('');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationResult, setSimulationResult] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const found = ERP_MODULES.find(m => m.id === id);
      if (found) {
        setSelectedModuleId(found.id);
      }
    }
  }, [location.hash]);

  // Reset simulation and search filter on module change
  useEffect(() => {
    setSimulationResult(null);
    setTableFilter('');
  }, [selectedModuleId]);

  const activeModuleIndex = ERP_MODULES.findIndex(m => m.id === selectedModuleId);
  const activeModule = ERP_MODULES[activeModuleIndex] || ERP_MODULES[0];
  const ActiveIcon = MODULE_ICONS[activeModule.iconName] || Disc;

  const handleSelectModule = (id: string) => {
    setSelectedModuleId(id);
    const stage = document.getElementById('module-inspection-stage');
    if (stage) {
      stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationResult(null);
    setTimeout(() => {
      setIsSimulating(false);
      const config = SIMULATION_CONFIGS[activeModule.id] || {
        label: 'Run Simulation',
        successMsg: `✓ Module ${activeModule.name} telemetry validated: 100% verified against live ERP records.`
      };
      setSimulationResult(config.successMsg);
    }, 1100);
  };

  const handleNextModule = () => {
    const nextIdx = (activeModuleIndex + 1) % ERP_MODULES.length;
    handleSelectModule(ERP_MODULES[nextIdx].id);
  };

  const handlePrevModule = () => {
    const prevIdx = (activeModuleIndex - 1 + ERP_MODULES.length) % ERP_MODULES.length;
    handleSelectModule(ERP_MODULES[prevIdx].id);
  };

  useEffect(() => {
    const stageInfo = MODULE_STAGE_MAP[selectedModuleId];
    if (stageInfo && stageInfo.phaseId !== selectedPhase) {
      setSelectedPhase(stageInfo.phaseId);
    }
  }, [selectedModuleId]);

  const handleSelectPhase = (phaseId: string) => {
    setSelectedPhase(phaseId);
    const phase = LIFECYCLE_PHASES.find(p => p.id === phaseId);
    if (phase && !phase.moduleIds.includes(selectedModuleId)) {
      setSelectedModuleId(phase.moduleIds[0]);
    }
  };

  const handleSelectSection = (id: string) => {
    setSelectedModuleId(id);
  };

  const currentPhase = LIFECYCLE_PHASES.find(p => p.id === selectedPhase) || LIFECYCLE_PHASES[0];
  const phaseModules = currentPhase.moduleIds.map(id => ERP_MODULES.find(m => m.id === id)!).filter(Boolean);
  const activeStageInfo = MODULE_STAGE_MAP[activeModule.id] || { phaseId: 'planning', phaseBadge: 'Planning & Setup', stepNumber: '01', shortTitle: 'Planning & BOQ' };
  const activeImageInfo = MODULE_IMAGE_MAP[activeModule.id] || {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    tag: 'Shop-Floor Telemetry',
    caption: activeModule.name,
    statBadge: 'Connected to Shop Floor'
  };

  // Filter table rows based on tableFilter input
  const filteredTableRows = activeModule.sampleData.tableRows.filter(row => 
    row.some(cell => cell.toLowerCase().includes(tableFilter.toLowerCase()))
  );

  const currentPipeline = WORKFLOW_PIPELINES[activeModule.id] || [
    { step: '01', title: 'Data Inward', desc: 'Log master parameters and material test data' },
    { step: '02', title: 'Shop Routing', desc: 'Assign machine bays and supervisor milestones' },
    { step: '03', title: 'QC Verification', desc: 'Real-time digital inspection sign-off' },
    { step: '04', title: 'Dispatch & Billing', desc: 'Instant itemized challans and milestone sync' }
  ];

  return (
    <div className="space-y-12 pb-24 bg-white text-slate-900">
      
      {/* 1. HERO HEADER WITH LIGHT INDUSTRIAL STEEL FABRICATION BACKGROUND (NON-DARK) */}
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
            {ERP_MODULES.length} Enterprise Modules Built for{' '}
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
              href="#select-module-section"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('select-module-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black shadow-xs flex items-center gap-2 transition cursor-pointer"
            >
              <span>Explore 12 Modules Roadmap ↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. "SELECT MODULE TO INSPECT" - SPLIT-SCREEN LIFECYCLE WORKBENCH */}
      <section id="select-module-section" className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 space-y-6 scroll-mt-20">
        
        {/* SECTION HEADER & LIFECYCLE STAGE TABS */}
        <div className="bg-gradient-to-r from-slate-50 via-keshav-50/20 to-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-keshav-500 animate-pulse"></span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Select Module to Inspect
                </h2>
                <span className="bg-keshav-100 text-keshav-800 text-xs font-mono font-black px-3 py-1 rounded-full border border-keshav-200">
                  {ERP_MODULES.length} Modules Available
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1.5 max-w-2xl">
                Browse our 4 lifecycle phases. Select any phase to view its sections, examine the operational scope on the left, and preview the real shop-floor workflow on the right.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Active Phase:</span>
              <span className="btn-gradient text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-xl shadow-xs">
                {currentPhase.title}
              </span>
            </div>
          </div>

          {/* 4 LIFECYCLE PHASE SELECTOR TABS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {LIFECYCLE_PHASES.map((phase) => {
              const isPhaseActive = selectedPhase === phase.id;
              return (
                <button
                  key={phase.id}
                  onClick={() => handleSelectPhase(phase.id)}
                  className={`text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer border relative overflow-hidden flex flex-col justify-between ${
                    isPhaseActive
                      ? 'bg-gradient-to-br from-white via-keshav-50/70 to-white border-2 border-keshav-500 shadow-md ring-2 ring-keshav-400/20'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200 text-slate-700 hover:border-keshav-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-xs font-mono font-black px-2.5 py-0.5 rounded-lg ${
                      isPhaseActive ? 'btn-gradient text-slate-950 shadow-2xs' : 'bg-slate-100 text-slate-600'
                    }`}>
                      Phase 0{phase.phaseNumber}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-keshav-700 bg-keshav-50 border border-keshav-200 px-2 py-0.5 rounded-md">
                      {phase.badge}
                    </span>
                  </div>
                  <h4 className={`text-sm sm:text-base font-black tracking-tight ${
                    isPhaseActive ? 'text-slate-950' : 'text-slate-800'
                  }`}>
                    {phase.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-1 line-clamp-1">
                    {phase.sectionsLabel}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* SPLIT LAYOUT: LEFT SIDE BASIC INFORMATION OF STEPS & RIGHT SIDE DUMMY IMAGE */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
          
          {/* Header of Phase Container: No Selection Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-keshav-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phase 0{currentPhase.phaseNumber} Overview
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-bold text-keshav-700">
                  All {phaseModules.length} Operational Steps
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                {currentPhase.title}
              </h3>
            </div>

            <span className="btn-gradient text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-xl shadow-xs self-start sm:self-auto">
              {currentPhase.badge}
            </span>
          </div>

          {/* TWO-COLUMN SPLIT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: All Steps in this Phase Shown with Basic Information (No Selection UI) */}
            <div className="lg:col-span-7 space-y-4">
              {phaseModules.map((mod) => {
                const info = MODULE_STAGE_MAP[mod.id];
                const ModIcon = MODULE_ICONS[mod.iconName] || Disc;
                const isSelected = mod.id === selectedModuleId;

                return (
                  <div
                    key={mod.id}
                    onClick={() => setSelectedModuleId(mod.id)}
                    className={`group relative rounded-2xl p-5 transition-all duration-300 border cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-br from-keshav-50/70 via-white to-lime-50/30 border-2 border-keshav-500 shadow-md ring-2 ring-keshav-400/20'
                        : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-keshav-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'btn-gradient text-slate-950 shadow-sm scale-105'
                          : 'bg-slate-100 text-slate-700 group-hover:bg-keshav-100 group-hover:text-keshav-800'
                      }`}>
                        <ModIcon className="w-6 h-6" />
                      </div>

                      {/* Basic Information */}
                      <div className="flex-1 min-w-0 space-y-2">
                        {/* Header line: Step number, title, and route */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-mono font-black px-2.5 py-0.5 rounded-md transition ${
                              isSelected ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-800'
                            }`}>
                              Step {info?.stepNumber}
                            </span>
                            <h4 className="text-base font-black text-slate-950">
                              {info?.shortTitle || mod.name}
                            </h4>
                          </div>

                          <span className="text-[11px] font-mono text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                            {mod.erpRoute.split(',')[0]}
                          </span>
                        </div>

                        {/* Short Description / Basic Information */}
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          {mod.shortDesc}
                        </p>

                        {/* Capabilities Badges & Actions */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {mod.features.slice(0, 2).map((feat, fIdx) => (
                              <span
                                key={fIdx}
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-slate-100/90 border border-slate-200/90 px-2.5 py-1 rounded-lg"
                              >
                                <Check className="w-3 h-3 text-keshav-700 stroke-[3]" />
                                <span>{feat}</span>
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectModule(mod.id);
                            }}
                            className="text-xs font-black text-keshav-800 hover:text-keshav-900 flex items-center gap-1 cursor-pointer py-1"
                          >
                            <span>Inspect Telemetry</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Dummy Image / Shop-Floor Preview Card */}
            <div className="lg:col-span-5 sticky top-24 self-start">
              <div className="relative rounded-3xl overflow-hidden border border-slate-300 shadow-2xl group bg-slate-950 aspect-[4/3] sm:aspect-[16/11]">
                
                {/* High-Resolution Industrial Dummy Image */}
                <img
                  src={activeImageInfo.image}
                  alt={activeModule.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 pointer-events-none" />

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <div className="inline-flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-keshav-400 animate-pulse"></span>
                    <span>{activeImageInfo.tag}</span>
                  </div>

                  <span className="bg-keshav-500 text-slate-950 font-mono font-black text-xs px-2.5 py-1 rounded-lg shadow-md">
                    Step {activeStageInfo.stepNumber}
                  </span>
                </div>

                {/* Bottom Overlaid Glassmorphism Telemetry Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-white shadow-2xl space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-keshav-300 font-bold">
                        Live ERP Preview • {currentPhase.title}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 bg-white/10 px-2 py-0.5 rounded-md">
                        Shop Floor Sync
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                      {activeImageInfo.caption}
                    </h4>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/15">
                      <span className="text-xs font-bold text-keshav-300">
                        ⚡ {activeImageInfo.statBadge}
                      </span>
                      <button
                        onClick={() => handleSelectModule(activeModule.id)}
                        className="text-xs font-black text-white hover:text-keshav-300 transition flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open Simulation</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* STEPPER NAVIGATION BAR (PREV / NEXT ACROSS ALL 12 MODULES) */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl btn-gradient text-slate-950 font-black text-sm font-mono flex items-center justify-center shrink-0">
              {String(activeModuleIndex + 1).padStart(2, '0')}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-keshav-300">
                  Section {String(activeModuleIndex + 1).padStart(2, '0')} of 12
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Phase {activeStageInfo.stepNumber <= '03' ? '1' : activeStageInfo.stepNumber <= '07' ? '2' : activeStageInfo.stepNumber <= '10' ? '3' : '4'}: {activeStageInfo.phaseBadge}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-black text-white truncate max-w-md">
                {activeModule.name}
              </h4>
            </div>
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrevModule}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Section</span>
            </button>

            <button
              onClick={handleNextModule}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next Section</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#module-inspection-stage"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('module-inspection-stage');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gradient px-4 py-2 rounded-xl text-xs font-black text-slate-950 flex items-center gap-1.5 shadow-md hover:brightness-105 transition cursor-pointer"
            >
              <span>Inspect Telemetry ↓</span>
            </a>
          </div>
        </div>

      </section>

      {/* 3. FULL-WIDTH DEEP DYNAMIC INSPECTION STAGE */}
      <section id="module-inspection-stage" className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 scroll-mt-24">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl relative overflow-hidden">
          
          {/* Header Showcase Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase font-black tracking-widest text-keshav-800 bg-keshav-100 px-3 py-1 rounded-full border border-keshav-300">
                  <span className="w-2 h-2 rounded-full bg-keshav-500 animate-pulse"></span>
                  <span>Currently Inspecting: {activeModule.badge}</span>
                </span>
                <span className="font-mono text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  Routes: {activeModule.erpRoute}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span>{activeModule.name}</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-3xl leading-relaxed">
                {activeModule.shortDesc}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="btn-gradient px-4 py-2.5 rounded-xl text-xs font-black text-slate-950 shadow-xs flex items-center gap-2 transition hover:brightness-105 cursor-pointer active:scale-95"
              >
                <span>Book Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </button>

              <span className="bg-gradient-to-r from-keshav-100 to-lime-100 text-keshav-900 border border-keshav-300 px-4 py-2.5 rounded-xl text-xs font-black shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-keshav-700" />
                <span>{activeModule.metrics}</span>
              </span>
            </div>
          </div>

          {/* DYNAMIC SUB-VIEW TABS */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'telemetry'
                  ? 'btn-gradient text-slate-950 font-black shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Live Plant Telemetry</span>
            </button>

            <button
              onClick={() => setActiveTab('workflow')}
              className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'workflow'
                  ? 'btn-gradient text-slate-950 font-black shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>4-Stage Plant Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab('pain-solution')}
              className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'pain-solution'
                  ? 'btn-gradient text-slate-950 font-black shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Bottlenecks vs ERP Solution</span>
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'features'
                  ? 'btn-gradient text-slate-950 font-black shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Module Capabilities</span>
            </button>
          </div>

          {/* TAB 1: LIVE PLANT TELEMETRY & RUN SIMULATION */}
          {activeTab === 'telemetry' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Live Simulation Banner */}
              <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-keshav-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="space-y-1 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-keshav-300">
                      Live Interactive Simulator
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-white">
                    Test This Module's Real-Time Algorithm
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl">
                    Execute verified steel manufacturing calculations directly against sample enterprise data.
                  </p>
                </div>

                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="btn-gradient text-slate-950 font-black text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-md hover:brightness-105 transition shrink-0 relative z-10 cursor-pointer disabled:opacity-75"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Executing Telemetry...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{(SIMULATION_CONFIGS[activeModule.id]?.label) || 'Execute Live Simulation'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Simulation Result Alert */}
              {simulationResult && (
                <div className="bg-emerald-50 border border-emerald-300 p-4 sm:p-5 rounded-2xl flex items-start gap-3 shadow-xs animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950 text-xs sm:text-sm block font-bold mb-0.5">
                      Simulation Executed Successfully
                    </strong>
                    <p className="text-xs sm:text-sm font-mono text-emerald-800 font-medium">
                      {simulationResult}
                    </p>
                  </div>
                </div>
              )}

              {/* Full-Width 4-Card KPI Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {activeModule.sampleData.stats.map((s, idx) => (
                  <div 
                    key={idx} 
                    className="bg-slate-50 hover:bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 text-center shadow-xs transition-colors"
                  >
                    <div className="text-[11px] text-slate-500 uppercase font-extrabold tracking-wider">{s.label}</div>
                    <div className="text-base sm:text-xl font-black mt-1 text-slate-900">{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Full-Width Sample Data Table with Real-Time Search Filter */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-keshav-500 animate-pulse"></span>
                    <span className="font-bold text-sm text-slate-900">
                      Live Data Preview: {activeModule.sampleData.title}
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Filter table rows..."
                      value={tableFilter}
                      onChange={(e) => setTableFilter(e.target.value)}
                      className="bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-keshav-500 w-56 shadow-xs"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700 uppercase text-[11px] tracking-wider">
                      <tr>
                        {activeModule.sampleData.tableHeaders.map((th, idx) => (
                          <th key={idx} className="p-3.5 border-b border-slate-200 font-bold">{th}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {filteredTableRows.length > 0 ? (
                        filteredTableRows.map((tr, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">{tr[0]}</td>
                            <td className="p-3.5 text-slate-600">{tr[1]}</td>
                            <td className="p-3.5 text-slate-600">{tr[2]}</td>
                            <td className="p-3.5 text-slate-900 font-bold">{tr[3]}</td>
                            <td className="p-3.5">
                              <span className="inline-flex items-center gap-1 font-bold text-keshav-800 bg-keshav-100 border border-keshav-200 px-2.5 py-0.5 rounded-lg">
                                <span className="w-1.5 h-1.5 rounded-full bg-keshav-600"></span>
                                <span>{tr[4]}</span>
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={activeModule.sampleData.tableHeaders.length} className="p-6 text-center text-slate-400">
                            No records matching "{tableFilter}"
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: 4-STAGE PIPELINE WORKFLOW (FULL-WIDTH 4-COLUMN ROADMAP) */}
          {activeTab === 'workflow' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-700 mb-1">
                  Execution Pipeline: {activeModule.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  How this module executes step-by-step across plant departments with zero paperwork bottlenecks.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentPipeline.map((step) => (
                  <div 
                    key={step.step}
                    className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs hover:border-keshav-400 transition-colors flex flex-col justify-between space-y-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-keshav-50 border border-keshav-200 text-keshav-800 font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                      {step.step}
                    </div>
                    <div>
                      <h5 className="text-sm font-black text-slate-900 leading-tight">
                        {step.title}
                      </h5>
                      <p className="text-xs text-slate-600 font-medium mt-1.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BOTTLENECKS VS SOLUTION */}
          {activeTab === 'pain-solution' && (
            <div className="grid sm:grid-cols-2 gap-6 animate-fadeIn">
              <div className="bg-rose-50/80 border border-rose-200 p-6 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-black text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Costly Pain Point Without This Module</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {activeModule.painPoint}
                </p>
              </div>

              <div className="bg-keshav-50/80 border border-keshav-200 p-6 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-keshav-800 font-black text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-keshav-600" />
                  <span>How infraFab ERP Solves It Permanently</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {activeModule.solution}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: COMPLETE CAPABILITY CHECKLIST */}
          {activeTab === 'features' && (
            <div className="space-y-5 animate-fadeIn">
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold flex items-center gap-2">
                <Layers className="w-4 h-4 text-keshav-600" />
                <span>Included Features & Capabilities</span>
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {activeModule.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 hover:bg-white border border-slate-200 p-4 rounded-2xl text-xs text-slate-800 font-medium flex items-start gap-2.5 transition-colors shadow-xs"
                  >
                    <Check className="w-4 h-4 text-keshav-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Quick Switcher & CTA */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Previous / Next Module Navigation */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePrevModule}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Module</span>
              </button>

              <button
                onClick={handleNextModule}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Next Module</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Primary Demo CTA */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto btn-gradient py-3.5 px-6 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition cursor-pointer"
              >
                <span>Schedule Walkthrough of {activeModule.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
