import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 bg-brand-slate-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="inline-block px-4 py-1.5 mb-6 bg-brand-sky/10 border border-brand-sky/20 rounded-full text-brand-sky font-bold text-sm tracking-wide uppercase">
          Digital Excellence Defined
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy mb-6 leading-tight">
          Elevate Your Digital <span className="text-brand-sky font-extrabold">Vision</span>
        </h1>
        <p className="text-xl text-brand-slate-dark max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Prisha Web builds modern, high-performance websites and web applications for businesses that demand the best. Scalable solutions, polished UX, and clean code.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-brand-navy text-white px-10 py-4 rounded-brand-sm text-lg font-bold hover:bg-brand-slate-dark transition-all shadow-brand-soft">
            Explore Services
          </button>
          <button className="bg-transparent text-brand-sky border-2 border-brand-sky px-10 py-4 rounded-brand-sm text-lg font-bold hover:bg-brand-sky/5 transition-all">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
