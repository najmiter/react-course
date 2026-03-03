import type { IProduct, IProductsResponse } from '@/types/product';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { PRODUCTS_QUERY_KEYS } from './keys';

export function useGetProducts(isEnabled: boolean = true) {
  return useQuery({
    queryKey: PRODUCTS_QUERY_KEYS.ALL,
    queryFn: async () => {
      const res = await fetch('https://dummyjson.com/products');
      return res.json();
    },
    select: (json) => {
      return json as IProductsResponse;
    },
    enabled: isEnabled,
  });
}

export function useGetProductById(id: number | string) {
  return useSuspenseQuery({
    queryKey: PRODUCTS_QUERY_KEYS.PRODUCT_BY_ID(id),
    queryFn: async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      return (await res.json()) as IProduct;
    },
    staleTime: Infinity,
  });
}
