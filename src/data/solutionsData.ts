export interface IndustrySolution {
  id: string;
  title: string;
  subtitle: string;
  heroHeadline: string;
  description: string;
  erpModulesUsed: { module: string; role: string }[];
  keyBenefits: { title: string; desc: string }[];
  caseStudy: {
    client: string;
    location: string;
    metric: string;
    quote: string;
  };
  features: string[];
}

export const SOLUTIONS_DATA: IndustrySolution[] = [
  {
    id: 'peb-manufacturers',
    title: 'PEB (Pre-Engineered Building) Manufacturers',
    subtitle: 'End-to-end control for industrial warehouse, factory shed & hangar fabrication plants',
    heroHeadline: 'Eliminate Erection Site Shortages & Reclaim Millions in Remnant Scrap',
    description: 'Designed specifically for plants manufacturing primary frames, C/Z purlins, decking sheets, and roof cladding. Connect your Company Project List, Project Assets, Store Inventory, and Fabrication Teams directly to cutting, fit-up, welding beds, and multi-trailer dispatch staging.',
    erpModulesUsed: [
      { module: 'Company Project List', role: 'Track shed BOQ milestones from detailing to erection site handover' },
      { module: 'Project Assets & Machinery', role: 'Manage EOT bay cranes, roll-formers, and plasma beds across bays' },
      { module: 'Multi-Store Inventory', role: 'Track raw steel coils, welding wire, zinc primer, and hardware stores' },
      { module: 'Teams & Attendance', role: 'Assign contractor gangs to primary column fit-up with verified piece-rate pay' },
      { module: 'Executive Reports', role: 'Automated 6:00 PM DPR sent to Director phone with daily fabricated tonnage' }
    ],
    keyBenefits: [
      {
        title: 'Tekla & AutoCAD BOM Import',
        desc: 'Upload complex structural steel drawings and auto-generate piece-marks with weight, length, profile, and paint requirements in seconds.'
      },
      {
        title: 'Sequential Erection Packing',
        desc: 'Ensure columns, base plates, and anchor bolts are dispatched on Trailer 1 so erection crews never sit idle waiting for structural components.'
      },
      {
        title: 'Mother/Baby Coil Optimization',
        desc: 'Direct integration with C and Z purlin roll-formers to track continuous coil slitting with automated waste edge scrap accounting.'
      },
      {
        title: 'Site Delivery Sign-Off',
        desc: 'Mobile QR code scan at the erection site gives immediate delivery confirmation back to your plant finance department for retention invoicing.'
      }
    ],
    caseStudy: {
      client: 'Shreeji Infrastructure Plant Operations',
      location: 'Gujarat, India',
      metric: '99.4% Dispatch Accuracy & 18% Scrap Reduction',
      quote: 'Running this ERP inside our own 50,000 sq.ft plant changed everything: our Company Project List is always up to date, Teams & Attendance are verified against QC-cleared steel, and we have complete visibility over our Project Assets and Multi-Store Inventory.'
    },
    features: [
      'Company Project List milestone tracking (Detailed → Cut → Welded → Painted → Dispatched)',
      'Project Assets maintenance: EOT cranes, roll-formers, and plasma cutters',
      'Multi-Store Inventory: raw steel coils, consumables, welding electrodes, paint',
      'Team Member Attendance, Set Designation & contractor piece-rate validation',
      'Primary frame built-up section tracking (H-Beams, Rafters, Columns)',
      'Multi-trailer logistics load balancing & itemized e-Way delivery challans'
    ]
  },
  {
    id: 'heavy-structural',
    title: 'Heavy Structural Steel & Infrastructure',
    subtitle: 'Strict NDT, welding procedures & documentation dossiers for infrastructure EPC contractors',
    heroHeadline: 'Built for High-Specification Bridges, Power Plants & Flyover Fabrication',
    description: 'Engineered for steel yards handling 40mm+ thick plates, ultrasonic testing (UT), strict AWS/ISO welding procedures (WPS/PQR), and third-party inspection (TPI) sign-offs for government and EPC tenders.',
    erpModulesUsed: [
      { module: 'Company Project List', role: 'Monitor EPC project draw-down, milestone certifications, and retention claims' },
      { module: 'Project Assets & Machinery', role: 'Track heavy SAW welding beds, CNC profiling machines, and mobile hydras' },
      { module: 'User & Department RBAC', role: 'Role-based security ensuring only certified NDT inspectors sign off reports' },
      { module: 'Teams & Attendance', role: 'Verify 6G certified welder attendance, designations, and WPQ qualifications' },
      { module: 'Executive Reports', role: 'Generate instant TPI client inspection dossiers and executive yield summaries' }
    ],
    keyBenefits: [
      {
        title: 'Heat No. & Mill Test Cert Linkage',
        desc: 'Trace raw steel plate heat numbers directly through cutting, bevelling, and fit-up to the final structural beam with 1-click certificate retrieval.'
      },
      {
        title: 'Rigorous NDT & Weld Inspection',
        desc: 'Log Ultrasonic (UT), Magnetic Particle (MPT), and Radiography (RT) results. Members cannot advance to painting until QC clears NDT.'
      },
      {
        title: 'Surface Prep & Paint DFT Records',
        desc: 'Record shot-blasting surface profiles (Sa 2.5) and dry film thickness gauge readings with automatic averaging and pass/fail thresholds.'
      },
      {
        title: 'One-Click Client Inspection Dossier',
        desc: 'Generate complete 200-page inspection packages (IRN) with full member traceability in 60 seconds instead of 5 days of manual collation.'
      }
    ],
    caseStudy: {
      client: 'Western Infrastructure Fabricators',
      location: 'Maharashtra, India',
      metric: '4 Days Saved per TPI Inspection Clearance',
      quote: 'Consultants from L&T and Engineers India Limited (EIL) used to spend 3 full days verifying our inspection binders. With infraFab ERP, we open the Project List, verify NDT logs, check Welder Designations, and hand them a tablet with digital MTC linkages.'
    },
    features: [
      'Heavy plate cutting & CNC profiling waste tracking',
      'Designation & Welder qualification register (WPQ) and procedural compliance',
      'Non-conformance report (NCR) lifecycle with rework logs and Store replacement indents',
      'Third-party inspection agency (TPI) stage release',
      'Project Assets calibration: UT probes, DFT gauges, and weighbridge load cells',
      'Government tender documentation automation & executive audit logs'
    ]
  },
  {
    id: 'coil-service-centers',
    title: 'Coil Service Centers & Roll-Forming Plants',
    subtitle: 'High-speed slitting, cut-to-length (CTL) & purlin roll-forming tracking',
    heroHeadline: 'Every Millimeter of Steel Counted: Eliminate Untracked Remnant Loss',
    description: 'Specialized for coil stockists, slitting lines, and roll-forming fabricators. Stop losing money on unmeasured mother coil ends, slit edge-trim scrap, and misplaced baby coils sitting in stockyard corners.',
    erpModulesUsed: [
      { module: 'Multi-Store Inventory', role: 'Track mother coil stockyard, baby coil staging yard, and scrap bins' },
      { module: 'Company Project List', role: 'Track custom slitting and roll-forming orders by customer delivery date' },
      { module: 'Project Assets & Machinery', role: 'Monitor slitter line motor hours, blade sharpening, and recoiler uptime' },
      { module: 'Teams & Attendance', role: 'Shift A & B operator attendance, designation wage grading, and output yield' },
      { module: 'Executive Reports', role: 'Daily scrap percentage and mother-to-baby coil yield trends' }
    ],
    keyBenefits: [
      {
        title: 'Mother-to-Child Genealogy',
        desc: 'Trace mother coils through the uncoiler to multiple child coils with calculated width tolerances, camber specs, and remnant weight returns.'
      },
      {
        title: 'Live Scrap Yield Reconciliation',
        desc: 'Instant calculation of usable steel tonnage vs. edge scrap loss. Identify line operators who generate excessive scrap instantly.'
      },
      {
        title: 'Automated Weatherproof QR Tags',
        desc: 'Print durable barcode/QR stickers for child coils immediately as they come off the recoiler, ready for warehouse stacking.'
      },
      {
        title: 'Dynamic Slitting Line Scheduling',
        desc: 'Optimize cutting patterns across multiple customer orders from a single master coil to minimize off-cut waste.'
      }
    ],
    caseStudy: {
      client: 'Apex Steel & Slitting Center',
      location: 'Ahmedabad, Gujarat',
      metric: '₹42 Lakhs Saved Annually on Unaccounted Remnant Coils',
      quote: 'Before this ERP, partially slit mother coils were dumped in the yard and forgotten. Now every returned coil is logged with its exact remaining weight in Store Inventory and re-allocated to the next suitable job order.'
    },
    features: [
      'High-speed coil uncoiler & slitter log sheets',
      'Cut-to-length (CTL) sheet packaging tracking',
      'C-Purlin, Z-Purlin, and Decking roll-former logs',
      'Prime, secondary, and scrap grade classifications',
      'Weighbridge scale automation & gross/tare logs',
      'Executive Reports on yield efficiency and machine run time'
    ]
  }
];
