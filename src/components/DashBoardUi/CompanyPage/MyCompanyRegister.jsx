import React from 'react';
import {
  Building2,
  MapPin,
  Users,
  Globe,
  Mail,
  Edit,
  LayoutDashboard,
  Target,
} from 'lucide-react';
import Image from 'next/image';

const MyCompanyRegister = ({ company }) => {
  if (!company) return null;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      {/* Cover and Profile Header */}
      <div className="relative w-full bg-white dark:bg-[#23252b] rounded-2xl md:rounded-3xl border border-gray-200 dark:border-transparent overflow-hidden shadow-sm transition-colors">
        {/* Cover Photo */}
        <div className="h-40 md:h-56 w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-800 relative">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="px-5 sm:px-10 pb-8">
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-5 -mt-16 md:-mt-20 mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 text-center md:text-left">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white dark:bg-[#2a2d35] border-4 border-white dark:border-[#23252b] shadow-xl flex items-center justify-center overflow-hidden shrink-0 relative z-10 transition-colors">
                {company.logo ? (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={144}
                    height={144}
                    className="object-contain w-full h-full p-2"
                    unoptimized
                  />
                ) : (
                  <Building2 className="w-12 h-12 md:w-16 md:h-16 text-gray-300 dark:text-gray-500" />
                )}
              </div>
              <div className="mb-2">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
                  {company.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs md:text-sm font-semibold rounded-full border border-indigo-100 dark:border-indigo-500/20">
                    {company.industry || 'Technology'}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs md:text-sm font-semibold rounded-full border ${
                      company.status === 'approved'
                        ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-100 dark:border-green-500/20'
                        : company.status === 'pending'
                          ? 'bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-100 dark:border-yellow-500/20'
                          : company.status === 'rejected'
                            ? 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20'
                            : 'bg-gray-100 dark:bg-[#3b3e46] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    {company.status.toUpperCase() || 'pending'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2 md:mt-0 md:mb-2 justify-center">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 font-semibold text-sm transition-all shadow-sm active:scale-95">
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {/* Left Column: About & Stats */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <div className="bg-gray-50/50 dark:bg-[#2a2d35]/30 p-5 md:p-7 rounded-2xl border border-gray-100 dark:border-[#2a2d35] transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-500" />
                  About Company
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-[15px]">
                  {company.description ||
                    `${company.name} is a forward-thinking company in the ${company.industry || 'technology'} industry. We are committed to building innovative solutions and fostering a culture of excellence. Our team is dedicated to driving impact and creating value in everything we do.`}
                </p>
              </div>
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-[#1d1f25] p-6 rounded-2xl border border-gray-100 dark:border-[#262831] shadow-sm dark:shadow-none flex flex-col items-center justify-center text-center transition-colors min-h-[130px]">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-none">
                    12
                  </span>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-500 dark:text-[#6e7687] uppercase tracking-widest">
                    Active Jobs
                  </span>
                </div>
                <div className="bg-white dark:bg-[#1d1f25] p-6 rounded-2xl border border-gray-100 dark:border-[#262831] shadow-sm dark:shadow-none flex flex-col items-center justify-center text-center transition-colors min-h-[130px]">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-none">
                    45
                  </span>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-500 dark:text-[#6e7687] uppercase tracking-widest">
                    Applicants
                  </span>
                </div>
                <div className="bg-white dark:bg-[#1d1f25] p-6 rounded-2xl border border-gray-100 dark:border-[#262831] shadow-sm dark:shadow-none flex flex-col items-center justify-center text-center transition-colors min-h-[130px]">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-none">
                    3
                  </span>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-500 dark:text-[#6e7687] uppercase tracking-widest">
                    Hired
                  </span>
                </div>
                <div className="bg-white dark:bg-[#1d1f25] p-6 rounded-2xl border border-gray-100 dark:border-[#262831] shadow-sm dark:shadow-none flex flex-col items-center justify-center text-center transition-colors min-h-[130px]">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-none">
                    {company.employeeCount || '201-500'}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-500 dark:text-[#6e7687] uppercase tracking-widest">
                    Team Size
                  </span>
                </div>
              </div>{' '}
            </div>

            {/* Right Column: Company Details */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-[#2a2d35]/30 p-5 md:p-7 rounded-2xl border border-gray-100 dark:border-[#2a2d35] shadow-sm transition-colors">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-5 md:mb-6 flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4 text-gray-400" />
                  Company Details
                </h3>

                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-center md:items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 dark:bg-[#3b3e46] flex items-center justify-center shrink-0 border border-gray-100 dark:border-[#464a54] transition-colors">
                      <MapPin className="w-5 h-5 md:w-5 md:h-5 text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                        Location
                      </p>
                      <p className="text-sm md:text-[15px] text-gray-800 dark:text-gray-200 font-medium truncate">
                        {company.location || 'San Francisco, CA'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center md:items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 dark:bg-[#3b3e46] flex items-center justify-center shrink-0 border border-gray-100 dark:border-[#464a54] transition-colors">
                      <Users className="w-5 h-5 md:w-5 md:h-5 text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                        Team Size
                      </p>
                      <p className="text-sm md:text-[15px] text-gray-800 dark:text-gray-200 font-medium truncate">
                        {company.employeeCount || '10-50'} Employees
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center md:items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 dark:bg-[#3b3e46] flex items-center justify-center shrink-0 border border-gray-100 dark:border-[#464a54] transition-colors">
                      <Globe className="w-5 h-5 md:w-5 md:h-5 text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                        Website
                      </p>
                      <a
                        href={company.website || '#'}
                        className="text-sm md:text-[15px] text-indigo-600 dark:text-indigo-400 hover:underline font-medium block truncate"
                      >
                        {company.website ||
                          `www.${company.name?.toLowerCase().replace(/\s+/g, '')}.com`}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center md:items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 dark:bg-[#3b3e46] flex items-center justify-center shrink-0 border border-gray-100 dark:border-[#464a54] transition-colors">
                      <Mail className="w-5 h-5 md:w-5 md:h-5 text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                        Contact Email
                      </p>
                      <a
                        href={`mailto:${company.email || 'contact@company.com'}`}
                        className="text-sm md:text-[15px] text-gray-800 dark:text-gray-200 hover:text-indigo-500 font-medium transition-colors block truncate"
                      >
                        {company.email || 'contact@company.com'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCompanyRegister;
