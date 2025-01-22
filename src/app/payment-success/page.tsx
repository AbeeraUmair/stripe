export default function PaymentSuccess({
    searchParams: { amount },
  }: {
    searchParams: { amount: string };
  }) {
    return (
      <main className="max-w-4xl mx-auto p-10 text-white text-center border m-10 rounded-2xl bg-blue-500">
        <div className="flex flex-col gap-16 mb-12">
          <h1 className="text-4xl font-extrabold mb-2">PAYMENT RECIEVED</h1>
          <h2 className="text-2xl">Your Booking is Confirmed</h2>
  
          <div className="bg-white p-2 rounded-xl text-blue-600 text-3xl font-bold">
            ${amount}
          </div>
        </div>
      </main>
);
}