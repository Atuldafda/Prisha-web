import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Clay & Co.',
    category: 'Artisan Pottery Studio',
    description: 'A contemporary digital experience for a ceramics studio, featuring workshop bookings and a curated gallery.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    imageText: 'Clay & Co.'
  },
  {
    id: 2,
    title: 'Nexus Analytics',
    category: 'SaaS Platform',
    description: 'A comprehensive data visualization dashboard for enterprise-level market research and trend analysis.',
    tags: ['TypeScript', 'D3.js', 'Next.js'],
    imageText: 'Nexus'
  },
  {
    id: 3,
    title: 'GreenRoot',
    category: 'Non-profit',
    description: 'A community-driven platform for urban reforestation projects and environmental advocacy.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    imageText: 'GreenRoot'
  },
  {
    id: 4,
    title: 'Aura Fitness',
    category: 'Mobile App',
    description: 'A holistic wellness and workout tracking application with personalized coaching integrations.',
    tags: ['React Native', 'Firebase', 'GraphQL'],
    imageText: 'Aura'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-4 bg-white leading-relaxed">
      <div className="max-w-6xl mx-auto leading-relaxed">
        <div className="text-center mb-16 text-brand-slate-dark leading-relaxed">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 tracking-tight">Selected Work</h2>
          <p className="max-w-2xl mx-auto text-lg font-medium opacity-80 leading-relaxed">A glimpse into the digital experiences we've crafted for our partners.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 leading-relaxed">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-brand-lg bg-brand-slate-light aspect-video shadow-sm hover:shadow-brand-soft transition-all duration-500 leading-relaxed">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-navy/20 font-bold leading-relaxed">
                <span className="text-3xl uppercase tracking-widest">{project.imageText}</span>
                <span className="text-sm mt-2 font-medium">{project.category}</span>
              </div>
              <div className="absolute inset-0 bg-brand-navy/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-10 text-white transform translate-y-4 group-hover:translate-y-0 text-center leading-relaxed font-medium">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
                <p className="mb-6 font-medium opacity-90 max-w-sm">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.id === 1 ? "/demo/" : "#"}
                  target={project.id === 1 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="bg-transparent text-brand-sky border-2 border-brand-sky px-8 py-2.5 rounded-brand-sm font-bold hover:bg-brand-sky hover:text-white transition-all text-sm uppercase tracking-wider inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
