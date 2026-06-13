'use client';

import { useState } from 'react';
import CompanyRegisterModule from './CompanyRegisterModule';
import MyCompanyRegister from './MyCompanyRegister';
import { Store, Plus } from 'lucide-react';

const CompanyPage = ({ myCompany }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const companies = myCompany || [];

  return (
    <section className="w-full h-full min-h-screen flex flex-col bg-white dark:bg-[#0f0f0f] overflow-hidden">
      {companies.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-slate-900 dark:text-white">
          <div className="flex flex-col items-center max-w-md text-center">
            {/* Illustration container */}
            <div className="relative mb-10">
              {/* Dark placeholder card */}
              <div className="w-48 h-48 bg-slate-100 dark:bg-[#1a1a1a] rounded-3xl border border-slate-200 dark:border-[#2a2a2a] flex flex-col p-5 shadow-2xl relative overflow-hidden transition-colors">
                {/* Fake UI lines inside the dark card */}
                <div className="w-10 h-10 bg-slate-200 dark:bg-[#2a2a2a] rounded-lg mb-4"></div>
                <div className="w-full h-3 bg-slate-200 dark:bg-[#2a2a2a] rounded-full mb-3"></div>
                <div className="w-3/4 h-2.5 bg-slate-200 dark:bg-[#2a2a2a] rounded-full mb-3"></div>
                <div className="w-5/6 h-2.5 bg-slate-200 dark:bg-[#2a2a2a] rounded-full"></div>

                {/* Letter placeholder */}
                <div className="absolute bottom-4 right-4 text-slate-300 dark:text-[#333] text-5xl font-serif italic">
                  A<span className="text-2xl">文</span>
                </div>
              </div>
              {/* White circle with building icon */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-indigo-600 dark:bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-[#0f0f0f]">
                <div className="relative">
                  <Store className="w-6 h-6 text-white dark:text-black" />
                  <div className="absolute -bottom-1 -right-2 bg-indigo-600 dark:bg-black rounded-full text-white w-4 h-4 flex items-center justify-center">
                    <Plus className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-3 tracking-tight">
              Company not registered yet
            </h2>
            <p className="text-[15px] text-slate-500 dark:text-gray-400 mb-8 leading-relaxed max-w-[340px]">
              Set up your business profile to start posting high-performance job
              listings and manage your talent loop.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
              >
                Register your company
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-[#1a1a1a] text-slate-700 dark:text-white text-sm font-bold rounded-lg border border-slate-200 dark:border-[#2a2a2a] hover:bg-slate-50 dark:hover:bg-[#222] transition-colors shadow-sm">
                View FAQ
              </button>
            </div>

            <p className="text-xs text-slate-400 dark:text-[#666]">
              Need specialized assistance?{' '}
              <span className="text-slate-600 dark:text-[#999] hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors font-medium">
                Contact our enterprise support team.
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 p-4 md:p-8 w-full bg-slate-50 dark:bg-[#0a0a0a] overflow-y-auto">
          <MyCompanyRegister company={companies[0]} />
        </div>
      )}

      <CompanyRegisterModule
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </section>
  );
};

export default CompanyPage;
