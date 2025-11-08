import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Bem-vindo ao meu portfólio
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 mb-4">
              Desenvolvedor Fullstack
            </p>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Transformando ideias em experiências digitais extraordinárias através de código elegante e design inovador
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/20 rounded-full text-white font-medium hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Entre em Contato
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-4 justify-center mt-12"
          >
            <a
              href="https://github.com/rafalemosfrs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white/80 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafalemosfrs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white/80 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="text-white/50 hover:text-cyan-400 transition-colors" size={32} />
      </motion.div>
    </section>
  );
}
