import { MapPin, Users, Globe } from 'lucide-react';
import Link from 'next/link';

const CompanyCard = ({ company }) => {
  const isApproved = company.status === 'APPROVED';

  return (
    <div className="bg-white dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] rounded-2xl p-6 hover:border-[#ff9a86]/50 dark:hover:border-[#ff9a86]/50 transition-all duration-300 group flex flex-col h-full shadow-sm hover:shadow-md hover:shadow-[#ff9a86]/5 cursor-pointer relative overflow-hidden">
      {/* Subtle hover gradient background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-100 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-black text-2xl text-slate-900 shadow-sm overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              {company.logo}
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#ff9a86] transition-colors line-clamp-1">
                {company.name}
              </h3>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {company.industry}
              </p>
            </div>
          </div>
          <span
            className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm ${isApproved ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'}`}
          >
            {company.status}
          </span>
        </div>

        {/* Description */}
        <div className="mb-6 flex-grow">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {company.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-100 dark:bg-[#1d242d] mb-5 transition-colors group-hover:bg-[#ff9a86]/20"></div>

        {/* Footer Info */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-medium">{company.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
              <Users className="w-4 h-4" />
              <span className="text-xs font-medium">
                {company.employeeCount}
              </span>
            </div>
          </div>
          <Link
            href={company?.website}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:!text-[#ff9a86] transition-colors w-max group/link"
          >
            <Globe className="w-4 h-4 group-hover/link:animate-spin-slow" />
            <span className="text-xs font-bold tracking-wide">
              Visit Website
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
