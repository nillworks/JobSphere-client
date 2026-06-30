import { Building2, CircleDollarSign, Globe, MapPin, Briefcase } from 'lucide-react';
import ApplyButton from './ApplyButton';

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
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff9a86]/10 hover:border-[#ff9a86]/30 dark:bg-[#11151a] dark:border-[#1d242d] dark:hover:shadow-[#ff9a86]/5 dark:hover:border-[#ff9a86]/20">
      
      {/* Decorative Background Blur */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-[#ff9a86]/20 to-transparent blur-2xl transition-all duration-500 group-hover:bg-[#ff9a86]/40 dark:from-[#ff9a86]/10 dark:group-hover:from-[#ff9a86]/20" />

      <div className="relative z-10 flex-1">
        {/* Header: Logo & Badge */}
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-2 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md dark:bg-[#0f1318] dark:border-[#1d242d]">
            {job?.companyLogo ? (
              <img
                src={job.companyLogo}
                alt={displayCompanyName || 'Company'}
                className="h-full w-full object-contain"
              />
            ) : (
              <Building2 className="h-6 w-6 text-slate-400 dark:text-[#546881]" />
            )}
          </div>
          
          {displayWorkType && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5f3] px-3 py-1 text-xs font-medium text-[#ff9a86] border border-[#ff9a86]/20 dark:bg-[#ff9a86]/10">
              {displayVariant === 'globe' ? <Globe className="h-3.5 w-3.5" /> : <Building2 className="h-3.5 w-3.5" />}
              {displayWorkType}
            </span>
          )}
        </div>

        {/* Title & Company */}
        <div className="mb-5">
          <h3 className="text-[1.15rem] font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#ff9a86] line-clamp-1 dark:text-white">
            {displayTitle || 'Untitled Job'}
          </h3>
          <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-[#546881] line-clamp-1">
            <Briefcase className="h-4 w-4 text-slate-400" />
            {displayCompanyName || 'Unknown Company'}
          </p>
        </div>

        {/* Info Rows */}
        <div className="mb-6 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-[#8b9cb0]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-[#1d242d] dark:text-[#546881]">
              <MapPin className="h-3.5 w-3.5" />
            </div>
            <span className="truncate">{displayLocation || 'Location not specified'}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-[#8b9cb0]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff5f3] text-[#ff9a86] dark:bg-[#ff9a86]/10">
              <CircleDollarSign className="h-3.5 w-3.5" />
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {displaySalary || 'Salary Negotiable'}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="relative z-10 mt-auto pt-5 border-t border-slate-100 dark:border-[#1d242d]">
        <ApplyButton _id={_id} />
      </div>
    </div>
  );
};

export default JobCard;
