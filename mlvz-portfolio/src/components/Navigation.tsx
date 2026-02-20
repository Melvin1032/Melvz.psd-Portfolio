import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { label: 'WORK', href: '#gallery' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? isDark 
              ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#ff1a1a]/20' 
              : 'bg-white/90 backdrop-blur-md border-b border-[#ff1a1a]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#hero" 
              className={`font-bold text-xl tracking-tight transition-colors ${
                              isDark ? 'text-white hover:text-[#ff1a1a]' : 'text-[#1a1a1a] hover:text-[#ff1a1a]'
                            }`}
              data-cursor="pointer"
            >
              MLVZ<span className="text-[#ff1a1a]">.psd</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative font-mono text-sm tracking-wider transition-colors group ${
                                      isDark ? 'text-gray-300 hover:text-[#ff1a1a]' : 'text-gray-600 hover:text-[#ff1a1a]'
                                    }`}
                  data-cursor="pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1a1a] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 transition-colors ${
                isDark ? 'text-white hover:text-[#ff1a1a]' : 'text-[#1a1a1a] hover:text-[#ff1a1a]'
              }`}
              data-cursor="pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isDark ? 'text-white hover:text-[#ff1a1a]' : 'text-[#1a1a1a] hover:text-[#ff1a1a]'
              }`}
              data-cursor="pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 pt-20 md:hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]'}`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-mono text-2xl tracking-wider transition-colors ${
                                      isDark ? 'text-white hover:text-[#ff1a1a]' : 'text-[#1a1a1a] hover:text-[#ff1a1a]'
                                    }`}
                  data-cursor="pointer"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
