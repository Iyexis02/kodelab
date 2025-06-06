import { Heart, Lightbulb, Rocket, Shield } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/app/components/ui/Card';

const Values = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Every line of code is crafted with precision, tested thoroughly, and built to last.',
    },
    {
      icon: Heart,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, not just service providers.',
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: "We're committed to continuous learning and helping our clients scale their businesses.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and shape how we work with our clients and each other.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
