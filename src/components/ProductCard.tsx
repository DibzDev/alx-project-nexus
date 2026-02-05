import Link from "next/link";
import type { Product } from "@/lib/products";


type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col">
        
        
        <div className="w-full h-48 flex items-center justify-center mb-4">
          <img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-contain mb-4"
/>

        </div>

        <h3 className="font-semibold text-lg mb-1 text-center">
          {product.name}
        </h3>

        <p className="text-yellow-600 font-bold text-center">
          KES {product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
