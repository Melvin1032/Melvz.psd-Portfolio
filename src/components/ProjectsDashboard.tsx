import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Import local images
import gamingCover from '../assets/gaming cover photo.jpg';
import gamingSolo from '../assets/gaming solo poster.jpg';
import gamingTeam from '../assets/gaming team banner.jpg';
import poloDesign1 from '../assets/polo shirt design1.jpg';
import poloDesign2 from '../assets/polo shirt design2.jpg';
import poloDesign3 from '../assets/polo shirt design3.jpg.jpg';
import poloDesign4 from '../assets/polo shirt design4.jpg';
import esportsJersey1 from '../assets/esports jersey1.jpg';
import garitanMaroon from '../assets/garitan maroon.jpg';
import garitanWhite from '../assets/garitan white.jpg';
import nbaJersey from '../assets/NBA CUT JERSEEY with SHORTS.jpg';
import virginMary from '../assets/VIRGIN MARY (LAKERS INSPIRED) 2.jpg';

const allProjects = [
  // Graphic Design
  {
    id: 1,
    title: 'Gaming Cover Art',
    category: 'GRAPHIC DESIGN',
    image: gamingCover,
    year: '2024',
    description: 'Dynamic gaming cover photo with bold visual elements and striking composition.',
  },
  {
    id: 2,
    title: 'Gaming Solo Poster',
    category: 'POSTER DESIGN',
    image: gamingSolo,
    year: '2024',
    description: 'Gaming poster design featuring solo player theme with dramatic visuals.',
  },
  {
    id: 3,
    title: 'Gaming Team Banner',
    category: 'BRAND DESIGN',
    image: gamingTeam,
    year: '2024',
    description: 'Team banner design for gaming community with cohesive branding elements.',
  },
  // Apparel Design
  {
    id: 4,
    title: 'Polo Shirt Design V1',
    category: 'APPAREL DESIGN',
    image: poloDesign1,
    year: '2024',
    description: 'Custom polo shirt design with unique pattern and branding.',
  },
  {
    id: 5,
    title: 'Polo Shirt Design V2',
    category: 'APPAREL DESIGN',
    image: poloDesign2,
    year: '2024',
    description: 'Alternative polo shirt design variant with different color scheme.',
  },
  {
    id: 6,
    title: 'Polo Shirt Design V3',
    category: 'APPAREL DESIGN',
    image: poloDesign3,
    year: '2024',
    description: 'Third iteration of polo shirt design series with refined details.',
  },
  {
    id: 7,
    title: 'Polo Shirt Design V4',
    category: 'APPAREL DESIGN',
    image: poloDesign4,
    year: '2024',
    description: 'Final polo shirt design variant showcasing complete apparel collection.',
  },
  {
    id: 8,
    title: 'Esports Jersey Design',
    category: 'APPAREL DESIGN',
    image: esportsJersey1,
    year: '2024',
    description: 'Professional esports jersey design with team branding and modern aesthetics.',
  },
  {
    id: 9,
    title: 'Garitan Maroon',
    category: 'APPAREL DESIGN',
    image: garitanMaroon,
    year: '2024',
    description: 'Maroon variant of Garitan apparel design with bold styling.',
  },
  {
    id: 10,
    title: 'Garitan White',
    category: 'APPAREL DESIGN',
    image: garitanWhite,
    year: '2024',
    description: 'White variant of Garitan apparel design with clean aesthetics.',
  },
  {
    id: 11,
    title: 'NBA Cut Jersey',
    category: 'APPAREL DESIGN',
    image: nbaJersey,
    year: '2024',
    description: 'NBA-style cut jersey and shorts set with professional design.',
  },
  {
    id: 12,
    title: 'Virgin Mary (Lakers Inspired)',
    category: 'APPAREL DESIGN',
    image: virginMary,
    year: '2024',
    description: 'Lakers-inspired design featuring Virgin Mary theme with purple and gold colors.',
  },
];

const categories = ['ALL', 'GRAPHIC DESIGN', 'POSTER DESIGN', 'BRAND DESIGN', 'APPAREL DESIGN'];

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
