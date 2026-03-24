import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { useTheme } from '../contexts/ThemeContext';

// Import local images
import gamingCover from '../assets/gaming cover photo.jpg';
import gamingSolo from '../assets/gaming solo poster.jpg';
import gamingTeam from '../assets/gaming team banner.jpg';
import poloDesign1 from '../assets/polo shirt design1.jpg';
import poloDesign2 from '../assets/polo shirt design2.jpg';
import esportsJersey1 from '../assets/esports jersey1.jpg';
import garitanMaroon from '../assets/garitan maroon.jpg';
import garitanWhite from '../assets/garitan white.jpg';
import nbaJersey from '../assets/NBA CUT JERSEEY with SHORTS.jpg';
import virginMary from '../assets/VIRGIN MARY (LAKERS INSPIRED) 2.jpg';

const projects = [
  {
    id: 1,
    title: 'Gaming Cover Art',
    category: 'GRAPHIC DESIGN',
    image: gamingCover,
    size: 'large' as const,
  },
  {
    id: 2,
    title: 'Esports Jersey Design',
    category: 'APPAREL DESIGN',
    image: esportsJersey1,
    size: 'medium' as const,
  },
  {
    id: 3,
    title: 'Gaming Solo Poster',
    category: 'POSTER DESIGN',
    image: gamingSolo,
    size: 'medium' as const,
  },
  {
    id: 4,
    title: 'Garitan Maroon',
    category: 'APPAREL DESIGN',
    image: garitanMaroon,
    size: 'medium' as const,
  },
  {
    id: 5,
    title: 'NBA Cut Jersey',
    category: 'APPAREL DESIGN',
    image: nbaJersey,
    size: 'medium' as const,
  },
];

export const Gallery = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="gallery" className={`py-24 md:py-32 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-[#ff1a1a] text-sm tracking-[0.3em]">
            SELECTED WORKS
          </span>
          <h2 className={`text-4xl md:text-6xl font-bold mt-4 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
            FEATURED <span className="text-[#ff1a1a]">PROJECTS</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Row 1 */}
          <div className="lg:col-span-2">
            <ProjectCard
              title={projects[0].title}
              category={projects[0].category}
              image={projects[0].image}
              size="large"
            />
          </div>
          <div className="grid gap-4 md:gap-6">
            <ProjectCard
              title={projects[1].title}
              category={projects[1].category}
              image={projects[1].image}
              size="medium"
            />
          </div>

          {/* Row 2 */}
          <div>
            <ProjectCard
              title={projects[2].title}
              category={projects[2].category}
              image={projects[2].image}
              size="medium"
            />
          </div>
          <div>
            <ProjectCard
              title={projects[3].title}
              category={projects[3].category}
              image={projects[3].image}
              size="medium"
            />
          </div>
          <div>
            <ProjectCard
              title={projects[4].title}
              category={projects[4].category}
              image={projects[4].image}
              size="medium"
            />
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#projects-dashboard"
            className="group relative inline-block px-8 py-4 border border-[#ff1a1a] text-[#ff1a1a] font-mono text-sm tracking-wider overflow-hidden transition-all duration-300 hover:text-white"
            data-cursor="pointer"
          >
            <span className="relative z-10">VIEW ALL PROJECTS</span>
            <motion.div
              className="absolute inset-0 bg-[#ff1a1a]"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
