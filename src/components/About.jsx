import React, { useEffect, useState } from 'react';
import { GraduationCap, MapPin, Mail, Phone, Heart, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/data/profile.json')
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return null;

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-shadow duration-300 ${className}`}
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-violet-600 mx-auto"
          />
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative group">
            <img
              src={profile.aboutImage}
              alt={profile.name}
              className="relative w-40 h-48 rounded-[18px] sm:w-40 sm:h-40 lg:w-60 lg:h-72 lg:rounded-md md:rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl"
            />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 items-start"
        >
          {/* Left Column - Profile Info & Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold mb-4 text-gray-900 dark:text-white"
                >
                  Profile
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {profile.about}
                </motion.p>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card>
              <CardContent className="space-y-4">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold mb-4 text-gray-900 dark:text-white"
                >
                  Contact Info
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                >
                  <Mail className="h-5 w-5 text-violet-600" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-violet-600 transition-colors"
                  >
                    {profile.email}
                  </a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                >
                  <Phone className="h-5 w-5 text-violet-600" />
                  <a
                    href={`tel:${profile.phone}`}
                    className="hover:text-violet-600 transition-colors"
                  >
                    {profile.phone}
                  </a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                >
                  <MapPin className="h-5 w-5 text-violet-600" />
                  <span>{profile.location}</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Education, Strengths & Hobbies */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Education Card */}
            <Card>
              <CardContent>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-4"
                >
                  <GraduationCap className="h-6 w-6 text-violet-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </motion.div>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {profile.education.degree}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {profile.education.college}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Expected Graduation: {profile.education.expectedGraduation}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Secondary Education
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {profile.education.secondarySchool}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {profile.education.secondaryYears}
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Strengths Card */}
            <Card>
              <CardContent>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-4"
                >
                  <Heart className="h-6 w-6 text-violet-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Strengths
                  </h3>
                </motion.div>
                <ul className="space-y-2">
                  {profile.strengths.map((strength, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-violet-600 mt-1">•</span>
                      <span>{strength}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Hobbies Card */}
            <Card>
              <CardContent>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-4"
                >
                  <BookOpen className="h-6 w-6 text-violet-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Hobbies
                  </h3>
                </motion.div>
                <ul className="space-y-2">
                  {profile.hobbies.map((hobby, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-violet-600 mt-1">•</span>
                      <span>{hobby}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;