import React, { useEffect, useState } from 'react';
import { Linkedin, Palette, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [socialsData, setSocialsData] = useState(null);

  useEffect(() => {
    fetch('/data/socials.json')
      .then((res) => res.json())
      .then((data) => setSocialsData(data));
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      y: -5,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconContainerVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeIn"
      }
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      linkedin: Linkedin,
      palette: Palette,
      mail: Mail,
      phone: Phone,
    };
    const Icon = icons[iconName] || Mail;
    return <Icon className="h-6 w-6" />;
  };

  if (!socialsData) return null;

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

  const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
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
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-violet-600 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Feel free to reach out for collaborations or just a friendly chat
          </motion.p>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {socialsData.socials.map((social, index) => (
            <Card key={index}>
              <CardContent>
                <motion.a
                  href={social.url}
                  target={social.name !== 'Email' && social.name !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group"
                  whileHover="hover"
                >
                  <motion.div
                    variants={iconContainerVariants}
                    className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-lg group-hover:bg-violet-600 dark:group-hover:bg-violet-600 transition-colors"
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors"
                    >
                      {getIcon(social.icon)}
                    </motion.div>
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors"
                    >
                      {social.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Connect with me
                    </motion.p>
                  </div>
                </motion.a>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Email Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true }}
            onClick={() => window.location.href = 'mailto:lokeshshankar779@gmail.com'}
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg shadow-lg flex items-center mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="h-5 w-5 mr-2" />
            </motion.div>
            Send Me an Email
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;