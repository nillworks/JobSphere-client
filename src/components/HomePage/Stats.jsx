import { Building2, ClipboardList, Star, Users } from 'lucide-react';
import SectionShell from '@/components/Shared/SectionShell';
import StatCard from '@/components/Shared/StatCard';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/Shared/MotionWrapper';

const Stats = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-b from-[#ff9a86]/10 via-slate-500/10 to-transparent blur-3xl" />
      </div>

      <SectionShell>
        <SlideUp>
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Assisting over 15,000 job seekers
            </h2>
            <p className="text-lg text-slate-500 dark:text-[#a3adbb]">
              find their dream positions.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          <StaggerItem>
            <StatCard icon={<ClipboardList className="h-5 w-5 shrink-0 text-[#ff9a86]" />} value="50K" label="Active Jobs" />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              icon={<Building2 className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              value="12K"
              label="Companies"
              delayClass="delay-100"
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              icon={<Users className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              value="2M"
              label="Job Seekers"
              delayClass="delay-200"
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              icon={<Star className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              value="97%"
              label="Satisfaction Rate"
              delayClass="delay-300"
            />
          </StaggerItem>
        </StaggerContainer>
      </SectionShell>
    </section>
  );
};

export default Stats;
