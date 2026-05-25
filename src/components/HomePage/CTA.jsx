import { ArrowRight, Sparkles } from 'lucide-react';
import SectionShell from '@/components/Shared/SectionShell';

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#ff9a86]/20 via-slate-500/10 to-transparent blur-3xl" />
      </div>

      <SectionShell className="max-w-3xl text-center">
        <div className="mb-6 inline-flex animate-bounce items-center gap-2 rounded-full border border-[#ff9a86]/20 bg-[#fff5f3] px-4 py-2 text-[#ff9a86] dark:bg-[#ff9a86]/10">
          <Sparkles className="h-4 w-4 shrink-0" />
          <span className="text-sm font-semibold">
            Join 15,000+ job seekers today
          </span>
        </div>

        <h2 className="mb-6 text-3xl leading-tight font-extrabold md:text-5xl">
          Your next role is already looking for you
        </h2>
        <p className="mb-10 text-lg text-slate-500 dark:text-[#a3adbb]">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl dark:bg-slate-50 dark:text-[#090b0e]"
          >
            Create a free account
            <ArrowRight className="h-4 w-4 shrink-0" />
          </button>
          <a
            href="#pricing"
            className="flex items-center justify-center rounded-xl border border-slate-200 px-8 py-4 text-sm font-semibold transition-all hover:border-[#ff9a86]/50 hover:text-[#ff9a86] dark:border-[#1d242d]"
          >
            View pricing
          </a>
        </div>
      </SectionShell>
    </section>
  );
};

export default CTA;
