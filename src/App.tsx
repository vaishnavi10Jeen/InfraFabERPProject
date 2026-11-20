import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { FloatingContactWidget } from './components/FloatingContactWidget';

// Pages
import { HomePage } from './pages/HomePage';
import { ModulesPage } from './pages/ModulesPage';
import { AssetInventoryPage } from './pages/AssetInventoryPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { RoiCalculatorPage } from './pages/RoiCalculatorPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { DemoPage } from './pages/DemoPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        {/* Navigation */}
        <Navbar
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
        />

        {/* Main Content Viewport */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenDemoModal={() => setIsDemoModalOpen(true)}
                />
              }
            />
            <Route
              path="/modules"
              element={
                <ModulesPage
                  onOpenDemoModal={() => setIsDemoModalOpen(true)}
                />
              }
            />
            <Route
              path="/modules/employee-user-management"
              element={
                <ModulesPage
                  onOpenDemoModal={() => setIsDemoModalOpen(true)}
                />
              }
            />
            <Route
              path="/modules/asset-inventory-management"
              element={
                <AssetInventoryPage
                  onOpenDemoModal={() => setIsDemoModalOpen(true)}
                />
              }
            />
            <Route
              path="/solutions"
              element={
                <SolutionsPage
                  onOpenDemoModal={() => setIsDemoModalOpen(true)}
                />
              }
            />
            <Route
              path="/roi-calculator"
              element={
                <RoiCalculatorPage
                  onOpenDemoModal={() => setIsDemoModalOpen(true)}
                />
              }
            />
            <Route
              path="/pricing"
              element={
                <PricingPage
                  onOpenDemoModal={() => setIsDemoModalOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenDemoModal={() => setIsDemoModalOpen(true)}
                />
              }
            />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="*"
              element={
                <HomePage
                  onOpenDemoModal={() => setIsDemoModalOpen(true)}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
        />

        {/* Floating Quick Action Widget */}
        <FloatingContactWidget
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
        />

        {/* Interactive Modals */}
        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
