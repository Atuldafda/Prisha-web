import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-brand-slate-light/60 py-16 px-6 border-t border-white/5 font-medium leading-relaxed">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12 leading-relaxed">
          <div className="flex flex-col items-center md:items-start leading-relaxed">
            <div className="text-white font-extrabold text-3xl mb-2 tracking-tight">
              Prisha<span className="text-brand-sky">Web</span>
            </div>
            <p className="text-sm font-medium max-w-xs text-center md:text-left leading-relaxed opacity-80 font-medium">
              Crafting high-performance digital experiences for the next generation of businesses.
            </p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-brand-sky transition-colors duration-300 font-bold uppercase text-xs tracking-widest">Twitter</a>
            <a href="#" className="hover:text-brand-sky transition-colors duration-300 font-bold uppercase text-xs tracking-widest">LinkedIn</a>
            <a href="#" className="hover:text-brand-sky transition-colors duration-300 font-bold uppercase text-xs tracking-widest">GitHub</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest leading-relaxed">
          <div className="opacity-40 font-medium">
            &copy; {new Date().getFullYear()} Prisha Web. All rights reserved.
          </div>
          <div className="flex gap-8 opacity-40 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
