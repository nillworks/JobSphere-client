import { MapPin, Search, Sparkles, TrendingUp } from 'lucide-react';
import { SITE_TAGLINE } from '@/components/Shared/brand';
import SectionShell from '@/components/Shared/SectionShell';
import { SlideUp, FadeIn } from '@/components/Shared/MotionWrapper';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#090b0e] overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#ff9a86]/40 to-rose-400/20 blur-[100px] animate-pulse sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px]" 
          style={{ animationDuration: '4s' }} 
        />
        <div 
          className="absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-amber-300/20 to-orange-400/20 blur-[120px] animate-pulse sm:h-[600px] sm:w-[600px] md:h-[700px] md:w-[700px]" 
          style={{ animationDuration: '7s' }} 
        />
        <div className="absolute bottom-[-20%] left-[20%] h-[700px] w-[700px] rounded-full bg-gradient-to-r from-slate-200/40 to-transparent blur-[120px] dark:from-slate-800/40" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDBMMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDQpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDBMMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
      </div>

      <SectionShell className="relative z-10 text-center">
        {/* Badge */}
        <SlideUp delay={0.1}>
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200/50 bg-white/60 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur-md transition-all hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 sm:mb-10 sm:px-5 sm:py-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#ff9a86] to-[#ff7a5c] shadow-inner">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </span>
            <span className="font-medium tracking-wide">
              Over <span className="font-bold text-[#ff7a5c]">50,000+</span> jobs added this month
            </span>
          </div>
        </SlideUp>

        {/* Heading */}
        <SlideUp delay={0.2}>
          <h1 className="mx-auto mb-6 max-w-5xl px-2 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-slate-900 drop-shadow-sm dark:text-white">
              Discover Your Next
            </span>
            <span className="mt-1 block bg-gradient-to-r from-[#ff9a86] via-[#ff7a5c] to-amber-500 bg-clip-text pb-2 text-transparent drop-shadow-lg">
              Dream Career
            </span>
          </h1>
        </SlideUp>

        <SlideUp delay={0.3}>
          <p className="mx-auto mb-10 max-w-3xl px-4 text-base font-medium leading-relaxed text-slate-600 sm:mb-14 sm:text-lg md:text-xl dark:text-slate-400">
            {SITE_TAGLINE || "Join the world's fastest-growing platform for professionals to find remote, hybrid, and onsite opportunities at top companies."}
          </p>
        </SlideUp>

        {/* Search Bar - Glassmorphism */}
        <SlideUp delay={0.4}>
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-0">
            <div className="relative rounded-3xl border border-white/50 bg-white/70 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl transition-all hover:shadow-[0_8px_40px_rgb(255,154,134,0.15)] dark:border-white/10 dark:bg-[#11151a]/70 dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] md:p-3">
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                
                <div className="group flex min-h-[56px] flex-1 items-center gap-3 rounded-2xl bg-slate-50/50 px-4 transition-all hover:bg-slate-100/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#ff9a86]/50 dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10">
                  <Search className="h-5 w-5 shrink-0 text-slate-400 transition-colors group-focus-within:text-[#ff9a86] dark:text-slate-500" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="min-w-0 flex-1 bg-transparent py-3 text-base font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>

                <div className="hidden h-10 w-px shrink-0 bg-slate-200/80 md:block dark:bg-white/10" />

                <div className="group flex min-h-[56px] flex-1 items-center gap-3 rounded-2xl bg-slate-50/50 px-4 transition-all hover:bg-slate-100/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#ff9a86]/50 dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10">
                  <MapPin className="h-5 w-5 shrink-0 text-slate-400 transition-colors group-focus-within:text-[#ff9a86] dark:text-slate-500" />
                  <input
                    type="text"
                    placeholder="City, state, or 'Remote'"
                    className="min-w-0 flex-1 bg-transparent py-3 text-base font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="button"
                  className="group relative flex min-h-[56px] w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff9a86] to-[#ff7a5c] px-8 text-base font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] md:w-auto"
                >
                  <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform group-hover:translate-y-0" />
                  <Search className="relative z-10 h-5 w-5 shrink-0" />
                  <span className="relative z-10">Search Jobs</span>
                </button>
              </div>
            </div>
          </div>
        </SlideUp>

        {/* Trending Searches */}
        <FadeIn delay={0.6}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
              <TrendingUp className="h-4 w-4" />
              Trending:
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {['Product Designer', 'AI Engineer', 'Frontend Dev', 'Data Scientist'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="rounded-full border border-slate-200/80 bg-white/60 px-4 py-1.5 text-sm font-medium text-slate-600 backdrop-blur-sm transition-all hover:border-[#ff9a86] hover:bg-[#ff9a86]/10 hover:text-[#ff9a86] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-[#ff9a86]/50 dark:hover:bg-[#ff9a86]/10 dark:hover:text-[#ff9a86]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </SectionShell>
    </section>
  );
};

export default Hero;
