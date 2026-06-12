import DashBoardCount from '@/components/DashBoardUi/DashBoardCount';
import MyTopCompanies from '@/components/DashBoardUi/MyTopCompanies';
import RecentApplications from '@/components/DashBoardUi/RecentApplications';
import { auth } from '@/lib/auth';
import { Search, Bell } from 'lucide-react';
import { headers } from 'next/headers';

const Recruiter = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="flex flex-col min-h-full">
      {/* Top Navigation */}
      <header className="h-20 px-8 flex items-center justify-between border-b border-slate-200 dark:border-[#1d242d] bg-white dark:bg-[#090b0e] sticky top-0 z-10">
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search applications, jobs, or talent..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9a86]/20 focus:border-[#ff9a86] transition-all text-slate-900 dark:text-slate-200 placeholder-slate-400"
          />
        </div>
        <div className="flex items-center gap-6 ml-4">
          <button className="relative text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white dark:border-[#090b0e] rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-[#1d242d]">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {user?.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                TechFlow Inc.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-[#11151a] flex items-center justify-center overflow-hidden border border-slate-300 dark:border-[#1d242d]">
              <span className="text-slate-600 dark:text-[#ff9a86] font-bold text-lg">
                {user?.name?.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Dashboard */}
      <div className="flex-1 p-8 space-y-8 bg-slate-50 dark:bg-[#090b0e]">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Welcome back, {user?.name}
          </h1>
        </div>

        {/* Stats Grid */}
        <DashBoardCount />

        {/* Bottom Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <RecentApplications />

          {/* My Top Companies */}
          <MyTopCompanies />
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
