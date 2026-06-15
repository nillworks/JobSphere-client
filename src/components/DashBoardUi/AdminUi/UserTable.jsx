'use client';

import React, { useState } from 'react';
import {
  User,
  Briefcase,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import updateUserRole from '@/lib/AllGetApi/updateUserRole';

// ─── Constants ─────────────────────────────────────────────────────────────
const ITEMS_PER_PAGE = 10;

export default function AdminUsersTable({ users = [] }) {
  // ── Pagination ────────────────────────────────────────────────────────────
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(users.length / ITEMS_PER_PAGE));
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const pagedUsers = users.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  // ── Role change modal ─────────────────────────────────────────────────────
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [pendingChange, setPendingChange] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // ── Optimistic role overrides: { [userId]: newRole } ──────────────────────
  const [roleOverrides, setRoleOverrides] = useState({});

  // ── Toast ─────────────────────────────────────────────────────────────────
  const [toast, setToast] = useState(null);
  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  // ── Helpers ───────────────────────────────────────────────────────────────
  /**
   * better-auth listUsers returns createdAt as a JS Date object or ISO string.
   * MongoDB raw format ($date) is also handled as a fallback.
   */
  const formatDate = value => {
    if (!value) return '—';
    // MongoDB raw: { $date: '...' }
    const raw = value?.$date ?? value;
    const date = new Date(raw);
    if (isNaN(date.getTime())) return '—';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  };

  /** better-auth returns id as a plain string; MongoDB raw uses _id.$oid */
  const getUserId = user => user._id?.$oid ?? user.id;

  const getInitials = name => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // ── Pagination helpers ────────────────────────────────────────────────────
  const goToPage = page => setCurrentPage(Math.min(Math.max(1, page), totalPages));

  /** Build the visible page numbers with "..." ellipsis */
  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = [1];
    if (currentPage > 3) pages.push('...');
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) pages.push(i);
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  // ── Role change handlers ──────────────────────────────────────────────────
  const initiateRoleChange = (userId, userName, newRole) => {
    setPendingChange({ userId, userName, newRole });
    setIsConfirmOpen(true);
  };

  const confirmRoleChange = async () => {
    if (!pendingChange) return;
    setIsUpdating(true);
    const { userId, userName, newRole } = pendingChange;
    try {
      await updateUserRole(userId, newRole);
      setRoleOverrides(prev => ({ ...prev, [userId]: newRole }));
      showToast('success', `${userName}'s role changed to ${newRole}`);
    } catch (err) {
      console.error('Failed to update user role:', err);
      showToast('error', 'Failed to change role. Please try again.');
    } finally {
      setIsUpdating(false);
      setIsConfirmOpen(false);
      setPendingChange(null);
    }
  };

  const handleStatusChange = async (userId, newStatus) => {
    console.log(`Status change: ${userId} → ${newStatus}`);
  };

  const handleDelete = async userId => {
    console.log(`Delete: ${userId}`);
  };

  // ── Stats ─────────────────────────────────────────────────────────────────
  const getEffectiveRole = user => {
    const userId = getUserId(user);
    return (roleOverrides[userId] ?? user.role)?.toLowerCase() || 'seeker';
  };

  const totalUsers = users.length;
  const seekersCount = users.filter(u => getEffectiveRole(u) === 'seeker').length;
  const recruitersCount = users.filter(u => getEffectiveRole(u) === 'recruiter').length;
  const adminsCount = users.filter(u => getEffectiveRole(u) === 'admin').length;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="relative w-full space-y-6">
      {/* ── Header & Stats ── */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
              User Management
            </h1>
            <p className="text-slate-500 dark:text-zinc-400 text-sm">
              Review, filter, and manage platform access for all users.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white dark:bg-[#1a1a24] hover:bg-slate-50 dark:hover:bg-[#232331] text-slate-700 dark:text-zinc-300 rounded-lg border border-slate-200 dark:border-[#2a333e] text-sm font-medium transition-colors shadow-sm">
              All Roles
            </button>
            <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-slate-800 dark:hover:bg-slate-200 rounded-lg text-sm font-medium transition-colors shadow-sm">
              Export List
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#0d0f12] p-5 rounded-xl border border-slate-200 dark:border-[#1d242d] shadow-sm transition-colors duration-200">
            <h3 className="text-slate-500 dark:text-zinc-400 text-sm font-medium mb-2">Total Users</h3>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{totalUsers.toLocaleString()}</div>
            <div className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">Platform wide</div>
          </div>
          <div className="bg-white dark:bg-[#0d0f12] p-5 rounded-xl border border-slate-200 dark:border-[#1d242d] shadow-sm transition-colors duration-200">
            <h3 className="text-slate-500 dark:text-zinc-400 text-sm font-medium mb-2 flex items-center gap-2">
              <Briefcase size={14} className="text-slate-400" />
              Recruiters
            </h3>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{recruitersCount.toLocaleString()}</div>
            <div className="text-slate-500 dark:text-zinc-500 text-xs font-medium">Hiring talent</div>
          </div>
          <div className="bg-white dark:bg-[#0d0f12] p-5 rounded-xl border border-slate-200 dark:border-[#1d242d] shadow-sm transition-colors duration-200">
            <h3 className="text-slate-500 dark:text-zinc-400 text-sm font-medium mb-2 flex items-center gap-2">
              <User size={14} className="text-slate-400" />
              Seekers
            </h3>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{seekersCount.toLocaleString()}</div>
            <div className="text-slate-500 dark:text-zinc-500 text-xs font-medium">Looking for jobs</div>
          </div>
          <div className="bg-white dark:bg-[#0d0f12] p-5 rounded-xl border border-slate-200 dark:border-[#1d242d] shadow-sm transition-colors duration-200">
            <h3 className="text-slate-500 dark:text-zinc-400 text-sm font-medium mb-2 flex items-center gap-2">
              <ShieldCheck size={14} className="text-violet-500" />
              Admins
            </h3>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{adminsCount.toLocaleString()}</div>
            <div className="text-violet-600 dark:text-violet-400 text-xs font-medium">System access</div>
          </div>
        </div>
      </div>

      {/* ── Toast ── */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-[60] flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-xl text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300 ${
            toast.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300'
              : 'bg-red-50 dark:bg-red-950/70 border-red-200 dark:border-red-800/50 text-red-800 dark:text-red-300'
          }`}
        >
          {toast.type === 'success'
            ? <CheckCircle className="w-4 h-4 shrink-0" />
            : <XCircle className="w-4 h-4 shrink-0" />}
          {toast.message}
        </div>
      )}

      {/* ── Table Card ── */}
      <div className="w-full bg-white dark:bg-[#0d0f12] border border-slate-200 dark:border-[#1d242d] rounded-xl overflow-hidden shadow-sm dark:shadow-2xl font-sans transition-colors duration-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm min-w-[800px]">

            {/* Header */}
            <thead>
              <tr className="border-b border-slate-200 dark:border-[#1d242d] bg-slate-50/70 dark:bg-[#090b0e]/60 text-slate-500 dark:text-zinc-500 select-none">
                <th className="py-4 px-6 font-medium text-xs uppercase tracking-wider">User</th>
                <th className="py-4 px-6 font-medium text-xs uppercase tracking-wider">Email</th>
                <th className="py-4 px-6 font-medium text-xs uppercase tracking-wider">Role</th>
                <th className="py-4 px-6 font-medium text-xs uppercase tracking-wider">Joined</th>
                <th className="py-4 px-6 font-medium text-xs uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 font-medium text-xs uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-slate-100 dark:divide-[#1d242d]/60">
              {pagedUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-slate-400 dark:text-zinc-500 text-sm">
                    No users found.
                  </td>
                </tr>
              ) : (
                pagedUsers.map(user => {
                  const userId = getUserId(user);
                  const userRole = (roleOverrides[userId] ?? user.role)?.toLowerCase() || 'seeker';
                  const userStatus = user.banned ? 'Suspended' : (user.status || 'Active');

                  return (
                    <tr
                      key={userId}
                      className="hover:bg-slate-50 dark:hover:bg-[#090b0e]/50 transition-colors duration-150"
                    >
                      {/* ── User avatar + name ── */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          {user.image ? (
                            <img
                              src={user.image}
                              alt={user.name || 'User'}
                              referrerPolicy="no-referrer"
                              className="w-8 h-8 rounded-full object-cover ring-2 ring-slate-200 dark:ring-[#2a333e] shrink-0"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#1d242d] flex items-center justify-center text-xs text-slate-600 dark:text-zinc-300 font-bold ring-2 ring-slate-200 dark:ring-[#2a333e] shrink-0">
                              {getInitials(user.name)}
                            </div>
                          )}
                          <span className="font-medium text-slate-900 dark:text-zinc-100 truncate max-w-[140px]">
                            {user.name || 'Unknown User'}
                          </span>
                        </div>
                      </td>

                      {/* ── Email ── */}
                      <td className="py-4 px-6 text-slate-500 dark:text-zinc-400 whitespace-nowrap">
                        {user.email}
                      </td>

                      {/* ── Role badge ── */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        {userRole === 'recruiter' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-sm">
                            <Briefcase size={11} />
                            Recruiter
                          </span>
                        ) : userRole === 'admin' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/50">
                            <ShieldCheck size={11} />
                            Admin
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-[#1d242d] text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-[#2a333e]">
                            <User size={11} />
                            Seeker
                          </span>
                        )}
                      </td>

                      {/* ── Join date ── */}
                      <td className="py-4 px-6 text-slate-500 dark:text-zinc-400 whitespace-nowrap">
                        {formatDate(user.createdAt)}
                      </td>

                      {/* ── Status badge ── */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        {userStatus === 'Active' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            Suspended
                          </span>
                        )}
                      </td>

                      {/* ── Actions ── */}
                      <td className="py-4 px-6 text-right whitespace-nowrap text-xs font-medium">
                        <div className="flex items-center justify-end gap-3">
                          {userRole !== 'admin' && (
                            <button
                              onClick={() => initiateRoleChange(userId, user.name, 'admin')}
                              className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                              Make Admin
                            </button>
                          )}
                          {userRole !== 'recruiter' && (
                            <button
                              onClick={() => initiateRoleChange(userId, user.name, 'recruiter')}
                              className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                              Make Recruiter
                            </button>
                          )}
                          {userRole !== 'seeker' && (
                            <button
                              onClick={() => initiateRoleChange(userId, user.name, 'seeker')}
                              className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                              Make Seeker
                            </button>
                          )}

                          <span className="w-px h-3 bg-slate-200 dark:bg-[#2a333e]" />

                          {userStatus === 'Active' ? (
                            <button
                              onClick={() => handleStatusChange(userId, 'Suspended')}
                              className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                            >
                              Suspend
                            </button>
                          ) : (
                            <>
                              <button
                                onClick={() => handleStatusChange(userId, 'Active')}
                                className="text-emerald-600 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors"
                              >
                                Activate
                              </button>
                              <button
                                onClick={() => handleDelete(userId)}
                                className="text-slate-400 dark:text-zinc-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* ── Pagination Footer ── */}
        {users.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 dark:border-[#1d242d] bg-slate-50 dark:bg-[#090b0e]/60 text-xs text-slate-500 dark:text-zinc-500 select-none">
            {/* Count */}
            <div>
              Showing{' '}
              <span className="font-medium text-slate-700 dark:text-zinc-300">
                {startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, users.length)}
              </span>{' '}
              of{' '}
              <span className="font-medium text-slate-700 dark:text-zinc-300">
                {users.length.toLocaleString()}
              </span>{' '}
              users
            </div>

            {/* Page buttons */}
            <div className="flex items-center gap-1">
              {/* Prev */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#1d242d] text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={14} />
              </button>

              {/* Page numbers */}
              {getPageNumbers().map((page, i) =>
                page === '...' ? (
                  <span key={`ellipsis-${i}`} className="px-1 text-slate-400 dark:text-zinc-600">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-7 h-7 flex items-center justify-center rounded font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-zinc-900'
                        : 'hover:bg-slate-200 dark:hover:bg-[#1d242d] text-slate-500 dark:text-zinc-400'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-[#1d242d] text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Confirmation Modal ── */}
      {isConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50 dark:bg-black/70">
          <div className="w-full max-w-sm bg-white dark:bg-[#0d0f12] border border-slate-200 dark:border-[#1d242d] rounded-xl p-6 shadow-2xl space-y-5 transition-colors duration-200">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-100">
                Confirm Role Change
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                Are you sure you want to change the role of{' '}
                <span className="text-slate-800 dark:text-zinc-200 font-medium">
                  {pendingChange?.userName}
                </span>{' '}
                to{' '}
                <span className="text-slate-800 dark:text-zinc-200 font-medium capitalize">
                  {pendingChange?.newRole}
                </span>
                ? This alters system access and permissions immediately.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 text-xs font-medium">
              <button
                disabled={isUpdating}
                onClick={() => { setIsConfirmOpen(false); setPendingChange(null); }}
                className="px-4 py-2 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 bg-slate-100 dark:bg-[#1d242d]/60 hover:bg-slate-200 dark:hover:bg-[#1d242d] border border-slate-200 dark:border-[#2a333e] rounded-md transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                disabled={isUpdating}
                onClick={confirmRoleChange}
                className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors shadow-lg shadow-indigo-600/20 disabled:opacity-50 min-w-[76px] flex items-center justify-center"
              >
                {isUpdating ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  'Confirm'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
