const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-serif text-stone-900 tracking-tight">
            Clay <span className="text-clay-600">&</span> Co.
          </div>
          
          <div className="flex space-x-8 text-sm font-bold tracking-widest uppercase text-stone-500">
            <a href="#" className="hover:text-clay-600 transition">Instagram</a>
            <a href="#" className="hover:text-clay-600 transition">Pinterest</a>
            <a href="#" className="hover:text-clay-600 transition">Facebook</a>
          </div>
          
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} Clay & Co. Studio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
