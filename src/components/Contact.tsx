import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Dribbble, label: 'Dribbble', href: '#' },
];

export const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className={`py-24 md:py-32 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[#ff1a1a] text-sm tracking-[0.3em]">
            GET IN TOUCH
          </span>
          <h2 className={`text-4xl md:text-6xl font-bold mt-4 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
            LET'S <span className="text-[#ff1a1a]">CREATE</span> TOGETHER
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className={`text-lg mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Have a project in mind? Let's collaborate and bring your vision to life. 
              I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#ff1a1a] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#ff1a1a]" />
                </div>
                <div>
                  <p className="font-mono text-sm text-gray-500">EMAIL</p>
                  <a 
                    href="mailto:hello@mlvz.psd" 
                    className={`hover:text-[#ff1a1a] transition-colors ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}
                    data-cursor="pointer"
                  >
                    hello@mlvz.psd
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#ff1a1a] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#ff1a1a]" />
                </div>
                <div>
                  <p className="font-mono text-sm text-gray-500">LOCATION</p>
                  <p className={isDark ? 'text-white' : 'text-[#1a1a1a]'}>Digital Nomad / Worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-mono text-sm text-gray-500 mb-4 tracking-wider">FOLLOW ME</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 border border-[#ff1a1a]/30 flex items-center justify-center text-[#ff1a1a] hover:bg-[#ff1a1a] hover:text-white transition-all duration-300"
                    data-cursor="pointer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-sm text-gray-500 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full border px-4 py-4 focus:border-[#ff1a1a] focus:outline-none transition-colors ${
                                    isDark 
                                      ? 'bg-[#141414] border-[#1a1a1a] text-white' 
                                      : 'bg-white border-gray-300 text-[#1a1a1a]'
                                  }`}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-sm text-gray-500 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full border px-4 py-4 focus:border-[#ff1a1a] focus:outline-none transition-colors ${
                                    isDark 
                                      ? 'bg-[#141414] border-[#1a1a1a] text-white' 
                                      : 'bg-white border-gray-300 text-[#1a1a1a]'
                                  }`}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-sm text-gray-500 mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`w-full border px-4 py-4 focus:border-[#ff1a1a] focus:outline-none transition-colors resize-none ${
                                    isDark 
                                      ? 'bg-[#141414] border-[#1a1a1a] text-white' 
                                      : 'bg-white border-gray-300 text-[#1a1a1a]'
                                  }`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="group relative w-full px-8 py-4 bg-[#ff1a1a] text-white font-semibold text-sm tracking-wider overflow-hidden flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor="pointer"
              >
                <span className="relative z-10">SEND MESSAGE</span>
                <Send className="w-4 h-4 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-[#1a1a1a]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-[#1a1a1a]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-gray-500">
            © 2026 MLVZ.psd. All rights reserved.
          </p>
          <p className="font-mono text-sm text-gray-500">
            Designed & Built with <span className="text-[#ff1a1a]">♥</span> and caffeine
          </p>
        </div>
      </div>
    </section>
  );
};
