import React from 'react';

const services = [
  {
    title: 'Starter Website',
    description: 'Perfect for landing pages and small business digital business cards.',
    price: 'From $800',
    features: ['Single-page design', 'Contact form', 'Basic SEO', 'Responsive layout']
  },
  {
    title: 'Business Website',
    description: 'Custom multi-page sites with CMS integration for growing brands.',
    price: 'From $3,000',
    features: ['Up to 7 pages', 'CMS Integration', 'Blog Setup', 'Analytics']
  },
  {
    title: 'Web Application',
    description: 'Full-stack custom applications with secure backends and databases.',
    price: 'From $10,000',
    features: ['Custom Frontend/Backend', 'User Auth', 'Database Design', 'API Integrations']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 tracking-tight text-brand-navy">Our Services</h2>
          <p className="text-brand-slate-dark max-w-2xl mx-auto text-lg font-medium">Tailored web solutions designed to meet your specific business needs and scale with your growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-brand-slate-light rounded-brand-lg p-8 hover:shadow-brand-soft transition-all duration-300 bg-brand-slate-light/50 flex flex-col group">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">{service.title}</h3>
              <p className="text-brand-sky font-extrabold text-xl mb-4">{service.price}</p>
              <p className="text-brand-slate-dark mb-6 flex-grow opacity-90 font-medium">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-brand-slate-dark text-sm font-medium">
                    <svg className="w-5 h-5 text-brand-emerald mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-brand-navy text-white py-3.5 rounded-brand-sm font-bold hover:bg-brand-slate-dark transition-colors shadow-sm">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
