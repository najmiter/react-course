import ProductCard from '@/components/products/product-card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetProducts } from '@/hooks/queries/product';

export default function ProductsPage() {
  const { data, isLoading } = useGetProducts();

  const renderContent = () => {
    if (isLoading) {
      return Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-66 w-full" />);
    }

    return data?.products?.map((product) => <ProductCard product={product} key={product.id} />);
  };

  return (
    <div className="p-3 w-full">
      <div className="grid grid-cols-3 gap-5">{renderContent()}</div>
    </div>
  );
}

// const allQueriesData = new Map<string, any>();
// const key = JSON.stringify(['all-product', 23]);

// function setQuery(key: string, data: any) {
//   allQueriesData.set(key, data);
// }
// async function getQuery() {
//   if (allQueriesData.has(key)) {
//     return allQueriesData.get(key);
//   }
//   const data = await getProducts();
//   setQuery(key, data);
//   return data;
// }
