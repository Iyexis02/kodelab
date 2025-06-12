import React from 'react';

import { Stats } from '@/types';

type StatsCardProps = {
  stat: Stats;
};

const StatsCard = ({ stat }: StatsCardProps) => {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
      <div className="text-sm md:text-base text-white/80">{stat.label}</div>
    </div>
  );
};

export default StatsCard;
