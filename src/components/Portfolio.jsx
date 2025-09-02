import React from 'react';
import { Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import HeroSection from './HeroSectio';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const Portfolio = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Smooth scrolling and prevent horizontal scroll */}
      <style >{`
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        body {
          overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl font-bold"
            >
              Abdul Rehman Khan
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-8"
            >
              <motion.a
                href="https://github.com"
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:arkhan060320045@gmail.com"
                whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500">
              © 2025 Abdul Rehman Khan. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Portfolio;