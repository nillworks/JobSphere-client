import React from 'react';
import { Download } from 'lucide-react';

const MyApplications = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
        My Applications
      </h1>
      
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex bg-gray-100 dark:bg-[#2a2d35] rounded-lg p-1">
          <button className="px-5 py-2 rounded-md bg-white dark:bg-[#3b3e46] text-gray-900 dark:text-white shadow-sm text-sm font-medium transition-colors">
            Active
          </button>
          <button className="px-5 py-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
            Archived
          </button>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors">
          <Download className="w-4 h-4" />
          Export PDF
        </button>
      </div>
    </div>
  );
};

export default MyApplications;
