'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({
  href,
  children,
  className = '',
  activeClass = '',
  ...props
}) => {
  const pathname = usePathname();

  //  FIXED ACTIVE LOGIC
  const isActive =
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(href + '/');

  return (
    <Link
      href={href}
      {...props}
      className={`relative inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 group ${
        isActive
          ? `bg-[#ff9a86]/15 text-[#ff9a86] shadow-sm scale-[1.02] ${activeClass}`
          : 'text-slate-500 hover:bg-slate-100 hover:text-[#ff9a86] dark:text-[#a3adbb] dark:hover:bg-[#11151a]'
      } ${className}`}
    >
      {/* text */}
      <span className="relative z-10">{children}</span>

      {/* glow */}
      {isActive && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff9a86]/10 to-transparent blur-md opacity-70" />
      )}

      {/* hover layer */}
      <span className="absolute inset-0 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 bg-[#ff9a86]/5" />
    </Link>
  );
};

export default ActiveLink;
