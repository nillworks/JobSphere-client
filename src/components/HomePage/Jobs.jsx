import JobCard from '@/components/Shared/JobCard';
import SectionBadge from '@/components/Shared/SectionBadge';
import SectionShell from '@/components/Shared/SectionShell';
import getLimitJobs from '@/lib/AllGetApi/getLimitJobs';
import Link from 'next/link';

const Jobs = async () => {
  const limitJobs = await getLimitJobs();
  console.log(limitJobs);

  return (
    <section id="jobs" className="py-12 sm:py-16 md:py-24">
      <SectionShell>
        <div className="mb-12 text-center">
          <SectionBadge label="Smart Job Discovery" />
          <h2 className="text-3xl font-extrabold md:text-4xl">
            The roles you&apos;d never find by searching
          </h2>
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {limitJobs.map(job => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={'/jobs'}
            type="button"
            className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-500 transition-all hover:-translate-y-0.5 hover:border-[#ff9a86]/50 hover:text-[#ff9a86] dark:border-[#1d242d] dark:text-[#a3adbb]"
          >
            View all job openings →
          </Link>
        </div>
      </SectionShell>
    </section>
  );
};

export default Jobs;
