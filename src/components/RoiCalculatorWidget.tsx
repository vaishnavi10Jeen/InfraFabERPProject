import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, IndianRupee, DollarSign, Calculator } from 'lucide-react';

interface RoiCalculatorWidgetProps {
  onBookDemo?: () => void;
  standalone?: boolean;
}

export const RoiCalculatorWidget: React.FC<RoiCalculatorWidgetProps> = ({ onBookDemo, standalone = false }) => {
  const [tonnage, setTonnage] = useState<number>(500);
  const [steelPrice, setSteelPrice] = useState<number>(65000); // INR per Ton
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Conversion rate for USD toggle (1 USD ~ 84 INR)
  const usdRate = 84;

  // Assuming ERP recovers 1.5% absolute raw steel from remnant & slitting optimization
  const recoveredTonnageAnnual = (tonnage * 12) * 0.015;
  const annualSavingsInr = Math.round(recoveredTonnageAnnual * steelPrice);
  const annualSavingsUsd = Math.round(annualSavingsInr / usdRate);

  // Additional secondary operational recoveries
  const erectionShortageSavingsInr = Math.round(tonnage * 12 * 450); // ₹450/T saved on erection crane idling & transport
  const contractorDisputeSavingsInr = Math.round(tonnage * 12 * 320); // ₹320/T saved on piece-rate leakage

  const totalAnnualBenefitInr = annualSavingsInr + erectionShortageSavingsInr + contractorDisputeSavingsInr;
  const totalAnnualBenefitUsd = Math.round(totalAnnualBenefitInr / usdRate);

  return (
    <div className={`w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl text-slate-900 relative overflow-hidden ${standalone ? 'max-w-5xl mx-auto' : ''}`}>
      {/* Background ambient soft tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-shreeji-50 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 relative z-10 border-b border-slate-200 pb-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Calculate Your Factory's Annual Scrap & Capital Recovery
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            See the exact monetary return recovered by tracking mother/baby remnant coils and eliminating job-site piece shortages.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setCurrency('INR')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
              currency === 'INR' ? 'bg-white text-shreeji-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <IndianRupee className="w-3.5 h-3.5" /> INR (₹)
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
              currency === 'USD' ? 'bg-white text-shreeji-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" /> USD ($)
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Sliders Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Monthly Tonnage */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center text-sm font-bold mb-3">
              <span className="text-slate-700">Monthly Steel Fabrication Volume:</span>
              <span className="text-shreeji-800 text-base font-black bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                {tonnage.toLocaleString()} MT / Month
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="3000"
              step="50"
              value={tonnage}
              onChange={(e) => setTonnage(Number(e.target.value))}
              className="w-full accent-shreeji-600 cursor-pointer h-2.5 bg-slate-200 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-semibold">
              <span>100 MT (Small Yard)</span>
              <span>1,000 MT (Mid-size PEB)</span>
              <span>3,000 MT (Heavy EPC)</span>
            </div>
          </div>

          {/* Slider 2: Steel Price */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center text-sm font-bold mb-3">
              <span className="text-slate-700">Average Raw Steel Price per Ton:</span>
              <span className="text-shreeji-800 text-base font-black bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                {currency === 'INR'
                  ? `₹${steelPrice.toLocaleString('en-IN')} / Ton`
                  : `$${Math.round(steelPrice / usdRate).toLocaleString()} / Ton`}
              </span>
            </div>
            <input
              type="range"
              min="45000"
              max="95000"
              step="1000"
              value={steelPrice}
              onChange={(e) => setSteelPrice(Number(e.target.value))}
              className="w-full accent-shreeji-600 cursor-pointer h-2.5 bg-slate-200 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-semibold">
              <span>₹45,000 (Commercial Plate)</span>
              <span>₹65,000 (Standard HR Coil)</span>
              <span>₹95,000 (High-Grade Alloy)</span>
            </div>
          </div>

          {/* Benchmark Information Card */}
          <div className="bg-shreeji-50 p-4 rounded-xl border border-shreeji-200 text-xs text-slate-700 space-y-2">
            <div className="flex items-center gap-2 text-shreeji-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-shreeji-600 shrink-0" />
              <span>Conservative Industry Benchmark: 1.5% Direct Scrap Recovery</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Based on empirical shop-floor audits across 50+ steel plants using automated mother-baby coil slitting optimization, QR piece-mark auditing, and remnant off-cut reuse.
            </p>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-shreeji-900 to-shreeji-950 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between">
          <div>
            <div className="text-center pb-5 border-b border-shreeji-800/80">
              <span className="text-xs uppercase font-extrabold tracking-wider text-shreeji-300">
                Estimated Annual Net Profit Recovery
              </span>
              <div className="text-3xl sm:text-4xl font-black text-amber-300 mt-2 tracking-tight">
                {currency === 'INR'
                  ? `₹${annualSavingsInr.toLocaleString('en-IN')}`
                  : `$${annualSavingsUsd.toLocaleString()}`}
              </div>
              <p className="text-xs text-shreeji-100 mt-2">
                Reclaims approx. <strong className="text-white font-bold">{recoveredTonnageAnnual.toFixed(1)} MT</strong> of prime steel from cutting waste every single year.
              </p>
            </div>

            {/* Savings Breakdown */}
            <div className="py-4 space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-shreeji-100">
                <span>Remnant & Slitting Scrap Saved:</span>
                <span className="font-bold text-white">
                  {currency === 'INR' ? `₹${annualSavingsInr.toLocaleString('en-IN')}` : `$${annualSavingsUsd.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between items-center text-shreeji-100">
                <span>Crane & Erection Delay Penalties Averted:</span>
                <span className="font-bold text-white">
                  {currency === 'INR' ? `+ ₹${erectionShortageSavingsInr.toLocaleString('en-IN')}` : `+ $${Math.round(erectionShortageSavingsInr / usdRate).toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between items-center text-shreeji-100">
                <span>Contractor Piece-Rate Duplicate Prevention:</span>
                <span className="font-bold text-white">
                  {currency === 'INR' ? `+ ₹${contractorDisputeSavingsInr.toLocaleString('en-IN')}` : `+ $${Math.round(contractorDisputeSavingsInr / usdRate).toLocaleString()}`}
                </span>
              </div>

              <div className="pt-2 border-t border-shreeji-800 flex justify-between items-center text-sm font-bold">
                <span className="text-shreeji-300">Total Factory Value Impact:</span>
                <span className="text-white font-black text-base">
                  {currency === 'INR' ? `₹${totalAnnualBenefitInr.toLocaleString('en-IN')}` : `$${totalAnnualBenefitUsd.toLocaleString()}`}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onBookDemo}
              className="w-full flex items-center justify-center gap-2 btn-gradient px-6 py-3.5 rounded-xl text-sm"
            >
              <span>Book Live Demo to Claim Savings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-shreeji-300 mt-2 font-medium">
              Free 30-min tailored analysis with plant deployment roadmap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
