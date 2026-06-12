import React from 'react';
import { Briefcase } from 'lucide-react';

const getStatusStyles = (status) => {
  const s = status?.toLowerCase() || '';
  if (s.includes('applied')) return 'border-gray-300 text-gray-700 dark:border-gray-500 dark:text-gray-300';
  if (s.includes('review')) return 'border-yellow-500 text-yellow-600 dark:border-yellow-500 dark:text-yellow-500';
  if (s.includes('shortlisted')) return 'border-green-500 text-green-600 dark:border-green-500 dark:text-green-500';
  if (s.includes('rejected')) return 'border-red-500 text-red-600 dark:border-red-500 dark:text-red-500';
  if (s.includes('offered')) return 'border-gray-300 text-gray-700 dark:border-gray-400 dark:text-gray-200';
  return 'border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-400';
};

const formatTimeAgo = (dateString) => {
  if (!dateString) return 'Unknown';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Unknown';
  
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
  return `${Math.floor(diffInSeconds / 2592000)} months ago`;
};

const ApplicationsList = ({ application }) => {
  // Extracting data safely assuming a typical structure or falling back to defaults if data is missing
  const title = application?.jobId?.title || application?.jobTitle || application?.title || 'Unknown Position';
  const company = application?.jobId?.company?.name || application?.companyName || application?.company || 'Unknown Company';
  const type = application?.jobId?.jobType || application?.type || 'Full-time';
  const location = application?.jobId?.location || application?.location || 'Remote';
  const status = application?.status || 'Applied';
  const appliedAt = application?.createdAt || application?.appliedAt || new Date().toISOString();

  return (
    <div className="flex flex-col md:flex-row p-5 items-start md:items-center hover:bg-gray-50 dark:hover:bg-[#2a2d35]/50 transition-colors group">
      
      {/* Job Title Col */}
      <div className="flex-1 min-w-[200px] flex items-center gap-4 mb-3 md:mb-0">
        <div className="w-10 h-10 rounded-md bg-gray-100 dark:bg-[#3b3e46] flex items-center justify-center shrink-0 text-gray-500 dark:text-gray-400 group-hover:bg-white dark:group-hover:bg-[#464a54] transition-colors">
          <Briefcase className="w-5 h-5" />
        </div>
        <div className="min-w-0 pr-4">
          <h3 className="text-gray-900 dark:text-gray-100 font-medium truncate text-base">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-0.5">
            {type} • {location}
          </p>
        </div>
      </div>

      {/* Company Col */}
      <div className="w-full md:w-48 text-sm text-gray-700 dark:text-gray-300 mb-2 md:mb-0 pr-4">
        <span className="md:hidden w-24 inline-block text-gray-500">Company:</span>
        <span className="truncate block md:inline">{company}</span>
      </div>

      {/* Applied Time Col */}
      <div className="w-full md:w-36 text-sm text-gray-700 dark:text-gray-300 mb-2 md:mb-0 pr-4">
        <span className="md:hidden w-24 inline-block text-gray-500">Applied:</span>
        <span className="block md:inline">{formatTimeAgo(appliedAt)}</span>
      </div>

      {/* Status Col */}
      <div className="w-full md:w-32 mb-3 md:mb-0">
        <span className="md:hidden w-24 inline-block text-gray-500 text-sm">Status:</span>
        <span className={`px-3 py-1 rounded-full text-[11px] font-medium border ${getStatusStyles(status)} bg-transparent uppercase tracking-wider`}>
          {status}
        </span>
      </div>

      {/* Action Col */}
      <div className="w-full md:w-20 md:text-right mt-2 md:mt-0">
        <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          Details
        </button>
      </div>

    </div>
  );
};

export default ApplicationsList;
