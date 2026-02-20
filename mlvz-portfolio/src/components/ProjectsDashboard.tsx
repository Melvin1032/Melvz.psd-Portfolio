import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const allProjects = [
  // Brand Identity
  {
    id: 1,
    title: 'Neon Horizons',
    category: 'BRAND IDENTITY',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    year: '2024',
    description: 'Complete brand identity for a futuristic tech startup.',
  },
  {
    id: 2,
    title: 'Cyber Industries',
    category: 'BRAND IDENTITY',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    year: '2024',
    description: 'Logo and visual identity system for a gaming company.',
  },
  {
    id: 3,
    title: 'Flux Studio',
    category: 'BRAND IDENTITY',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
    year: '2023',
    description: 'Brand refresh for a creative agency.',
  },
  // Web Design
  {
    id: 4,
    title: 'Digital Dreams',
    category: 'WEB DESIGN',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    year: '2024',
    description: 'E-commerce website with immersive 3D experiences.',
  },
  {
    id: 5,
    title: 'Tech Vision',
    category: 'WEB DESIGN',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    year: '2024',
    description: 'Corporate website for an AI solutions provider.',
  },
  {
    id: 6,
    title: 'Artisan Gallery',
    category: 'WEB DESIGN',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    year: '2023',
    description: 'Portfolio website for a contemporary art gallery.',
  },
  // Poster Design
  {
    id: 7,
    title: 'Cyber Punk',
    category: 'POSTER DESIGN',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80',
    year: '2024',
    description: 'Event poster for a cyberpunk-themed music festival.',
  },
  {
    id: 8,
    title: 'Neon Nights',
    category: 'POSTER DESIGN',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
    year: '2024',
    description: 'Series of posters for a nightlife event series.',
  },
  {
    id: 9,
    title: 'Future Forward',
    category: 'POSTER DESIGN',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80',
    year: '2023',
    description: 'Conference poster design for a tech summit.',
  },
  // Album Art
  {
    id: 10,
    title: 'Retro Wave',
    category: 'ALBUM ART',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    year: '2024',
    description: 'Album cover for a synthwave music producer.',
  },
  {
    id: 11,
    title: 'Midnight Drive',
    category: 'ALBUM ART',
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&q=80',
    year: '2024',
    description: 'Cover art for an electronic music EP.',
  },
  {
    id: 12,
    title: 'Electric Soul',
    category: 'ALBUM ART',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    year: '2023',
    description: 'Album artwork for an indie rock band.',
  },
  // UI/UX Design
  {
    id: 13,
    title: 'Future Tech',
    category: 'UI/UX DESIGN',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    year: '2024',
    description: 'Mobile app design for a smart home controller.',
  },
  {
    id: 14,
    title: 'Finance Flow',
    category: 'UI/UX DESIGN',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    year: '2024',
    description: 'Dashboard design for a fintech platform.',
  },
  {
    id: 15,
    title: 'Health Hub',
    category: 'UI/UX DESIGN',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    year: '2023',
    description: 'Healthcare app interface design.',
  },
];

const categories = ['ALL', 'BRAND IDENTITY', 'WEB DESIGN', 'POSTER DESIGN', 'ALBUM ART', 'UI/UX DESIGN'];

export const ProjectsDashboard = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <section 
      id="projects-dashboard" 
      className={`py-24 md:py-32 min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <a 
            href="#gallery" 
            className={`inline-flex items-center gap-2 font-mono text-sm mb-6 transition-colors ${
              isDark ? 'text-gray-400 hover:text-[#ff1a1a]' : 'text-gray-600 hover:text-[#ff1a1a]'
            }`}
            data-cursor="pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO FEATURED
          </a>
          
          <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
            ALL <span className="text-[#ff1a1a]">PROJECTS</span>
          </h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Browse my complete portfolio by category
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-mono text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#ff1a1a] text-white'
                  : isDark
                    ? 'border border-[#ff1a1a]/30 text-[#ff1a1a] hover:bg-[#ff1a1a] hover:text-white'
                    : 'border border-[#ff1a1a]/30 text-[#ff1a1a] hover:bg-[#ff1a1a] hover:text-white'
              }`}
              data-cursor="pointer"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden cursor-pointer"
                data-cursor="pointer"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark 
                    ? 'from-[#0a0a0a] via-[#0a0a0a]/80' 
                    : 'from-[#1a1a1a] via-[#1a1a1a]/80'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="font-mono text-xs text-[#ff1a1a] tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-mono text-xs text-gray-400">{project.year}</span>
                      <div className="w-8 h-8 rounded-full bg-[#ff1a1a] flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Border on hover */}
                <div className="absolute inset-0 border-2 border-[#ff1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-12 text-center font-mono text-sm ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          SHOWING {filteredProjects.length} OF {allProjects.length} PROJECTS
        </motion.div>
      </div>
    </section>
  );
};
