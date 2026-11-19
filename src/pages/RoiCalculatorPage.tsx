import React from 'react';
import { RoiCalculatorWidget } from '../components/RoiCalculatorWidget';
import { ArrowRight, ShieldCheck, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorPageProps {
  onOpenDemoModal: () => void;
  onOpenLiveModal?: () => void;
}

export const RoiCalculatorPage: React.FC<RoiCalculatorPageProps> = ({ onOpenDemoModal, onOpenLiveModal }) => {
  return (
    <div className="space-y-16 pb-20 bg-white text-slate-900">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-shreeji-50/70 via-white to-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
            How Much Capital Does Your Factory Bleed to Untracked Steel Scrap?
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Steel prices fluctuate daily. In high-volume fabrication, a modest 1.5% reduction in remnant scrap pays for your entire ERP implementation in less than 45 days.
          </p>
        </div>
      </section>

      {/* Main Interactive Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoiCalculatorWidget onBookDemo={onOpenDemoModal} standalone={true} />
      </div>

      {/* Detailed Technical Breakdown of the ROI Math */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-shreeji-600" />
            The Mathematical Formula Behind the 1.5% Recovery Guarantee
          </h3>

          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-shreeji-800 font-black block text-sm">1. Remnant Coil Reuse</span>
              <p className="text-slate-600 leading-relaxed font-medium">
                When mother coils are slit into baby coils, 500kg to 2,000kg remnants are often left in the yard without weights and eventually auctioned as scrap. infraFab ERP logs exact returned weights and auto-allocates them to future cut orders.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-amber-700 font-black block text-sm">2. Edge-Trim Optimization</span>
              <p className="text-slate-600 leading-relaxed font-medium">
                Slitting line operators choose strip patterns on intuition. Our interactive slitting calculator clusters customer order widths from the same master coil to reduce side-trim scrap down to mathematical minimums.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-shreeji-800 font-black block text-sm">3. Zero Erection Shortages</span>
              <p className="text-slate-600 leading-relaxed font-medium">
                A missing anchor bolt or rafter holds back entire erection teams and heavy 50-ton mobile cranes at ₹40,000/day. 100% itemized delivery challans prevent trailer shortages completely.
              </p>
            </div>
          </div>

          {/* Proof calculation box */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs font-mono space-y-2 text-slate-700">
            <div className="text-shreeji-800 font-black uppercase text-[11px]">Representative Plant Example:</div>
            <div>Monthly Fabrication: 500 Metric Tons (6,000 MT / Year)</div>
            <div>Raw Steel Cost: ₹65,000 / Metric Ton</div>
            <div>Conservative Scrap Recovery: 1.5% = 90 Metric Tons of Prime Steel Saved</div>
            <div className="text-shreeji-900 font-black text-sm pt-2 border-t border-slate-200">
              Direct Net Profit Recovery: 90 MT × ₹65,000 = ₹58,50,000 / Year ($70,000+ USD)
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-shreeji-50 rounded-3xl border border-shreeji-200 space-y-4">
          <h4 className="text-2xl font-black text-slate-900">
            Want a Custom Scrap Audit for Your Specific Steel Plant?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-medium">
            Book a complimentary 30-minute review. Share your monthly coil grades and plant layout, and we will calculate your exact expected recovery timeline.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDemoModal}
              className="btn-gradient px-8 py-3.5 rounded-xl text-xs sm:text-sm inline-flex items-center gap-2"
            >
              <span>Book Plant Scrap Audit Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
