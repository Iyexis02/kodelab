import { Cloud, Code, Database, Smartphone } from 'lucide-react';

import { generateCardContent } from '@/uiUtils';

const MainHeading = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Technologies we use</h2>
      <p className="text-xl text-dark max-w-2xl mx-auto">
        We leverage cutting-edge technologies to deliver exceptional results
      </p>
    </div>
  );
};

const Technologies = () => {
  const iconContainerClass =
    'w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300';
  const iconClass = 'w-8 h-8 text-background-primary';

  const cards: CardInfo[] = [
    {
      icon: (
        <div className={iconContainerClass + ` from-blue-500 to-cyan-400`}>
          {' '}
          <Code className={iconClass} />{' '}
        </div>
      ),
      title: {
        name: 'React',
      },
      description:
        'We use React to build fast, responsive UIs that scale across devices and provide exceptional user experiences.',
    },
    {
      icon: (
        <div className={iconContainerClass + ` from-green-500 to-emerald-400`}>
          {' '}
          <Database className={iconClass} />{' '}
        </div>
      ),
      title: {
        name: 'Java Spring Boot',
      },
      description:
        'Spring Boot powers our backend services for robust, scalable APIs that handle enterprise-level demands.',
    },
    {
      icon: (
        <div className={iconContainerClass + ` from-blue-600 to-indigo-500`}>
          {' '}
          <Smartphone className={iconClass} />{' '}
        </div>
      ),
      title: {
        name: 'Flutter',
      },
      description:
        'With Flutter, we deliver cross-platform mobile apps with native performance and beautiful interfaces.',
    },
    {
      icon: (
        <div className={iconContainerClass + ` from-orange-500 to-yellow-400`}>
          {' '}
          <Cloud className={iconClass} />{' '}
        </div>
      ),
      title: {
        name: 'Amazon Web Services',
      },
      description: 'We deploy, scale, and secure applications using AWS cloud infrastructure and managed services.',
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

export default Technologies;
