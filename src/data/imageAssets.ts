export interface PlantImage {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  url: string;
  aspect?: string;
  erpModule: string;
}

export const PLANT_GALLERY_IMAGES: PlantImage[] = [
  {
    id: 'coil-yard',
    title: 'High-Speed Mother & Baby Coil Slitting Line',
    subtitle: 'Automated width tolerance, camber control, and edge-trim scrap yield tracking in real time.',
    tag: 'Coil Slitting & Shearing',
    url: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
    erpModule: 'Route: /coil/orders & /coil/stock'
  },
  {
    id: 'peb-bay',
    title: '50,000+ Sq.Ft Primary Frame Built-Up Bay',
    subtitle: 'Tekla BOM piece-mark tracking from automated plate cutting to submerged arc welding (SAW).',
    tag: 'PEB Shop-Floor Fabrication',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    erpModule: 'Route: /production/qr-codes'
  },
  {
    id: 'qc-inspection',
    title: 'Precision Weld Inspection & Ultrasonic NDT Testing',
    subtitle: 'Zero billing delays with digital WPS/PQR procedure logs and multi-point paint DFT records.',
    tag: 'Quality & TPI Compliance',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    erpModule: 'Route: /projects/qc-inspections'
  },
  {
    id: 'dispatch-logistics',
    title: 'Vehicle Trailer Packing & Gate Pass Staging Yard',
    subtitle: '16T, 25T & 40T multi-axle trailer capacity matching with 100% itemized delivery challans.',
    tag: 'Erection Site Logistics',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
    erpModule: 'Route: /dispatch/create'
  },
  {
    id: 'warehouse-erection',
    title: 'Pre-Engineered Building Warehouse Erection Site',
    subtitle: 'Zero site shortages: Columns, rafters, purlins, and anchor bolts arrive in perfect erection order.',
    tag: 'Erection & Milestone Sign-Off',
    url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=85',
    erpModule: 'Route: /projects/production-status'
  },
  {
    id: 'heavy-cranes',
    title: 'Heavy Overhead Gantry Cranes & Raw Steel Yard',
    subtitle: 'Digital material requisitions and multi-store asset maintenance for plant equipment.',
    tag: 'Yard & Multi-Store Management',
    url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
    erpModule: 'Route: /inventory/store'
  }
];

export const INDUSTRY_SECTORS = [
  { name: 'Industrial Warehouses & Sheds', count: '140+ Projects Delivered' },
  { name: 'Pre-Engineered Buildings (PEB)', count: '500,000+ Sq.M Built' },
  { name: 'Heavy Bridge & Metro Trusses', count: 'High-Tensile Certified' },
  { name: 'Coil Slitting & Shearing Centers', count: '18% Avg Scrap Cut' },
  { name: 'C/Z Purlin & Roll-Forming', count: 'Automated Length Cut' }
];
