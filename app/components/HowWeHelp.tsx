import { Lightbulb, Rocket, Users } from 'lucide-react';

import { CardContentVariant } from '@/enums';
import { generateCardContent } from '@/uiUtils';

const HowWeHelpHeading = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">How we help</h2>
      <p className="text-xl text-dark max-w-2xl mx-auto">
        {"From concept to deployment, we're your trusted technology partner"}
      </p>
    </div>
  );
};

const HowWeHelp = () => {
  const iconContainerClass =
    'w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300';
  const iconClass = 'w-8 h-8 text-background-primary';

  const cards: CardInfo[] = [
    {
      icon: (
        <div className={iconContainerClass + ` from-purple-500 to-pink-500`}>
          <Rocket className={iconClass} />
        </div>
      ),
      title: {
        name: 'Product Development',
        url: '/products',
      },
      description:
        'From MVPs to enterprise platforms, we design and build scalable digital products that grow with your business needs.',
    },
    {
      icon: (
        <div className={iconContainerClass + `  from-blue-500 to-teal-500`}>
          <Users className={iconClass} />
        </div>
      ),
      title: {
        name: 'Meet the Team',
        url: '/team',
      },
      description:
        'Behind every solution is a passionate team of engineers, designers, and strategists dedicated to your success.',
    },
    {
      icon: (
        <div className={iconContainerClass + ` from-emerald-500 to-green-500`}>
          <Lightbulb className={iconClass} />
        </div>
      ),
      title: {
        name: 'Our Philosophy',
        url: '/about-us',
      },
      description:
        'Discover how we approach every challenge with craftsmanship, clarity, and care for long-term success.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <HowWeHelpHeading />
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {generateCardContent(cards, CardContentVariant.HowWeHelp)}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
