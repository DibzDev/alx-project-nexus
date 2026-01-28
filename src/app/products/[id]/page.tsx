import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <Link href="/" className="text-orange-600 underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={400}
          className="rounded-lg object-contain"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-orange-600 text-xl font-semibold mb-4">
          {product.price}
        </p>
        <p className="text-gray-700 mb-6">{product.description}</p>

        <Link
          href="/"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition"
        >
          Back to Products
        </Link>
      </div>
    </section>
  );
}
