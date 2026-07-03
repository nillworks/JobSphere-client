'use client';
import {
  MapPin,
  Building2,
  Globe,
  CircleDollarSign,
  Briefcase,
  Calendar,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

const JobsDetailsPage = ({ singleJob }) => {
  if (!singleJob) {
    return (
      <div className="flex  min-h-[400px] items-center justify-center">
        <p className="text-lg text-slate-500">Job details not found.</p>
      </div>
    );
  }

  const {
    jobTitle,
    companyName,
    responsibilities,
    requirements,
    city,
    country,
    jobType,
    isRemote,
    minSalary,
    maxSalary,
    currency,
    createdAt,
    _id,
  } = singleJob;

  const displayLocation =
    `${city || ''}${city && country ? ', ' : ''}${country || ''}` ||
    'Location not specified';
  const displaySalary =
    minSalary && maxSalary
      ? `${currency || '$'} ${minSalary} - ${maxSalary}`
      : 'Salary Negotiable';

  return (
    <div className="container mx-auto pt-20 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-[#11151a]/80 md:p-12">
        <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-[#ff9a86] via-[#ff7a59] to-[#bf7465]" />

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff9a86]/30 bg-[#fff5f3] px-3 py-1 text-sm font-medium text-[#ff9a86] dark:bg-[#ff9a86]/10">
                {isRemote ? (
                  <Globe className="h-4 w-4" />
                ) : (
                  <Building2 className="h-4 w-4" />
                )}
                {jobType || 'Full-time'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 dark:text-[#546881]">
                <Clock className="h-4 w-4" />
                Posted recently
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
              {jobTitle || 'Untitled Role'}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-[#a3adbb]">
              {companyName && (
                <div className="flex items-center gap-1.5 font-medium">
                  <Briefcase className="h-5 w-5" />
                  {companyName}
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <MapPin className="h-5 w-5" />
                {displayLocation}
              </div>
              <div className="flex items-center gap-1.5 text-[#ff9a86]">
                <CircleDollarSign className="h-5 w-5" />
                <span className="font-semibold">{displaySalary}</span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-[200px]">
            <Link
              href={`/jobs/${_id}/apply`}
              className="group relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#ff9a86] to-[#ff7a59] px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,154,134,0.5)] active:scale-95"
            >
              <span className="relative z-10">Apply Now</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-[#ff8a73] to-[#ff6a49] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <button className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-slate-200 bg-transparent px-8 py-4 font-semibold text-slate-600 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm dark:border-[#1d242d] dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-[#1a2028]">
              Save for later
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        {/* Main Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* About the role */}
          {responsibilities && (
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-md dark:border-[#1d242d] dark:bg-[#11151a] dark:hover:border-slate-700">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                <span className="h-6 w-2 rounded-full bg-[#ff9a86]" />
                Role & Responsibilities
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-[#a3adbb]">
                <p className="whitespace-pre-wrap leading-relaxed">
                  {responsibilities}
                </p>
              </div>
            </div>
          )}

          {/* Requirements */}
          {requirements && (
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-md dark:border-[#1d242d] dark:bg-[#11151a] dark:hover:border-slate-700">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                <span className="h-6 w-2 rounded-full bg-[#ff9a86]" />
                Requirements
              </h2>
              <ul className="space-y-4">
                {requirements.split('\n').map(
                  (req, i) =>
                    req.trim() && (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600 dark:text-[#a3adbb]"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff9a86]" />
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ),
                )}
              </ul>
            </div>
          )}

          {/* Fallback description if no requirements/responsibilities */}
          {!responsibilities && !requirements && singleJob.description && (
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-md dark:border-[#1d242d] dark:bg-[#11151a] dark:hover:border-slate-700">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                <span className="h-6 w-2 rounded-full bg-[#ff9a86]" />
                Job Description
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-[#a3adbb]">
                <p className="whitespace-pre-wrap leading-relaxed">
                  {singleJob.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-[#1d242d] dark:bg-[#11151a] dark:hover:border-slate-700">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <span className="h-5 w-1.5 rounded-full bg-[#ff9a86]" />
              Job Summary
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff5f3] text-[#ff9a86] dark:bg-[#ff9a86]/10">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-[#546881]">
                    Job Type
                  </p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {jobType || 'Full-time'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff5f3] text-[#ff9a86] dark:bg-[#ff9a86]/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-[#546881]">
                    Location
                  </p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {displayLocation}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff5f3] text-[#ff9a86] dark:bg-[#ff9a86]/10">
                  <CircleDollarSign className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-[#546881]">
                    Salary
                  </p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {displaySalary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetailsPage;
