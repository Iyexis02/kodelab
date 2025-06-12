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

export function TestimonialCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg border-0 animate-pulse">
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-5 h-5 rounded mr-1" />
          ))}
        </div>

        <div className="mb-6 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        <div className="flex items-center mb-4">
          <Skeleton className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-3 w-40" />
          </div>
        </div>

        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
    </div>
  );
}

export function ValueCardSkeleton() {
  return (
    <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center bg-white rounded-lg animate-pulse">
      <div className="p-6 md:p-8">
        <Skeleton className="w-12 md:w-16 h-12 md:h-16 rounded-2xl mx-auto mb-4 md:mb-6" />
        <Skeleton className="h-6 w-3/4 mx-auto mb-3 md:mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
          <Skeleton className="h-4 w-4/5 mx-auto" />
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

export function ValuesGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <ValueCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function PortfolioProjectSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center animate-pulse">
      <div className="relative">
        <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <Skeleton className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-6 rounded-2xl" />
            <Skeleton className="h-8 w-3/4 mx-auto mb-2" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>

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

      <div className="bg-white rounded-xl shadow-xl border-0 h-full">
        <div className="p-6 md:p-8">
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

          <div className="mb-6 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>

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

          <div className="mb-6">
            <Skeleton className="h-6 w-40 mb-3" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-6 w-16 rounded-full" />
              ))}
            </div>
          </div>

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

export function TestimonialsGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <TestimonialCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function TimelineSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-600 transform md:-translate-x-1/2"></div>

        <div className="space-y-8 md:space-y-12">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"></div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 bg-white rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Skeleton className="w-5 h-5 mr-2" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-4 w-4/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StoryContentSkeleton() {
  return (
    <div>
      <Skeleton className="h-8 w-3/4 mb-6" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

export function StoryStatsSkeleton() {
  return (
    <div className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl p-8 text-white">
      <div className="grid grid-cols-2 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="text-center">
            <Skeleton className="h-8 w-16 mx-auto mb-2 bg-white/30" />
            <Skeleton className="h-4 w-24 mx-auto bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function StorySkeletonSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Skeleton className="h-10 w-64 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <StoryContentSkeleton />
            <StoryStatsSkeleton />
          </div>
        </div>
      </div>
    </section>
  );
}
