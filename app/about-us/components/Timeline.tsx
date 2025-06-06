import { Calendar } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/app/components/ui/Card';

const Timeline = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to build exceptional digital solutions',
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Delivered our first enterprise-level web application',
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew to 6 talented developers and designers',
    },
    {
      year: '2023',
      title: 'Mobile Focus',
      description: 'Expanded into cross-platform mobile development',
    },
    {
      year: '2024',
      title: 'Cloud Expertise',
      description: 'Became AWS certified partners for cloud solutions',
    },
    {
      year: '2025',
      title: 'Innovation Hub',
      description: 'Continuing to push boundaries in tech innovation',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to becoming a trusted technology partner for businesses across Croatia and beyond.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-600 transform md:-translate-x-1/2"></div>

            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-emerald-600 mr-2" />
                          <span className="text-emerald-600 font-bold text-lg">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
