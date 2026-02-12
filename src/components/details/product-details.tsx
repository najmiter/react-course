import type { ProductCardProps } from '@/types/ui/products';
import ReviewStars from '../common/review-stars';
import { formatCurrency } from '@/utils';

export default function ProductDetails({ product }: ProductCardProps) {
  return (
    <div className="py-4 space-y-4 h-full">
      <ReviewStars rating={product?.rating} />

      <div className="space-y-2">
        <h1 className="font-medium text-neutral-200 text-3xl">{product.title}</h1>
        <p className="text-neutral-400">{product.description}</p>
      </div>

      <div className="space-y-2">
        <p className="text-indigo-300 font-semibold text-2xl">{formatCurrency(product.price)}</p>
        <div className="py-1 capitalize text-neutral-300 rounded-full bg-neutral-700 px-3 w-fit">
          {product.category}
        </div>
      </div>

      <div className="w-full mt-5">
        <button className="p-3 rounded-2xl w-full cursor-pointer bg-indigo-500 text-neutral-50">Add To Cart</button>
      </div>
    </div>
  );
}
