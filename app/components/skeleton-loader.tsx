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
      <div className="relative overflow-hidden">
        <Skeleton className="w-full h-48 md:h-64" />
      </div>

      <div className="p-4 md:p-6">
        <div className="mb-4">
          <Skeleton className="h-6 md:h-7 w-3/4 mb-2" />
          <Skeleton className="h-4 md:h-5 w-1/2" />
        </div>

        <div className="mb-4 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
        </div>

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
