import ProductCard from '@/components/common/product-card';
import { useQuery } from '@/hooks/use-query';
import type { IProduct } from '@/types/api/products';
import Skeleton from '../ui/skeleton';
import React from 'react';

type DummyProducts = { products: Array<IProduct> };

export default function ProductGrid() {
  const { data, isLoading } = useQuery<DummyProducts>({
    queryFn: () => fetch('https://dummyjson.com/products'),
  });

  if (isLoading)
    return (
      <Wrapper>
        {Array.from({ length: 6 }).map((_, i, a) => (
          <Skeleton className="w-full aspect-square" style={{ opacity: 1 - i / a.length + 0.1 }} key={i} />
        ))}
      </Wrapper>
    );

  return (
    <Wrapper>
      {data?.products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Wrapper>
  );
}

function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <section className="max-w-7xl pb-10 mx-auto gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </section>
  );
}
