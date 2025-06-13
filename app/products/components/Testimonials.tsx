'use client';

import TestimonialCard from './TestimonialCard';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

import { ErrorState } from '@/app/components/error-state';
import { TestimonialsGridSkeleton } from '@/app/components/skeleton-loader';
import { useClientLogger } from '@/app/hooks/useClientLogger';
import { ErrorStateType } from '@/enums';
import { GET_TESTIMONIALS } from '@/lib/apollo/queries';
import { Testimonial } from '@/types';

const Testimonials = () => {
  const { loading, error, data, refetch } = useQuery(GET_TESTIMONIALS);
  const testimonials: Testimonial[] = data?.allTestimonials ?? [];

  const { logInfo, logError, logApolloError } = useClientLogger();

  useEffect(() => {
    if (data && testimonials.length > 0) {
      logInfo(`Successfully loaded ${testimonials.length} testimonials`, 'ValueList', {
        productCount: testimonials.length,
      });
    }
  }, [data, testimonials.length, logInfo]);

  useEffect(() => {
    if (error) {
      logApolloError(error, 'TestimonialList', {
        query: 'GET_TESTIMONIALS',
        attemptedAction: 'loadTestimonals',
      });
    }
  }, [error, logApolloError]);

  useEffect(() => {
    if (!loading && !error && testimonials.length === 0) {
      logInfo('No testimonials found in database', 'TestimonialList', {
        dataState: 'empty',
      });
    }
  }, [loading, error, testimonials.length, logInfo]);

  const handleRetry = async () => {
    try {
      logInfo('User initiated retry for testimonials', 'TestimonialList');
      await refetch();
    } catch (retryError) {
      logError(`Retry failed: ${retryError}`, 'TestimonialList', {
        action: 'retry',
        originalError: error?.message,
      });
    }
  };

  if (loading) {
    return <TestimonialsGridSkeleton count={6} />;
  }

  if (error) {
    return (
      <ErrorState
        title="Unable to load testimonials"
        message={`We're having trouble loading the testimonials. ${error.message}`}
        onRetry={handleRetry}
        type={ErrorStateType.Testimonials}
      />
    );
  }

  if (testimonials?.length === 0) {
    return (
      <ErrorState
        title="No testimonials found"
        message="It looks like there are no testimonials to display at the moment."
        showRetry={false}
        type={ErrorStateType.Testimonials}
      />
    );
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses that have transformed their operations with our custom solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial: Testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
