import React, { useEffect, useState } from 'react';
import { Linkedin, Palette, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Contact = () => {
  const [socialsData, setSocialsData] = useState(null);

  useEffect(() => {
    fetch('/data/socials.json')
      .then((res) => res.json())
      .then((data) => setSocialsData(data));
  }, []);

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

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {socialsData.socials.map((social, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800/50"
            >
              <CardContent className="p-6">
                <a
                  href={social.url}
                  target={social.name !== 'Email' && social.name !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-lg group-hover:bg-violet-600 dark:group-hover:bg-violet-600 transition-colors">
                    <div className="text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors">
                      {getIcon(social.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Connect with me
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => window.location.href = 'mailto:lokeshshankar779@gmail.com'}
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg"
          >
            <Mail className="h-5 w-5 mr-2" />
            Send Me an Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
