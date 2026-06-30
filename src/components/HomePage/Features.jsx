import {
  BarChart3,
  Bookmark,
  Building2,
  FileText,
  MapPin,
  Search,
  TrendingUp,
  Zap,
} from 'lucide-react';
import FeatureCard from '@/components/Shared/FeatureCard';
import SectionBadge from '@/components/Shared/SectionBadge';
import SectionShell from '@/components/Shared/SectionShell';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/Shared/MotionWrapper';

const Features = () => {
  return (
    <section
      id="features"
      className="border-y border-slate-200 bg-slate-50 py-12 sm:py-16 md:py-24 dark:border-[#1d242d] dark:bg-[#0f1318]"
    >
      <SectionShell>
        <SlideUp>
          <div className="mb-12 text-center">
            <SectionBadge label="Features" />
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Everything you need to succeed
            </h2>
          </div>
        </SlideUp>

        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StaggerItem>
            <FeatureCard
              icon={<Search className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              title="Smart Search"
              description="Find your ideal job with advanced filters and AI recommendations."
            />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard
              icon={<BarChart3 className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              title="Salary Insights"
              description="Get real salary data to negotiate confidently with employers."
            />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard
              icon={<Building2 className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              title="Top Companies"
              description="Apply to vetted companies that are actively hiring."
            />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard
              icon={<Bookmark className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              title="Saved Jobs"
              description="Manage applications & favorites on your personal dashboard."
            />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard
              icon={<Zap className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              title="One-Click Apply"
              description="Simplify your job applications for an easier, faster process."
            />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard
              icon={<FileText className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              title="Resume Builder"
              description="Create professional resumes with modern, ATS-friendly templates."
            />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard
              icon={<MapPin className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              title="Skill Matching"
              description="Discover jobs that perfectly match your skills and experience."
            />
          </StaggerItem>
          <StaggerItem>
            <FeatureCard
              icon={<TrendingUp className="h-5 w-5 shrink-0 text-[#ff9a86]" />}
              title="Career Growth"
              description="Boost your career with quick interview tips and resources."
            />
          </StaggerItem>
        </StaggerContainer>
      </SectionShell>
    </section>
  );
};

export default Features;
