import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Server, Cloud, HelpCircle } from 'lucide-react';
import { PRICING_TIERS } from '../data/pricingData';
import { ComparisonTable } from '../components/ComparisonTable';
import { ObjectionFaq } from '../components/ObjectionFaq';

interface PricingPageProps {
  onOpenDemoModal: () => void;
  onOpenLiveModal?: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenDemoModal, onOpenLiveModal }) => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  return (
    <div className="space-y-20 pb-20 bg-white text-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-b from-shreeji-50/70 via-white to-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Transparent Pricing Built for Steel Fabrication Scale
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Choose between dedicated secure Cloud SaaS or Private On-Premise deployment for air-gapped factory networks.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Quarterly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
              className="w-14 h-7 bg-slate-200 rounded-full p-1 border border-slate-300 relative transition"
            >
              <div
                className={`w-5 h-5 rounded-full bg-shreeji-600 transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-bold ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}>
                Annual Subscription
              </span>
              <span className="text-[10px] bg-shreeji-100 text-shreeji-800 border border-shreeji-200 font-extrabold px-2.5 py-0.5 rounded-full">
                Save 20% + Free On-Site Training
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all relative ${
                tier.recommended
                  ? 'border-shreeji-500 shadow-2xl shadow-shreeji-600/15 md:-translate-y-2 bg-gradient-to-b from-shreeji-50/40 via-white to-white'
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-shreeji-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Popular for PEB Fabricators
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-black text-slate-900">{tier.name}</h3>
                  <p className="text-xs text-slate-600 mt-1 min-h-[36px] font-medium">{tier.tagline}</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6 space-y-1.5">
                  <div className="text-xs font-black text-shreeji-800">{tier.monthlyTonnage}</div>
                  <div className="text-xs text-slate-700 font-bold">{tier.usersIncluded}</div>
                  <div className="text-[11px] text-amber-700 font-bold">{tier.setupTime}</div>
                  <div className="text-[11px] text-slate-500 font-mono pt-1 border-t border-slate-200">
                    Deployment: {tier.deployment}
                  </div>
                </div>

                {/* Modules Included */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Modules Included:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-800 font-semibold">
                    {tier.modules.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-shreeji-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Features */}
                <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Key Features:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                    {tier.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-shreeji-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenDemoModal}
                  className={`w-full py-3.5 rounded-xl font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 ${
                    tier.recommended
                      ? 'btn-gradient'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                  }`}
                >
                  <span>Request Custom Plant Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-center text-slate-500 mt-2 font-medium">
                  {tier.priceNote}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deployment Modes: Cloud vs On-Premise */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-slate-900">
              Flexible Deployment Models to Fit Your Factory IT Policy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Whether you prefer zero-maintenance cloud hosting or strict on-premise local server isolation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-shreeji-100 text-shreeji-700 flex items-center justify-center">
                <Cloud className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Dedicated Cloud SaaS</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Hosted on enterprise AWS / Google Cloud infrastructure with automatic daily backups, 99.9% uptime SLA, and zero IT maintenance. Floor supervisors access via web browser or mobile PWA.
              </p>
              <div className="text-xs text-shreeji-700 font-bold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-shreeji-600" /> Ready in 7-14 Days | Automatic Updates Included
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Private Local On-Premise Server</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Installed directly on your company's physical factory server behind your corporate firewall. 100% data sovereignty with optional air-gapped operation for defense and high-security EPC contractors.
              </p>
              <div className="text-xs text-shreeji-700 font-bold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-shreeji-600" /> Full Local LAN Speed | Complete Internal Control
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonTable onBookDemo={onOpenDemoModal} />
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ObjectionFaq />
      </div>
    </div>
  );
};
