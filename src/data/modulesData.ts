export interface ErpModule {
  id: string;
  name: string;
  shortDesc: string;
  erpRoute: string;
  badge: string;
  iconName: string;
  painPoint: string;
  solution: string;
  features: string[];
  metrics: string;
  sampleData: {
    title: string;
    stats: { label: string; value: string; color?: string }[];
    tableHeaders: string[];
    tableRows: string[][];
  };
}

export const ERP_MODULES: ErpModule[] = [
  {
    id: 'company-projects',
    name: 'Our Company Project List & Milestone Tracking',
    shortDesc: 'Complete company project portfolio tracking: client scope, committed tonnage, drawings, progress pipeline, and retention billing.',
    erpRoute: '/projects/list, /projects/details, /projects/milestones',
    badge: 'Company Project List',
    iconName: 'FolderKanban',
    painPoint: 'Managing directors and project managers cannot answer clients accurately when asked: "What percentage of my building is fabricated, painted, and ready for dispatch?"',
    solution: 'Live company project registry tracking every project from drawing approval to Cutting → Fit-Up → Welding → Painting → Site Dispatch with milestone billing sign-offs.',
    features: [
      'Centralized Company Project Directory with Client Master & Contract Scope',
      'Live Multi-Stage Tonnage Pipeline: Detailed → Cut → Welded → Painted → Dispatched',
      'Engineering Drawing & Tekla 3D Model Revision Change Tracking (ECO)',
      'Client Milestone Retention Invoicing Schedule & Certified Stage Billing',
      'Real-Time Tonnage Fabricated vs. Committed Delivery Target Milestones',
      'Site Erection Delivery Sequencing & Handover Punch-List Management'
    ],
    metrics: '100% Real-Time Project Visibility',
    sampleData: {
      title: 'Active Company Projects Portfolio (Live Dashboard)',
      stats: [
        { label: 'Active Projects', value: '6 Live PEB Plants' },
        { label: 'Committed Tonnage', value: '4,850 MT' },
        { label: 'Dispatched to Date', value: '3,210 MT (66%)', color: 'text-emerald-500' },
        { label: 'Milestone Revenue', value: '₹22.40 Crore', color: 'text-brand-blue' }
      ],
      tableHeaders: ['Project Name', 'Client', 'Order MT', 'Fabrication Stage', 'Delivery Status'],
      tableRows: [
        ['Metro Depot Station #4', 'L&T Infrastructure', '1,450 MT', '88% Completed', 'Phase 1 & 2 Dispatched'],
        ['Automotive Plant Hangar', 'Tata Motors Vendor', '1,200 MT', '62% Completed', 'Welding & Painting'],
        ['Multi-Bay Industrial Shed', 'Welspun Logistics', '980 MT', '95% Completed', 'Final Trailer Staged'],
        ['Agri Cold Storage Hub', 'Adani Logistics', '720 MT', '45% Completed', 'Fit-Up & Tack Weld']
      ]
    }
  },
  {
    id: 'project-assets',
    name: 'Project Assets & Machinery Management',
    shortDesc: 'Control heavy plant machinery, EOT cranes, CNC plasma tables, mobile hydras, machine health, and project-wise asset allocation.',
    erpRoute: '/assets/project-allocation, /assets/machinery, /assets/maintenance',
    badge: 'Project Assets & Machinery',
    iconName: 'Wrench',
    painPoint: 'Expensive heavy machinery, cranes, and CNC cutting beds break down without warning or are moved between project sites with zero maintenance history.',
    solution: 'Track plant equipment and machinery allocated to each company project with automated preventive service reminders, downtime tickets, and calibration logs.',
    features: [
      'Heavy Plant Machinery Master: EOT Cranes, CNC Plasma Beds, SAW Welder Beds',
      'Dedicated Project-Wise Asset Allocation & Mobilization Records',
      'Automated Preventive Maintenance Schedules & Service Reminders',
      'Breakdown Ticketing, Repair Downtime Logs & Spare Parts Consumption',
      'Machine Calibration Certificates (Weighbridges, DFT gauges, UT probes)',
      'Fuel & Power Utilization Telemetry per Operating Machine Hour'
    ],
    metrics: '99.2% Plant Machine Uptime',
    sampleData: {
      title: 'Project Assets & Plant Equipment Register',
      stats: [
        { label: 'Tracked Assets', value: '48 Active Units' },
        { label: 'Under Maintenance', value: '2 Scheduled', color: 'text-amber-500' },
        { label: 'Preventive Compliance', value: '98.4%', color: 'text-emerald-500' },
        { label: 'Downtime Avoided', value: '120+ Plant Hours' }
      ],
      tableHeaders: ['Asset Tag', 'Equipment Name', 'Assigned Project', 'Operational Health', 'Next Service'],
      tableRows: [
        ['EQ-CRN-15T', '15-Ton EOT Bay Crane #1', 'Metro Depot Station #4', 'Operating at 94% Load', '12 Days (Lube & Wire Rope)'],
        ['EQ-CNC-02', 'High-Def CNC Plasma Cutter', 'Automotive Plant Hangar', 'Active in Bay #1', 'Valid (Calibration OK)'],
        ['EQ-SAW-04', 'Submerged Arc Beam Welder', 'Multi-Bay Industrial Shed', 'Active (Shift A)', '5 Days (Flux Hopper Check)'],
        ['EQ-HYD-12', '12-Ton Hydra Mobile Crane', 'Yard Dispatch Operations', 'Inspection Cleared', '18 Days (Hydraulic Service)']
      ]
    }
  },
  {
    id: 'inventory-store',
    name: 'Multi-Store Inventory & Consumables Management',
    shortDesc: 'Control raw steel yard, coils, plates, consumables (electrodes, gas, paint), digital store indents, GRN, and minimum stock alerts.',
    erpRoute: '/inventory/store, /inventory/stock/in, /inventory/stock/requests',
    badge: 'Inventory & Multi-Store',
    iconName: 'PackageCheck',
    painPoint: 'Fabrication yards bleed money through untracked welding electrodes, grinding wheels, missing hardware, and unmonitored raw steel remnants.',
    solution: 'Digital material requisitions with supervisor sign-offs, automatic safety stock alerts, and complete GRN audit trails for raw steel and consumables.',
    features: [
      'Multi-Warehouse Tracking: Raw Steel Yard, Consumables Store, Hardware & Finished Goods',
      'Digital Store Requisitions with Role-Based Manager Approval Workflows',
      'Complete GRN Inward & Purchase Bill Matching with Mill Test Cert Linkage',
      'Safety Stock Alerts for Critical Consumables (Electrodes, Paint, Gas cylinders)',
      'Tool & Equipment Assignment to Specific Subcontractor Teams',
      'Real-Time Stock Valuation (FIFO & Weighted Average Costing)'
    ],
    metrics: '99.8% Store Inventory Accuracy',
    sampleData: {
      title: 'Consumables Store & Raw Material Yard Status',
      stats: [
        { label: 'Stock Valuation', value: '₹3.42 Crore' },
        { label: 'Active Requisitions', value: '14 Pending' },
        { label: 'Safety Stock Alerts', value: '2 Critical', color: 'text-amber-500' },
        { label: 'Active Catalog SKUs', value: '1,280 Items' }
      ],
      tableHeaders: ['Item Code', 'Description', 'Current Stock', 'Min Safety Level', 'Store Action'],
      tableRows: [
        ['CONS-WLD-7018', 'E7018 Low-Hydrogen Electrodes (3.15mm)', '420 Packets', '200 Packets', 'Healthy Stock'],
        ['PNT-EPOXY-GRY', 'Zinc Phosphate Epoxy Primer (Sa 2.5)', '85 Litres', '150 Litres', 'Reorder PO Generated'],
        ['GAS-CO2-CYL', 'Industrial Shielding Gas (CO2/Argon)', '18 Cylinders', '12 Cylinders', 'Optimal Threshold'],
        ['HDW-BOLT-10.9', 'High-Tensile Structural Bolts M24x80', '1,850 Pcs', '500 Pcs', 'Ready for Dispatch']
      ]
    }
  },
  {
    id: 'teams-management',
    name: 'Teams & Team Member Management',
    shortDesc: 'Organize workforce and subcontractor gangs into dedicated fabrication teams with leader assignments and project allocations.',
    erpRoute: '/teams/list, /teams/members, /teams/assign',
    badge: 'Teams & Gang Management',
    iconName: 'Users',
    painPoint: 'Plant managers lack visibility into which contractor gang or internal team is working on which bay, machine, or structural beam.',
    solution: 'Structure workforce into specialized teams (Fitters, 6G Welders, Blasting/Coating, Riggers) and allocate them directly to project work orders.',
    features: [
      'Workforce Organization into In-House & Subcontractor Teams',
      'Dedicated Team Leader, Supervisor & Safety Officer Assignment',
      'Project-Wise & Bay-Wise Team Allocation for Precision Scheduling',
      'Team Skill Matrix Tracking: 6G Certified Welders, Fitters, Riggers, Painters',
      'Team Daily Tonnage Output (MT fabricated per team per shift)',
      'Direct Linkage to Consumables Issue and Equipment Handover'
    ],
    metrics: 'Zero Unassigned Labour Hours',
    sampleData: {
      title: 'Active Shop-Floor & Erection Teams',
      stats: [
        { label: 'Active Teams', value: '8 Plant Teams' },
        { label: 'Total Team Members', value: '142 Personnel' },
        { label: 'Subcontractor Gangs', value: '4 Active Gangs' },
        { label: 'Daily Team Tonnage', value: '48.5 MT / Shift', color: 'text-brand-blue' }
      ],
      tableHeaders: ['Team Name', 'Team Leader / Supervisor', 'Specialty Bay', 'Members', 'Current Project'],
      tableRows: [
        ['Om Fab Primary Gang', 'Rajesh Sharma (Lead Fitter)', 'Bay #1 (Heavy Column Fit-Up)', '18 Fitters/Tackers', 'Metro Depot Station #4'],
        ['Shiva SAW Welders', 'Kailash Patel (Welding Lead)', 'Bay #2 (Submerged Arc Bed)', '12 Certified Welders', 'Automotive Plant Hangar'],
        ['Jay Ambey Coating Squad', 'Dinesh Kumar (NACE L2 Lead)', 'Bay #4 (Shot Blast & Paint)', '14 Blasters/Painters', 'Multi-Bay Industrial Shed'],
        ['Gujarat Erection Team', 'Vikram Singh (Site In-charge)', 'Site Staging & Logistics', '16 Riggers/Crane Crew', 'Adani Logistics Hub']
      ]
    }
  },
  {
    id: 'attendance-designation',
    name: 'Team Member Attendance & Set Designation',
    shortDesc: 'Biometric & mobile shift attendance tracking, designation master, shift differential, and contractor piece-rate wage validation.',
    erpRoute: '/attendance/daily, /attendance/shift, /designation/set',
    badge: 'Attendance & Designation',
    iconName: 'Clock',
    painPoint: 'Paper muster rolls allow ghost workers, mismatched designation skill pay, and inflated subcontractor piece-rate tonnage claims.',
    solution: 'Biometric and mobile shift attendance logging combined with standardized job designations and piece-rate tonnage cross-verification.',
    features: [
      'Standard Designation Master: Senior Detailer, 6G Welder, Structural Fitter, NDT Inspector',
      'Biometric & Mobile PWA Shift Attendance Logging with Geo-Fencing',
      'Multi-Shift Tracking (Shift A / Shift B / Overtime Hours)',
      'Designation-Wise Standard Wage Rates & Overtime Multipliers',
      'Contractor Piece-Rate Output Verification against QC-Passed Steel',
      '1-Click Monthly Attendance Muster Roll & Payroll Export'
    ],
    metrics: '100% Verified Attendance & Pay',
    sampleData: {
      title: 'Daily Team Member Shift Attendance & Designation Log',
      stats: [
        { label: 'Present Today', value: '138 / 142 (97.2%)', color: 'text-emerald-500' },
        { label: 'Shift A On-Floor', value: '84 Members' },
        { label: 'Shift B Scheduled', value: '54 Members' },
        { label: 'Overtime Approved', value: '18 Hours', color: 'text-amber-500' }
      ],
      tableHeaders: ['Member Name', 'Designation', 'Department / Team', 'Shift In/Out', 'Attendance Status'],
      tableRows: [
        ['Rameshwar Verma', 'Structural Fitter (Grade 1)', 'Production / Om Fab', '08:00 AM - Present', 'Present (Shift A)'],
        ['Mohd. Irfan', '6G SMAW Welder (WPQ-104)', 'Welding / Shiva SAW', '08:02 AM - Present', 'Present (Shift A)'],
        ['Pradeep Solanki', 'NACE Level 2 QC Inspector', 'Quality Control', '07:55 AM - Present', 'Present (Shift A)'],
        ['Mahesh Thakor', 'CNC Plasma Operator', 'Engineering & Cutting', '03:45 PM Scheduled', 'Scheduled (Shift B)']
      ]
    }
  },
  {
    id: 'user-management',
    name: 'User Management & Role Permissions',
    shortDesc: 'Role-based access control (RBAC), multi-level authorization, supervisor logins, security credentials, and complete activity audit trails.',
    erpRoute: '/users/list, /users/roles, /users/permissions',
    badge: 'User Security & Roles',
    iconName: 'UserCheck',
    painPoint: 'Uncontrolled software access leads to unauthorized price changes, accidental deletion of drawing revisions, or sensitive financial leaks.',
    solution: 'Fine-grained role-based permissions ensuring directors, project managers, QC inspectors, and storekeepers access strictly their assigned tools.',
    features: [
      'Role-Based Access Control: Admin, Plant Head, QC Engineer, Storekeeper, Supervisor',
      'Granular Permission Flags: View, Create, Edit, Delete, Approve, Export',
      'Secure User Authentication, Password Policies & Session Management',
      'Mobile PWA Access for Shop-Floor Supervisors vs. Desktop for Directors',
      'Complete User Audit Trail: Timestamped log of every transaction, edit, or approval',
      'Instant User Deactivation & Role Delegation with 1-Click'
    ],
    metrics: '100% Data Security & Role Governance',
    sampleData: {
      title: 'Authorized ERP Users & Role Permissions',
      stats: [
        { label: 'Active Users', value: '26 System Accounts' },
        { label: 'Defined Roles', value: '7 Distinct Levels' },
        { label: 'Active Mobile Sessions', value: '14 Floor Tablets' },
        { label: 'Security Incidents', value: '0 (Fully Protected)', color: 'text-emerald-500' }
      ],
      tableHeaders: ['User Name', 'Email / Login', 'Assigned Role', 'Department', 'Access Level'],
      tableRows: [
        ['Sunil Mehta', 's.mehta@shreejiinfrastructure.com', 'Plant Director (Full Admin)', 'Executive Management', 'All Modules + Financials'],
        ['Anil Kothari', 'a.kothari@shreejiinfrastructure.com', 'QC Head Inspector', 'Quality Assurance', 'QC Sign-offs, NCR, Dossiers'],
        ['Bhavin Dave', 'b.dave@shreejiinfrastructure.com', 'Store Manager', 'Stores & Procurement', 'Store Indents, GRN, Gate Pass'],
        ['Ketan Patel', 'k.patel@shreejiinfrastructure.com', 'Bay #2 Supervisor', 'Fabrication & Production', 'Mobile QR DPR Logging']
      ]
    }
  },
  {
    id: 'department-management',
    name: 'Department Master & Organizational Hierarchy',
    shortDesc: 'Structure enterprise departments: Engineering, Production, Quality, Stores, Accounts, Logistics, and inter-departmental approval chains.',
    erpRoute: '/departments/list, /departments/structure',
    badge: 'Department Structure',
    iconName: 'Building2',
    painPoint: 'Siloed departments cause drawings to be fabricated with outdated revisions, unapproved store indents, and delayed client invoicing.',
    solution: 'Define structured enterprise departments with automated cross-departmental handoffs connecting Engineering, Production, QC, Stores, and Accounts.',
    features: [
      'Standard Department Hierarchy: Engineering, Production, Quality, Stores, Accounts, Logistics',
      'Inter-Departmental Work Order & Material Transfer Routing Chains',
      'Multi-Level Cross-Department Approvals (Store Indent → HOD Sign → Store Issue)',
      'Departmental Cost Centers, Machine Run-time & Overhead Allocation',
      'Head of Department (HOD) Escalation & SLA Notification Triggers',
      'Department-Wise Performance Analytics & Headcount Tracking'
    ],
    metrics: '100% Cross-Department Sync',
    sampleData: {
      title: 'Enterprise Department Hierarchy & Performance',
      stats: [
        { label: 'Active Departments', value: '7 Departments' },
        { label: 'Assigned HODs', value: '7 Department Leads' },
        { label: 'Active Workflows', value: '19 Cross-Dept Routes' },
        { label: 'Inter-Dept SLA', value: '98.6% On-Time', color: 'text-emerald-500' }
      ],
      tableHeaders: ['Department', 'Head of Dept (HOD)', 'Key Responsibilities', 'Active Headcount', 'SLA Health'],
      tableRows: [
        ['Tekla & CAD Engineering', 'Hitesh Prajapati', '3D Modeling, BOQ & Piece-Mark Generation', '8 Detailers', '100% On-Schedule'],
        ['Production & Fabrication', 'Gopal R. Sharma', 'Cutting, Fit-Up, Welding & Roll-Forming', '86 Operators', '96.2% On-Target'],
        ['Quality Control & NDT', 'Anil Kothari', 'Weld UT, Blast Sa 2.5, DFT & TPI Clearances', '6 Inspectors', '99.4% First-Pass'],
        ['Stores & Logistics Yard', 'Bhavin Dave', 'Raw Steel, Consumables & Trailer Dispatch', '14 Staff', '99.8% Inventory Acc.']
      ]
    }
  },
  {
    id: 'reports-analytics',
    name: 'Executive Reports & Shop-Floor DPR Analytics',
    shortDesc: 'Daily production tonnage, team attendance reports, asset uptime logs, store consumption per ton, and real-time audit dashboards.',
    erpRoute: '/reports/production, /reports/attendance, /reports/inventory, /reports/assets',
    badge: 'Executive BI & Reports',
    iconName: 'BarChart3',
    painPoint: 'Plant Directors wait until month-end to find out that scrap losses exceeded 18%, contractor billing was inflated, or machine downtime soared.',
    solution: 'Real-time executive reports delivered to your mobile phone: 6:00 PM Daily Production Report (DPR), team attendance, asset logs, and project progress.',
    features: [
      'Automated 6:00 PM Daily Production Report (DPR) via WhatsApp & Email',
      'Shift-Wise Team Attendance & Verified Labour Cost Reports',
      'Consumables Store Consumption & Safety Stock Replenishment Logs',
      'Plant Machinery Asset Utilization, Downtime & Maintenance Reports',
      'Scrap Trend & Slitting Yield Analytics by Steel Grade & Thickness',
      '1-Click Export to Excel, PDF, or Direct Accounting API Integration'
    ],
    metrics: 'Real-Time Executive Clarity',
    sampleData: {
      title: 'Executive Plant Productivity Dashboard (Month-to-Date)',
      stats: [
        { label: 'Monthly Output', value: '842 Metric Tons', color: 'text-brand-blue' },
        { label: 'Average Slit Yield', value: '96.2%', color: 'text-emerald-500' },
        { label: 'Scrap Generated', value: '32 MT (3.8%)' },
        { label: 'Consumable Cost/Ton', value: '₹1,840 / MT' }
      ],
      tableHeaders: ['Report Category', 'Frequency', 'Current Metric / Value', 'Benchmark Target', 'Actionable Status'],
      tableRows: [
        ['Daily Production Report (DPR)', 'Daily (6:00 PM)', '48.5 MT Dispatched Today', 'Target: 45 MT', 'Target Exceeded (+7.7%)'],
        ['Labour & Attendance Report', 'Daily (Shift A/B)', '138 Present (97.2%)', 'Target: >95%', 'Optimal Manpower'],
        ['Consumables Store Consumption', 'Weekly Audit', '₹1,840 per Metric Ton', 'Budget: ₹2,000/MT', 'Within Safe Budget'],
        ['Plant Machinery Asset Utilization', 'Real-time Telemetry', '91.4% Active Run Time', 'Target: >88%', 'Cranes & CNC Healthy']
      ]
    }
  },
  {
    id: 'coil-management',
    name: 'Steel Coil & Slitting Management',
    shortDesc: 'Mother-to-baby coil genealogy, automated slitting yield calculation, width optimization, and real-time remnant scrap accounting.',
    erpRoute: '/coil/orders, /coil/stock, /coil/slitting-log',
    badge: 'Coil Yield & Slitting',
    iconName: 'Disc',
    painPoint: 'Tally only tracks gross weight in kg; it cannot track mother coils slit into 5 baby coils with variable widths and edge scrap.',
    solution: 'Trace every millimeter of steel from uncoiling to slitting, shearing, baby coil tagging, and remnant coil return to stockyard.',
    features: [
      'Mother Coil Inward with Heat No., Mill Name & IS 2062 Grade',
      'Interactive Slitting Optimization Line Planning',
      'Automated Baby Coil Serial Barcode/QR Generation',
      'Instant Edge-Trim Scrap & Slitting Yield % Calculation',
      'Remnant Mother Coil Return to Stock with Updated Weight',
      'Thickness, Width, and Camber Tolerance Tracking'
    ],
    metrics: '14-22% Scrap Loss Reduced',
    sampleData: {
      title: 'Mother Coil Slitting Register (Line #2)',
      stats: [
        { label: 'Mother Coil ID', value: 'MC-2024-8842', color: 'text-brand-blue' },
        { label: 'Weight (Inward)', value: '28,450 kg' },
        { label: 'Usable Baby Coils', value: '27,120 kg (95.3%)', color: 'text-emerald-500' },
        { label: 'End & Side Scrap', value: '1,330 kg (4.7%)', color: 'text-amber-500' }
      ],
      tableHeaders: ['Baby Coil #', 'Slit Width', 'Target Thickness', 'Net Wt (Kg)', 'Status'],
      tableRows: [
        ['BC-8842-A1', '420 mm', '3.5 mm', '6,850 kg', 'Dispatched to Purlin Line'],
        ['BC-8842-A2', '420 mm', '3.5 mm', '6,840 kg', 'In Staging Yard'],
        ['BC-8842-A3', '310 mm', '3.5 mm', '5,020 kg', 'Dispatched to Shearing'],
        ['BC-8842-A4', '510 mm', '3.5 mm', '8,410 kg', 'Ready for Dispatch']
      ]
    }
  },
  {
    id: 'production-tracking',
    name: 'Shop-Floor Production & QR Piece-Marking',
    shortDesc: 'Mobile PWA stage logging for cutting, fit-up, welding, shot-blasting, and painting with individual piece-mark tags.',
    erpRoute: '/production/daily-log, /production/progress, /production/qr-codes',
    badge: 'Shop-Floor DPR & QR',
    iconName: 'Cpu',
    painPoint: 'Paper clipboards take 48 hours to reach management. Missing rafters and columns are only discovered at the construction site.',
    solution: 'Import Tekla/AutoCAD structural BOMs, print weather-resistant QR stickers, and scan completions right on the floor.',
    features: [
      'Tekla / CAD BOM Itemized Import with Piece-Marks (e.g. C-101, R-204)',
      'Multi-Stage Shop-Floor Routing: Cut → Fit → Weld → Blast → Paint',
      'Weatherproof QR Code & Barcode Sticker Printing',
      'Mobile/Tablet Camera Scan Updates for Floor Supervisors',
      'Automatic Daily Production Report (DPR) by Ton and Machine',
      'Real-Time Identification of Production Bottlenecks'
    ],
    metrics: 'Zero Missing Piece-Marks',
    sampleData: {
      title: 'Structural Steel Stage Progress (Project: Amazon Fulfilment Center)',
      stats: [
        { label: 'Total Project Tonnage', value: '1,240 MT' },
        { label: 'Cut & Fit-Up', value: '1,120 MT (90%)' },
        { label: 'Welded & QC Passed', value: '890 MT (71%)' },
        { label: 'Painted & Dispatched', value: '750 MT (60%)', color: 'text-brand-blue' }
      ],
      tableHeaders: ['Piece Mark', 'Member Type', 'Weight (kg)', 'Current Stage', 'QC Status'],
      tableRows: [
        ['COL-101-A', 'Main Building Column', '1,420 kg', 'Finish Paint (Sa 2.5)', 'Passed (DFT 120μ)'],
        ['RAF-204-B', 'Clear Span Rafter', '2,150 kg', 'Submerged Arc Welding', 'Weld NDT Clear'],
        ['PUR-Z-12', 'Z-Purlin Bundle (20 pcs)', '840 kg', 'Staged for Dispatch', 'Cleared'],
        ['CRN-301', 'Crane Runway Girder', '3,280 kg', 'Fit-Up & Tack', 'Pending Visual QC']
      ]
    }
  },
  {
    id: 'quality-control',
    name: 'Quality Control, Welding NDT & Inspection Dossiers',
    shortDesc: 'Pre-configured checklists for fit-up, weld NDT, shot-blasting Sa 2.5, paint DFT, and one-click Mill Test Certificate linkage.',
    erpRoute: '/projects/qc-inspections, /quality/dossier',
    badge: 'TPI & ISO Compliant',
    iconName: 'ShieldCheck',
    painPoint: 'Loose paper inspection binders delay third-party consultant sign-offs (TPI) and hold back final client retention payments.',
    solution: 'Digital Non-Conformance Reports (NCR), ultrasonic test records, and automated one-click client inspection release dossiers.',
    features: [
      'Pre-Configured Checklists: Dimensions, Fit-Up, Weld, Blasting & Paint',
      'Non-Conformance Reports (NCR) with Rework Assignment & Tracking',
      'Mill Test Certificate (MTC) Heat No. Traceability to Final Members',
      'Dry Film Thickness (DFT) Calibration & Multi-Point Paint Logs',
      'Welder Qualification & Procedure Specification (WPS/PQR) Records',
      'One-Click Client & Consultant Inspection Release Notes (IRN)'
    ],
    metrics: '2-Day Faster Client Billing',
    sampleData: {
      title: 'Digital Quality & NDT Inspection Report',
      stats: [
        { label: 'Inspections Completed', value: '184 This Week' },
        { label: 'First-Pass Yield', value: '98.2%', color: 'text-emerald-500' },
        { label: 'Active NCRs', value: '1 Open (Rework In-Progress)', color: 'text-amber-500' },
        { label: 'TPI Approval Status', value: '100% Cleared' }
      ],
      tableHeaders: ['Inspection ID', 'Structural Item', 'Test Type', 'Required Spec', 'Result'],
      tableRows: [
        ['QC-8821', 'Column Base Flange COL-102', 'Ultrasonic Testing (UT)', 'AWS D1.1 Table 6.2', 'Passed (No Defects)'],
        ['QC-8822', 'Rafter Web Splice RAF-202', 'Magnetic Particle (MPT)', 'ISO 17638', 'Passed (100% Weld)'],
        ['QC-8823', 'Secondary Frame Bracing', 'Surface Cleanliness', 'ISO 8501-1 Sa 2.5', 'Passed (Grit Blasted)'],
        ['QC-8824', 'Crane Runway Girder CRN-301', 'Paint DFT Gauge', 'Min 120 Microns', 'Average 126μ (Passed)']
      ]
    }
  },
  {
    id: 'dispatch-logistics',
    name: 'Vehicle Dispatch, Trailer Planning & Gate Pass',
    shortDesc: 'Eliminate erection site shortages with trailer capacity planning, bundle tagging, digital security gate passes, and itemized challans.',
    erpRoute: '/dispatch/list, /dispatch/ready, /dispatch/create',
    badge: '100% Dispatch Accuracy',
    iconName: 'Truck',
    painPoint: 'Trailers get overloaded or sent with missing anchor bolts, halting erection crews 500 km away and delaying milestone payments.',
    solution: 'Visual staging dashboard, trailer weight and length calculation, digital gate passes, and 1-click GST itemized challans.',
    features: [
      'Dispatch Staging Dashboard for QC-Approved Fabricated Steel',
      'Trailer Capacity Matching (16T, 25T, 40T Multi-Axle Trailers)',
      'Erection Sequence Packing (Columns + Anchor Bolts together)',
      'Bundle & Crate Numbering for Purlins, Hardware & Sag Rods',
      'Automated Delivery Challans with Gross, Tare & Net Weights',
      'Digital Security Gate Pass with Exit Timestamps & Driver Logs'
    ],
    metrics: 'Zero Job-Site Shortage Delays',
    sampleData: {
      title: 'Trailer Dispatch Manifest (Trailer #GJ-01-BX-9044)',
      stats: [
        { label: 'Vehicle Type', value: '40-Foot Multi-Axle' },
        { label: 'Max Capacity', value: '28.0 Metric Tons' },
        { label: 'Loaded Tonnage', value: '26.85 Metric Tons', color: 'text-emerald-500' },
        { label: 'Destination', value: 'Tata Steel Plant, Jamshedpur' }
      ],
      tableHeaders: ['Challan #', 'Bundle / Piece Mark', 'Qty', 'Weight (MT)', 'Site Phase'],
      tableRows: [
        ['DC-2024-0412', 'COL-101 to COL-108 (Columns)', '8 Pcs', '11.36 MT', 'Grid A-D (Base)'],
        ['DC-2024-0412', 'RAF-201 to RAF-204 (Rafters)', '4 Pcs', '8.60 MT', 'Roof Trusses'],
        ['DC-2024-0412', 'PUR-BND-01 (Z200 Purlins)', '1 Bundle (40)', '3.45 MT', 'Purlin System'],
        ['DC-2024-0412', 'HDW-BOX-03 (High Tensile Bolts 8.8)', '1 Wooden Box', '0.44 MT', 'Anchor Assembly']
      ]
    }
  }
];
