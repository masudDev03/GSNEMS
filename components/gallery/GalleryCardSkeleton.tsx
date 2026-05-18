'use client';

import { Skeleton } from '@/components/ui/skeleton';

export function GalleryCardSkeleton() {
  return (
    <div className="relative w-full aspect-[4/5] select-none">
      {/* Ghost Card 2 (Backmost card in physical stack skeleton) */}
      <div 
        className="absolute inset-0 rounded-2xl bg-slate-50 border border-slate-100/50 transform rotate-6 translate-y-3 translate-x-3 z-10 opacity-40"
        style={{ transformOrigin: 'bottom center' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200/40 rounded-2xl" />
      </div>

      {/* Ghost Card 1 (Middle card in physical stack skeleton) */}
      <div 
        className="absolute inset-0 rounded-2xl bg-slate-50 border border-slate-100/80 transform -rotate-3 -translate-y-2 translate-x-1.5 z-20 opacity-70"
        style={{ transformOrigin: 'bottom center' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200/60 rounded-2xl" />
      </div>

      {/* Main Front Card Skeleton */}
      <div 
        className="relative w-full h-full rounded-2xl bg-white border border-slate-200/60 shadow-md z-30 overflow-hidden flex flex-col"
      >
        {/* Cover Image Skeleton Area */}
        <div className="relative flex-1 w-full overflow-hidden bg-slate-50 flex flex-col p-4 justify-between">
          <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
          
          {/* Subtle vignette overlay to match real card style */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-60 z-10" />

          {/* Shimmering Category Badge Placeholder */}
          <div className="relative z-20">
            <Skeleton className="w-16 h-5 rounded-full bg-white/40 border border-white/20 backdrop-blur-md" />
          </div>

          {/* Shimmering Photos Count Indicator Placeholder */}
          <div className="relative z-20 self-end">
            <Skeleton className="w-20 h-5 rounded-lg bg-white/40 border border-white/20 backdrop-blur-md" />
          </div>
        </div>

        {/* Album Metadata Footer Skeleton */}
        <div className="p-4 md:p-5 bg-white border-t border-slate-100 flex flex-col gap-2">
          <Skeleton className="h-4 w-3/4 rounded bg-slate-200" />
          <Skeleton className="h-3 w-1/4 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}
