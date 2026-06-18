import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#fdf8f6]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#bf7d6a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-clay-600 font-medium tracking-widest uppercase mb-4"
        >
          Artisan Pottery Studio
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif text-stone-900 mb-8"
        >
          Formed by <span className="italic">Hand</span>,<br />Fired by Heart.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mx-auto text-stone-600 text-lg mb-10"
        >
          Clay & Co. is a contemporary studio dedicated to the timeless art of ceramics. Explore our handcrafted collections or join our workshops to find your flow.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#collection" className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition">
            Shop Collection
          </a>
          <a href="#workshops" className="px-8 py-4 border border-stone-300 text-stone-900 rounded-full font-medium hover:bg-stone-100 transition">
            Join a Workshop
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-clay-200 rounded-full blur-3xl opacity-50"
      ></motion.div>
    </section>
  );
};

export default Hero;
