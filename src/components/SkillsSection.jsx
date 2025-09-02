import React from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { 
    name: "React", 
    category: "Frontend",
    icon: "⚛️",
    color: "from-blue-400 to-cyan-400"
  },
  { 
    name: "Next.js", 
    category: "Frontend",
    icon: "▲",
    color: "from-gray-400 to-gray-600"
  },
  { 
    name: "Node.js", 
    category: "Backend",
    icon: "🟢",
    color: "from-green-400 to-emerald-400"
  },
  { 
    name: "PostgreSQL", 
    category: "Database",
    icon: "🐘",
    color: "from-blue-500 to-indigo-500"
  },
  { 
    name: "Firebase", 
    category: "Backend",
    icon: "🔥",
    color: "from-orange-400 to-yellow-400"
  },
  { 
    name: "Supabase", 
    category: "Backend",
    icon: "⚡",
    color: "from-green-400 to-teal-400"
  },
  { 
    name: "React Native", 
    category: "Mobile",
    icon: "📱",
    color: "from-purple-400 to-pink-400"
  },
  { 
    name: "Python", 
    category: "AI/ML",
    icon: "🐍",
    color: "from-yellow-400 to-blue-400"
  },
  { 
    name: "TensorFlow", 
    category: "AI/ML",
    icon: "🧠",
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "Deep Learning", 
    category: "AI/ML",
    icon: "🤖",
    color: "from-purple-500 to-indigo-500"
  }
];

const SkillsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section ref={ref} id="skills" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">My Expertise</p>
          <h2 className="text-5xl font-bold">
            Technical <span className="text-gray-600">Skills</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center space-y-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl mb-3"
                >
                  {skill.icon}
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    className={`h-1 bg-gradient-to-r ${skill.color} rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
                    {skill.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;