import React, { useState } from 'react';
import { 
  Building2, Phone, Mail, MapPin, MessageSquare, 
  ExternalLink, ArrowRight, CheckCircle2, Clock, 
  ShieldCheck, Sparkles, Send, Check
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 bg-white text-slate-900">
      
      {/* 1. HERO SECTION - CLEAN HEADLINE & INTRO (NO IMAGE) */}
      <section className="bg-gradient-to-b from-keshav-50/70 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-keshav-100/50 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-keshav-50 border border-keshav-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-keshav-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-keshav-500 animate-pulse"></span>
            <span>Engineering Sales & Technical Consultation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Connect with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-keshav-600 via-keshav-700 to-keshav-800">
              infraFab ERP Sales
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Have questions about integrations with your weighbridge, Tally ledger, or multi-plant deployment? Our engineering team is standing by.
          </p>

          {/* Quick Contact Chips */}
          <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-700">
            <a
              href="tel:+919924266466"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-keshav-400 px-4 py-2 rounded-xl shadow-xs transition hover:text-keshav-700 hover:shadow-sm"
            >
              <Phone className="w-4 h-4 text-keshav-600" />
              <span className="font-mono">+91 99242 66466</span>
            </a>

            <a
              href="mailto:info@shreejiinfrastructure.com"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-keshav-400 px-4 py-2 rounded-xl shadow-xs transition hover:text-keshav-700 hover:shadow-sm"
            >
              <Mail className="w-4 h-4 text-keshav-600" />
              <span className="font-mono">info@shreejiinfrastructure.com</span>
            </a>

            <div className="inline-flex items-center gap-2 bg-keshav-50 border border-keshav-200 text-keshav-900 px-4 py-2 rounded-xl shadow-xs">
              <ShieldCheck className="w-4 h-4 text-keshav-600" />
              <span>2-Hour Shift Response SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT WORKSPACE: DETAILS + INQUIRY FORM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: 4 SMALL BOXES (2x2 GRID AS PER ATTACHED IMAGE) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl h-full flex flex-col justify-between">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* BOX 1: OUR MAIN OFFICE */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[185px]">
                  <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-700 flex items-center justify-center mb-3 shadow-2xs">
                    <MapPin className="w-6 h-6 text-keshav-600" />
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-slate-900 mb-1.5">
                    OUR MAIN OFFICE
                  </h3>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    FF 15, 16 Dwarkesh Complex,<br />
                    Sun Pharma Road, Vadodara,<br />
                    Gujarat – 390012
                  </p>
                </div>

                {/* BOX 2: PHONE NUMBER */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[185px]">
                  <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-700 flex items-center justify-center mb-3 shadow-2xs">
                    <Phone className="w-6 h-6 text-keshav-600" />
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-slate-900 mb-1.5">
                    PHONE NUMBER
                  </h3>
                  <a href="tel:+919924266466" className="text-xs text-slate-800 font-black hover:text-keshav-700 block transition font-mono">
                    +91 99242 66466
                  </a>
                  <span className="text-[10px] text-slate-500 font-semibold block mt-1 font-mono">
                    +91 98250 12345 (Toll Free)
                  </span>
                </div>

                {/* BOX 3: WHATSAPP & SUPPORT */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[185px]">
                  <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-700 flex items-center justify-center mb-3 shadow-2xs">
                    <MessageSquare className="w-6 h-6 text-keshav-600" />
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-slate-900 mb-1.5">
                    WHATSAPP SUPPORT
                  </h3>
                  <a
                    href="https://wa.me/919825012345?text=Hello%20infraFab%20ERP%20Team,%20I%20am%20interested%20in%20deploying%20the%20ERP%20for%20our%20steel%20fabrication%20plant."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-keshav-700 font-black hover:underline block font-mono"
                  >
                    +91 98250 12345
                  </a>
                  <span className="text-[10px] text-slate-500 font-medium block mt-1">
                    Mon–Sat (9 AM–7:30 PM)
                  </span>
                </div>

                {/* BOX 4: EMAIL */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[185px]">
                  <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-700 flex items-center justify-center mb-3 shadow-2xs">
                    <Mail className="w-6 h-6 text-keshav-600" />
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-slate-900 mb-1.5">
                    EMAIL
                  </h3>
                  <a
                    href="mailto:info@shreejiinfrastructure.com"
                    className="text-[11px] text-keshav-700 font-black hover:underline block break-all font-mono"
                  >
                    info@shreejiinfrastructure.com
                  </a>
                  <span className="text-[10px] text-slate-500 font-medium block mt-1">
                    Direct Corporate Inbox
                  </span>
                </div>

              </div>

              {/* Bottom SLA Bar */}
              <div className="pt-4 mt-4 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-keshav-400" />
                <span>Enterprise SLA: Shift Response Within 2 Hours</span>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT INQUIRY FORM */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-keshav-100 text-keshav-700 flex items-center justify-center mx-auto border border-keshav-300">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Message Sent to Sales Desk</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our senior plant deployment specialist will contact you shortly via email/phone.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-2.5 rounded-xl text-xs transition cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-black text-slate-900">Send Us an Inquiry</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Tell us about your factory scale, software requirements, or questions.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Anand Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-keshav-500 focus:ring-2 focus:ring-keshav-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Corporate Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="anand@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-keshav-500 focus:ring-2 focus:ring-keshav-100 transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone / WhatsApp Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98250 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-keshav-500 focus:ring-2 focus:ring-keshav-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Company / Factory Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Heavy Fabricators"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-keshav-500 focus:ring-2 focus:ring-keshav-100 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Message / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your monthly tonnage, current challenges with coil scrap, Tally integration, or deployment timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-keshav-500 focus:ring-2 focus:ring-keshav-100 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-gradient py-3.5 rounded-xl text-sm font-black text-slate-950 flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition cursor-pointer"
                >
                  <span>Submit Inquiry to Engineering Sales</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
