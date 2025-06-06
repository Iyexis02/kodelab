import { Code, Layers, Rocket, Target } from 'lucide-react';
import React from 'react';

const Process = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, requirements, and target audience.',
      icon: Target,
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Create detailed designs and technical architecture for your solution.',
      icon: Layers,
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your application with rigorous testing at every stage.',
      icon: Code,
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Deploy your solution and ensure a smooth launch with ongoing support.',
      icon: Rocket,
    },
  ];
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Process</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-600 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative text-center">
                    {/* Step number and icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm z-20">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
