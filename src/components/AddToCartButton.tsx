"use client";

import { Product } from "@/lib/products";
import { addToCart } from "@/lib/cart";

export default function AddToCartButton({ product }: { product: Product }) {
  return (
    <button
      onClick={() => {
        addToCart(product);
        alert("Added to cart!");
      }}
      className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600 transition"
    >
      Add to Cart
    </button>
  );
}
