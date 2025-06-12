'use client';

import MilestoneCard from './MilestoneCard';
import { useQuery } from '@apollo/client';

import { ErrorState } from '@/app/components/error-state';
import { TimelineSkeleton } from '@/app/components/skeleton-loader';
import { ErrorStateType } from '@/enums';
import { GET_MILESTONES } from '@/lib/apollo/queries';
import { Milestone } from '@/types';

const TimelineHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        From humble beginnings to becoming a trusted technology partner for businesses across Croatia and beyond.
      </p>
    </div>
  );
};

const Timeline = () => {
  const { loading, error, data, refetch } = useQuery(GET_MILESTONES);
  const milestones: Milestone[] = data?.allMilestones ?? [];

  if (loading) {
    return <TimelineSkeleton count={6} />;
  }

  if (error) {
    return (
      <ErrorState
        title="Unable to load milestones"
        message={`We're having trouble loading the company milestones. ${error.message}`}
        onRetry={() => refetch()}
        type={ErrorStateType.Milestones}
      />
    );
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <TimelineHeader />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-600 transform md:-translate-x-1/2"></div>
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
