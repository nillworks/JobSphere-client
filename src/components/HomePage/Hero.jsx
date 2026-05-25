import { MapPin, Search, Smile, TrendingUp } from 'lucide-react';
import { SITE_TAGLINE } from '@/components/Shared/brand';
import SectionShell from '@/components/Shared/SectionShell';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[280px] w-[280px] -translate-x-1/2 animate-pulse rounded-full bg-gradient-to-r from-[#ff9a86]/10 via-slate-500/10 to-transparent blur-3xl sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]" />
      </div>

      <SectionShell className="text-center">
        <div className="mx-auto mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-[#ff9a86]/20 bg-[#fff5f3] px-3 py-1.5 text-[#ff9a86] sm:mb-8 sm:gap-2 sm:px-4 sm:py-2 dark:bg-[#ff9a86]/10">
          <Smile className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
          <span className="text-[11px] font-semibold tracking-wide sm:text-sm">
            50,000+ NEW JOBS THIS MONTH
          </span>
        </div>

        <h1 className="mx-auto mb-4 max-w-4xl px-1 text-[1.75rem] leading-[1.15] font-extrabold tracking-tight sm:mb-6 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent dark:from-slate-50 dark:to-[#a3adbb]">
            Find Your Dream
          </span>
          <span className="block bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent dark:from-slate-50 dark:to-[#a3adbb]">
            Job Today
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl px-2 text-sm leading-relaxed text-slate-500 sm:mb-10 sm:px-0 sm:text-base md:text-lg lg:text-xl dark:text-[#a3adbb]">
          {SITE_TAGLINE}
        </p>

        <div className="mx-auto w-full max-w-2xl px-1 sm:px-0">
          <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-0 shadow-2xl sm:rounded-2xl md:flex-row md:items-stretch dark:border-[#1d242d] dark:bg-[#11151a]">
            <div className="flex min-h-[48px] flex-1 items-center gap-2.5 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
              <Search className="h-5 w-5 shrink-0 text-slate-400 dark:text-[#546881]" />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base dark:text-slate-50 dark:placeholder:text-[#546881]"
              />
            </div>

            <div className="hidden h-auto w-px shrink-0 bg-slate-200 md:block dark:bg-[#1d242d]" />
            <div className="h-px w-full bg-slate-200 md:hidden dark:bg-[#1d242d]" />

            <div className="flex min-h-[48px] flex-1 items-center gap-2.5 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
              <MapPin className="h-5 w-5 shrink-0 text-slate-400 dark:text-[#546881]" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base dark:text-slate-50 dark:placeholder:text-[#546881]"
              />
            </div>

            <button
              type="button"
              className="flex cursor-pointer w-full items-center justify-center gap-2  bg-gradient-to-br from-[#ff9a86] to-[#bf7465] px-4 py-3 text-sm font-semibold text-[#090b0e] shadow-lg transition-all  hover:shadow-[0_10px_30px_rgba(255,154,134,0.3)] sm:text-base md:w-auto md:rounded-r-2xl md:px-6"
            >
              <Search className="h-5 w-5 shrink-0" />
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 px-2 sm:mt-6 sm:gap-2 sm:px-0">
          <span className="flex w-full basis-full items-center justify-center gap-1.5 text-xs text-slate-400 sm:w-auto sm:basis-auto sm:text-sm dark:text-[#546881]">
            <TrendingUp className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            Trending:
          </span>
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-all hover:border-[#ff9a86]/50 hover:text-[#ff9a86] sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#1d242d] dark:bg-[#11151a] dark:text-[#546881]"
          >
            Product Designer
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-all hover:border-[#ff9a86]/50 hover:text-[#ff9a86] sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#1d242d] dark:bg-[#11151a] dark:text-[#546881]"
          >
            AI Engineering
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-all hover:border-[#ff9a86]/50 hover:text-[#ff9a86] sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#1d242d] dark:bg-[#11151a] dark:text-[#546881]"
          >
            DevOps Engineer
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-all hover:border-[#ff9a86]/50 hover:text-[#ff9a86] sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#1d242d] dark:bg-[#11151a] dark:text-[#546881]"
          >
            Data Scientist
          </button>
        </div>
      </SectionShell>
    </section>
  );
};

export default Hero;
