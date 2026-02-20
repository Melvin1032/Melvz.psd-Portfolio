import { motion } from 'framer-motion';
import { Palette, Code, Zap, Layers } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const skills = [
  { icon: Palette, label: 'Brand Design', level: 95 },
  { icon: Code, label: 'Web Design', level: 90 },
  { icon: Layers, label: 'UI/UX Design', level: 88 },
];

const tools = ['Photoshop', 'Illustrator', 'Figma', 'VSCode', 'Qoder', 'Git', 'GitHub', 'Vercel', ];

export const About = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="about" className={`py-24 md:py-32 transition-colors duration-300 ${isDark ? 'bg-[#141414]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Designer Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Neon frame */}
              <div className="absolute inset-0 border-2 border-[#ff1a1a] translate-x-4 translate-y-4 -z-10" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[#ff1a1a] text-white p-6"
            >
              <p className="font-mono text-4xl font-bold">5+</p>
              <p className="font-mono text-sm">YEARS EXP.</p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[#ff1a1a] text-sm tracking-[0.3em]">
              ABOUT ME
            </span>
            
            <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
              CRAFTING <span className="text-[#ff1a1a]">DIGITAL</span> EXPERIENCES
            </h2>
            
            <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm a multidisciplinary graphic designer and creative developer based in the digital realm. 
              With a passion for cyberpunk aesthetics and brutalist design principles, I create 
              visual experiences that challenge conventions and push creative boundaries.
            </p>
            
            <p className={`text-lg leading-relaxed mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              My work spans brand identity, web design, and interactive experiences.
              I believe in the power of bold typography, striking color contrasts, and 
              pixel-perfect execution.
            </p>

            {/* Skills */}
            <div className="space-y-6 mb-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-[#ff1a1a]" />
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>{skill.label}</span>
                    </div>
                    <span className="font-mono text-[#ff1a1a]">{skill.level}%</span>
                  </div>
                  <div className={`h-1 rounded-full overflow-hidden ${isDark ? 'bg-[#1a1a1a]' : 'bg-gray-200'}`}>
                    <motion.div
                      className="h-full bg-[#ff1a1a]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <p className="font-mono text-sm text-gray-500 mb-4 tracking-wider">TOOLS & SOFTWARE</p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 border border-[#ff1a1a]/30 text-[#ff1a1a] font-mono text-sm hover:bg-[#ff1a1a] hover:text-white transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
