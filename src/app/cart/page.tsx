"use client";

import { getCart, removeFromCart } from "@/lib/cart";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  // Run ONLY on client
  useEffect(() => {
    setCart(getCart());
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Empty cart (CLIENT-SAFE)
  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-b pb-4"
          >
            <div className="w-14 h-14 sm:w-24 sm:h-24 flex items-center justify-center">
  <img
    src={item.image}
    alt={item.name}
    className="max-w-full max-h-full object-contain"
  />
</div>



            <div className="flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">
                Quantity: {item.quantity}
              </p>
              <p className="text-yellow-600 font-semibold">
                KES {(item.price * item.quantity).toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => {
                removeFromCart(item.id);
                setCart(getCart());
              }}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right">
        <p className="text-xl font-semibold">
          Total: KES {total.toLocaleString()}
        </p>

        <button className="mt-4 bg-yellow-500 px-6 py-3 rounded hover:bg-yellow-600">
          Checkout (Mock)
        </button>
      </div>
    </div>
  );
}
