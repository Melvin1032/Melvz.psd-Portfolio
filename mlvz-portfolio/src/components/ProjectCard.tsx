import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  size?: 'small' | 'medium' | 'large';
}

export const ProjectCard = ({ title, category, image, size = 'medium' }: ProjectCardProps) => {
  const { isDark } = useTheme();
  const sizeClasses = {
    small: 'aspect-square',
    medium: 'aspect-[4/3]',
    large: 'aspect-[16/9]',
  };

  return (
    <motion.div
      className={`relative overflow-hidden group ${sizeClasses[size]}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      data-cursor="pointer"
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 ${
          isDark 
            ? 'from-[#0a0a0a] via-[#0a0a0a]/50' 
            : 'from-[#1a1a1a] via-[#1a1a1a]/50'
        }`} />

      {/* Neon border on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-[#ff1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-mono text-xs text-[#ff1a1a] tracking-wider">
            {category}
          </span>
          <h3 className={`text-xl md:text-2xl font-bold mt-2 group-hover:text-[#ff1a1a] transition-colors ${isDark ? 'text-white' : 'text-white'}`}>
            {title}
          </h3>
        </motion.div>

        {/* Arrow icon */}
        <motion.div
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#ff1a1a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#ff1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#ff1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#ff1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#ff1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};
