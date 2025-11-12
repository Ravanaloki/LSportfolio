import React, { useEffect, useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => setProjectsData(data));
  }, []);

  if (!projectsData) return null;

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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

  const imageHoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
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
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const Card = ({ children, className = '' }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 overflow-hidden group ${className}`}
    >
      {children}
    </motion.div>
  );

  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );

  const Badge = ({ children, variant = 'default', className = '' }) => {
    const variants = {
      default: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
      secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
      outline: 'border border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-300'
    };

    return (
      <motion.span
        variants={badgeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      >
        {children}
      </motion.span>
    );
  };

  return (
    <section id="projects" className="py-20 dark:bg-gray-900">
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
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-violet-600 mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my recent work and creative endeavors
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.projects.map((project, index) => (
            <Card key={project.id}>
              {/* Project Image with Hover Overlay */}
              <motion.div 
                className="relative overflow-hidden aspect-video"
                whileHover="hover"
              >
                <motion.img
                  src={project.thumbnail}
                  alt={project.title}
                  variants={imageHoverVariants}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  variants={overlayVariants}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                >
                  <motion.div
                    variants={buttonVariants}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    {project.link && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(project.link, '_blank')}
                        className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center w-full justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Project
                      </motion.button>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>

              <CardContent>
                {/* Project Title and Status */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start justify-between mb-3"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant={project.status === 'In Progress' ? 'secondary' : 'default'}>
                    {project.status}
                  </Badge>
                </motion.div>

                {/* Project Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-1"
                >
                  {project.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      variants={techBadgeVariants}
                      transition={{ duration: 0.3, delay: 0.3 + (idx * 0.05) }}
                    >
                      <Badge variant="outline" className="text-xs">
                        <Code className="h-3 w-3 mr-1" />
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;