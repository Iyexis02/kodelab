import { ArrowRight, CheckCircle, Cloud, Code, Database, Smartphone } from 'lucide-react';
import React from 'react';

import { ContactButton } from '@/app/components/ContactButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/Card';
import { ContactFormType } from '@/enums';

const MainServices = () => {
  const mainServices = [
    {
      icon: Code,
      title: 'Web Development',
      subtitle: 'Modern, Responsive Web Applications',
      description:
        'We build scalable web applications using cutting-edge technologies like React, Next.js, and TypeScript. Our solutions are fast, secure, and optimized for performance.',
      features: [
        'React & Next.js Applications',
        'Progressive Web Apps (PWA)',
        'E-commerce Platforms',
        'Custom CMS Solutions',
        'API Integration',
        'Performance Optimization',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Database,
      title: 'Backend Development',
      subtitle: 'Robust & Scalable Server Solutions',
      description:
        'Our backend services ensure your applications have a solid foundation with secure APIs, efficient databases, and reliable server architecture.',
      features: [
        'RESTful API Development',
        'Database Design & Optimization',
        'Microservices Architecture',
        'Authentication & Security',
        'Third-party Integrations',
        'Performance Monitoring',
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis'],
      gradient: 'from-green-500 to-emerald-400',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      subtitle: 'Cross-Platform Mobile Applications',
      description:
        'Create beautiful, native-feeling mobile apps that work seamlessly across iOS and Android platforms using Flutter and modern development practices.',
      features: [
        'Cross-Platform Development',
        'Native Performance',
        'Offline Functionality',
        'Push Notifications',
        'App Store Deployment',
        'Maintenance & Updates',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'REST APIs'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      subtitle: 'Scalable Infrastructure Solutions',
      description:
        'Deploy and manage your applications with confidence using modern cloud infrastructure, automated deployments, and monitoring solutions.',
      features: [
        'AWS Cloud Infrastructure',
        'CI/CD Pipeline Setup',
        'Container Orchestration',
        'Monitoring & Logging',
        'Security Implementation',
        'Backup & Recovery',
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      gradient: 'from-orange-500 to-yellow-400',
    },
  ];
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Core Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet your business needs and exceed your expectations.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}>
                s{' '}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <Card className="shadow-xl border-0 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mr-4`}>
                          <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                            {service.title}
                          </CardTitle>
                          <p className="text-emerald-600 font-semibold">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">{service.description}</p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Deliver:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <ContactButton
                        type={ContactFormType.Project}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold rounded-xl transition-all duration-300">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </ContactButton>
                    </CardContent>
                  </Card>
                </div>
                <div className={isEven ? '' : 'lg:col-start-1'}>
                  <div className="relative">
                    <div
                      className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 md:p-12 text-white shadow-2xl`}>
                      <div className="text-center">
                        <Icon className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-6 opacity-80" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                        <p className="text-white/90 text-lg">{service.subtitle}</p>
                      </div>

                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
