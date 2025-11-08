import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
<motion.a
  href="https://wa.me/5585992935769"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Entrar em contato pelo WhatsApp"
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
  className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 
             bg-gradient-to-r from-cyan-400 to-blue-500 text-white 
             hover:from-cyan-500 hover:to-blue-600 
             shadow-cyan-500/40 border border-white/20
             transition-all duration-300 flex items-center justify-center hover:scale-110"
>
  <MessageCircle className="w-6 h-6" />
</motion.a>

  );
}
