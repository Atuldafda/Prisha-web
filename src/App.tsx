import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Gallery from './sections/Gallery';
import Workshops from './sections/Workshops';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans">
      <Navbar />
      <Hero />
      <Gallery />
      <Workshops />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
