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
          
          {/* LEFT COLUMN: CONTACT INFORMATION & PLANT LOCATIONS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-xl font-black text-slate-900 border-b border-slate-200 pb-4">
                Headquarters & Manufacturing Yard
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-keshav-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Registered Office & Manufacturing Plant</strong>
                    <span>FF 15, 16 Dwarkesh Complex, Opp. HCG Cancer Hospital, Sun Pharma Road, Vadodara, Gujarat – 390012, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-keshav-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Official Contact Desk</strong>
                    <a href="tel:+919924266466" className="hover:text-keshav-700 transition font-mono font-bold">
                      +91 99242 66466
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-keshav-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Official Software & Corporate Email</strong>
                    <div className="space-y-0.5">
                      <a href="mailto:info@shreejiinfrastructure.com" className="hover:text-keshav-700 transition font-mono font-bold block">
                        info@shreejiinfrastructure.com
                      </a>
                      <a href="mailto:erp@shreejiinfrastructure.com" className="hover:text-keshav-700 transition font-mono text-slate-500 block">
                        erp@shreejiinfrastructure.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-slate-500 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Parent Infrastructure Website</strong>
                    <a
                      href="https://shreejiinfrastructure.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-keshav-700 hover:underline transition font-bold"
                    >
                      https://shreejiinfrastructure.com/
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <Clock className="w-4 h-4 text-keshav-600" />
                  <span>Support Hours: Monday – Saturday (9:00 AM – 7:30 PM IST)</span>
                </div>
                <p>Enterprise SLA: Inquiries answered within 2 hours during active factory shifts.</p>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919825012345?text=Hello%20infraFab%20ERP%20Team,%20I%20am%20interested%20in%20deploying%20the%20ERP%20for%20our%20steel%20fabrication%20plant."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gradient text-slate-950 font-black py-3.5 px-4 rounded-xl transition flex items-center justify-center gap-2 text-xs shadow-md hover:brightness-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
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
