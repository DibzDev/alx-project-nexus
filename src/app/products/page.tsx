"use client";

import { products } from "@/lib/products";
import { addToCart } from "@/lib/cart";

export default function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  if (!product) {
    return (
      <div className="p-20 text-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-80 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-yellow-600 text-2xl font-semibold mb-4">
            KES {product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description || "High quality electronics you can trust."}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-500 px-6 py-3 rounded hover:bg-yellow-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
