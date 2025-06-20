'use client';

import TeamCard from './EmployeeCard';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

import { ErrorState } from '@/app/components/error-state';
import { TeamGridSkeleton } from '@/app/components/skeleton-loader';
import { useClientLogger } from '@/app/hooks/useClientLogger';
import { ErrorStateType } from '@/enums';
import { GET_EMPLOYEES } from '@/lib/apollo/queries';
import { Employee } from '@/types';

const EmployeeList = () => {
  const { loading, error, data, refetch } = useQuery(GET_EMPLOYEES);
  const employees: Employee[] = data?.allEmployees ?? [];

  const { logInfo, logError, logApolloError } = useClientLogger();

  useEffect(() => {
    if (data && employees.length > 0) {
      logInfo(`Successfully loaded ${employees.length} employees`, 'EmployeeList', {
        productCount: employees.length,
      });
    }
  }, [data, employees.length, logInfo]);

  useEffect(() => {
    if (error) {
      logApolloError(error, 'EmployeeList', {
        query: 'GET_EMPLOYEES',
        attemptedAction: 'loadEmployees',
      });
    }
  }, [error, logApolloError]);

  useEffect(() => {
    if (!loading && !error && employees.length === 0) {
      logInfo('No employees found in database', 'EmployeeList', {
        dataState: 'empty',
      });
    }
  }, [loading, error, employees.length, logInfo]);

  const handleRetry = async () => {
    try {
      logInfo('User initiated retry for employees', 'EmployeeList');
      await refetch();
    } catch (retryError) {
      logError(`Retry failed: ${retryError}`, 'EmployeeList', {
        action: 'retry',
        originalError: error?.message,
      });
    }
  };

  if (loading) {
    return <TeamGridSkeleton count={6} />;
  }

  if (error) {
    return (
      <ErrorState
        type={ErrorStateType.Team}
        title="Unable to load team members"
        message={`We're having trouble loading the team information. ${error.message}`}
        onRetry={() => refetch()}
      />
    );
  }

  if (employees?.length === 0) {
    return (
      <ErrorState
        type={ErrorStateType.Team}
        title="No team members found"
        message="It looks like there are no team members to display at the moment."
        showRetry={false}
      />
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {employees?.map((employee) => <TeamCard key={employee.id} employee={employee} />)}
    </div>
  );
};

export default EmployeeList;
