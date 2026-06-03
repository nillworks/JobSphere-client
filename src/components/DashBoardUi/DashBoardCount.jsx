import { FileText, Users, Zap, CheckCircle } from 'lucide-react';

const stats = [
  { title: 'Total Job Posts', value: '48', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Total Applicants', value: '1,284', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { title: 'Active Jobs', value: '18', icon: Zap, color: 'text-[#ff9a86]', bg: 'bg-[#ff9a86]/10' },
  { title: 'Jobs Closed', value: '32', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
];

const DashBoardCount = () => {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative bg-white dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] p-6 rounded-2xl overflow-hidden hover:border-[#ff9a86]/50 hover:shadow-lg hover:shadow-[#ff9a86]/5 transition-all duration-300 group cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-100 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
            <div className="relative z-10 flex flex-col h-full">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="mt-auto">
                <p className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </p>
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wide uppercase">
                  {stat.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashBoardCount;
