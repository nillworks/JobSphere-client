'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import JobCard from '../../Shared/JobCard';
import CreateJobModule from './CreateJobModule';
import JobListShow from './JobListShow';

const initialJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    description:
      'We are looking for an experienced frontend developer with deep knowledge of React and Next.js to join our core product team.',
    location: 'Remote',
    workType: 'Full-time',
    workTypeVariant: 'globe',
    salary: '$120,000 - $150,000',
  },
  {
    id: 2,
    title: 'Product Designer',
    description:
      'Join our design team to create beautiful, intuitive, and accessible user interfaces for our enterprise customers.',
    location: 'New York, USA',
    workType: 'Full-time',
    workTypeVariant: 'building',
    salary: '$90,000 - $130,000',
  },
];

const RecruiterAllJobPost = ({ recruiterJobData, company }) => {
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);

  return (
    <section className="w-full px-4 py-3 pt-20 h-full flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Job Posts
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage your active job postings and attract top talent.
          </p>
        </div>
        <button
          onClick={() => setIsCreateJobOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm cursor-pointer active:scale-95 flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          Create Job Post
        </button>
      </div>

      {/* Jobs Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {initialJobs.map(job => (
          <JobCard
            key={job.id}
            title={job.title}
            description={job.description}
            location={job.location}
            workType={job.workType}
            workTypeVariant={job.workTypeVariant}
            salary={job.salary}
          />
        ))}
      </div> */}

      {/* Job List */}
      <div>
        <JobListShow jobsListData={recruiterJobData} />
      </div>

      <CreateJobModule
        isOpen={isCreateJobOpen}
        company={company}
        onClose={() => setIsCreateJobOpen(false)}
      />
    </section>
  );
};

export default RecruiterAllJobPost;
