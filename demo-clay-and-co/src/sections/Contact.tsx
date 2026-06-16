const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-stone-900 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">Visit the <span className="italic">Studio</span>.</h2>
              <p className="text-stone-400 mb-8 font-medium">Located in the heart of the arts district. Open for visits, collection pickups, and friendly chats.</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs text-clay-400 font-bold tracking-widest uppercase mb-1">Address</p>
                <p className="text-stone-200">123 Artisan Way, Ceramics District<br />Portland, OR 97204</p>
              </div>
              <div>
                <p className="text-xs text-clay-400 font-bold tracking-widest uppercase mb-1">Hours</p>
                <p className="text-stone-200">Tue – Sat: 10am – 6pm<br />Sun: 12pm – 5pm</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-clay-50 p-12 lg:p-16">
            <form className="space-y-6">
              <div>
                <label className="text-xs text-stone-500 font-bold tracking-widest uppercase mb-2 block">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-clay-600 transition" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-xs text-stone-500 font-bold tracking-widest uppercase mb-2 block">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-clay-600 transition" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="text-xs text-stone-500 font-bold tracking-widest uppercase mb-2 block">Message</label>
                <textarea className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-clay-600 transition h-32 resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition shadow-lg shadow-stone-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
