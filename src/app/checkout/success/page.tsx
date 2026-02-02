"use client";

import Link from "next/link";
import { useEffect } from "react";
import { clearCart } from "@/lib/cart";




export default function SuccessPage() {
  useEffect(() => {
  clearCart();
}, []);
  return (
    <div className="max-w-3xl mx-auto py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Order Placed!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for shopping with Kheir Electronics. We’ll contact you shortly.
      </p>

      <Link
        href="/"
        className="inline-block bg-yellow-500 px-6 py-3 rounded font-semibold hover:bg-yellow-600"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
