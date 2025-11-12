import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    fetch('/data/skills.json')
      .then((res) => res.json())
      .then((data) => setSkillsData(data));
  }, []);

  if (!skillsData) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const ProgressBar = ({ value }) => (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div 
        className="bg-violet-600 h-2 rounded-full"
        variants={progressBarVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={value}
      />
    </div>
  );

  const Card = ({ children, className = '' }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );

  const CardHeader = ({ children, className = '' }) => (
    <div className={`p-6 border-b border-gray-100 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );

  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );

  return (
    <section id="skills" className="py-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-violet-600 mx-auto"
          />
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillsData.categories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  {category.name}
                </motion.h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={skillItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="font-medium text-gray-700 dark:text-gray-300"
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="text-sm text-violet-600 dark:text-violet-400 font-semibold"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <ProgressBar value={skill.level} />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;