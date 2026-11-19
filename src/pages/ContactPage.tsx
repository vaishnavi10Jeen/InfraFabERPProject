import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageSquare, 
  ArrowRight, CheckCircle2, ShieldCheck
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
      
      {/* 1. HERO SECTION - CLEAN 'GET IN TOUCH' WITH BOTTOM WAVY LIGHT GREEN LINEAR GRADIENT */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-16 sm:pt-24 pb-28 sm:pb-36 overflow-hidden">
        {/* Subtle decorative top ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-60 bg-gradient-to-b from-keshav-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>

        {/* Text Container: Just "Get In Touch" as requested */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-tight">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-md mx-auto">
            Have questions about infraFab ERP? Our engineering and sales desk is ready to assist.
          </p>
        </div>

        {/* Bottom Wavy Ribbon & Background in Light Green Linear Gradient (Matching Reference Image Design) */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden leading-none z-0">
          <svg
            viewBox="0 0 1440 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-32 sm:h-48 md:h-64 object-cover block"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Primary Light Green Linear Gradient matching Keshav Brand */}
              <linearGradient id="keshavWaveGrad" x1="0%" y1="20%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#8CC12C" />
                <stop offset="35%" stopColor="#A3E635" />
                <stop offset="70%" stopColor="#84CC16" />
                <stop offset="100%" stopColor="#4ADE80" />
              </linearGradient>

              {/* Soft Translucent Light Green Gradient for Bottom Ambient Wave */}
              <linearGradient id="keshavWaveSoft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8CC12C" stopOpacity="0.20" />
                <stop offset="40%" stopColor="#BEF264" stopOpacity="0.30" />
                <stop offset="75%" stopColor="#86EFAC" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#A3E635" stopOpacity="0.15" />
              </linearGradient>

              {/* Gentle shadow to give the ribbon depth */}
              <filter id="waveShadow" x="-5%" y="-10%" width="110%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#3F6212" floodOpacity="0.22" />
              </filter>
            </defs>

            {/* Layer 1: Soft Ambient Bottom Wave Fill */}
            <path
              d="M 0 250 C 260 210, 480 300, 760 260 C 1040 220, 1260 310, 1440 270 L 1440 380 L 0 380 Z"
              fill="url(#keshavWaveSoft)"
            />

            {/* Layer 2: Main Flowing Wavy Ribbon (Form-fitted from reference image) */}
            <path
              d="M 0.0 181.5 C 15.0 183.5, 60.0 189.4, 90.0 193.4 C 120.0 197.4, 135.0 205.7, 180.0 205.3 C 225.0 204.9, 307.5 195.0, 360.0 190.8 C 412.5 186.6, 450.0 178.4, 495.0 180.2 C 540.0 181.9, 592.5 190.1, 630.0 201.3 C 667.5 212.5, 690.0 230.0, 720.0 247.5 C 750.0 265.0, 780.0 290.1, 810.0 306.3 C 840.0 322.5, 870.0 336.4, 900.0 344.6 C 930.0 352.9, 960.0 355.9, 990.0 355.8 C 1020.0 355.7, 1042.5 349.7, 1080.0 343.9 C 1117.5 338.1, 1177.5 323.1, 1215.0 320.8 C 1252.5 318.5, 1267.5 325.7, 1305.0 330.0 C 1342.5 334.3, 1417.5 343.8, 1440.0 346.5 L 1440 359.7 C 1425.0 360.9, 1380.0 367.6, 1350.0 367.0 C 1320.0 366.4, 1290.0 358.6, 1260.0 355.8 C 1230.0 353.1, 1200.0 349.1, 1170.0 350.5 C 1140.0 351.9, 1110.0 359.9, 1080.0 364.4 C 1050.0 368.9, 1020.0 376.3, 990.0 377.6 C 960.0 378.9, 930.0 378.2, 900.0 372.3 C 870.0 366.4, 840.0 354.7, 810.0 341.9 C 780.0 329.1, 750.0 308.8, 720.0 295.7 C 690.0 282.6, 660.0 270.3, 630.0 263.4 C 600.0 256.5, 570.0 254.8, 540.0 254.1 C 510.0 253.4, 487.5 256.2, 450.0 259.4 C 412.5 262.6, 360.0 271.5, 315.0 273.3 C 270.0 275.1, 217.5 272.1, 180.0 270.0 C 142.5 267.9, 120.0 260.1, 90.0 260.7 C 60.0 261.2, 15.0 271.2, 0.0 273.3 Z"
              fill="url(#keshavWaveGrad)"
              filter="url(#waveShadow)"
            />
          </svg>
        </div>
      </section>

      {/* 2. MAIN CONTACT WORKSPACE: UNIFIED LAYOUT WITH OVERLAPPING CARDS (NO BLACK BACKGROUND) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          
          <div className="grid lg:grid-cols-12 items-center">
            
            {/* LEFT SIDE: 4 WHITE BOX CARDS (2x2 GRID, OVERLAPPING FORM ON DESKTOP) */}
            <div className="lg:col-span-5 relative z-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                
                {/* BOX 1: OUR MAIN OFFICE (Col 1) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[195px] border border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-700 flex items-center justify-center mb-3 shadow-2xs">
                    <MapPin className="w-6 h-6" />
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

                {/* BOX 2: PHONE NUMBER (Col 2 - Overlaps Right Form on Desktop) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[195px] border border-slate-100 lg:translate-x-8 xl:translate-x-12">
                  <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-700 flex items-center justify-center mb-3 shadow-2xs">
                    <Phone className="w-6 h-6" />
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

                {/* BOX 3: WHATSAPP SUPPORT (Col 1) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[195px] border border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-700 flex items-center justify-center mb-3 shadow-2xs">
                    <MessageSquare className="w-6 h-6" />
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

                {/* BOX 4: EMAIL (Col 2 - Overlaps Right Form on Desktop) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[195px] border border-slate-100 lg:translate-x-8 xl:translate-x-12">
                  <div className="w-12 h-12 rounded-2xl bg-keshav-100 text-keshav-700 flex items-center justify-center mb-3 shadow-2xs">
                    <Mail className="w-6 h-6" />
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

              {/* Enterprise SLA Note */}
              <div className="mt-5 text-center sm:text-left text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-keshav-600" />
                <span>Enterprise SLA: Shift Response Within 2 Hours</span>
              </div>
            </div>

            {/* RIGHT SIDE: CONTACT INQUIRY FORM (THEME LIGHT GREEN BACKGROUND) */}
            <div className="lg:col-span-7 bg-gradient-to-br from-keshav-200 via-keshav-200 to-keshav-300 border border-keshav-300/70 rounded-3xl p-6 sm:p-10 lg:p-12 lg:pl-20 xl:pl-24 shadow-2xl relative z-10 mt-8 lg:mt-0">
              {submitted ? (
                <div className="text-center py-12 space-y-4 bg-white/95 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Message Sent to Sales Desk</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our senior plant deployment specialist will contact you shortly via email/phone.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-slate-950 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-black/10 pb-4">
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                      Contact Us
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-800/80 font-medium mt-1">
                      Tell us about your factory scale, software requirements, or questions.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">Your Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Enter your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border-0 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">Corporate Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="Enter a valid email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border-0 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">Phone / WhatsApp Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98250 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border-0 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">Company / Factory Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Apex Heavy Fabricators"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white border-0 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">Your Message / Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your monthly tonnage, current challenges with coil scrap, Tally integration, or deployment timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border-0 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-slate-950 hover:bg-slate-800 text-white font-black px-10 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>SUBMIT INQUIRY</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
