'use client';

import Link from 'next/link';
import { LogOut, Settings, User, LayoutDashboard } from 'lucide-react';

const ProfileDropdown = ({
  user,
  profileOpen,
  setProfileOpen,
  profileRef,
  onLogout,
}) => {
  const items = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={16} />,
    },
    { href: '/profile', label: 'My Profile', icon: <User size={16} /> },
    { href: '/settings', label: 'Settings', icon: <Settings size={16} /> },
  ];

  return (
    <div className="relative hidden md:block" ref={profileRef}>
      {/* Avatar */}
      <button
        onClick={() => setProfileOpen(!profileOpen)}
        className="flex items-center gap-2 rounded-full border p-1 pr-3 bg-white dark:bg-[#11151a]"
      >
        <img
          src={user?.avatar || 'https://i.pravatar.cc/100'}
          className="h-8 w-8 rounded-full"
        />
        <span className="text-sm font-medium">{user?.name || 'Guest'}</span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-3 w-60 rounded-2xl border bg-white dark:bg-[#0b0f14] shadow-xl transition-all
        ${
          profileOpen
            ? 'opacity-100 translate-y-0 scale-100 visible'
            : 'opacity-0 -translate-y-2 scale-95 invisible'
        }`}
      >
        {/* Header */}
        <div className="p-3 border-b">
          <p className="text-xs text-gray-500">Signed in as</p>
          <p className="text-sm font-semibold truncate">
            {user?.email || 'guest@email.com'}
          </p>
        </div>

        {/* Menu */}
        <div className="py-2">
          {items.map(item => (
            <DropdownItem
              key={item.href}
              {...item}
              onClick={() => setProfileOpen(false)}
            />
          ))}
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            setProfileOpen(false);
            onLogout?.();
          }}
          className="w-full flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

const DropdownItem = ({ href, icon, label, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#11151a]"
  >
    {icon}
    {label}
  </Link>
);

export default ProfileDropdown;
