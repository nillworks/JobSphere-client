import { Building2, CircleDollarSign, Globe, Home, MapPin } from 'lucide-react';
import ApplyButton from './ApplyButton';

const WorkTypeIcon = ({ variant }) => {
  const className = 'h-3 w-3 shrink-0';
  if (variant === 'globe') return <Globe className={className} />;
  if (variant === 'building') return <Building2 className={className} />;
  return <Home className={className} />;
};

const JobCard = ({ job }) => {
  const displayTitle = job?.jobTitle;
  const displayCompanyName = job?.companyName;
  const displayLocation = `${job?.city || ''}${job?.city && job?.country ? ', ' : ''}${job?.country || ''}`;
  const displayWorkType = job?.jobType;
  const displayVariant = job?.isRemote ? 'globe' : 'building';
  const displaySalary = job?.minSalary && job?.maxSalary
    ? `${job.currency || ''} ${job.minSalary} - ${job.maxSalary}`
    : '';

  const _id = job?._id?.$oid || job?._id;

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 before:absolute before:top-0 before:right-0 before:left-0 before:h-[3px] before:origin-left before:scale-x-0 before:rounded-t-2xl before:bg-gradient-to-r before:from-[#ff9a86] before:to-[#bf7465] before:transition-transform before:duration-300 hover:-translate-y-1 hover:border-[#ff9a86]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:before:scale-x-100 dark:border-[#1d242d] dark:bg-[#11151a] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,154,134,0.1)]">
      <div className="mb-4 flex items-start gap-4">
        {job?.companyLogo && (
          <img
            src={job.companyLogo}
            alt={displayCompanyName || 'Company'}
            className="h-12 w-12 shrink-0 rounded-lg border border-slate-100 bg-slate-50 object-contain p-1 dark:border-[#1d242d] dark:bg-[#0f1318]"
          />
        )}
        <div>
          <h3 className="mb-1 text-lg font-bold transition-colors group-hover:text-[#ff9a86] line-clamp-1">
            {displayTitle || 'Untitled Job'}
          </h3>
          <p className="text-sm text-slate-400 dark:text-[#546881] line-clamp-1">
            {displayCompanyName || 'Unknown Company'}
          </p>
        </div>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-400 dark:border-[#1d242d] dark:bg-[#0f1318] dark:text-[#546881]">
          <MapPin className="h-3 w-3 shrink-0" />
          {displayLocation || 'Unknown Location'}
        </span>
        <span className="inline-flex items-center gap-1 rounded-md border border-[#ff9a86]/20 bg-[#fff5f3] px-2.5 py-1 text-xs font-medium text-[#ff9a86] dark:bg-[#ff9a86]/10">
          <WorkTypeIcon variant={displayVariant} />
          {displayWorkType || 'Full-time'}
        </span>
      </div>
      <div className="mb-4 flex items-center gap-1.5 text-sm font-semibold text-[#ff9a86]">
        <CircleDollarSign className="h-4 w-4 shrink-0" />
        {displaySalary || 'Negotiable'}
      </div>
      <ApplyButton _id={_id} />
    </div>
  );
};

export default JobCard;
