import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export const ObjectionFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions & Technical Concerns
        </h3>
        <p className="text-slate-600 text-sm mt-2">
          From Tally coexistence to shop-floor supervisor adoption and offline factory Wi-Fi scenarios.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_DATA.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-extrabold transition ${
                    isOpen ? 'bg-shreeji-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="font-extrabold text-sm sm:text-base text-slate-900">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180 text-shreeji-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/60">
                  <p>{faq.answer}</p>
                  {faq.category && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                        Category: {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
