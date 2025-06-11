'use client';

import TeamCard from './EmployeeCard';
import { useQuery } from '@apollo/client';

import { ErrorState } from '@/app/components/error-state';
import { TeamGridSkeleton } from '@/app/components/skeleton-loader';
import { GET_EMPLOYEES } from '@/lib/apollo/queries';

const EmployeeList = () => {
  const { loading, error, data, refetch } = useQuery(GET_EMPLOYEES);
  const employees: Employee[] = data?.allEmployees ?? [];

  if (loading) {
    return <TeamGridSkeleton count={6} />;
  }

  if (error) {
    return (
      <ErrorState
        title="Unable to load team members"
        message={`We're having trouble loading the team information. ${error.message}`}
        onRetry={() => refetch()}
      />
    );
  }

  if (employees?.length === 0) {
    return (
      <ErrorState
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
