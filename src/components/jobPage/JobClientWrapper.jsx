'use client';

import React, { useState, useMemo } from 'react';
import JobCard from '../Shared/JobCard';
import JobSearch from './JobSearch';
import JobFilter from './JobFilter';

const JobClientWrapper = ({ jobs = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterRemote, setFilterRemote] = useState(''); // '' means all, 'remote' means remote, 'onsite' means on-site

  const filteredJobs = useMemo(() => {
    if (!Array.isArray(jobs)) return [];
    
    return jobs.filter(job => {
      // Safe checks
      const title = typeof job.jobTitle === 'string' ? job.jobTitle.toLowerCase() : '';
      const city = typeof job.city === 'string' ? job.city.toLowerCase() : '';
      const country = typeof job.country === 'string' ? job.country.toLowerCase() : '';
      const category = typeof job.jobCategory === 'string' ? job.jobCategory : '';
      const type = typeof job.jobType === 'string' ? job.jobType : '';
      const isRemote = job.isRemote === true;
      
      const searchLower = searchTerm.toLowerCase();
      const matchSearch = title.includes(searchLower) || city.includes(searchLower) || country.includes(searchLower);
      
      const matchCategory = filterCategory ? category === filterCategory : true;
      const matchType = filterType ? type === filterType : true;
      
      let matchRemote = true;
      if (filterRemote === 'remote') matchRemote = isRemote;
      if (filterRemote === 'onsite') matchRemote = !isRemote;
      
      return matchSearch && matchCategory && matchType && matchRemote;
    });
  }, [jobs, searchTerm, filterCategory, filterType, filterRemote]);

  return (
    <div className="w-full">
      {/* Header section with Filter and Search */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Explore Jobs
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Find the perfect role that matches your skills and career goals.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-3 w-full xl:w-auto">
          <JobSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <JobFilter 
            jobs={jobs}
            filterCategory={filterCategory} 
            setFilterCategory={setFilterCategory}
            filterType={filterType}
            setFilterType={setFilterType}
            filterRemote={filterRemote}
            setFilterRemote={setFilterRemote}
          />
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map(job => (
          <JobCard key={job._id || Math.random().toString()} job={job} />
        ))}
      </div>
      
      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="w-full py-20 text-center flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-slate-100 dark:bg-[#11151a] rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">🔍</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No jobs found</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            We couldn't find any jobs matching your search criteria. Try adjusting your filters or search term.
          </p>
          <button 
            onClick={() => { 
              setSearchTerm(''); 
              setFilterCategory(''); 
              setFilterType('');
              setFilterRemote('');
            }}
            className="mt-6 px-6 py-2.5 bg-[#ff9a86]/10 text-[#ff9a86] hover:bg-[#ff9a86]/20 font-semibold rounded-xl transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default JobClientWrapper;
