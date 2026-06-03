const companies = [
  {
    name: 'Google Inc.',
    sector: 'Technology • Mountain View',
    jobs: 24,
    logo: 'G',
  },
  {
    name: 'Meta Platforms',
    sector: 'Social Media • Menlo Park',
    jobs: 18,
    logo: 'M',
  },
  { name: 'Stripe', sector: 'Fintech • San Francisco', jobs: 12, logo: 'S' },
  { name: 'Tesla', sector: 'Automotive • Austin', jobs: 31, logo: 'T' },
];

const MyTopCompanies = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            My Top Companies
          </h2>
          <button className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-[#ff9a86] dark:hover:text-[#ff9a86] transition-colors">
            View all
          </button>
        </div>
        <div className="bg-white dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] rounded-2xl p-6 shadow-sm">
          <div className="space-y-5">
            {companies.map((company, i) => (
              <div
                key={i}
                className="flex items-center justify-between group cursor-pointer p-3 -mx-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#1d242d] border border-slate-200 dark:border-[#2a3441] flex items-center justify-center font-bold text-xl text-slate-400 dark:text-slate-500 group-hover:border-[#ff9a86]/50 group-hover:text-[#ff9a86] group-hover:bg-[#ff9a86]/10 transition-all flex-shrink-0">
                    {company.logo}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 dark:text-slate-200 group-hover:text-[#ff9a86] transition-colors truncate">
                      {company.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                      {company.sector}
                    </p>
                  </div>
                </div>
                <div className="text-right pl-4 flex-shrink-0">
                  <p className="font-bold text-slate-900 dark:text-white">
                    {company.jobs}
                  </p>
                  <p className="text-[10px] font-bold text-[#ff9a86] dark:text-[#ff9a86] mt-0.5 tracking-wider">
                    ACTIVE JOBS
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 rounded-xl border border-slate-200 dark:border-[#1d242d] text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1d242d]/50 hover:border-[#ff9a86]/50 hover:text-[#ff9a86] transition-all">
            View All Companies
          </button>
        </div>
      </div>
    </>
  );
};

export default MyTopCompanies;
