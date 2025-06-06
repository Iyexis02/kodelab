import { Award, Target } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/app/components/ui/Card';

const Mission = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <Card className="shadow-xl border-0 overflow-hidden">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-6 md:p-8 text-white">
              <Target className="w-12 h-12 mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            </div>
            <CardContent className="p-6 md:p-8">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                To empower businesses with innovative technology solutions that drive growth, improve efficiency, and
                create exceptional user experiences. We believe that great software should be accessible, reliable, and
                transformative.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 overflow-hidden">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 md:p-8 text-white">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
            </div>
            <CardContent className="p-6 md:p-8">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                To be the leading technology partner for businesses in Croatia and beyond, known for our expertise,
                innovation, and commitment to client success. We envision a future where technology seamlessly enhances
                every aspect of business operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
