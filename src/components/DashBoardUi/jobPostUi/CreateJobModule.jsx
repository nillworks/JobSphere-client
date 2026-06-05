'use client';

import CrateJob from '@/lib/Action/CrateJob';
import { useSession } from '@/lib/auth-client';
import { X, Briefcase, FileText } from 'lucide-react';
import { toast } from 'sonner';

const CreateJobModule = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { data: session } = useSession();

  const user = session?.user;

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Simulate creating a new job and passing it back to parent
    const newJob = {
      ...data,
      userId: user?.id,
      isRemote: data.isRemote === 'on' ? true : false,
    };

    const res = await CrateJob(newJob);

    if (res.acknowledged) {
      toast.success('Job Created', {
        description: 'The job has been created successfully.',
      });
    }

    if (!res.acknowledged) {
      toast.error('Creation Failed', {
        description: 'Unable to create the job. Please try again.',
      });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div className="w-full max-w-4xl bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl border border-slate-200 dark:border-[#333] overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-[#333]">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Create New Job Post
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Fill in the details to publish a new job opening.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-[#2a2a2a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          <form
            id="create-job-form"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Section 1: Job Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-[#333]">
                <Briefcase className="w-5 h-5 text-slate-400" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Job Info
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div className="space-y-2">
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="e.g. Senior Frontend Engineer"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm"
                    required
                  />
                </div>

                {/* Job Category */}
                <div className="space-y-2">
                  <label
                    htmlFor="jobCategory"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Job Category
                  </label>
                  <div className="relative">
                    <select
                      id="jobCategory"
                      name="jobCategory"
                      defaultValue=""
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>
                        Select category...
                      </option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Design">Design</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Job Type */}
                <div className="space-y-2">
                  <label
                    htmlFor="jobType"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Job Type
                  </label>
                  <div className="relative">
                    <select
                      id="jobType"
                      name="jobType"
                      defaultValue=""
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>
                        Select type...
                      </option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Application Deadline */}
                <div className="space-y-2">
                  <label
                    htmlFor="deadline"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm"
                    required
                  />
                </div>

                {/* Salary Range */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="currency"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Currency
                    </label>
                    <div className="relative">
                      <select
                        id="currency"
                        name="currency"
                        defaultValue="USD"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm appearance-none cursor-pointer"
                      >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                        <option value="BDT">BDT (৳)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="minSalary"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Min Salary
                    </label>
                    <input
                      type="number"
                      id="minSalary"
                      name="minSalary"
                      placeholder="e.g. 50000"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="maxSalary"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Max Salary
                    </label>
                    <input
                      type="number"
                      id="maxSalary"
                      name="maxSalary"
                      placeholder="e.g. 80000"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Location / Remote */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                  <div className="space-y-2 pb-2.5">
                    <label className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="isRemote"
                        className="w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900 dark:bg-[#222] dark:border-[#444] cursor-pointer"
                      />
                      <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        This is a remote position
                      </span>
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="e.g. New York"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="e.g. USA"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Job Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-[#333]">
                <FileText className="w-5 h-5 text-slate-400" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Job Description
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="responsibilities"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Responsibilities
                  </label>
                  <textarea
                    id="responsibilities"
                    name="responsibilities"
                    rows={4}
                    placeholder="What will this role entail?"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    placeholder="Skills, experience, and qualifications needed..."
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="benefits"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Benefits (Optional)
                  </label>
                  <textarea
                    id="benefits"
                    name="benefits"
                    rows={3}
                    placeholder="Health insurance, PTO, equity..."
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent dark:bg-[#222] dark:border-[#333] dark:text-white dark:focus:ring-white transition-all text-sm resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Section 3: Company */}
            <div className="p-4 bg-slate-50 dark:bg-[#222] rounded-lg border border-slate-200 dark:border-[#333]">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Posting as:{' '}
                <strong className="text-slate-900 dark:text-white">
                  Acme Corp
                </strong>{' '}
                (Approved Company)
              </p>
              <input type="hidden" name="companyId" value="acme-corp" />
              <input type="hidden" name="status" value="active" />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 p-5 border-t border-slate-200 dark:border-[#333] bg-slate-50/50 dark:bg-[#1a1a1a]">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#222] border border-slate-300 dark:border-[#444] rounded-lg hover:bg-slate-50 dark:hover:bg-[#2a2a2a] transition-colors shadow-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="create-job-form"
                className="px-5 py-2.5 cursor-pointer text-sm font-bold text-white dark:text-slate-900 bg-slate-900 dark:bg-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-sm active:scale-95"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModule;
