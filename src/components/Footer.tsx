import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Phone, Mail, MapPin, ExternalLink, 
  ShieldCheck, ArrowUpRight, Award, Layers 
} from 'lucide-react';
import { ShreejiLogo } from './ShreejiLogo';

interface FooterProps {
  onOpenDemoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemoModal }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info & Pedigree */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center">
              <ShreejiLogo variant="dark" size="xl" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              infraFab ERP presents the only ERP purpose-built for Pre-Engineered Buildings (PEB) and steel fabricators. Forged inside an operating 50,000+ sq.ft plant with over three decades of steel manufacturing heritage.
            </p>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 text-shreeji-400" />
                ISO 9001:2015 Process Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-md">
                <Award className="w-3.5 h-3.5 text-shreeji-400" />
                AWS & ISO 3834 Welding QC Ready
              </span>
            </div>

            <div className="pt-2">
              <a
                href="https://shreejiinfrastructure.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-shreeji-400 hover:text-white transition font-bold bg-slate-900 border border-shreeji-700/50 px-3.5 py-2 rounded-lg"
              >
                <span>Industry Partner: shreejiinfrastructure.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: ERP Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-shreeji-400">
              ERP Modules
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/modules" className="hover:text-white transition">
                  Mother & Baby Coil Slitting
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-white transition">
                  Shop-Floor DPR & QR Piece-Marks
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-white transition">
                  Multi-Store Consumables & Assets
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-white transition">
                  Vehicle Trailer Dispatch & Gate Pass
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-white transition">
                  Quality Control & Welding NDT
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-white transition">
                  Project Milestones & BOQ Invoicing
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-white transition">
                  Contractor Piece-Rate Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industry Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-shreeji-400">
              Fabrication Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/solutions" className="hover:text-white transition">
                  Pre-Engineered Buildings (PEB)
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition">
                  Heavy Structural Steel & Bridges
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition">
                  Coil Slitting & Shearing Centers
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition">
                  C/Z Purlin & Roll-Forming Plants
                </Link>
              </li>
              <li>
                <Link to="/roi-calculator" className="hover:text-white transition text-shreeji-300 font-semibold">
                  Scrap Savings ROI Calculator →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-shreeji-400">
              Plant & Sales Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-keshav-500 shrink-0 mt-0.5" />
                <span>
                  FF 15, 16 Dwarkesh Complex, Opp. HCG Cancer Hospital, Sun Pharma Road, Vadodara, Gujarat – 390012, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-keshav-400 shrink-0" />
                <a href="tel:+919924266466" className="hover:text-white transition font-mono">
                  +91 99242 66466
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-keshav-400 shrink-0" />
                <a href="mailto:info@shreejiinfrastructure.com" className="hover:text-white transition">
                  info@shreejiinfrastructure.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-2.5 px-3 rounded-xl btn-gradient text-xs text-center"
              >
                Schedule Plant Walkthrough
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} <strong>infraFab ERP</strong>. All rights reserved. Powered by Shreeji Infrastructure ERP Platform.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition">
              About infraFab ERP & Pedigree
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition">
              Enterprise Sales
            </Link>
            <Link to="/roi-calculator" className="hover:text-slate-300 transition">
              ROI Calculator
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
