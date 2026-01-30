"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      const totalItems = cart.reduce(
        (sum: number, item: any) => sum + item.quantity,
        0
      );
      setCount(totalItems);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cart-updated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cart-updated", updateCartCount);
    };
  }, []);

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Kheir Electronics
        </Link>

        <Link href="/cart" className="relative">
          🛒
          {count > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
