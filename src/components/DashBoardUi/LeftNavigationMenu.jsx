'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building2,
  Briefcase,
  FileText,
  Settings,
  Menu,
  X,
  Zap,
  Search,
  Bookmark,
  CreditCard,
} from 'lucide-react';
import { useSession } from '@/lib/auth-client';
import Image from 'next/image';

const LeftNavigationMenu = () => {
  const pathname = usePathname();
  const { data } = useSession();
  const user = data?.user;
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const seekerNavItems = [
    {
      name: 'Dashboard',
      href: '/dashboard/seeker',
      icon: LayoutDashboard,
    },
    {
      name: 'Jobs',
      href: '/dashboard/seeker/jobs',
      icon: Search,
    },
    {
      name: 'Saved Jobs',
      href: '/dashboard/seeker/saved-jobs',
      icon: Bookmark,
    },
    {
      name: 'Applications',
      href: '/dashboard/seeker/applications',
      icon: FileText,
    },
    {
      name: 'Billing',
      href: '/dashboard/seeker/billing',
      icon: CreditCard,
    },
    {
      name: 'Settings',
      href: '/dashboard/seeker/settings',
      icon: Settings,
    },
  ];

  const recruiterNavItems = [
    { name: 'Dashboard', href: '/dashboard/recruiter', icon: LayoutDashboard },
    {
      name: 'My Company',
      href: '/dashboard/recruiter/my-company',
      icon: Building2,
    },
    { name: 'Manage Jobs', href: '/dashboard/recruiter/jobs', icon: Briefcase },
    {
      name: 'Applications',
      href: '/dashboard/recruiter/applications',
      icon: FileText,
    },
    { name: 'Settings', href: '/dashboard/recruiter/settings', icon: Settings },
  ];

  const navItems =
    user?.role === 'recruiter' ? recruiterNavItems : seekerNavItems;

  return (
    <>
      {/* Mobile Menu Toggle Button (Floating Action Button style) */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-[60] p-3.5 rounded-full bg-gradient-to-r from-[#ff9a86] to-[#f47f68] text-[#090b0e] shadow-xl shadow-[#ff9a86]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Toggle Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[65] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-[70] w-72 lg:w-64 flex-shrink-0 flex flex-col bg-white/95 dark:bg-[#090b0e]/95 backdrop-blur-xl border-r border-slate-200/80 dark:border-[#1d242d]/80 h-full transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-6 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#11151a] text-slate-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="h-24 flex items-center px-8 border-b border-slate-100/50 dark:border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff9a86]/10 to-transparent opacity-50 dark:opacity-20 pointer-events-none" />
          <Link href="/" className="inline-block group/logo relative z-10">
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white transition-transform duration-500 inline-block group-hover/logo:scale-105">
              Job
              <span className="text-[#ff9a86] drop-shadow-[0_0_8px_rgba(255,154,134,0.4)]">
                Sphere
              </span>
            </span>
          </Link>
        </div>

        {/* User Info */}
        <div className="px-6 py-8 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-[#2a3441] to-transparent opacity-50" />
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#11151a] to-[#1a2028] border-2 border-[#ff9a86]/30 flex items-center justify-center overflow-hidden shadow-lg shadow-[#ff9a86]/10 group-hover:border-[#ff9a86]/60 transition-colors">
              {user?.image ? (
                <Image
                  width={400}
                  height={400}
                  src={user?.image}
                  alt={user?.name || 'User'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[#ff9a86] font-bold text-xl">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                {user?.name || 'Loading...'}
              </h4>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                {user?.role || 'Recruiter'}
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold tracking-wider text-[#090b0e] bg-gradient-to-r from-[#ff9a86] to-[#f47f68] shadow-md shadow-[#ff9a86]/20">
            <Zap className="w-3 h-3" />
            PREMIUM ACCOUNT
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto scrollbar-hide">
          <p className="px-4 text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-3 mt-2 uppercase">
            Menu
          </p>
          {navItems.map(item => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 group relative overflow-hidden ${
                  isActive
                    ? 'text-[#ff9a86] bg-slate-100 dark:bg-[#11151a]'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#11151a]/50 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#ff9a86] rounded-r-full shadow-[0_0_10px_rgba(255,154,134,0.5)]" />
                )}
                <div
                  className={`flex items-center justify-center p-1.5 rounded-lg transition-colors duration-300 ${isActive ? 'bg-[#ff9a86]/10' : 'group-hover:bg-slate-200/50 dark:group-hover:bg-[#1d242d]'}`}
                >
                  <Icon
                    className={`w-4.5 h-4.5 ${isActive ? 'text-[#ff9a86]' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`}
                  />
                </div>
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="p-6 mt-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#11151a] dark:to-[#0c0f13] border border-slate-200 dark:border-[#1d242d] p-4 text-center group">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#ff9a86]/10 rounded-full blur-xl group-hover:bg-[#ff9a86]/20 transition-colors" />
            <div className="relative z-10">
              <h5 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                Need help?
              </h5>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-3">
                Check our docs
              </p>
              <button className="w-full py-2 rounded-lg bg-white dark:bg-[#1a2028] text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#2a3441] shadow-sm hover:border-[#ff9a86]/50 hover:text-[#ff9a86] transition-all">
                Documentation
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default LeftNavigationMenu;
