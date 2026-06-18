import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-brand-navy relative overflow-hidden leading-relaxed font-medium">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sky/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10 leading-relaxed">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">Ready to Build Your Vision?</h2>
        
        <div className="mb-12">
          <p className="text-brand-sky text-xl mb-4 font-semibold opacity-90 max-w-2xl mx-auto leading-relaxed font-medium">
            Let's discuss your project and how Prisha Web can help you achieve your digital goals.
          </p>
          <div className="mt-8 p-6 bg-white/5 rounded-brand-lg border border-white/10 inline-block">
            <p className="text-white/70 text-sm uppercase tracking-widest mb-2 font-bold">Direct Email</p>
            <a href="mailto:dafdaatul@gmail.com" className="text-brand-sky text-2xl md:text-3xl font-extrabold hover:text-white transition-colors">
              dafdaatul@gmail.com
            </a>
          </div>
        </div>

        <form action="mailto:dafdaatul@gmail.com" method="post" encType="text/plain" className="bg-white p-8 md:p-12 rounded-brand-lg shadow-brand-soft text-left leading-relaxed">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2 uppercase tracking-wide">Name</label>
              <input type="text" name="name" className="w-full px-4 py-4 rounded-brand-sm border border-slate-200 focus:ring-2 focus:ring-brand-sky focus:border-transparent outline-none transition-all font-medium text-brand-slate-dark" placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-navy mb-2 uppercase tracking-wide font-medium">Email</label>
              <input type="email" name="email" className="w-full px-4 py-4 rounded-brand-sm border border-slate-200 focus:ring-2 focus:ring-brand-sky focus:border-transparent outline-none transition-all font-medium text-brand-slate-dark" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="mb-8 leading-relaxed font-medium">
            <label className="block text-sm font-bold text-brand-navy mb-2 uppercase tracking-wide">Project Type</label>
            <select name="project_type" className="w-full px-4 py-4 rounded-brand-sm border border-slate-200 focus:ring-2 focus:ring-brand-sky focus:border-transparent outline-none transition-all font-medium text-brand-slate-dark appearance-none bg-no-repeat bg-right pr-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%230F172A\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundSize: '1.5em', backgroundPosition: 'calc(100% - 1rem) center'}}>
              <option>Starter Website</option>
              <option>Business Website</option>
              <option>Web Application</option>
              <option>Other / Maintenance</option>
            </select>
          </div>
          <div className="mb-10 leading-relaxed font-medium">
            <label className="block text-sm font-bold text-brand-navy mb-2 uppercase tracking-wide">Message</label>
            <textarea name="message" className="w-full px-4 py-4 rounded-brand-sm border border-slate-200 focus:ring-2 focus:ring-brand-sky focus:border-transparent outline-none transition-all h-40 font-medium text-brand-slate-dark resize-none" placeholder="Tell us about your project..." required></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-navy text-white py-5 rounded-brand-sm font-extrabold text-lg hover:bg-brand-slate-dark transition-all shadow-lg">
            Send Inquiry via Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
