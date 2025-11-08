import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/rafalemosfrs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white/80 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rafalemosfrs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white/80 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rafaelemosfr@gmail.com"
                className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white/80 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-white/50 text-sm mb-2 flex items-center gap-2 justify-center">
                Desenvolvido com <Heart size={16} className="text-cyan-400 animate-pulse" /> por Rafael Lemos
              </p>
              <p className="text-white/40 text-xs italic">
                "Do not go gentle into that good night" - Interestelar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/30 text-xs"
            >
              © {new Date().getFullYear()} Rafael Lemos. Todos os direitos reservados.
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
    </footer>
  );
}
