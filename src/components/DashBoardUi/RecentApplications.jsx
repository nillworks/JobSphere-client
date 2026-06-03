const applications = [
  {
    name: 'Julianne Moore',
    role: 'Senior Product Designer',
    date: 'Oct 24, 2023',
    experience: '6 years',
    status: 'Interviewing',
    statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    name: 'Robert Downey',
    role: 'Backend Engineer',
    date: 'Oct 23, 2023',
    experience: '4 years',
    status: 'New',
    statusColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    name: 'Emma Stone',
    role: 'Marketing Lead',
    date: 'Oct 22, 2023',
    experience: '8 years',
    status: 'Reviewing',
    statusColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  },
  {
    name: 'Chris Pratt',
    role: 'Product Manager',
    date: 'Oct 21, 2023',
    experience: '5 years',
    status: 'Rejected',
    statusColor: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
  },
];
const RecentApplications = () => {
  return (
    <>
      {/* Recent Applications */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Recent Applications
          </h2>
          <button className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-[#ff9a86] dark:hover:text-[#ff9a86] transition-colors">
            View all
          </button>
        </div>
        <div className="bg-white dark:bg-[#11151a] border border-slate-200 dark:border-[#1d242d] rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-[#1d242d] bg-slate-50/50 dark:bg-[#1a2028]/50">
                  <th className="py-4 px-6 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap">
                    Candidate Name
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap">
                    Role
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap">
                    Date Applied
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap">
                    Experience
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#1d242d]/50">
                {applications.map((app, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors group cursor-pointer"
                  >
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-[#1d242d] flex items-center justify-center flex-shrink-0 border border-slate-300 dark:border-[#2a3441] text-xs font-bold text-slate-500 group-hover:border-[#ff9a86]/30 transition-colors">
                          {app.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-slate-200 group-hover:text-[#ff9a86] transition-colors">
                          {app.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap font-medium">
                      {app.role}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {app.date}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {app.experience}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border shadow-sm ${app.statusColor}`}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentApplications;
