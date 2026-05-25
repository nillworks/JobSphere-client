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

const Features = () => {
  return (
    <section
      id="features"
      className="border-y border-slate-200 bg-slate-50 py-12 sm:py-16 md:py-24 dark:border-[#1d242d] dark:bg-[#0f1318]"
    >
      <SectionShell>
        <div className="mb-12 text-center">
          <SectionBadge label="Features" />
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Everything you need to succeed
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Search}
            title="Smart Search"
            description="Find your ideal job with advanced filters and AI recommendations."
          />
          <FeatureCard
            icon={BarChart3}
            title="Salary Insights"
            description="Get real salary data to negotiate confidently with employers."
          />
          <FeatureCard
            icon={Building2}
            title="Top Companies"
            description="Apply to vetted companies that are actively hiring."
          />
          <FeatureCard
            icon={Bookmark}
            title="Saved Jobs"
            description="Manage applications & favorites on your personal dashboard."
          />
          <FeatureCard
            icon={Zap}
            title="One-Click Apply"
            description="Simplify your job applications for an easier, faster process."
          />
          <FeatureCard
            icon={FileText}
            title="Resume Builder"
            description="Create professional resumes with modern, ATS-friendly templates."
          />
          <FeatureCard
            icon={MapPin}
            title="Skill Matching"
            description="Discover jobs that perfectly match your skills and experience."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Career Growth"
            description="Boost your career with quick interview tips and resources."
          />
        </div>
      </SectionShell>
    </section>
  );
};

export default Features;
