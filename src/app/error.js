'use client';

import Link from 'next/link';

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#090b0e] px-4">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-2xl font-semibold text-slate-800 dark:text-white">
          Something went wrong
        </h1>

        <p className="text-sm text-slate-500 dark:text-[#a3adbb]">
          An unexpected error occurred. Please try again.
        </p>

        {/* optional: show actual error (dev mode) */}
        <p className="text-xs text-red-500 break-all">{error?.message}</p>

        <div className="flex items-center justify-center gap-3 mt-4">
          {/* Retry button */}
          <button
            onClick={() => reset()}
            className="px-5 py-2 text-sm font-medium rounded-lg
            bg-slate-200 dark:bg-[#11151a]
            text-slate-800 dark:text-white
            hover:scale-105 transition"
          >
            Try Again
          </button>

          {/* Home */}
          <Link
            href="/"
            className="px-5 py-2 text-sm font-medium rounded-lg
            bg-gradient-to-r from-[#ff9a86] to-[#bf7465]
            text-[#090b0e]
            shadow-sm hover:shadow-[0_10px_25px_rgba(255,154,134,0.35)]
            active:scale-95 transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
