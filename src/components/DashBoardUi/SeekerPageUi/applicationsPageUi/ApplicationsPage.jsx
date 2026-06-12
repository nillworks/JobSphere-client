import React from 'react';
import MyApplications from './MyApplications';
import ApplicationsList from './ApplicationsList';
import getApplication from '@/lib/AllGetApi/getApplication';
import getUserSession from '@/lib/Action/getUserSession';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StatCard = ({ title, value, valueColor = "text-gray-900 dark:text-white" }) => (
  <div className="bg-white dark:bg-[#23252b] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-transparent flex flex-col justify-center transition-colors">
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{title}</p>
    <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
  </div>
);

const ApplicationsPage = async () => {
  const user = await getUserSession();

  let applications = [];
  try {
    const res = await getApplication(user?.id);
    if (Array.isArray(res)) applications = res;
  } catch (error) {
    console.error("Failed to fetch applications:", error);
  }

  // Calculate stats
  const totalApplied = applications.length;
  const shortlisted = applications.filter(app => {
    const s = (app?.status || '').toLowerCase();
    return s.includes('shortlisted') || s.includes('interview') || s.includes('offered');
  }).length;
  const interviews = applications.filter(app => (app?.status || '').toLowerCase().includes('interview')).length;
  const successRate = totalApplied > 0 ? Math.round((shortlisted / totalApplied) * 100) : 0;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-[#1a1c23] p-4 md:p-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <MyApplications />

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Applied" value={totalApplied || '0'} />
          <StatCard title="Shortlisted" value={shortlisted || '0'} />
          <StatCard title="Interviews" value={interviews || '0'} />
          <StatCard title="Success Rate" value={`${successRate}%`} valueColor="text-green-600 dark:text-green-500" />
        </div>

        {/* Table Section */}
        <div className="bg-white dark:bg-[#23252b] rounded-xl shadow-sm border border-gray-100 dark:border-transparent overflow-hidden transition-colors">
          
          {/* Table Header */}
          <div className="hidden md:flex p-5 border-b border-gray-100 dark:border-[#2a2d35] text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50/50 dark:bg-[#2a2d35]/30">
            <div className="flex-1 min-w-[200px]">Job Title</div>
            <div className="w-48 pr-4">Company</div>
            <div className="w-36 pr-4">Applied</div>
            <div className="w-32">Status</div>
            <div className="w-20 text-right">Action</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100 dark:divide-[#2a2d35]">
            {applications.length > 0 ? (
              applications.map((application, index) => (
                <ApplicationsList key={application?._id || application?.id || index} application={application} />
              ))
            ) : (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                No applications found yet. Start applying!
              </div>
            )}
          </div>

          {/* Pagination */}
          {applications.length > 0 && (
            <div className="p-4 border-t border-gray-100 dark:border-[#2a2d35] flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-4">
              <div>
                Showing 1-{Math.min(5, applications.length)} of {applications.length} applications
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 hover:text-gray-900 dark:hover:text-white transition-colors disabled:opacity-50 disabled:hover:text-gray-500" disabled>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-[#2a2d35] transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-[#2a2d35] transition-colors">3</button>
                <button className="p-1.5 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
