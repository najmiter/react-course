import type { ProductCardProps } from '@/types/ui/products';
import { formatCurrency } from '@/utils';

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <a
      href={`/details/index.html?id=${product.id}`}
      className="w-full block bg-card rounded-2xl p-4"
      title={product.title}
      aria-label={product.title}>
      <img src={product.images[0]} alt={product.description} className="w-full aspect-square" />
      <div className="text-center">
        <h3 className="font-semibold">{product.title}</h3>
        <div className="font-normal text-neutral-300">{formatCurrency(product.price)}</div>
      </div>
    </a>
  );
}
