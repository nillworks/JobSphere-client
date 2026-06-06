'use client';
import React from 'react';
import { Filter as FilterIcon } from 'lucide-react';

const Filter = ({ filterIndustry, setFilterIndustry, companies = [] }) => {
  // Extract unique industries from the companies list
  const uniqueIndustries = Array.from(
    new Set(
      Array.isArray(companies) 
        ? companies.map(c => typeof c.industry === 'string' ? c.industry : null).filter(Boolean)
        : []
    )
  );

  return (
    <div className="relative w-full sm:w-48">
      <FilterIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <select
        value={filterIndustry}
        onChange={(e) => setFilterIndustry(e.target.value)}
        className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9a86]/20 focus:border-[#ff9a86] transition-all text-slate-900 dark:text-slate-200 shadow-sm appearance-none cursor-pointer"
      >
        <option value="">All Industries</option>
        {uniqueIndustries.map(industry => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
      </select>
      {/* Custom select arrow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Filter;
