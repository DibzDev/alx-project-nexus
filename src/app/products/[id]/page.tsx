import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-contain"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        <p className="text-yellow-600 text-2xl font-semibold mb-6">
          KES {product.price.toLocaleString()}
        </p>

        <p className="text-gray-700 mb-8">
          {product.description}
        </p>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
