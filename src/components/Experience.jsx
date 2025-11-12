import React, { useEffect, useState } from 'react';
import { Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    fetch('/data/experience.json')
      .then((res) => res.json())
      .then((data) => setExperienceData(data));
  }, []);

  if (!experienceData) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const certificationCardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const Card = ({ children, className = '', isCertification = false }) => (
    <motion.div
      variants={isCertification ? certificationCardVariants : cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 border-l-4 border-violet-600 ${className}`}
    >
      {children}
    </motion.div>
  );

  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );

  const Badge = ({ children, className = '' }) => (
    <motion.span
      variants={badgeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 ${className}`}
    >
      {children}
    </motion.span>
  );

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-violet-600 mx-auto"
          />
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Work Experience Column */}
          <motion.div variants={containerVariants}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Briefcase className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              {experienceData.experiences.map((exp, index) => (
                <Card key={exp.id}>
                  <CardContent>
                    <div className="flex justify-between items-start mb-3">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <p className="text-violet-600 dark:text-violet-400 font-medium">
                          {exp.company}
                        </p>
                      </motion.div>
                      <Badge>
                        {exp.duration}
                      </Badge>
                    </div>
                    
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          variants={listItemVariants}
                          className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + (idx * 0.1) }}
                            viewport={{ once: true }}
                            className="text-violet-600 dark:text-violet-400 mt-1"
                          >
                            •
                          </motion.span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div variants={containerVariants}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Award className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              {experienceData.certifications.map((cert, index) => (
                <Card key={cert.id} isCertification={true}>
                  <CardContent>
                    <div className="flex justify-between items-start mb-2">
                      <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="text-lg font-bold text-gray-900 dark:text-white"
                      >
                        {cert.name}
                      </motion.h4>
                      <Badge>
                        {cert.year}
                      </Badge>
                    </div>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="text-violet-600 dark:text-violet-400 font-medium mb-2"
                    >
                      {cert.issuer}
                    </motion.p>
                    
                    {cert.description && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="text-gray-700 dark:text-gray-300 text-sm"
                      >
                        {cert.description}
                      </motion.p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;