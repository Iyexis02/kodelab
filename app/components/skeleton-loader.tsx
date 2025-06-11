'use client';

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] rounded ${className}`}
      style={{
        animation: 'shimmer 2s infinite linear',
      }}>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}

export function TeamCardSkeleton() {
  return (
    <div className="group bg-white rounded-xl shadow-lg border-0 overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="relative overflow-hidden">
        <Skeleton className="w-full h-48 md:h-64" />
      </div>

      {/* Content skeleton */}
      <div className="p-4 md:p-6">
        {/* Name and role */}
        <div className="mb-4">
          <Skeleton className="h-6 md:h-7 w-3/4 mb-2" />
          <Skeleton className="h-4 md:h-5 w-1/2" />
        </div>

        {/* Description */}
        <div className="mb-4 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
        </div>

        {/* Social links */}
        <div className="flex space-x-2 md:space-x-3">
          <Skeleton className="w-8 md:w-10 h-8 md:h-10 rounded-full" />
          <Skeleton className="w-8 md:w-10 h-8 md:h-10 rounded-full" />
          <Skeleton className="w-8 md:w-10 h-8 md:h-10 rounded-full" />
          <Skeleton className="w-8 md:w-10 h-8 md:h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function TeamGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <TeamCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function PortfolioProjectSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center animate-pulse">
      {/* Project Visual Skeleton */}
      <div className="relative">
        <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <Skeleton className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-6 rounded-2xl" />
            <Skeleton className="h-8 w-3/4 mx-auto mb-2" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>

          {/* Mock interface elements */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              </div>
              <Skeleton className="h-4 w-12" />
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-white/20 rounded w-3/4"></div>
              <div className="h-2 bg-white/20 rounded w-1/2"></div>
              <div className="h-2 bg-white/20 rounded w-2/3"></div>
            </div>
          </div>

          {/* Project stats */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <Skeleton className="h-4 w-16 mx-auto mb-1" />
              <Skeleton className="h-5 w-20 mx-auto" />
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <Skeleton className="h-4 w-12 mx-auto mb-1" />
              <Skeleton className="h-5 w-24 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Skeleton */}
      <div className="bg-white rounded-xl shadow-xl border-0 h-full">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-5 w-1/2" />
            </div>
            <div className="text-right">
              <Skeleton className="h-6 w-32 mb-1" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <Skeleton className="h-6 w-32 mb-3" />
            <div className="grid sm:grid-cols-2 gap-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center">
                  <Skeleton className="w-4 h-4 rounded-full mr-2 flex-shrink-0" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <Skeleton className="h-6 w-40 mb-3" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-6 w-16 rounded-full" />
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <Skeleton className="h-6 w-36 mb-3" />
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center">
                  <Skeleton className="w-4 h-4 rounded-full mr-2 flex-shrink-0" />
                  <Skeleton className="h-4 w-48" />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Skeleton className="h-12 flex-1 rounded-xl" />
            <Skeleton className="h-12 flex-1 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-16 md:space-y-24">
      {Array.from({ length: count }).map((_, index) => (
        <PortfolioProjectSkeleton key={index} />
      ))}
    </div>
  );
}
