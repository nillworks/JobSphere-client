'use client';

import { useState } from 'react';
import {
  Briefcase,
  Mail,
  Phone,
  User,
  Link as LinkIcon,
  FileText,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import { toast } from 'sonner';
import postApplication from '@/lib/Action/postApplication';

const JobsApplyFrom = ({ singleJobsData, user }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formEntriesData = Object.fromEntries(new FormData(form));

      const newApplication = {
        jobId: singleJobsData?._id,
        jobTitle: singleJobsData?.jobTitle,
        applicantId: user?.id,
        ...formEntriesData,
      };

      const res = await postApplication(newApplication);
      console.log(res);
      if (res.insertedId) {
        toast.success('Application submitted successfully!');
        form.reset();
      }
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-[#1d242d] dark:bg-[#11151a]">
        {/* Header */}
        <div className="relative border-b border-slate-200 bg-slate-50/50 px-8 py-8 dark:border-[#1d242d] dark:bg-[#11151a]/50">
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#ff9a86] to-[#bf7465]" />
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Apply for {singleJobsData?.jobTitle || 'this position'}
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-[#a3adbb]">
            {singleJobsData?.companyName &&
              `at ${singleJobsData.companyName} • `}
            Please fill out the form below to submit your application.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            {/* Job Info (Read Only) */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Job Title
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Briefcase className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={singleJobsData?.jobTitle || ''}
                  disabled
                  className="block w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-slate-500 focus:border-[#ff9a86] focus:outline-none focus:ring-1 focus:ring-[#ff9a86] dark:border-[#1d242d] dark:bg-[#1a2028] dark:text-[#546881] sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    defaultValue={user?.name || ''}
                    required
                    className="block w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-slate-900 transition-colors focus:border-[#ff9a86] focus:outline-none focus:ring-1 focus:ring-[#ff9a86] dark:border-[#1d242d] dark:bg-[#0d1014] dark:text-white dark:focus:border-[#ff9a86] sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Primary Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="block w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-slate-900 transition-colors focus:border-[#ff9a86] focus:outline-none focus:ring-1 focus:ring-[#ff9a86] dark:border-[#1d242d] dark:bg-[#0d1014] dark:text-white dark:focus:border-[#ff9a86] sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <div className="relative flex items-center">
                    <select
                      name="countryCode"
                      defaultValue="+880"
                      className="h-full cursor-pointer appearance-none rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 py-3 pl-4 pr-8 text-slate-700 focus:border-[#ff9a86] focus:outline-none focus:ring-1 focus:ring-[#ff9a86] dark:border-[#1d242d] dark:bg-[#1a2028] dark:text-[#546881] sm:text-sm"
                    >
                      <option value="+1">US (+1)</option>
                      <option value="+44">UK (+44)</option>
                      <option value="+880">BD (+880)</option>
                      <option value="+91">IN (+91)</option>
                      <option value="+92">PK (+92)</option>
                      <option value="+94">LK (+94)</option>
                      <option value="+61">AU (+61)</option>
                      <option value="+86">CN (+86)</option>
                      <option value="+971">UAE (+971)</option>
                    </select>
                    <div className="pointer-events-none absolute right-2 flex items-center">
                      <svg
                        className="h-4 w-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
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
                  <div className="relative flex-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="block w-full rounded-r-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-slate-900 transition-colors focus:border-[#ff9a86] focus:outline-none focus:ring-1 focus:ring-[#ff9a86] dark:border-[#1d242d] dark:bg-[#0d1014] dark:text-white dark:focus:border-[#ff9a86] sm:text-sm"
                      placeholder="1234567890"
                    />
                  </div>
                </div>
              </div>

              {/* Resume Link */}
              <div>
                <label
                  htmlFor="resumeLink"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Resume/Portfolio Link <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <LinkIcon className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="url"
                    id="resumeLink"
                    name="resumeLink"
                    required
                    className="block w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-slate-900 transition-colors focus:border-[#ff9a86] focus:outline-none focus:ring-1 focus:ring-[#ff9a86] dark:border-[#1d242d] dark:bg-[#0d1014] dark:text-white dark:focus:border-[#ff9a86] sm:text-sm"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label
                htmlFor="coverLetter"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Cover Letter
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute top-3 left-3">
                  <FileText className="h-5 w-5 text-slate-400" />
                </div>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={5}
                  className="block w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-slate-900 transition-colors focus:border-[#ff9a86] focus:outline-none focus:ring-1 focus:ring-[#ff9a86] dark:border-[#1d242d] dark:bg-[#0d1014] dark:text-white dark:focus:border-[#ff9a86] sm:text-sm"
                  placeholder="Why are you a great fit for this role?"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative cursor-pointer flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#ff9a86] px-8 py-4 font-bold text-white transition-all hover:bg-[#ff8a73] hover:shadow-[0_0_20px_rgba(255,154,134,0.4)] disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobsApplyFrom;
