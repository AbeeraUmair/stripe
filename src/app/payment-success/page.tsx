"use client";

// Import Suspense and useSearchParams from next/navigation
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PaymentSuccess() {
  // Using useSearchParams to get the query parameters
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount'); // Access query parameter 'amount'

  return (
    <main className="max-w-4xl mx-auto p-10 text-white text-center border m-10 rounded-2xl bg-blue-500">
      <div className="flex flex-col gap-16 mb-12">
        <h1 className="text-4xl font-extrabold mb-2">PAYMENT RECEIVED</h1>
        <h2 className="text-2xl">Your Booking is Confirmed</h2>

        <div className="bg-white p-2 rounded-xl text-blue-600 text-3xl font-bold">
          Payment Success! Amount: {amount}
        </div>
      </div>
    </main>
  );
}

// Wrapping PaymentSuccess with Suspense
export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccess />
    </Suspense>
  );
}
