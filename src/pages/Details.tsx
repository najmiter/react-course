import ProductDetails from '@/components/details/product-details';
import { useQuery } from '@/hooks/use-query';
import { useSearchParams } from '@/hooks/use-search-params';
import type { IProduct } from '@/types/api/products';

export default function DetailsPage() {
  const params = useSearchParams();

  const { data, isLoading, error } = useQuery<IProduct>({
    queryFn: () => fetch(`https://dummyjson.com/products/${params.get('id')}`),
  });

  if (isLoading)
    return (
      <div aria-busy aria-live="polite" className="h-svh grid place-content-center">
        <div className="size-4 border border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (error)
    return (
      <div className="h-svh grid place-content-center">
        <h1 className="text-red-500 font-medium text-4xl font-mono max-w-[60ch] text-center">{error.message}</h1>
      </div>
    );

  return (
    <div className="p-4">
      <div className="flex max-w-7xl mx-auto items-start gap-5 rounded-2xl bg-card">
        <div className="overflow-hidden group rounded-2xl bg-[#202020] md:min-w-125">
          <img
            src={data?.images[0]}
            width={500}
            alt={data?.description}
            className="object-contain aspect-square group-hover:scale-110 transition-transform"
          />
        </div>

        {data && <ProductDetails product={data} />}
      </div>
    </div>
  );
}
