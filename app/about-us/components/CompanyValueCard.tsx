import { LucideProps } from 'lucide-react';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

import { Card, CardContent } from '@/app/components/ui/Card';
import { CompanyValue } from '@/types';

type CompanyValueCardProps = {
  value: CompanyValue;
  IconComponent: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
};

const CompanyValueCard = ({ value, IconComponent }: CompanyValueCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center">
      <CardContent className="p-6 md:p-8">
        <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-white" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{value.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
      </CardContent>
    </Card>
  );
};

export default CompanyValueCard;
