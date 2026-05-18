import { Skeleton } from '@/components/ui/skeleton';

export function HomeSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNEgxNHYtMjBoMjJ2MjB6bTAtMjBoLTIydjIwaDIydi0yMHptLTIyIDQwaDIydi0yMEgxNHYyMHptMjIgMHYyMEgxNHYtMjBoJZemMTEtNjB2MjBoMzZ2LTIwaDIyem0wLTIwaC0yMnYyMGgyMlYxNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

      {/* Main Content Skeleton Stack (Matching Hand-Drawn Mock Sketch) */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 max-w-4xl animate-pulse">
        
        {/* Block 1: Main Large Title / Tagline Block (Wide & Very Rounded) */}
        <div className="w-11/12 sm:w-[550px] md:w-[720px] lg:w-[850px] h-24 sm:h-28 md:h-32 rounded-[28px] sm:rounded-[36px] md:rounded-[45px] bg-slate-200/80 border border-slate-300/30 shadow-md relative overflow-hidden flex items-center justify-center">
          {/* Internal subtle brand shimmer highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>

        {/* Block 2: Subtitle Description Block (Medium Centered & Slightly Taller) */}
        <div className="w-9/12 sm:w-[420px] md:w-[560px] lg:w-[650px] h-16 sm:h-20 md:h-22 rounded-[22px] sm:rounded-[28px] md:rounded-[35px] bg-slate-200/60 border border-slate-200/20 shadow-sm relative overflow-hidden" />

        {/* Block 3: Action Buttons Block (Narrower & Focused) */}
        <div className="w-7/12 sm:w-[280px] md:w-[380px] lg:w-[420px] h-12 sm:h-14 md:h-16 rounded-[16px] sm:rounded-[20px] md:rounded-[26px] bg-slate-200/40 border border-slate-200/10 shadow-sm relative overflow-hidden" />

      </div>

      {/* Mouse Wheel Scroll Indicator Skeleton */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-300/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-slate-300/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
