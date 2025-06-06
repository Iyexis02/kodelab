import { Award, Clock, Shield, Zap } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/app/components/ui/Card';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Agile development process ensures quick turnaround times without compromising quality.',
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Experienced developers and designers with proven track records in their fields.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and code review processes ensure reliable, bug-free solutions.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'We use the latest technologies and best practices to future-proof your applications.',
    },
  ];
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Kodelab</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business understanding to deliver exceptional results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
