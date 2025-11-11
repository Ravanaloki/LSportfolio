import React, { useEffect, useState } from 'react';
import { Briefcase, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
  const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    fetch('/data/experience.json')
      .then((res) => res.json())
      .then((data) => setExperienceData(data));
  }, []);

  if (!experienceData) return null;

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experienceData.experiences.map((exp) => (
                <Card
                  key={exp.id}
                  className="border-l-4 border-violet-600 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800/50"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <p className="text-violet-600 dark:text-violet-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                        {exp.duration}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-violet-600 dark:text-violet-400 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Award className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>
            <div className="space-y-6">
              {experienceData.certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="border-l-4 border-violet-600 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800/50"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">
                      {cert.issuer}
                    </p>
                    {cert.description && (
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {cert.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
