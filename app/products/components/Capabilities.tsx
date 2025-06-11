import { Cloud, Shield, Users, Zap } from 'lucide-react';

import { Card, CardContent } from '@/app/components/ui/Card';

const Capabilities = () => {
  const capabilities = [
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Agile methodology ensures fast delivery without compromising on quality or functionality.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security best practices and compliance standards to protect your business data.',
    },
    {
      icon: Cloud,
      title: 'Scalable Architecture',
      description: 'Cloud-native solutions that grow with your business and handle increasing user loads.',
    },
    {
      icon: Users,
      title: 'Ongoing Support',
      description: 'Comprehensive maintenance, updates, and technical support after project completion.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Development</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business understanding to deliver solutions that drive real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
