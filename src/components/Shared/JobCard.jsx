import { Building2, CircleDollarSign, Globe, MapPin, Briefcase, Sparkles, Clock } from 'lucide-react';
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
    <div className="group relative flex flex-col justify-between rounded-[20px] bg-white border border-slate-200/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff9a86]/10 hover:border-[#ff9a86]/40 dark:bg-[#0b0e14] dark:border-[#1d242d] dark:hover:border-[#ff9a86]/40">
      
      {/* Top Section */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 p-2.5 transition-all group-hover:bg-[#ff9a86]/5 group-hover:border-[#ff9a86]/20 dark:bg-[#161b22] dark:border-[#2d3540]">
            {job?.companyLogo ? (
              <img
                src={job.companyLogo}
                alt={displayCompanyName || 'Company'}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Building2 className="h-6 w-6 text-slate-400 transition-colors group-hover:text-[#ff9a86] dark:text-[#546881]" />
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#ff9a86] dark:text-white line-clamp-1">
              {displayTitle || 'Untitled Job'}
            </h3>
            <div className="mt-1.5 flex items-center gap-1.5 text-[14px] font-medium text-slate-500 dark:text-[#8b9cb0]">
              <Briefcase className="h-4 w-4 text-slate-400 dark:text-[#546881]" />
              <span className="line-clamp-1">{displayCompanyName || 'Unknown Company'}</span>
            </div>
          </div>
        </div>

        {displayWorkType && (
          <div className="hidden sm:flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100/80 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors group-hover:bg-[#ff9a86]/10 group-hover:text-[#ff9a86] dark:bg-[#1a202c] dark:text-[#a0aec0]">
            {displayVariant === 'globe' ? <Globe className="h-3.5 w-3.5" /> : <Building2 className="h-3.5 w-3.5" />}
            {displayWorkType}
          </div>
        )}
      </div>

      {/* Info Tags */}
      <div className="mt-6 flex flex-wrap gap-2.5">
        <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 dark:bg-[#161b22] dark:text-[#8b9cb0]">
          <MapPin className="h-4 w-4 text-slate-400 dark:text-[#546881]" />
          <span className="truncate max-w-[160px]">{displayLocation || 'Location not specified'}</span>
        </div>
        
        {displaySalary && (
          <div className="flex items-center gap-2 rounded-xl bg-[#fff5f3] px-3 py-2 text-sm font-semibold text-[#ff9a86] dark:bg-[#ff9a86]/10">
            <CircleDollarSign className="h-4 w-4" />
            <span>{displaySalary}</span>
          </div>
        )}
      </div>

      {/* Footer/Action */}
      <div className="mt-6 pt-5 flex items-center justify-between border-t border-slate-100 dark:border-[#1d242d]">
         <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-[#546881]">
           <Sparkles className="h-4 w-4 text-[#ff9a86]" />
           <span>Actively hiring</span>
         </div>
         
         <div className="transition-transform duration-300 group-hover:translate-x-1">
           <ApplyButton _id={_id} />
         </div>
      </div>
    </div>
  );
};

export default JobCard;
