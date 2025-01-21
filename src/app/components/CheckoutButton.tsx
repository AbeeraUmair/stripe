"use client";

import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

type Item = {
  name: string;
  price: number;
  quantity: number;
};

interface CheckoutButtonProps {
  items: Item[];
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ items }) => {
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const session = await response.json();

      if (!session?.id) {
        throw new Error('Invalid session ID returned from server.');
      }

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      }
    } catch (error) {
      console.error('Checkout error:', (error as Error).message);
      alert('Failed to create a checkout session.');
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
