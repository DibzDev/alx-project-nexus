"use client";

import Link from "next/link";
import { addToCart } from "@/lib/cart";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer flex flex-col">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />

        <h3 className="font-semibold text-lg">{product.name}</h3>

        <p className="text-yellow-600 font-bold mb-3">
          KES {product.price.toLocaleString()}
        </p>

        {/* Add to Cart */}
        <button
          onClick={(e) => {
            e.preventDefault(); // ⛔ stop Link navigation
            addToCart(product);
          }}
          className="mt-auto bg-yellow-500 py-2 rounded hover:bg-yellow-600"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
