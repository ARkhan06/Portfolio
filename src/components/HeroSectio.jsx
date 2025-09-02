import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
// Import your CV file - make sure the path is correct
import CV from '../assets/AbdulRehmanKhan Resume.pdf';

const HeroSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center bg-black relative overflow-hidden pt-20">
      {/* Background Animation (now ignores mouse/touch) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-40 left-20 w-1 h-1 bg-gray-400 rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-white rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-20 left-40 w-1 h-1 bg-gray-500 rounded-full"
        />
      </div>

      {/* Content wrapper brought above background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div 
          variants={staggerChildren} 
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm uppercase tracking-wider">Full Stack & AI/ML Developer</p>
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                Abdul
                Rehman<br />
                <span className="text-gray-600">Khan</span>
              </h1>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              I craft digital experiences that seamlessly blend innovative design with cutting-edge technology, 
              turning complex problems into elegant solutions.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* View My Work Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <button 
                  onClick={() => {
                    const projectSection = document.getElementById('projects');
                    projectSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-white text-black px-8 py-4 transition-all duration-300 group cursor-pointer hover:bg-gray-200"
                >
                  <span className="flex items-center justify-center gap-2">
                    View My Work
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </span>
                </button>
              </motion.div>
              
              {/* Download CV Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={CV}
                  download="AbdulRehmanKhan_Resume.pdf"
                  className="w-full border border-gray-600 text-white px-8 py-4 transition-all duration-300 group cursor-pointer inline-flex items-center justify-center hover:bg-white hover:text-black"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download CV
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 60, rotateY: 15 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 60, rotateY: 15 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative">
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gray-900 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ rotateZ: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-8xl text-gray-700 font-mono"
                >
                  &lt;/&gt;
                </motion.div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-12 left-8 w-2 h-2 bg-gray-400 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/3 left-12 w-1.5 h-1.5 bg-white rounded-full"
              />
            </motion.div>
            
            {/* Code snippet overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute bottom-10 -right-6 bg-black border border-gray-800 p-4 font-mono text-sm text-green-400 cursor-pointer"
            >
              <div>const developer = {`{`}</div>
              <div className="pl-4">name: "Abdul Rehman Khan",</div>
              <div className="pl-4">skills: ["React", "AI/ML"],</div>
              <div className="pl-4">passion: "Innovation"</div>
              <div>{`}`}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
