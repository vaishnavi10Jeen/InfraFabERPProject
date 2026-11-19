import React, { useState } from 'react';
import { 
  Calendar, CheckCircle2, Building2, User, Mail, 
  Phone, MapPin, Gauge, X, ArrowRight 
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    monthlyTonnage: '200-500 MT',
    productionFocus: 'PEB Buildings & Warehouses',
    preferredDate: '',
    preferredTime: '11:00 AM'
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-900 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-shreeji-700 to-shreeji-900 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-2xl font-black">Book a 1-on-1 Live ERP Walkthrough</h3>
          <p className="text-shreeji-100 text-xs sm:text-sm mt-1">
            See how Shreeji Infrastructure ERP manages coils, piece marks, and dispatch specifically for your plant scale.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-shreeji-100 text-shreeji-700 flex items-center justify-center mx-auto border border-shreeji-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-slate-900">Demo Walkthrough Confirmed!</h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our senior steel manufacturing specialist will connect with you on WhatsApp/Phone at <strong className="text-shreeji-800 font-bold">{formData.phone}</strong> with calendar invite details.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-1.5 max-w-md mx-auto text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Company:</span>
                <span className="font-bold text-slate-900">{formData.company} ({formData.city})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Monthly Volume:</span>
                <span className="font-bold text-shreeji-700">{formData.monthlyTonnage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Schedule:</span>
                <span className="font-bold text-slate-900">{formData.preferredDate || 'Tomorrow'} at {formData.preferredTime}</span>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="btn-gradient px-8 py-3 rounded-xl text-sm"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-shreeji-600" />
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rajesh Patel"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-shreeji-600" />
                  Phone / WhatsApp Number *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. +91 98250 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600 transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-shreeji-600" />
                  Corporate Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-shreeji-600" />
                  Company / Plant Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Steel Fab Pvt Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600 transition"
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
                  placeholder="e.g. Ahmedabad, Gujarat"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shreeji-600 transition"
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-shreeji-600 transition"
                >
                  <option value="< 200 MT">&lt; 200 Metric Tons / Month</option>
                  <option value="200-500 MT">200 - 500 Metric Tons / Month</option>
                  <option value="500-1500 MT">500 - 1,500 Metric Tons / Month</option>
                  <option value="> 1500 MT">&gt; 1,500 Metric Tons / Month</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Primary Manufacturing Focus
              </label>
              <select
                value={formData.productionFocus}
                onChange={(e) => setFormData({ ...formData, productionFocus: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-shreeji-600 transition"
              >
                <option value="PEB Buildings & Warehouses">Pre-Engineered Buildings (PEB) & Sheds</option>
                <option value="Heavy Structural & Bridges">Heavy Structural Steel, Bridges & Metros</option>
                <option value="Coil Slitting & Service Center">Coil Slitting & Shearing Service Center</option>
                <option value="Roofing Sheets & Purlins">Roofing Sheets, C/Z Purlins & Roll-Forming</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-shreeji-600" />
                  Preferred Demo Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-shreeji-600 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-shreeji-600 transition"
                >
                  <option value="10:30 AM">10:30 AM (IST)</option>
                  <option value="11:30 AM">11:30 AM (IST)</option>
                  <option value="03:00 PM">03:00 PM (IST)</option>
                  <option value="04:30 PM">04:30 PM (IST)</option>
                  <option value="06:00 PM">06:00 PM (IST)</option>
                </select>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              🔒 Your commercial details are protected. No spam. You will receive a direct Google Meet / Zoom invite from a senior steel fabrication engineer.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 btn-gradient py-3.5 rounded-xl text-sm disabled:opacity-50"
            >
              {submitting ? (
                <span>Scheduling Your Walkthrough...</span>
              ) : (
                <>
                  <span>Schedule 30-Minute Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
