import React, { useEffect, useState } from 'react';
import { GraduationCap, MapPin, Mail, Phone, Heart, BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/data/profile.json')
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return null;

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Profile
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {profile.about}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Contact Info
                </h3>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <Mail className="h-5 w-5 text-violet-600" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-violet-600 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <Phone className="h-5 w-5 text-violet-600" />
                  <a
                    href={`tel:${profile.phone}`}
                    className="hover:text-violet-600 transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <MapPin className="h-5 w-5 text-violet-600" />
                  <span>{profile.location}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & More */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-violet-600" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {profile.education.degree}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {profile.education.college}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Expected Graduation: {profile.education.expectedGraduation}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Secondary Education
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {profile.education.secondarySchool}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {profile.education.secondaryYears}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-violet-600" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Strengths
                  </h3>
                </div>
                <ul className="space-y-2">
                  {profile.strengths.map((strength, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-violet-600 mt-1">•</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-6 w-6 text-violet-600" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Hobbies
                  </h3>
                </div>
                <ul className="space-y-2">
                  {profile.hobbies.map((hobby, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-violet-600 mt-1">•</span>
                      <span>{hobby}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
