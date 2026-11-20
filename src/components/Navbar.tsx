import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Menu, X, ArrowRight, ChevronDown, Users, PackageCheck, QrCode 
} from 'lucide-react';
import { ShreejiLogo } from './ShreejiLogo';
import { Button } from './ui/Button';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);
  const [mobileModulesOpen, setMobileModulesOpen] = useState(true);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isModulesActive = location.pathname.startsWith('/modules');

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

            {/* ERP Modules Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setModulesDropdownOpen(true)}
              onMouseLeave={() => setModulesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setModulesDropdownOpen((prev) => !prev)}
                className={`px-3 py-1.5 text-sm transition-all border-b-2 flex items-center gap-1.5 cursor-pointer ${
                  isModulesActive 
                    ? 'text-keshav-700 font-bold border-keshav-600' 
                    : 'text-slate-700 hover:text-keshav-700 font-semibold border-transparent hover:border-slate-300'
                }`}
              >
                <span>ERP Modules</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    modulesDropdownOpen ? 'rotate-180 text-keshav-700' : 'text-slate-400'
                  }`} 
                />
              </button>

              {/* Desktop Dropdown Flyout */}
              {modulesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-1.5 space-y-1">
                    <Link
                      to="/modules/employee-user-management"
                      onClick={() => setModulesDropdownOpen(false)}
                      className={`flex items-center gap-3 p-2 rounded-xl transition ${
                        location.pathname === '/modules/employee-user-management' || location.pathname === '/modules'
                          ? 'bg-keshav-50/80 border border-keshav-200 text-keshav-900 font-black'
                          : 'hover:bg-slate-50 border border-transparent text-slate-800 hover:text-keshav-800 font-bold'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-xs">
                        Employee & User Management
                      </span>
                    </Link>

                    <Link
                      to="/modules/asset-inventory-management"
                      onClick={() => setModulesDropdownOpen(false)}
                      className={`flex items-center gap-3 p-2 rounded-xl transition ${
                        location.pathname === '/modules/asset-inventory-management'
                          ? 'bg-keshav-50/80 border border-keshav-200 text-keshav-900 font-black'
                          : 'hover:bg-slate-50 border border-transparent text-slate-800 hover:text-keshav-800 font-bold'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0">
                        <PackageCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs">
                        Asset & Inventory Management
                      </span>
                    </Link>

                    <Link
                      to="/modules/dispatch-qr-management"
                      onClick={() => setModulesDropdownOpen(false)}
                      className={`flex items-center gap-3 p-2 rounded-xl transition ${
                        location.pathname === '/modules/dispatch-qr-management'
                          ? 'bg-keshav-50/80 border border-keshav-200 text-keshav-900 font-black'
                          : 'hover:bg-slate-50 border border-transparent text-slate-800 hover:text-keshav-800 font-bold'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <span className="text-xs">
                        Dispatch & QR Code Management
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
            {/* Mobile ERP Modules Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileModulesOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between px-3 py-2 border-b-2 transition-colors ${
                  isModulesActive 
                    ? 'text-keshav-700 font-bold border-keshav-600' 
                    : 'text-slate-700 hover:text-keshav-700 border-transparent'
                }`}
              >
                <span>ERP Modules</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileModulesOpen ? 'rotate-180 text-keshav-700' : 'text-slate-400'
                  }`} 
                />
              </button>

              {mobileModulesOpen && (
                <div className="pl-3 pr-1 py-1 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100">
                  <Link
                    to="/modules/employee-user-management"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-xs font-bold text-slate-800 hover:text-keshav-700 hover:bg-white transition"
                  >
                    <div className="w-6 h-6 rounded-md bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1">
                      <span>1. Employee & User Management</span>
                    </div>
                  </Link>

                  <Link
                    to="/modules/asset-inventory-management"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-xs font-bold text-slate-800 hover:text-keshav-700 hover:bg-white transition"
                  >
                    <div className="w-6 h-6 rounded-md bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0">
                      <PackageCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1">
                      <span>2. Asset & Inventory Management</span>
                    </div>
                  </Link>

                  <Link
                    to="/modules/dispatch-qr-management"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-xs font-bold text-slate-800 hover:text-keshav-700 hover:bg-white transition"
                  >
                    <div className="w-6 h-6 rounded-md bg-keshav-100 text-keshav-800 flex items-center justify-center shrink-0">
                      <QrCode className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1">
                      <span>3. Dispatch & QR Code Management</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>
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
