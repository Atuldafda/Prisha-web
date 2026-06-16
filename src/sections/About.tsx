import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-brand-slate-light">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="relative">
            <div className="w-full aspect-square bg-brand-sky/20 rounded-brand-lg overflow-hidden shadow-brand-soft flex items-center justify-center border-4 border-white">
              <div className="text-brand-sky opacity-40">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-emerald/20 rounded-brand-lg -z-10 blur-2xl font-medium"></div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8 leading-tight tracking-tight">Built for Performance, Designed for Growth</h2>
          <p className="text-brand-slate-dark mb-8 text-lg font-medium opacity-90 leading-relaxed">
            Prisha Web is a specialized agency dedicated to building high-performance web solutions. We combine technical excellence with thoughtful design to deliver sites that don't just look good, but drive real business results.
          </p>
          <div className="space-y-6 text-brand-slate-dark">
            <div className="flex items-start gap-5 group">
              <div className="bg-brand-navy p-3 rounded-brand-sm text-white shadow-brand-soft group-hover:bg-brand-emerald transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-navy mb-1">High Performance</h4>
                <p className="font-medium opacity-80">Lightning fast load times and optimized core web vitals for better ranking and user experience.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="bg-brand-navy p-3 rounded-brand-sm text-white shadow-brand-soft group-hover:bg-brand-emerald transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 21a10.003 10.003 0 008.139-4.138l.054.09m-3.44 2.04A10.003 10.003 0 0112 21c-4.42 0-8-3.58-8-8V7a4 4 0 014-4h8a4 4 0 014 4v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-navy mb-1">Modern Security</h4>
                <p className="font-medium opacity-80">Secure coding practices and managed security updates to keep your business and users protected.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
