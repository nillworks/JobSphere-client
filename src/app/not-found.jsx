import Link from 'next/link';
import React from 'react';

const PageNotAvailable = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#090b0e] px-4">
      <div className="text-center space-y-4 max-w-md">
        {/* Friendly title */}
        <h1 className="text-2xl font-semibold text-slate-800 dark:text-white">
          Oops! Something went wrong
        </h1>

        {/* Simple message */}
        <h2 className="text-lg font-medium text-slate-600 dark:text-[#a3adbb]">
          We can’t find this page
        </h2>

        {/* Human explanation */}
        <p className="text-sm text-slate-500 dark:text-[#6b7280] leading-relaxed">
          The page you are trying to visit may have been moved, deleted, or the
          link might be incorrect. Please check the URL or go back to the
          homepage.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-2 text-sm font-medium rounded-lg
          bg-gradient-to-r from-[#ff9a86] to-[#bf7465]
          text-[#090b0e]
          shadow-sm hover:shadow-[0_10px_25px_rgba(255,154,134,0.35)]
          active:scale-95 transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotAvailable;
