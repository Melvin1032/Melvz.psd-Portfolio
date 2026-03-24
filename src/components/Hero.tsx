import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { isDark } = useTheme();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-300 ${
              isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]'
            }`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(255, 26, 26, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255, 26, 26, 0.1) 1px, transparent 1px)`
              : `linear-gradient(rgba(255, 26, 26, 0.15) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255, 26, 26, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated background glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: isDark
                      ? 'radial-gradient(circle, rgba(255, 26, 26, 0.15) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(255, 26, 26, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center px-4"
        style={{ y, opacity }}
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[#ff1a1a] text-sm md:text-base tracking-[0.3em] mb-6"
        >
          GRAPHIC DESIGNER & CREATIVE DEVELOPER
        </motion.p>

        {/* Main title with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`glitch font-bold tracking-tighter leading-none ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}
          data-text="MLVZ.psd"
          style={{
            fontSize: 'clamp(3rem, 15vw, 12rem)',
          }}
        >
          MLVZ.psd
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`mt-6 text-lg md:text-xl max-w-2xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Crafting visual experiences that push boundaries
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#gallery"
            className="group relative px-8 py-4 bg-[#ff1a1a] text-white font-semibold text-sm tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,26,26,0.5)]"
            data-cursor="pointer"
          >
            <span className="relative z-10">VIEW WORK</span>
            <motion.div
              className="absolute inset-0 bg-[#1a1a1a]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href="#contact"
            className={`px-8 py-4 border font-semibold text-sm tracking-wider transition-all duration-300 hover:bg-[#ff1a1a] hover:text-white hover:border-[#ff1a1a] ${
                          isDark ? 'border-[#ff1a1a] text-[#ff1a1a]' : 'border-[#ff1a1a] text-[#ff1a1a]'
                        }`}
            data-cursor="pointer"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-gray-500 tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-[#ff1a1a]" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#ff1a1a] opacity-50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#ff1a1a] opacity-50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#ff1a1a] opacity-50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#ff1a1a] opacity-50" />
    </section>
  );
};
