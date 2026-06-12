import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { ShieldAlert } from 'lucide-react';

const UnauthorizedPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-black">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          <ShieldAlert size={40} strokeWidth={1.5} className="text-red-500" />
        </div>

        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Access Denied
        </h1>

        <p className="mb-8 text-gray-500 dark:text-gray-400">
          You do not have permission to view this page. Please sign in with the
          appropriate account or contact support if you believe this is a
          mistake.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button color="primary" className="w-full sm:w-auto">
              Return Home
            </Button>
          </Link>

          <Link href="/login">
            <Button variant="flat" className="w-full sm:w-auto">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
