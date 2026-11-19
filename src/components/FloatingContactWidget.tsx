import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, X, Headset, ArrowUp } from 'lucide-react';

interface FloatingContactWidgetProps {
  onOpenLiveModal?: () => void;
  onOpenDemoModal: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({
  onOpenDemoModal
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track scroll position to show a dedicated scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top Button (Positioned Directly ABOVE the Microphone / Support Icon) */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-keshav-50 text-keshav-800 border-2 border-keshav-500 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group ${
          showScrollTop
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-75 translate-y-2 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 text-keshav-700 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Main Floating Container */}
      <div className="relative flex items-center justify-center">
        {/* Expanded Support Dialog (Floats Above / Left of Main Button) */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-[290px] sm:w-[320px] bg-white/95 border border-slate-200 p-4 rounded-2xl shadow-2xl backdrop-blur-md text-slate-900 space-y-3 animate-fadeIn mb-2 z-50">
            <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-black text-keshav-800">
                <span className="w-2 h-2 rounded-full bg-keshav-500 animate-ping"></span>
                <span>Direct Steel Sales Desk</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                title="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-600 leading-snug font-medium">
              Speak directly with a steel plant deployment specialist or schedule a tailored 30-min walkthrough.
            </p>

            <div className="pt-1">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center gap-1.5 btn-gradient p-2.5 rounded-xl text-xs font-black text-slate-950 shadow-md cursor-pointer hover:brightness-105 transition"
              >
                <span>Book 1-on-1 Walkthrough</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1 text-slate-600 font-semibold">
              <a
                href="https://wa.me/919825012345?text=Hello%20infraFab%20ERP%20team,%20I%20want%20a%20demo%20for%20my%20steel%20fabrication%20plant."
                target="_blank"
                rel="noopener noreferrer"
                className="text-keshav-700 hover:underline flex items-center gap-1 font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5 text-keshav-600" />
                <span>WhatsApp Chat</span>
              </a>
              <a
                href="tel:+919825012345"
                className="text-slate-800 hover:text-keshav-700 flex items-center gap-1 font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-keshav-600" />
                <span>+91 98250 12345</span>
              </a>
            </div>
          </div>
        )}

        {/* Main Floating Action Button: Headset / Microphone Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contact Steel Specialist"
          title="Contact Steel Specialist"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full btn-gradient text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/80 cursor-pointer group"
        >
          {isOpen ? (
            <X className="w-6 h-6 shrink-0 transition-transform duration-300" />
          ) : (
            <Headset className="w-6 h-6 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
          )}
        </button>
      </div>
    </div>
  );
};
