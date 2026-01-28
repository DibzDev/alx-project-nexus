import Image from "next/image";
import { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4">
      <img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-contain mb-4"
/>


      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>

      <div className="flex items-center justify-between">
        <span className="font-bold text-primary">
          KES {product.price.toLocaleString()}
        </span>

        <button className="px-4 py-2 text-sm rounded-md bg-black text-white hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
