import { Cloud, Code, Database, Smartphone } from 'lucide-react';

import { CardInfo } from '@/types';
import { generateCardContent } from '@/uiUtils';

const MainHeading = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our services</h2>
      <p className="text-xl text-dark max-w-2xl mx-auto">
        From concept to deployment, we offer comprehensive development services
      </p>
    </div>
  );
};

const Services = () => {
  const iconContainerClass =
    'w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300';
  const iconClass = 'w-8 h-8 text-background-primary';

  const cards: CardInfo[] = [
    {
      icon: (
        <div className={iconContainerClass + ` from-blue-500 to-cyan-400`}>
          <Code className={iconClass} />
        </div>
      ),
      title: {
        name: 'Web Development',
      },
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
    },
    {
      icon: (
        <div className={iconContainerClass + ` from-green-500 to-emerald-400`}>
          {' '}
          <Database className={iconClass} />{' '}
        </div>
      ),
      title: {
        name: 'Backend Development',
      },
      description: 'Robust, scalable APIs and backend services using Java Spring Boot and modern architectures.',
    },
    {
      icon: (
        <div className={iconContainerClass + ` from-blue-600 to-indigo-500`}>
          {' '}
          <Smartphone className={iconClass} />{' '}
        </div>
      ),
      title: {
        name: 'Mobile Development',
      },
      description: 'Cross-platform mobile apps with Flutter delivering native performance and beautiful interfaces.',
    },
    {
      icon: (
        <div className={iconContainerClass + ` from-orange-500 to-yellow-400`}>
          {' '}
          <Cloud className={iconClass} />{' '}
        </div>
      ),
      title: {
        name: 'Cloud & DevOps',
      },
      description: 'AWS cloud infrastructure, deployment automation, and scalable hosting solutions.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <MainHeading />
        <div className="font-glober grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {generateCardContent(cards)}
        </div>
      </div>
    </section>
  );
};

export default Services;
