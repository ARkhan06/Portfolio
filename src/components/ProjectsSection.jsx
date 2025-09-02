import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Fazics from "../assets/fazics.JPG"
import Stallion from "../assets/stallion.JPG"
import Model from "../assets/Model.JPG"
import { useRef } from 'react';
  const projects = [
    {
      title: "Stallion Limousine",
      category: "Full Stack Development",
      description: "Enterprise logistics platform with real-time tracking, advanced analytics, and comprehensive fleet management system.",
      image: Stallion,
      demoLink: "https://stallionsls.com",
      githubLink: "https://github.com/ARkhan06/Stallion",
      tech: ["React", "Node.js", "PostgreSQL", ],
      featured: true
    },
    {
      title: "Potato Disease AI",
      category: "Machine Learning",
      description: "Advanced computer vision model for early detection and classification of potato diseases using deep learning techniques.",
      image: Model,
      githubLink: "https://github.com/ARkhan06/Potato-Disease-Deep-Learning-Model",
      tech: ["Python", "TensorFlow", "CNN",],
      featured: true
    },
    {
      title: "Fazics Platform",
      category: "Frontend Development",
      description: "AI-powered cost estimation platform with predictive analytics and automated reporting for construction industry.",
      image: Fazics,
      demoLink: "https://www.fazics.com",
      githubLink: "https://github.com/ARkhan06/Cost-Estimation",
      tech: ["React.js", "Tailwind",],
      featured: false
    },
    {
      title: "Fitness Tracker Pro",
      category: "Full Stack Development",
      description: "Cross-platform fitness tracking application with social features, gamification, and real-time health monitoring.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      githubLink: "https://github.com/ajabbar17/FitnessTracker",
      tech: ["Next.js", "Node.js", "PostgreSQL", "WebSocket"],
      featured: false
    }
  ];

const ProjectsSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    return (
      <section ref={ref} id="projects" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">Portfolio</p>
            <h2 className="text-5xl font-bold">
              Featured <span className="text-gray-400">Work</span>
            </h2>
          </motion.div>

          <div className="space-y-20 lg:space-y-24">
            {projects.map((project, index) => {
              const projectRef = React.useRef(null);
              const projectInView = useInView(projectRef, { once: true, threshold: 0.3 });
              
              return (
                <motion.div 
                  key={index} 
                  ref={projectRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {index % 2 === 0 ? (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={projectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                      >
                        <div>
                          <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
                            {project.category}
                          </p>
                          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span 
                              key={techIndex} 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={projectInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.5, delay: 0.6 + techIndex * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="bg-gray-200 px-3 py-1 text-sm font-medium hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300 font-medium"
                          >
                            <Github className="w-5 h-5" />
                            View Code
                          </motion.a>
                          {project.demoLink && (
                            <motion.a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 20 }}
                              animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                              transition={{ duration: 0.8, delay: 0.9 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex items-center gap-2 bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, x: 50, rotateY: 15 }}
                        animate={projectInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 15 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        className="aspect-video bg-gray-100 overflow-hidden group cursor-pointer"
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                          className="w-full h-full object-fit"
                        />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, x: -50, rotateY: -15 }}
                        animate={projectInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -50, rotateY: -15 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        whileHover={{ scale: 1.02, rotateY: -5 }}
                        className="lg:col-start-1 lg:row-start-1 aspect-video bg-gray-100 overflow-hidden group cursor-pointer"
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={projectInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-start-2 space-y-6"
                      >
                        <div>
                          <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
                            {project.category}
                          </p>
                          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span 
                              key={techIndex} 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={projectInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.5, delay: 0.6 + techIndex * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="bg-gray-200 px-3 py-1 text-sm font-medium hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300 font-medium"
                          >
                            <Github className="w-5 h-5" />
                            View Code
                          </motion.a>
                          {project.demoLink && (
                            <motion.a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 20 }}
                              animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                              transition={{ duration: 0.8, delay: 0.9 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex items-center gap-2 bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };


export default ProjectsSection