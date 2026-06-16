import { motion } from 'framer-motion';

const workshops = [
  { 
    title: 'Wheel Throwing for Beginners', 
    price: '$85', 
    duration: '2.5 Hours', 
    description: 'Learn the basics of centering and throwing on the potter\'s wheel.' 
  },
  { 
    title: 'Hand-building & Pinching', 
    price: '$65', 
    duration: '2 Hours', 
    description: 'A tactile introduction to creating forms without the wheel.' 
  },
  { 
    title: 'Glazing & Surface Design', 
    price: '$75', 
    duration: '2 Hours', 
    description: 'Explore texture and color in our specialized finishing class.' 
  },
];

const Workshops = () => {
  return (
    <section id="workshops" className="py-24 bg-[#f9eee9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-clay-600 font-medium tracking-widest uppercase mb-4 block">Studio Classes</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Unleash your <span className="italic">creativity</span>.</h2>
          <p className="max-w-2xl mx-auto text-stone-600">No experience necessary. We provide all the materials, tools, and clay you need to create your first masterpiece.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((ws, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-2xl font-serif text-stone-900">{ws.price}</span>
                <span className="text-xs text-clay-600 font-bold tracking-widest uppercase bg-clay-50 px-3 py-1 rounded-full">{ws.duration}</span>
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">{ws.title}</h3>
              <p className="text-stone-600 mb-8">{ws.description}</p>
              <button className="w-full py-3 border border-stone-200 rounded-full font-medium text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition">
                Book Workshop
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
