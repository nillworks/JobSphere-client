'use client';
import React from 'react';
import { Search } from 'lucide-react';

const JobSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full lg:w-72 xl:w-80">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        type="text"
        placeholder="Search by job title or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9a86]/20 focus:border-[#ff9a86] transition-all text-slate-900 dark:text-slate-200 placeholder-slate-400 shadow-sm"
      />
    </div>
  );
};

export default JobSearch;
