import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50/50 via-white to-green-50/50">
      {/* Premium Hero Loading Section */}
      <section className="py-16 md:py-20 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            {/* Shimmering Title */}
            <Skeleton className="h-12 w-64 md:w-80 rounded-xl bg-slate-200" />
            {/* Shimmering Subtitle */}
            <Skeleton className="h-4 w-96 max-w-full rounded bg-slate-200" />
            <Skeleton className="h-4 w-72 max-w-full rounded bg-slate-200" />
          </div>

          {/* Staggered Grid Content Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-white border border-slate-200/50 p-6 flex flex-col gap-4 shadow-sm"
              >
                {/* Round Icon Placeholder */}
                <Skeleton className="w-12 h-12 rounded-full bg-slate-200" />
                
                <div className="flex flex-col gap-2 flex-1">
                  {/* Card Title Placeholder */}
                  <Skeleton className="h-5 w-1/2 rounded bg-slate-200" />
                  
                  {/* Card Paragraph Shimmer Lines */}
                  <Skeleton className="h-3 w-full rounded bg-slate-200" />
                  <Skeleton className="h-3 w-5/6 rounded bg-slate-200" />
                  <Skeleton className="h-3 w-2/3 rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Content Section (Details & Schedule Skeleton) */}
          <div className="max-w-4xl mx-auto py-8">
            <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-slate-200/50 shadow-sm">
              <Skeleton className="h-6 w-1/3 rounded bg-slate-200" />
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <Skeleton className="w-5 h-5 rounded bg-slate-200 flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-1/4 rounded bg-slate-200" />
                      <Skeleton className="h-3 w-5/6 rounded bg-slate-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
