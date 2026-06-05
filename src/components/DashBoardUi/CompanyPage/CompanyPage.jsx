'use client';

import { useState } from 'react';
import CompanyCard from './CompanyCard';
import CompanyRegisterModule from './CompanyRegisterModule';
import { Plus } from 'lucide-react';
import CompanyList from './CompanyList';

const CompanyPage = ({ myCompany }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const companies = myCompany || [];

  return (
    <section className="w-full px-4 py-3 py-20 h-full flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            My Companies
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage your registered companies and their verification states.
          </p>
        </div>
        <button
          onClick={() => setIsRegisterOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm cursor-pointer active:scale-95 flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          Register a company
        </button>
      </div>

      {/* Company List */}
      <div>
        <CompanyList companies={companies} />
      </div>

      <CompanyRegisterModule
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </section>
  );
};

export default CompanyPage;
