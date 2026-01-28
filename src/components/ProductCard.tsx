import Image from "next/image";
import { products } from "@/lib/products";
import Link from "next/link";


type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
  <div className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
    
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-contain mb-4"
    />

    <h3 className="font-semibold text-lg">{product.name}</h3>
    <p className="text-yellow-600 font-bold">
      KES {product.price.toLocaleString()}
    </p>

  </div>
</Link>

  );
}
