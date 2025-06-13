'use client';

import CompanyValueCard from './CompanyValueCard';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

import { ErrorState } from '@/app/components/error-state';
import { ValuesGridSkeleton } from '@/app/components/skeleton-loader';
import { useClientLogger } from '@/app/hooks/useClientLogger';
import { ErrorStateType } from '@/enums';
import { GET_COMPANY_VALUES } from '@/lib/apollo/queries';
import { CompanyValue } from '@/types';
import { getIconComponent } from '@/utils';

const ValuesHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        The principles that guide everything we do and shape how we work with our clients and each other.
      </p>
    </div>
  );
};

const Values = () => {
  const { loading, error, data, refetch } = useQuery(GET_COMPANY_VALUES);
  const values: CompanyValue[] = data?.allCompanyvalues ?? [];

  const { logInfo, logError, logApolloError } = useClientLogger();

  useEffect(() => {
    if (data && values.length > 0) {
      logInfo(`Successfully loaded ${values.length} values`, 'ValueList', {
        productCount: values.length,
      });
    }
  }, [data, values.length, logInfo]);

  useEffect(() => {
    if (error) {
      logApolloError(error, 'ValueList', {
        query: 'GET_VALUES',
        attemptedAction: 'loadValues',
      });
    }
  }, [error, logApolloError]);

  useEffect(() => {
    if (!loading && !error && values.length === 0) {
      logInfo('No values found in database', 'ValueList', {
        dataState: 'empty',
      });
    }
  }, [loading, error, values.length, logInfo]);

  const handleRetry = async () => {
    try {
      logInfo('User initiated retry for milestones', 'MilestoneList');
      await refetch();
    } catch (retryError) {
      logError(`Retry failed: ${retryError}`, 'MilestoneList', {
        action: 'retry',
        originalError: error?.message,
      });
    }
  };

  if (loading) {
    return <ValuesGridSkeleton count={6} />;
  }

  if (error) {
    return (
      <ErrorState
        title="Unable to load company values"
        message={`We're having trouble loading the company values. ${error.message}`}
        onRetry={handleRetry}
        type={ErrorStateType.Values}
      />
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ValuesHeader />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values?.map((value: CompanyValue) => {
            const IconComponent = getIconComponent(value?.icon);
            return <CompanyValueCard key={value.id} value={value} IconComponent={IconComponent} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
