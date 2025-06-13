'use client';

import ProjectCard from './ProjectCard';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

import { ErrorState } from '@/app/components/error-state';
import { PortfolioGridSkeleton } from '@/app/components/skeleton-loader';
import { useClientLogger } from '@/app/hooks/useClientLogger';
import { ErrorStateType } from '@/enums';
import { GET_PRODUCTS } from '@/lib/apollo/queries';
import type { Project } from '@/types';
import { getIconComponent } from '@/utils';

const ProjectList = () => {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);
  const projects: Project[] = data?.allProducts ?? [];
  const { logInfo, logError, logApolloError } = useClientLogger();

  useEffect(() => {
    if (data && projects.length > 0) {
      logInfo(`Successfully loaded ${projects.length} products`, 'ProjectList', {
        productCount: projects.length,
      });
    }
  }, [data, projects.length, logInfo]);

  useEffect(() => {
    if (error) {
      logApolloError(error, 'ProjectList', {
        query: 'GET_PRODUCTS',
        attemptedAction: 'loadProducts',
      });
    }
  }, [error, logApolloError]);

  useEffect(() => {
    if (!loading && !error && projects.length === 0) {
      logInfo('No products found in database', 'ProjectList', {
        dataState: 'empty',
      });
    }
  }, [loading, error, projects.length, logInfo]);

  const handleRetry = async () => {
    try {
      logInfo('User initiated retry for products', 'ProjectList');
      await refetch();
    } catch (retryError) {
      logError(`Retry failed: ${retryError}`, 'ProjectList', {
        action: 'retry',
        originalError: error?.message,
      });
    }
  };

  if (loading) {
    return <PortfolioGridSkeleton count={6} />;
  }

  if (error) {
    return (
      <ErrorState
        title="Unable to load products"
        message="We're having trouble loading the company portfolio. Please try again."
        onRetry={handleRetry}
        type={ErrorStateType.Products}
      />
    );
  }

  if (projects?.length === 0) {
    return (
      <ErrorState
        title="No products found"
        message="It looks like there are no products to display at the moment."
        showRetry={false}
        type={ErrorStateType.Products}
      />
    );
  }

  return (
    <div className="space-y-16 md:space-y-24">
      {projects?.map((project: Project, index: number) => {
        const IconComponent = getIconComponent(project?.icon);
        const isEven = index % 2 === 0;

        return <ProjectCard key={project.id} IconComponent={IconComponent} isEven={isEven} project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
