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
      <h1 className='text-5xl font-bold m-5'>oops...</h1>
      <p className="text-xs bg-red-100 text-red-600 py-1 px-3 rounded-lg">{error.message}</p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        <ArrowPathIcon className="w-5" /> Try again
      </button>
    </main>
  );
}