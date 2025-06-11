'use client';

import ProjectCard from './ProjectCard';
import { useQuery } from '@apollo/client';
import * as LucideIcons from 'lucide-react';
import type React from 'react';

import { ErrorState } from '@/app/components/error-state';
import { PortfolioGridSkeleton } from '@/app/components/skeleton-loader';
import { GET_PRODUCTS } from '@/lib/apollo/queries';
import type { Project } from '@/types';

const ProjectList = () => {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);
  const projects: Project[] = data?.allProducts ?? [];

  // Function to get the Lucide icon component from a string name
  const getIconComponent = (
    iconName: string
  ): React.ForwardRefExoticComponent<Omit<LucideIcons.LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>> => {
    // Default to a fallback icon if the name doesn't exist or is invalid
    if (!iconName || typeof iconName !== 'string') {
      return LucideIcons.Code;
    }

    // Try to get the icon from Lucide
    // First letter uppercase, rest lowercase to match Lucide's naming convention
    console.log('formatted', iconName);
    // Check if the icon exists in Lucide
    const LucideIcon = (LucideIcons as keyof object)[iconName];

    // Return the icon if it exists, otherwise return a fallback
    return LucideIcon || LucideIcons.Code;
  };

  if (loading) {
    return <PortfolioGridSkeleton count={6} />;
  }

  if (error) {
    return (
      <ErrorState
        title="Unable to load products"
        message={`We're having trouble loading the company portfolio. ${error.message}`}
        onRetry={() => refetch()}
        type="products"
      />
    );
  }

  if (projects?.length === 0) {
    return (
      <ErrorState
        title="No products found"
        message="It looks like there are no products to display at the moment."
        showRetry={false}
        type="products"
      />
    );
  }

  return (
    <div className="space-y-16 md:space-y-24">
      {projects?.map((project: Project, index: number) => {
        // Get the icon component from the string name
        const IconComponent = getIconComponent(project?.icon);
        const isEven = index % 2 === 0;

        return <ProjectCard key={project.id} IconComponent={IconComponent} isEven={isEven} project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
