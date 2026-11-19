import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Menu, X, ArrowRight 
} from 'lucide-react';
import { ShreejiLogo } from './ShreejiLogo';
import { Button } from './ui/Button';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-sm">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center">
            <ShreejiLogo variant="light" size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 text-sm">
            <Link
              to="/"
              className={`px-3 py-1.5 text-sm transition-all border-b-2 ${
                isActive('/') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 font-semibold border-transparent hover:border-slate-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/modules"
              className={`px-3 py-1.5 text-sm transition-all border-b-2 ${
                isActive('/modules') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 font-semibold border-transparent hover:border-slate-300'
              }`}
            >
              ERP Modules
            </Link>
            <Link
              to="/solutions"
              className={`px-3 py-1.5 text-sm transition-all border-b-2 ${
                isActive('/solutions') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 font-semibold border-transparent hover:border-slate-300'
              }`}
            >
              Solutions
            </Link>
            <Link
              to="/about"
              className={`px-3 py-1.5 text-sm transition-all border-b-2 ${
                isActive('/about') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 font-semibold border-transparent hover:border-slate-300'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-1.5 text-sm transition-all border-b-2 ${
                isActive('/contact') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 font-semibold border-transparent hover:border-slate-300'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA with Linear Gradient Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:+919825012345"
              aria-label="Call Sales"
              title="Call Sales (+91 98250 12345)"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-keshav-400 text-slate-700 hover:text-keshav-700 transition flex items-center justify-center shadow-xs group shrink-0"
            >
              <Phone className="w-4 h-4 text-keshav-600 group-hover:scale-110 transition-transform" />
            </a>

            <Button
              variant="gradient"
              size="md"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={onOpenDemoModal}
            >
              Book a Live Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+919825012345"
              aria-label="Call Sales"
              title="Call Sales"
              className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:text-keshav-700 border border-slate-200 flex items-center justify-center"
            >
              <Phone className="w-4 h-4 text-keshav-600" />
            </a>
            <Button
              variant="gradient"
              size="sm"
              onClick={onOpenDemoModal}
            >
              Book Demo
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1 text-sm font-semibold">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 border-b-2 transition-colors ${
                isActive('/') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 border-transparent'
              }`}
            >
              Home
            </Link>
            <Link
              to="/modules"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 border-b-2 transition-colors ${
                isActive('/modules') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 border-transparent'
              }`}
            >
              ERP Modules
            </Link>
            <Link
              to="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 border-b-2 transition-colors ${
                isActive('/solutions') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 border-transparent'
              }`}
            >
              Solutions for Fabricators
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 border-b-2 transition-colors ${
                isActive('/about') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 border-transparent'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 border-b-2 transition-colors ${
                isActive('/contact') 
                  ? 'text-keshav-700 font-bold border-keshav-600' 
                  : 'text-slate-700 hover:text-keshav-700 border-transparent'
              }`}
            >
              Contact & Plant Location
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-3 rounded-xl btn-gradient text-xs flex items-center justify-center gap-2"
            >
              <span>Book 1-on-1 Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
