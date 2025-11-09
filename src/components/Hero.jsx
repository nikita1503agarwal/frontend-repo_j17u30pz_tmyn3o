import React from 'react';
import { MapPin, Zap } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = ({ onDetectLocation }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* 3D water droplet scene (safe fallback if scene fails to load) */}
        <Spline
          scene="https://prod.spline.design/3q3mQ2r9k7bN9pVg/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <Zap size={16} /> Fast water delivery in your city
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Pure, chilled, and on time.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Order mineral and RO water from trusted brands. Track delivery live and reorder in a tap.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onDetectLocation}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition shadow"
            >
              <MapPin size={18} /> Detect my location
            </button>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
            >
              Browse products
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
