import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [profile, setProfile] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Frontend Developer', 'UI Designer'];

  useEffect(() => {
    fetch('/data/profile.json')
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setIsVisible(true);
      });
  }, []);

  // Typing effect
  useEffect(() => {
    if (!profile) return;

    const current = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, profile]);

  if (!profile) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50 to-purple-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-violet-900/20"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-200 dark:bg-violet-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Profile Image - First on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/5 flex justify-center order-1 lg:order-1"
          >
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="w-80 mt-4 rounded-full"
            />
          </motion.div>

          {/* Center: Content - Second on mobile, center on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/5 text-center lg:text-left order-2 lg:order-2"
          >

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6 mb-6 mt-2 sm:mb-8">
              <h1 className="text-4xl flex gap-3 justify-center lg:justify-start sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 via-violet-700 to-purple-600 dark:from-white dark:via-violet-200 dark:to-purple-300 bg-clip-text text-transparent">
                  {profile.name.split(' ')[0]}
                </span>
                <span className="bg-gradient-to-r from-violet-600 to-purple-700 dark:from-violet-400 dark:to-purple-600 bg-clip-text text-transparent">
                  {'.' + profile.name.split(' ')[1]}
                </span>
              </h1>
            </div>

            {/* Role with Typing Effect - Removed Icons */}
            <div className="mb-6 sm:mb-8 justify-center lg:justify-start">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-violet-700 dark:text-violet-300 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-xl backdrop-blur-sm border border-violet-200 dark:border-violet-700/30 inline-block">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-12">
              {profile.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 sm:mb-16">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 border border-violet-700 flex items-center justify-center gap-2"
              >
                <Zap className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </button>

              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto bg-transparent hover:bg-violet-100 dark:hover:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-2 border-violet-300 dark:border-violet-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-base sm:text-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                View Projects
                <Sparkles className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-violet-900/20 backdrop-blur-sm border border-violet-100 dark:border-violet-700/30">
                <div className="text-xl sm:text-2xl font-bold text-violet-700 dark:text-violet-300">2+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Years Exp</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-violet-900/20 backdrop-blur-sm border border-violet-100 dark:border-violet-700/30">
                <div className="text-xl sm:text-2xl font-bold text-violet-700 dark:text-violet-300">10+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-violet-900/20 backdrop-blur-sm border border-violet-100 dark:border-violet-700/30">
                <div className="text-xl sm:text-2xl font-bold text-violet-700 dark:text-violet-300">5+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Tech Stack</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Icon Bar - Third on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-1/5 flex lg:flex-col justify-center items-center gap-6 order-3 lg:order-3"
          >
            {/* Social Icons Bar */}
            <div className="flex lg:flex-col gap-6 p-6 bg-white/50 dark:bg-violet-900/20 backdrop-blur-sm rounded-2xl border border-violet-100 dark:border-violet-700/30 shadow-lg">
              <a href={profile.socialLinks.twitter} target='_black' className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href={profile.socialLinks.github} target='_black' className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href={profile.socialLinks.linkedin} target='_black' className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href={profile.socialLinks.instagram} target='_black' className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;