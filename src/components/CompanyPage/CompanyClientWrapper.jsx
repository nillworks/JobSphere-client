'use client';

import React, { useState, useMemo } from 'react';
import CompanyCard from '../DashBoardUi/CompanyPage/CompanyCard';
import SearchTram from './SearchTram';
import Filter from './Filter';

const CompanyClientWrapper = ({ companies = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('');

  const filteredCompanies = useMemo(() => {
    if (!Array.isArray(companies)) return [];
    
    return companies.filter(company => {
      // Safe checks in case of missing or object properties
      const name = typeof company.name === 'string' ? company.name.toLowerCase() : '';
      const location = typeof company.location === 'string' ? company.location.toLowerCase() : '';
      const industry = typeof company.industry === 'string' ? company.industry : '';
      
      const matchSearch = name.includes(searchTerm.toLowerCase()) || location.includes(searchTerm.toLowerCase());
      const matchIndustry = filterIndustry ? industry === filterIndustry : true;
      
      return matchSearch && matchIndustry;
    });
  }, [companies, searchTerm, filterIndustry]);

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Header section with Filter and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Top Companies
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Discover the best companies to work for and find your next career move.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <SearchTram searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter filterIndustry={filterIndustry} setFilterIndustry={setFilterIndustry} companies={companies} />
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCompanies.map(company => (
          <CompanyCard key={company._id} company={company} />
        ))}
      </div>
      
      {/* Empty State */}
      {filteredCompanies.length === 0 && (
        <div className="w-full py-20 text-center flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-slate-100 dark:bg-[#11151a] rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">🔍</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No companies found</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            We couldn't find any companies matching your search criteria. Try adjusting your filters or search term.
          </p>
          <button 
            onClick={() => { setSearchTerm(''); setFilterIndustry(''); }}
            className="mt-6 px-6 py-2.5 bg-[#ff9a86]/10 text-[#ff9a86] hover:bg-[#ff9a86]/20 font-semibold rounded-xl transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CompanyClientWrapper;
