import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

  const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    
    const navRef = React.useRef(null);
    const navInView = useInView(navRef, { once: true });

    return (
      <motion.nav 
        ref={navRef}
        initial={{ opacity: 0, y: -50 }}
        animate={navInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl py-4 border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={navInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl font-bold text-white"
            >
              Abdul Rehman Khan
            </motion.div>
            
            <div className="hidden lg:flex items-center space-x-12">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={navInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 relative ${
                      activeSection === item.toLowerCase() 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <motion.div 
                        layoutId="activeSection"
                        className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"
                      />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>

            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={isMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-gray-800"
        >
          <div className="px-6 py-8 space-y-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-gray-300 transition-colors duration-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveSection(item.toLowerCase());
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    );
  };

 

export default Navbar