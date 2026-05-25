import JobCard from '@/components/Shared/JobCard';
import SectionBadge from '@/components/Shared/SectionBadge';
import SectionShell from '@/components/Shared/SectionShell';

const Jobs = () => {
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
          <JobCard
            title="Frontend Developer"
            description="Showcase your commitment to diversity and inclusion by highlighting initiatives."
            location="New York, USA"
            workType="Hybrid"
            workTypeVariant="home"
            salary="€25-40/hour"
          />
          <JobCard
            title="Senior React Engineer"
            description="Build scalable design systems and component libraries for enterprise clients."
            location="San Francisco"
            workType="Remote"
            workTypeVariant="globe"
            salary="$120-160k/year"
          />
          <JobCard
            title="Full Stack Developer"
            description="End-to-end development using modern frameworks and cloud infrastructure."
            location="London, UK"
            workType="On-site"
            workTypeVariant="building"
            salary="£60-80k/year"
          />
          <JobCard
            title="UI/UX Designer"
            description="Create beautiful, accessible interfaces for next-gen productivity tools."
            location="Berlin, Germany"
            workType="Hybrid"
            workTypeVariant="home"
            salary="€50-70k/year"
          />
          <JobCard
            title="DevOps Engineer"
            description="Automate infrastructure and optimize CI/CD pipelines for fast deployment."
            location="Singapore"
            workType="Remote"
            workTypeVariant="globe"
            salary="$100-140k/year"
          />
          <JobCard
            title="Product Manager"
            description="Lead cross-functional teams to deliver impactful product features."
            location="Toronto, Canada"
            workType="Hybrid"
            workTypeVariant="home"
            salary="C$90-120k/year"
          />
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-500 transition-all hover:-translate-y-0.5 hover:border-[#ff9a86]/50 hover:text-[#ff9a86] dark:border-[#1d242d] dark:text-[#a3adbb]"
          >
            View all job openings →
          </button>
        </div>
      </SectionShell>
    </section>
  );
};

export default Jobs;
