import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 py-4 border-b border-brand-slate-light">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-brand-navy flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-navy rounded-brand-sm flex items-center justify-center text-white text-lg">P</div>
          <span>Prisha<span className="text-brand-sky">Web</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-brand-slate-dark font-semibold">
          <a href="#hero" className="hover:text-brand-sky transition-colors">Home</a>
          <a href="#about" className="hover:text-brand-sky transition-colors">About</a>
          <a href="#services" className="hover:text-brand-sky transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-brand-sky transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-brand-sky transition-colors">Contact</a>
        </div>
        <button className="bg-brand-navy text-white px-6 py-2 rounded-brand-sm font-bold hover:bg-brand-slate-dark transition-all shadow-brand-soft">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
