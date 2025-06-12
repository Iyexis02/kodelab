import { Calendar } from 'lucide-react';

import { Card, CardContent } from '@/app/components/ui/Card';
import { Milestone } from '@/types';

type MilestoneCardProps = {
  milestone: Milestone;
  index: number;
};

const MilestoneCard = ({ milestone, index }: MilestoneCardProps) => {
  return (
    <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"></div>

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
  );
};

export default MilestoneCard;
