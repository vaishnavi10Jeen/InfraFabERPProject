export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyTonnage: string;
  usersIncluded: string;
  recommended?: boolean;
  priceNote: string;
  deployment: string;
  setupTime: string;
  modules: string[];
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'standard',
    name: 'Standard Fabrication Plant',
    tagline: 'Ideal for single-yard fabricators and coil service centers getting started with shop-floor digitization.',
    monthlyTonnage: 'Up to 300 MT / Month',
    usersIncluded: 'Up to 10 Users Included',
    recommended: false,
    priceNote: 'Flexible Monthly or Annual SaaS Subscription',
    deployment: 'Secure Dedicated Cloud SaaS',
    setupTime: 'Go-Live in 7 Days',
    modules: [
      'Steel Coil Stock & Inward Register',
      'Multi-Store Inventory & Consumables',
      'Daily Shop-Floor Production DPR',
      'Delivery Challan & Gate Pass Dispatch'
    ],
    features: [
      'Mother-to-Baby coil slitting yield tracking',
      'Standard barcode & QR label generator',
      'Mobile web access for floor supervisors',
      'Email & WhatsApp DPR daily summaries',
      'Standard accounting ledger CSV export',
      'Email and chat support (Business Hours)'
    ]
  },
  {
    id: 'professional',
    name: 'Professional PEB Plant',
    tagline: 'The complete shop-floor & engineering operating system for growing PEB and structural steel manufacturers.',
    monthlyTonnage: 'Up to 1,500 MT / Month',
    usersIncluded: 'Up to 35 Users Included',
    recommended: true,
    priceNote: 'Most Popular for High-Volume Manufacturers',
    deployment: 'Dedicated Cloud Instance (AWS/GCP/Azure)',
    setupTime: 'Go-Live in 14 Days (Includes On-Site Training)',
    modules: [
      'All Standard Modules Included',
      'Tekla / CAD Structural BOM Import',
      'QR Code Piece-Mark Stage Scanner',
      'Digital QC & NDT Welding Inspection Dossiers',
      'Trailer Capacity & Erection Dispatch Optimization',
      'Contractor Piece-Rate Output & Attendance'
    ],
    features: [
      'Everything in Standard tier',
      'Offline-capable Mobile PWA for greasy shop-floor use',
      'Non-conformance reports (NCR) & rework management',
      'Mill test certificate (MTC) batch linkage',
      'Multi-trailer sequential erection loading',
      'Contractor piece-rate vs QC tonnage verification',
      'Dedicated Customer Success Manager + Phone Support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Multi-Facility',
    tagline: 'Unrestricted enterprise deployment for multi-plant fabricators, EPC contractors, and corporate steel groups.',
    monthlyTonnage: 'Unlimited Metric Tons / Month',
    usersIncluded: 'Unlimited Users & Plants',
    recommended: false,
    priceNote: 'Turnkey Enterprise License or Hosted Cloud',
    deployment: 'Private Cloud or On-Premise Local Server',
    setupTime: 'Full Custom Turnkey Implementation',
    modules: [
      'All Modules + Multi-Plant Central Hub',
      'Custom ERP & Weighbridge API Integrations',
      'Advanced Executive BI & Live Plant Dashboards',
      'Third-Party Inspection (TPI) Client Portals',
      'Multi-Currency & Global Export Logistics'
    ],
    features: [
      'Everything in Professional tier',
      'Multi-plant consolidated inventory & capacity planning',
      'Weighbridge scale automated direct integration',
      'Custom API sync with SAP, Oracle, or Tally Prime',
      'On-premise air-gapped installation support',
      'Custom workflow customization & bespoke reports',
      '24/7 SLA Priority Technical Support & Annual Audits'
    ]
  }
];

export const COMPARISON_TABLE_DATA = [
  {
    feature: 'Mother-to-Baby Coil Slitting Traceability',
    shreeji: 'Native Built-in (Weights, Widths, Scrap %)',
    tally: 'Gross Kg only (Fails on slitting)',
    sap: 'Requires 6+ months custom ABAP build',
    excel: 'Error-prone, disconnected formulas'
  },
  {
    feature: 'Structural Piece-Mark QR Codes (Tekla BOM)',
    shreeji: '1-Click CAD Import & Weatherproof Labels',
    tally: 'No part-level tracking capability',
    sap: 'Very complex, costly add-ons required',
    excel: 'Manual list, zero shop-floor scanning'
  },
  {
    feature: 'Mobile Shop-Floor DPR for Supervisors',
    shreeji: 'Fast Offline PWA with Big Buttons',
    tally: 'Desktop-only accounting software',
    sap: 'Complicated screens, training takes weeks',
    excel: 'Paper clipboards re-typed 2 days late'
  },
  {
    feature: 'Welding NDT & Digital Inspection Dossiers',
    shreeji: 'Digital QC, Ultrasonic, Paint DFT & IRN',
    tally: 'Not available (Strictly accounting)',
    sap: 'Heavy module, generic manufacturing only',
    excel: 'Loose paper binders prone to being lost'
  },
  {
    feature: 'Trailer Capacity & Erection Dispatch Bundling',
    shreeji: '100% Itemized Challans & Zero Site Shortage',
    tally: 'Basic dispatch note with no piece marks',
    sap: 'Standard freight, lacks erection sequencing',
    excel: 'Manual guesswork leading to site delays'
  },
  {
    feature: 'Contractor Piece-Rate vs QC Tonnage Check',
    shreeji: 'Automated: Only QC-cleared steel is billable',
    tally: 'Manual vouchers with no tonnage proof',
    sap: 'Complex contractor timecards',
    excel: 'High leakage & billing disputes'
  },
  {
    feature: 'Deployment Time to Live Production',
    shreeji: '7 to 14 Days (Pre-configured for Steel)',
    tally: 'Immediate (but solves zero shop problems)',
    sap: '9 to 18 Months of consulting',
    excel: 'Immediate (fragile and unscalable)'
  }
];
