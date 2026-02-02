import Link from "next/link";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="border rounded-lg bg-white p-4 hover:shadow-lg transition h-full flex flex-col">
        
        {/* IMAGE CONTAINER — FIXED HEIGHT */}
        <div className="h-40 flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* TEXT */}
        <h3 className="font-semibold text-lg mb-2 text-center">
          {product.name}
        </h3>

        <p className="text-yellow-600 font-bold text-center mt-auto">
          KES {product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
