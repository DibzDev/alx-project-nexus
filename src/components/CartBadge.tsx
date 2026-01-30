"use client";

import { getCart } from "@/lib/cart";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cart = getCart();
    const total = cart.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0
    );
    setCount(total);
  }, []);

  return (
    <Link href="/cart" className="relative">
      🛒 Cart
      {count > 0 && (
        <span className="ml-1 bg-yellow-500 text-black px-2 py-0.5 rounded-full text-xs">
          {count}
        </span>
      )}
    </Link>
  );
}
