'use client';

import { X } from 'lucide-react';
import Link from 'next/link';

const MobileMenu = ({ open, setOpen, links, isLoggedIn }) => {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'visible' : 'invisible'}`}>
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-black/50 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`absolute top-4 left-1/2 w-[90%] -translate-x-1/2 bg-white dark:bg-[#0b0f14] rounded-2xl transition-all ${
          open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between p-4 border-b">
          <span>Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <div className="p-4 flex flex-col gap-2">
          {links.map(l => (
            <Link key={l.id} href={l.path} onClick={() => setOpen(false)}>
              {l.name}
            </Link>
          ))}
        </div>

        {/* AUTH SWITCH */}
        <div className="border-t p-4 flex flex-col gap-2">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
              <Link href="/profile" onClick={() => setOpen(false)}>
                Profile
              </Link>
              <button className="text-red-500 text-left">Logout</button>
            </>
          ) : (
            <>
              <div className="border-t p-4 flex flex-col gap-3 md:hidden">
                {/* Login */}
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="w-full px-4 py-2 text-sm font-medium text-slate-700 dark:text-[#a3adbb]
                   rounded-xl border border-slate-200 dark:border-[#1d242d]
               bg-white/60 dark:bg-[#11151a]
                 hover:bg-slate-100 dark:hover:bg-[#1a1f26]
                transition-all duration-200"
                >
                  Login
                </Link>

                {/* Register */}
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="w-full px-4 py-2 text-sm font-semibold text-[#090b0e]
                  rounded-xl bg-gradient-to-r from-[#ff9a86] to-[#bf7465]
                  shadow-sm hover:shadow-[0_10px_25px_rgba(255,154,134,0.35)]
                  active:scale-95 transition-all duration-200"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
