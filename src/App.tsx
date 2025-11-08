import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SpaceBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default App;
