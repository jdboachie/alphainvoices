'use client';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col font-mono items-center justify-center">
      <h1 className='text-3xl font-bold m-5'>Something went wrong</h1>
      <p className="text-xs bg-red-100 text-red-600 py-1 px-3 rounded-lg">{error.message}</p>
      <button
        className="mt-4 rounded-md flex bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        <ArrowPathIcon className="w-5" />
        <p>Try again</p>
      </button>
    </main>
  );
}