import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  GitBranch,
  Users,
  Lightbulb,
  Target,
  MessageSquare,
} from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const hardSkills = [
    { name: 'Frontend Development', icon: Layout, level: 90 },
    { name: 'Backend Development', icon: Server, level: 75 },
    { name: 'Database Design', icon: Database, level: 80 },
    { name: 'Mobile Development', icon: Smartphone, level: 75 },
    { name: 'Version Control', icon: GitBranch, level: 90 },
    { name: 'Clean Code', icon: Code2, level: 95 },
  ];

  const softSkills = [
    { name: 'Trabalho em Equipe', icon: Users },
    { name: 'Resolução de Problemas', icon: Target },
    { name: 'Criatividade', icon: Lightbulb },
    { name: 'Comunicação', icon: MessageSquare },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-white/60 text-center text-lg mb-16 max-w-2xl mx-auto">
            Combinação de habilidades técnicas e competências interpessoais
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Code2 className="text-cyan-400" />
                Hard Skills
              </h3>

              <div className="space-y-6">
                {hardSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Icon size={20} className="text-cyan-400" />
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 backdrop-blur-xl bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Users className="text-cyan-400" />
                Soft Skills
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <Icon
                        size={32}
                        className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                      />
                      <p className="text-white font-medium text-sm leading-snug">{skill.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
