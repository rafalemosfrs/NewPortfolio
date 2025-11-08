import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import fotoPerfil from '../assets/img/Foto.jpg'; // ✅ Import da foto local

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Foto */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  <img
                    src={fotoPerfil}
                    alt="Foto de Rafael Lemos"
                    className="relative w-64 h-64 rounded-full object-cover border-4 border-white/30 shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Olá, eu sou Rafael Lemos 👋
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Sou um <span className="text-cyan-400 font-semibold">Desenvolvedor Full Stack</span> de 25 anos, atualmente atuando na{" "}
                  <span className="text-cyan-400 font-semibold">G4Flex</span>. 
                  Tenho paixão por transformar ideias em soluções digitais eficientes, combinando 
                  <span className="text-cyan-400 font-semibold"> performance, usabilidade e design moderno</span>.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Ao longo da minha jornada, desenvolvi diversos projetos que exploram desde o 
                  <span className="text-cyan-400 font-semibold"> front-end </span> com React e TailwindCSS 
                  até o <span className="text-cyan-400 font-semibold"> back-end </span> com Node.js e bancos de dados modernos. 
                  Sou movido pela curiosidade, pela melhoria contínua e pela vontade de entregar experiências que realmente façam a diferença.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Estou sempre em busca de evoluir como profissional e contribuir para projetos que unam 
                  <span className="text-cyan-400 font-semibold"> tecnologia, inovação e propósito</span>.
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href="https://github.com/rafalemosfrs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white/80 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/rafael-lemos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white/80 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:rafael.lemos@email.com"
                    className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white/80 hover:text-cyan-400 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={24} />
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
