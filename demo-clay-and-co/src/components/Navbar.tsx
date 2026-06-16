import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif text-stone-900 tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-clay-600 rounded-lg flex items-center justify-center text-white">
            <ShoppingBag size={18} />
          </div>
          <span>Clay <span className="text-clay-600">&</span> Co.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="#collection" className="text-sm font-bold tracking-widest uppercase text-stone-600 hover:text-clay-600 transition">Collection</a>
          <a href="#workshops" className="text-sm font-bold tracking-widest uppercase text-stone-600 hover:text-clay-600 transition">Workshops</a>
          <a href="#about" className="text-sm font-bold tracking-widest uppercase text-stone-600 hover:text-clay-600 transition">Studio</a>
          <a href="#contact" className="px-6 py-2 bg-stone-900 text-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-stone-800 transition">Contact</a>
        </div>
        
        <button className="md:hidden text-stone-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
