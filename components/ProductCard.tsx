import { formatCurrency } from "@/utils/formatCurrency";

export default function ProductCard({ product }) {
  return (
    <div className="p-4 rounded-xl border">
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>

      <p className="mt-2 font-bold text-green-700">
        {formatCurrency(product.price)}
      </p>
    </div>
  );
}
