import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-white/60 text-center text-lg mb-16 max-w-2xl mx-auto">
            Vamos trabalhar juntos? Estou sempre aberto a novos projetos e colaborações
          </p>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Conecte-se comigo</h3>

                <a
                  href="mailto:seu@email.com"
                  className="flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 backdrop-blur-xl bg-cyan-500/20 border border-cyan-400/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Email</p>
                    <p className="text-white font-medium">rafaelemosfr@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/rafalemosfrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 backdrop-blur-xl bg-cyan-500/20 border border-cyan-400/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Github className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">GitHub</p>
                    <p className="text-white font-medium">github.com/rafalemosfrs</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rafalemosfrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 backdrop-blur-xl bg-cyan-500/20 border border-cyan-400/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">linkedin.com/in/rafalemosfrs</p>
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col justify-center"
              >
                <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-8 text-center">
                  <Send className="text-cyan-400 mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-bold text-white mb-4">
                    Pronto para começar um projeto?
                  </h4>
                  <p className="text-white/70 mb-6">
                    Entre em contato e vamos transformar suas ideias em realidade
                  </p>
                  <a
                    href="mailto:seu@email.com"
                    className="inline-block px-8 py-4 backdrop-blur-xl bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 rounded-full text-white font-medium hover:from-cyan-500/40 hover:to-blue-500/40 hover:border-cyan-400/70 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                  >
                    Enviar Email
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
