export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'Sales Battlecard & Objections',
    question: 'We already use Tally Prime or Zoho Books for our accounting. Why do we need this ERP?',
    answer: 'Tally and Zoho Books are excellent for GST filings, vouchers, and profit-and-loss balance sheets. infraFab ERP does not replace your accounting ledger—it integrates seamlessly with it. But can Tally tell your floor supervisor which baby coil came from Heat No. 8942? Can Tally print weather-resistant QR codes for steel rafters, track 5 stages of welding inspections, or prevent a trailer from leaving without essential anchor bolts? infraFab ERP runs your factory floor, coil stock, and dispatch logistics, then feeds clean billing figures into your accounting software.'
  },
  {
    category: 'Shop Floor & Ease of Use',
    question: 'Our shop-floor supervisors and fabricators are not tech-savvy. Will they actually use this?',
    answer: 'We built this system directly inside a working 50,000 sq.ft plant with real fabricators in mind. The shop-floor interface is a Progressive Web App (PWA) with extra-large high-contrast buttons, multi-lingual support, and single-click camera QR scanning. If a floor supervisor knows how to send a photo on WhatsApp, they can operate infraFab ERP within 30 minutes. No cumbersome computer mice or multi-tab desktop menus on the dusty factory floor.'
  },
  {
    category: 'Deployment & Setup',
    question: 'Generic enterprise ERPs like SAP or Oracle take 9 to 18 months to deploy. How can you go live in 14 days?',
    answer: 'Generic ERPs take months because consultants have to learn from scratch what a "purlin", "slitting yield", "built-up H-beam", or "Sa 2.5 blast profile" means. infraFab ERP was created by steel fabricators for steel fabricators. All units (Metric Tons, Millimeters, Square Meters), bill-of-materials structures (Tekla piece-marks), and shop-floor stages are already built-in. Setup is as simple as uploading your existing master item list and opening your browser.'
  },
  {
    category: 'Security & Confidentiality',
    question: 'Is our sensitive company data, client list, and raw steel pricing secure?',
    answer: 'Yes, 100%. We enforce strict enterprise Role-Based Access Control (RBAC). Your shop-floor supervisors and labour contractors only see piece marks, drawings, and fabrication stages—they have zero visibility into steel purchase costs, client billing rates, or company profit margins. For deployment, you can choose a private dedicated cloud instance or an on-premise installation running entirely within your own factory local area network.'
  },
  {
    category: 'Technical & Hardware',
    question: 'Do we need expensive handheld industrial terminals or barcode guns?',
    answer: 'No expensive proprietary hardware is needed! Floor supervisors can use standard Android or iOS smartphones or low-cost ₹8,000 tablets. The built-in PWA uses the device’s regular camera to instantly scan piece-mark QR codes and baby coil tags, even in dimly lit factory bays.'
  },
  {
    category: 'Offline Capability',
    question: 'What happens if factory Wi-Fi or mobile data drops in the fabrication bay?',
    answer: 'infraFab ERP is built with offline-first PWA caching technology. Supervisors can continue scanning stage completions and logging daily logs without interruption. As soon as the device reconnects to Wi-Fi or cellular network, all logged events automatically sync to the central cloud database without data loss.'
  },
  {
    category: 'Consultation & Demo',
    question: 'Can we see a live demonstration of the ERP before committing?',
    answer: 'Yes! You can schedule a free 30-minute tailored 1-on-1 walkthrough with one of our steel manufacturing specialists who will configure sample coils, piece-marks, and approved drawings for your specific plant setup.'
  }
];
