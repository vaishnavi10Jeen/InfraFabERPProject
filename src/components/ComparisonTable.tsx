import React from 'react';
import { Check, X, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import { COMPARISON_TABLE_DATA } from '../data/pricingData';

interface ComparisonTableProps {
  onBookDemo?: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onBookDemo }) => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden text-slate-900">
      {/* Header */}
      <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Why Generic ERPs (Tally & SAP) Fail in Steel Fabrication
        </h3>
        <p className="text-slate-600 text-sm mt-2">
          Accounting software knows debits and credits, but cannot track mother/baby coil slitting yields, structural piece-mark QR tags, or sequential trailer bundling.
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-600 uppercase text-[11px] tracking-wider">
              <th className="py-4 px-6 font-bold w-1/4">Capability / Shop-Floor Requirement</th>
              <th className="py-4 px-6 font-black text-shreeji-900 bg-shreeji-100/60 border-x border-shreeji-200 w-1/4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-shreeji-500 animate-pulse"></span>
                  <span className="text-shreeji-900">infraFab ERP</span>
                </div>
              </th>
              <th className="py-4 px-6 font-semibold text-slate-600 w-1/6">Tally / Zoho Books</th>
              <th className="py-4 px-6 font-semibold text-slate-600 w-1/6">Generic SAP / Oracle</th>
              <th className="py-4 px-6 font-semibold text-slate-600 w-1/6">Excel Spreadsheets</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {COMPARISON_TABLE_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition">
                <td className="py-4 px-6 font-bold text-slate-900">
                  {row.feature}
                </td>
                <td className="py-4 px-6 font-bold text-shreeji-800 bg-shreeji-50/50 border-x border-shreeji-200">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-shreeji-600 shrink-0 mt-0.5" />
                    <span>{row.shreeji}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-rose-600">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.tally}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-amber-700">
                  <div className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{row.sap}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-rose-600">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.excel}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
