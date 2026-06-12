'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Briefcase, Moon, Sun, Menu } from 'lucide-react';
import SectionShell from './SectionShell';
import ActiveLink from './ActiveLink';
import MobileMenu from './MobileMenu';
import ProfileDropdown from './ProfileDropdown';
import { SITE_NAME } from './brand';
import { signOut, useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const profileRef = useRef(null);

  const { data } = useSession();

  const user = data?.user;
  const isLoggedIn = user;

  //  LOAD THEME ON FIRST RENDER
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  //  APPLY THEME CHANGE
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // close dropdown outside click
  useEffect(() => {
    const close = e =>
      profileRef.current && !profileRef.current.contains(e.target)
        ? setProfileOpen(false)
        : null;

    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const links = isLoggedIn
    ? [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Jobs', path: '/jobs' },
        { id: 3, name: 'Company', path: '/company' },
        { id: 4, name: 'Plans', path: '/plans' },
      ]
    : [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Jobs', path: '/jobs' },
        { id: 3, name: 'Plans', path: '/plans' },
      ];

  const router = useRouter();

  const handleSignOut = () => {
    signOut();

    toast.error('Logged out successfully', {
      description: 'You have been signed out of your account.',
      className:
        'bg-gradient-to-r from-[#ff9a86]/10 to-transparent dark:from-[#11151a] dark:to-[#0b0e12] border border-[#ff9a86]/30 text-slate-900 dark:text-white',
    });

    router.push('/signin');
    router.refresh();
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#090b0e]/80 backdrop-blur border-b border-slate-200 dark:border-[#1d242d]">
        <SectionShell className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={'/'} className=" flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff9a86] to-[#bf7465] shadow-lg">
              <Briefcase className="h-5 w-5 shrink-0 text-white" />
            </div>
            <span className="text-lg font-bold">{SITE_NAME}</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex gap-6">
            {links.map(l => (
              <ActiveLink key={l.id} href={l.path}>
                {l.name}
              </ActiveLink>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/*  Theme Button FIXED */}
            <button
              onClick={() => setIsDark(prev => !prev)}
              className="p-2 border rounded-full cursor-pointer dark:border-[#1d242d]"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* AUTH */}
            {isLoggedIn ? (
              <ProfileDropdown
                user={user}
                profileOpen={profileOpen}
                setProfileOpen={setProfileOpen}
                profileRef={profileRef}
                onLogout={() => handleSignOut()}
              />
            ) : (
              <div className="hidden md:flex items-center gap-3">
                {/* Login Button */}
                <Link
                  href="/signin"
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-[#a3adbb] 
                    hover:text-[#ff9a86] transition-colors duration-200"
                >
                  Login
                </Link>

                {/* Register Button */}
                <Link
                  href="/signup"
                  className="px-4 py-2 text-sm font-semibold rounded-lg 
                  bg-gradient-to-r from-[#ff9a86] to-[#bf7465] 
                text-[#090b0e]
                     shadow-sm hover:shadow-[0_10px_25px_rgba(255,154,134,0.35)]
                  hover:scale-[1.03] active:scale-95
                  transition-all duration-200"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile */}
            <button onClick={() => setOpen(true)} className="md:hidden">
              <Menu />
            </button>
          </div>
        </SectionShell>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        user={user}
        open={open}
        setOpen={setOpen}
        links={links}
        isLoggedIn={isLoggedIn}
        handleSignOut={handleSignOut}
      />
    </>
  );
};

export default Navbar;
