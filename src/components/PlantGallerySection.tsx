import React from 'react';
import { 
  Building2, Factory, Disc, Cpu, ShieldCheck, 
  Truck, ArrowRight, ExternalLink, CheckCircle2 
} from 'lucide-react';
import { PLANT_GALLERY_IMAGES, PlantImage } from '../data/imageAssets';

interface PlantGallerySectionProps {
  onOpenDemoModal: () => void;
}

export const PlantGallerySection: React.FC<PlantGallerySectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="bg-slate-50 py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Real Steel Plant Operations Powered by infraFab ERP
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 font-medium">
              See the physical reality of mother coils, built-up H-beams, certified weld bays, and trailer dispatch lines digitized inside our operating 50,000+ sq.ft Gujarat manufacturing plant.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2 btn-gradient px-6 py-3.5 rounded-2xl text-xs sm:text-sm"
            >
              <span>Schedule Plant & Software Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Grid with DataNote-Style Hover Overlay & Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANT_GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with live badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to verified active steel factory photo if network hiccup
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-shreeji-700 transition">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    {img.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-shreeji-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Plant Production
                  </span>
                  <button
                    onClick={onOpenDemoModal}
                    className="text-slate-700 hover:text-shreeji-700 font-extrabold flex items-center gap-1 transition"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};
