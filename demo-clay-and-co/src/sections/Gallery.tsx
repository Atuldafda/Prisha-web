import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Earth Vase', category: 'Vessel', color: 'bg-clay-200' },
  { id: 2, title: 'Moon Bowl', category: 'Tableware', color: 'bg-stone-200' },
  { id: 3, title: 'Sun Platter', category: 'Art', color: 'bg-clay-300' },
  { id: 4, title: 'Rain Pitcher', category: 'Vessel', color: 'bg-stone-300' },
];

const Gallery = () => {
  return (
    <section id="collection" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-clay-600 font-medium tracking-widest uppercase mb-4 block">The Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Functional pieces for a <span className="italic">beautiful</span> home.</h2>
          </div>
          <button className="text-stone-900 font-medium border-b-2 border-stone-900 pb-1 hover:text-clay-600 hover:border-clay-600 transition">
            View All Work
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[3/4] mb-6 overflow-hidden rounded-2xl ${item.color} flex items-center justify-center transition group-hover:shadow-xl`}>
                <div className="w-1/2 h-1/2 bg-white/30 rounded-full blur-2xl group-hover:scale-110 transition duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="px-4 py-2 bg-white text-stone-900 rounded-full text-sm font-medium shadow-lg">Quick View</span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-1">{item.title}</h3>
              <p className="text-stone-500 text-sm tracking-wide uppercase">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
