'use client';
import React from 'react';

const JobFilter = ({ 
  jobs = [], 
  filterCategory, setFilterCategory, 
  filterType, setFilterType, 
  filterRemote, setFilterRemote 
}) => {
  // Extract unique categories and types
  const uniqueCategories = Array.from(
    new Set(
      Array.isArray(jobs) 
        ? jobs.map(j => typeof j.jobCategory === 'string' ? j.jobCategory : null).filter(Boolean)
        : []
    )
  );

  const uniqueTypes = Array.from(
    new Set(
      Array.isArray(jobs) 
        ? jobs.map(j => typeof j.jobType === 'string' ? j.jobType : null).filter(Boolean)
        : []
    )
  );

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {/* Category Filter */}
      <div className="relative w-full sm:w-40 md:w-44">
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="w-full px-4 py-2.5 bg-white dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9a86]/20 focus:border-[#ff9a86] transition-all text-slate-900 dark:text-slate-200 shadow-sm appearance-none cursor-pointer"
        >
          <option value="">All Categories</option>
          {uniqueCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <DropdownArrow />
      </div>

      {/* Type Filter */}
      <div className="relative w-full sm:w-36 md:w-40">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full px-4 py-2.5 bg-white dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9a86]/20 focus:border-[#ff9a86] transition-all text-slate-900 dark:text-slate-200 shadow-sm appearance-none cursor-pointer"
        >
          <option value="">All Types</option>
          {uniqueTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <DropdownArrow />
      </div>

      {/* Remote Filter */}
      <div className="relative w-full sm:w-36 md:w-40">
        <select
          value={filterRemote}
          onChange={(e) => setFilterRemote(e.target.value)}
          className="w-full px-4 py-2.5 bg-white dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9a86]/20 focus:border-[#ff9a86] transition-all text-slate-900 dark:text-slate-200 shadow-sm appearance-none cursor-pointer"
        >
          <option value="">Work Style</option>
          <option value="remote">Remote</option>
          <option value="onsite">On-site</option>
        </select>
        <DropdownArrow />
      </div>
    </div>
  );
};

const DropdownArrow = () => (
  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

export default JobFilter;
