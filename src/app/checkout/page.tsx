"use client";

import { getCart } from "@/lib/cart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      {/* Customer Info */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Customer Information</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Delivery Location"
            className="w-full border px-4 py-2 rounded"
          />

          <button
            type="button"
            onClick={() => router.push("/checkout/success")}
            className="w-full bg-yellow-500 py-3 rounded font-semibold hover:bg-yellow-600"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

        <div className="space-y-4 border rounded-lg p-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>
                KES {(item.price * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}

          <hr />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>KES {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
