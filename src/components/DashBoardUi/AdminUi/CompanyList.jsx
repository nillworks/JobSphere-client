'use client';
import React, { useState, useEffect } from 'react';
import {
  Filter,
  Plus,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  CheckCircle2,
  Ban,
} from 'lucide-react';
import updateCompany from '@/lib/Action/updateCompany';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const CompanyList = ({ companyAllData }) => {
  // Extract the array correctly if it's wrapped in a response object
  const initialDataArray = Array.isArray(companyAllData)
    ? companyAllData
    : companyAllData?.data || [];

  const [companies, setCompanies] = useState(initialDataArray);
  const router = useRouter();

  useEffect(() => {
    const dataArray = Array.isArray(companyAllData)
      ? companyAllData
      : companyAllData?.data || [];
    setCompanies(dataArray);
  }, [companyAllData]);

  console.log(companyAllData);

  // Calculate stats
  const pendingCount = companies.filter(
    c => c.status?.toLowerCase() === 'pending',
  ).length;
  const approvedCount = companies.filter(
    c => c.status?.toLowerCase() === 'approved',
  ).length;
  const rejectedCount = companies.filter(
    c => c.status?.toLowerCase() === 'rejected',
  ).length;

  const getInitials = name => {
    if (!name) return 'C';
    const words = name.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const updateApprovedStatus = async id => {
    try {
      const res = await updateCompany(id, { status: 'approved' });

      if (res.modifiedCount > 0) {
        toast.success('Company approved successfully!');
        router.refresh();
      } else {
        toast.error('Failed to approve company!');
      }
    } catch (error) {
      toast.error('Something went wrong!');
      console.error(error);
    }
  };

  const updateCompanyRejected = async id => {
    try {
      const res = await updateCompany(id, { status: 'rejected' });

      if (res.modifiedCount > 0) {
        toast.success('Company rejected successfully!');
        router.refresh();
      } else {
        toast.error('Failed to reject company!');
      }
    } catch (error) {
      toast.error('Something went wrong!');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Review and manage corporate entity access requests for the JobSphere
          ecosystem.
        </p>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-[#222] hover:bg-slate-200 dark:hover:bg-[#2a2a2a] text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium transition-colors border border-slate-200 dark:border-[#333]">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          {/* <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" />
            Register New
          </button> */}
        </div>
      </div>

      {/* Table section */}
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-slate-200 dark:border-[#333] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 dark:bg-[#222] border-b border-slate-200 dark:border-[#333] text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-6 py-4 font-medium">Company Name</th>
                <th className="px-6 py-4 font-medium">Location / Website</th>
                <th className="px-6 py-4 font-medium">Industry</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Employees</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-[#333]">
              {companies.map(company => {
                const isApproved = company.status?.toLowerCase() === 'approved';
                const isRejected = company.status?.toLowerCase() === 'rejected';
                const isPending = company.status?.toLowerCase() === 'pending';
                const statusColor = isApproved
                  ? 'bg-green-500'
                  : isRejected
                    ? 'bg-red-500'
                    : 'bg-yellow-500';
                const statusTextColor = isApproved
                  ? 'text-green-600 dark:text-green-500'
                  : isRejected
                    ? 'text-red-600 dark:text-red-500'
                    : 'text-yellow-600 dark:text-yellow-500';
                const compId =
                  company._id?.$oid || company._id || Math.random();

                return (
                  <tr
                    key={compId}
                    className="hover:bg-slate-50 dark:hover:bg-[#222]/50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-slate-100 dark:bg-[#2a2a2a] overflow-hidden flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#444] shrink-0">
                          {company.logo && typeof company.logo === 'string' ? (
                            <img
                              src={company.logo}
                              alt={company.companyName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            getInitials(company.companyName)
                          )}
                        </div>
                        <span
                          className="font-medium text-slate-900 dark:text-white max-w-[200px] truncate"
                          title={company.companyName}
                        >
                          {company.companyName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      <div className="flex flex-col">
                        <span
                          className="truncate max-w-[150px]"
                          title={company.location}
                        >
                          {company.location || 'N/A'}
                        </span>
                        {company.website && (
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-blue-500 hover:underline truncate max-w-[150px]"
                          >
                            {company.website}
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-[#2a2a2a] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-[#444]">
                        {company.industry || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${statusColor}`}
                        ></div>
                        <span
                          className={`text-sm font-medium capitalize ${statusTextColor}`}
                        >
                          {company.status || 'Pending'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {company.employeeCount || 'N/A'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2 opacity-100">
                        {(isPending || isRejected) && (
                          <button
                            onClick={() =>
                              updateApprovedStatus(compId, company)
                            }
                            className="px-3 py-1.5 text-xs font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/30 hover:bg-green-100 dark:hover:bg-green-900/50 border border-green-200 dark:border-green-900/50 rounded transition-colors cursor-pointer active:scale-95"
                          >
                            Approve
                          </button>
                        )}
                        {(isPending || isApproved) && (
                          <button
                            onClick={() => updateCompanyRejected(compId)}
                            className="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/50 border border-red-200 dark:border-red-900/50 rounded transition-colors cursor-pointer active:scale-95"
                          >
                            Reject
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {companies.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-8 text-center text-slate-500 dark:text-slate-400"
                  >
                    No companies found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {companies.length > 0 && (
          <div className="px-6 py-4 border-t border-slate-200 dark:border-[#333] bg-slate-50 dark:bg-[#222] flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing{' '}
              <span className="font-medium text-slate-900 dark:text-white">
                1-{companies.length}
              </span>{' '}
              of{' '}
              <span className="font-medium text-slate-900 dark:text-white">
                {companies.length}
              </span>{' '}
              companies
            </p>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-100 dark:bg-[#2a2a2a] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-not-allowed opacity-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium shadow-sm">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-100 dark:bg-[#2a2a2a] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-not-allowed opacity-50">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-slate-200 dark:border-[#333] p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-yellow-50 dark:bg-yellow-500/10 flex items-center justify-center text-yellow-600 dark:text-yellow-500">
              <ClipboardList className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider text-[11px]">
            Pending Review
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            {pendingCount}
          </h3>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-slate-200 dark:border-[#333] p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-500">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider text-[11px]">
            Approved Partners
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            {approvedCount}
          </h3>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-slate-200 dark:border-[#333] p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-500">
              <Ban className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider text-[11px]">
            Total Rejections
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            {rejectedCount}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
