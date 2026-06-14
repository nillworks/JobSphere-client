'use client';

import React, { useState } from 'react';
import {
  Eye,
  Edit2,
  Trash2,
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
} from 'lucide-react';

const StatusBadge = ({ status = 'active' }) => {
  const normalizedStatus = status.toLocaleLowerCase();
  const isActive = normalizedStatus === 'active';
  const isDraft = normalizedStatus === 'rejected';
  const isClosed = normalizedStatus === 'CLOSED';

  const styles = isActive
    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
    : isDraft
      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
      : isClosed
        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
        : 'bg-slate-100 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400 border-slate-200 dark:border-slate-500/20';

  const dot = isActive
    ? 'bg-emerald-500'
    : isDraft
      ? 'bg-amber-500'
      : isClosed
        ? 'bg-rose-500'
        : 'bg-slate-400';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border ${styles}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {status || 'ACTIVE'}
    </span>
  );
};

const JobListShow = ({ jobsListData = [] }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  console.log(jobsListData);

  const toggleCard = id => {
    setExpandedCard(prev => (prev === id ? null : id));
  };

  /* ─── Empty State ─── */
  if (jobsListData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#1a1e24] dark:to-[#111518] rounded-3xl flex items-center justify-center border border-slate-200 dark:border-[#1d242d] shadow-inner">
            <Briefcase className="w-10 h-10 text-slate-300 dark:text-slate-600" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-xs font-black">0</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
          No jobs posted yet
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
          Create your first job posting to attract the best talent.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {/* ══════════════════════════════════════
          DESKTOP TABLE (Medium screens and up)
      ══════════════════════════════════════ */}
      <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-200 dark:border-[#1d242d] bg-white dark:bg-[#111518] shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap min-w-[800px]">
            <thead>
              <tr className="bg-gradient-to-r from-slate-50 to-slate-50/60 dark:from-[#0d1117] dark:to-[#0d1117]/80 border-b border-slate-200 dark:border-[#1d242d]">
                <th className="px-5 py-3.5 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Job Role
                </th>
                <th className="px-5 py-3.5 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Location
                </th>
                <th className="px-5 py-3.5 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Salary
                </th>
                <th className="px-5 py-3.5 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Status
                </th>
                <th className="px-5 py-3.5 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-[#1d242d]">
              {jobsListData.map(job => (
                <tr
                  key={job._id || job.id}
                  className="group relative hover:bg-indigo-50/30 dark:hover:bg-indigo-500/[0.03] transition-colors duration-150"
                >
                  <td className="px-5 py-4 relative">
                    {/* Accent bar on hover */}
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-indigo-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center rounded-r-full" />
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-11 h-11 rounded-xl border border-slate-200 dark:border-[#1d242d] bg-white dark:bg-[#1a1e24] flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                        <Briefcase className="w-5 h-5 text-indigo-400 dark:text-indigo-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {job.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                            {job.jobType || job.workType || 'Full-time'}
                          </p>
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                            {job.experienceLevel || 'Mid-Level'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate max-w-[150px] text-[13px]">
                        {job.country || '—'}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-[13px] text-slate-600 dark:text-slate-400">
                      <DollarSign className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      {job.minSalary && job.maxSalary
                        ? `${job.minSalary} - ${job.maxSalary} ${job.currency}`
                        : 'Negotiable'}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={job.status || 'approved'} />
                  </td>
                  <td className="px-5 py-4">
                    {/* Actions always visible on Desktop */}
                    <div className="flex items-center justify-end gap-2">
                      <button
                        title="View"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 border border-indigo-100 dark:border-indigo-500/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View
                      </button>
                      <button
                        title="Edit"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-emerald-100 dark:border-emerald-500/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        Edit
                      </button>
                      <button
                        title="Delete"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 border border-rose-100 dark:border-rose-500/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Footer info */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-100 dark:border-[#1d242d] bg-slate-50/40 dark:bg-[#0d1117]/60">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {jobsListData.length}
            </span>{' '}
            {jobsListData.length === 1 ? 'job post' : 'job posts'} active
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE CARD VIEW (Small screens only)
      ══════════════════════════════════════ */}
      <div className="flex flex-col gap-3 md:hidden">
        {jobsListData.map(job => {
          const isOpen = expandedCard === (job._id || job.id);
          return (
            <div
              key={job._id || job.id}
              className={`bg-white dark:bg-[#111518] border rounded-2xl overflow-hidden shadow-sm transition-all duration-200 ${
                isOpen
                  ? 'border-indigo-300 dark:border-indigo-500/40 shadow-indigo-100 dark:shadow-indigo-500/10'
                  : 'border-slate-200 dark:border-[#1d242d]'
              }`}
            >
              {/* Card Header — tap to expand actions */}
              <button
                onClick={() => toggleCard(job._id || job.id)}
                className="w-full text-left p-4 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-[#1d242d] bg-white dark:bg-[#1a1e24] flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                    <Briefcase className="w-5 h-5 text-indigo-400 dark:text-indigo-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                      {job.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {job.jobType || job.workType || 'Full-time'}
                      </p>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {job.experienceLevel || 'Mid-Level'}
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={job.status || 'active'} />
                </div>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                  {job.location && (
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                  )}
                  {job.salary && (
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <DollarSign className="w-3 h-3" /> {job.salary}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-[11px] text-indigo-500 dark:text-indigo-400 font-medium">
                  {isOpen ? 'Tap to hide actions ↑' : 'Tap to show actions ↓'}
                </p>
              </button>

              {/* Expandable Action Panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-slate-100 dark:border-[#1d242d] px-4 py-3 bg-slate-50/60 dark:bg-[#0d1117]/50 flex items-center gap-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 border border-indigo-100 dark:border-indigo-500/20 transition-colors active:scale-95">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-emerald-100 dark:border-emerald-500/20 transition-colors active:scale-95">
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 border border-rose-100 dark:border-rose-500/20 transition-colors active:scale-95">
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobListShow;
