import { Building2, CircleDollarSign, Globe, MapPin, Briefcase, Sparkles } from 'lucide-react';
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
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-white p-1.5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff9a86]/20 dark:bg-[#0a0d14]">
      {/* Outer gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 via-slate-100/50 to-slate-200/50 opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-[#1d242d] dark:via-[#11151a] dark:to-[#1d242d]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff9a86] via-[#ff7c65] to-[#ff9a86] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      {/* Card Content Wrapper */}
      <div className="relative z-10 flex h-full flex-col justify-between rounded-[18px] bg-white p-6 dark:bg-[#0f1318]">
        
        {/* Top Section */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 p-2.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] ring-1 ring-slate-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_8px_25px_-4px_rgba(255,154,134,0.3)] group-hover:ring-[#ff9a86]/30 dark:bg-[#161b22] dark:ring-[#2d3540] dark:group-hover:ring-[#ff9a86]/30">
              {job?.companyLogo ? (
                <img
                  src={job.companyLogo}
                  alt={displayCompanyName || 'Company'}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <Building2 className="h-6 w-6 text-slate-400 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#ff9a86] dark:text-[#546881]" />
              )}
            </div>
            
            {displayWorkType && (
              <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 transition-colors duration-300 group-hover:bg-[#ff9a86]/10 group-hover:text-[#ff9a86] dark:bg-[#1d242d]/80 dark:text-[#8b9cb0] dark:group-hover:bg-[#ff9a86]/10">
                {displayVariant === 'globe' ? <Globe className="h-3.5 w-3.5" /> : <Building2 className="h-3.5 w-3.5" />}
                {displayWorkType}
              </div>
            )}
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#ff9a86] dark:text-white line-clamp-1">
              {displayTitle || 'Untitled Job'}
            </h3>
            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-[#8b9cb0]">
              <Briefcase className="h-4 w-4" />
              <span className="line-clamp-1">{displayCompanyName || 'Unknown Company'}</span>
            </div>
          </div>
        </div>

        {/* Info Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 transition-colors group-hover:bg-slate-100 dark:bg-[#161b22] dark:text-[#8b9cb0] dark:group-hover:bg-[#1d242d]">
            <MapPin className="h-4 w-4 text-slate-400 dark:text-[#546881]" />
            <span className="truncate max-w-[140px]">{displayLocation || 'Location not specified'}</span>
          </div>
          
          <div className="flex items-center gap-2 rounded-xl bg-[#fff5f3] px-3 py-2 text-sm font-semibold text-[#ff9a86] transition-colors group-hover:bg-[#ffece8] dark:bg-[#ff9a86]/10 dark:group-hover:bg-[#ff9a86]/20">
            <CircleDollarSign className="h-4 w-4" />
            <span>{displaySalary || 'Negotiable'}</span>
          </div>
        </div>

        {/* Footer/Action */}
        <div className="mt-6 pt-5 flex items-center justify-between border-t border-slate-100/80 dark:border-[#1d242d]/80">
           <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-400 dark:text-[#546881]">
             <Sparkles className="h-4 w-4 transition-colors group-hover:text-[#ff9a86]" />
             <span className="transition-colors group-hover:text-slate-600 dark:group-hover:text-slate-300">Actively hiring</span>
           </div>
           
           <div className="transition-transform duration-300 group-hover:translate-x-1">
             <ApplyButton _id={_id} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
