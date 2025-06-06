import { Monitor, Palette, Rocket, Settings, Shield, Users } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/app/components/ui/Card';

const AdditionalServices = () => {
  const additionalServices = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging experiences.',
    },
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to protect your digital assets.',
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamlessly connect your existing systems and third-party services.',
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic technology guidance to help you make informed decisions.',
    },
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Rapid prototyping and development to validate your business ideas.',
    },
    {
      icon: Monitor,
      title: 'Maintenance',
      description: 'Ongoing support and updates to keep your applications running smoothly.',
    },
  ];
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Additional Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Complementary services to support your complete digital transformation journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
