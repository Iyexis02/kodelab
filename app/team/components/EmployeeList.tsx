'use client';

import TeamCard from './EmployeeCard';
import { useQuery } from '@apollo/client';

import { GET_EMPLOYEES } from '@/lib/apollo/queries';

const EmployeeList = () => {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);
  const employees: Employee[] = data?.allEmployees ?? [];

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {employees?.map((employee) => <TeamCard key={employee.id} employee={employee} />)}
    </div>
  );
};

export default EmployeeList;
