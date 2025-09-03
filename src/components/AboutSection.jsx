import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';


const AboutSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    return (
      <section ref={ref} id="about" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">About Me</p>
                  <h2 className="text-5xl font-bold leading-tight">
                    Passionate Developer<br />
                    <span className="text-gray-400">& Problem Solver</span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    I'm a dedicated Full Stack and AI/ML developer with over 1 year of experience 
                    crafting digital solutions that make a real impact. My journey spans from responsive 
                    web applications to intelligent machine learning systems.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    What drives me is the intersection of technology and human experience. I believe 
                    that great code should not only work flawlessly but also create meaningful 
                    connections between people and technology.
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-1 gap-8"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="cursor-pointer"
                  >
                   
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                {
                  title: "Full Stack Development",
                  description: "Building scalable web applications with modern frameworks and best practices, ensuring optimal performance and user experience.",
                  delay: 0.1
                },
                {
                  title: "AI/ML Engineering", 
                  description: "Developing intelligent systems that can learn, adapt, and provide valuable insights through advanced machine learning algorithms.",
                  delay: 0.2
                },
                {
                  title: "Mobile Development",
                  description: "Creating cross-platform mobile applications that deliver native performance and seamless user experiences across all devices.",
                  delay: 0.3
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: item.delay }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gray-100 p-8 border-l-4 border-black cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

export default AboutSection