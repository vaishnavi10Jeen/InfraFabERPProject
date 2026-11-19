import React, { useState } from 'react';
import { 
  Calendar, CheckCircle2, Building2, User, Mail, 
  Phone, MapPin, Gauge, KeyRound, 
  ExternalLink, ArrowRight, ShieldCheck 
} from 'lucide-react';

export const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    monthlyTonnage: '200-500 MT',
    productionFocus: 'PEB Buildings & Warehouses',
    currentSystem: 'Excel Spreadsheets',
    preferredDate: '',
    preferredTime: '11:30 AM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="space-y-16 pb-20 bg-white text-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-b from-shreeji-50/70 via-white to-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Schedule a Tailored Shop-Floor Walkthrough
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Speak with an actual steel fabrication operations specialist. We will demonstrate live how our ERP manages coils, piece-marks, and dispatch for your specific plant setup.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form / Confirmation */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-20 h-20 rounded-full bg-shreeji-100 text-shreeji-700 flex items-center justify-center mx-auto border border-shreeji-300">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Demo Walkthrough Confirmed!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A calendar invite for <strong className="text-shreeji-700">{formData.preferredDate || 'Tomorrow'} at {formData.preferredTime}</strong> has been prepared for <strong className="text-slate-900">{formData.email}</strong>.
                </p>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Company:</span>
                    <span className="font-bold text-slate-900">{formData.company} ({formData.city})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Monthly Volume:</span>
                    <span className="font-bold text-shreeji-700">{formData.monthlyTonnage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Meeting Platform:</span>
                    <span className="font-bold text-slate-900">Google Meet / Zoom Video Link</span>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-black text-slate-900">Fill in Your Plant Details</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    This helps our engineering team configure sample coil data matching your plant.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-shreeji-600" />
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Mukesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-shreeji-600" />
                      Direct WhatsApp / Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 98250 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-shreeji-600" />
                      Corporate Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-shreeji-600" />
                      Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Gujarat PEB Structures Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-shreeji-600" />
                      Plant City & State *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Surat, Gujarat"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-shreeji-600" />
                      Monthly Steel Volume *
                    </label>
                    <select
                      value={formData.monthlyTonnage}
                      onChange={(e) => setFormData({ ...formData, monthlyTonnage: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-shreeji-600"
                    >
                      <option value="< 200 MT">&lt; 200 Metric Tons / Month</option>
                      <option value="200-500 MT">200 - 500 Metric Tons / Month</option>
                      <option value="500-1500 MT">500 - 1,500 Metric Tons / Month</option>
                      <option value="> 1500 MT">&gt; 1,500 Metric Tons / Month</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Primary Production Focus
                    </label>
                    <select
                      value={formData.productionFocus}
                      onChange={(e) => setFormData({ ...formData, productionFocus: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-shreeji-600"
                    >
                      <option value="PEB Buildings & Warehouses">PEB Buildings & Warehouses</option>
                      <option value="Heavy Structural & Bridges">Heavy Structural & Bridges</option>
                      <option value="Coil Slitting & Shearing">Coil Slitting & Shearing Center</option>
                      <option value="Roofing Sheets & Purlins">Roofing Sheets, C/Z Purlins</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Current System in Use
                    </label>
                    <select
                      value={formData.currentSystem}
                      onChange={(e) => setFormData({ ...formData, currentSystem: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-shreeji-600"
                    >
                      <option value="Excel Spreadsheets">Excel Spreadsheets & Paper</option>
                      <option value="Tally Prime">Tally Prime / ERP 9</option>
                      <option value="Generic ERP">Generic Manufacturing ERP</option>
                      <option value="Custom Software">In-House Custom Software</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-shreeji-600" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-shreeji-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-shreeji-600"
                    >
                      <option value="10:30 AM">10:30 AM (IST)</option>
                      <option value="11:30 AM">11:30 AM (IST)</option>
                      <option value="03:00 PM">03:00 PM (IST)</option>
                      <option value="04:30 PM">04:30 PM (IST)</option>
                      <option value="06:00 PM">06:00 PM (IST)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-gradient py-4 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Confirming Appointment...</span>
                  ) : (
                    <>
                      <span>Confirm 1-on-1 Walkthrough</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Meeting Agenda */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h4 className="text-sm uppercase font-black tracking-wider text-slate-500">
                What to Expect on Your 30-Min Call
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-shreeji-100 text-shreeji-800 font-black flex items-center justify-center shrink-0">1</span>
                  <span><strong>Plant Workflow Audit:</strong> We map your coil receiving, slitting line, and welding bays.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-shreeji-100 text-shreeji-800 font-black flex items-center justify-center shrink-0">2</span>
                  <span><strong>Tekla / CAD BOM Import:</strong> We demonstrate how your engineering drawings auto-generate piece-marks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-shreeji-100 text-shreeji-800 font-black flex items-center justify-center shrink-0">3</span>
                  <span><strong>Mobile PWA QR Demo:</strong> See how shop supervisors log cutting, welding, and painting via phone camera.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-shreeji-100 text-shreeji-800 font-black flex items-center justify-center shrink-0">4</span>
                  <span><strong>Plant ROI & Go-Live Plan:</strong> Concrete roadmap to have your factory live in 14 days.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
