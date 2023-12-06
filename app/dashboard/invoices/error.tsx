'use client';

import { useEffect } from 'react';

export default function InvoiceEror({
  error,
  reset,
}: {
  error: Error & { disgest?: string };
  reset: () => void;
}) {
  useEffect(() => {});

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong 😔!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 p-3 text-sm text-white transition-colors hover:bg-blue-400"
        type="button"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
