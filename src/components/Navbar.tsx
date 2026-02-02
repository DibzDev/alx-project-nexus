"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";

export default function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = getCart();
      const totalItems = cart.reduce(
        (sum: number, item: any) => sum + item.quantity,
        0
      );
      setCount(totalItems);
    };

    updateCount();

    window.addEventListener("storage", updateCount);
    return () => window.removeEventListener("storage", updateCount);
  }, []);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Kheir Electronics
        </Link>

        {/* Cart */}
        <Link href="/cart" className="relative">
          🛒
          {count > 0 && (
            <span className="absolute -top-2 -right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
