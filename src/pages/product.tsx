import Button from '@/components/ui/button';
import useToast from '@/hooks/general/toast';
// import { useGetProductById } from '@/hooks/queries/product';
import { PRODUCTS_QUERY_KEYS } from '@/hooks/queries/product/keys';
import { cn } from '@/lib/utils';
import type { IProduct } from '@/types/product';
import { use } from 'react';
import { useParams } from 'react-router';

const fetchProduct = async () => {
  const res = await fetch(`https://dummyjson.com/products/2`);
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return (await res.json()) as IProduct;
};

const fetchProductPromise = fetchProduct();

export default function Product() {
  const params = useParams();
  // const { data } = useGetProductById(params.id!);

  const data = use(fetchProductPromise);

  const mutation = useToast({
    onMutate() {},

    mutationFn: async (/* id: string */) => {
      await new Promise((r) => setTimeout(r, 1000));

      if (Math.random() < 0.5) throw new Error('Mutation failed');

      return { message: 'Mutation successful!' };
    },

    onError() {},
    onSuccess() {},

    onSettled() {},

    loadingMsg: 'Mutation the product',
    successMsg: 'Product updated successfully',
    invalidateQueries: [PRODUCTS_QUERY_KEYS.PRODUCT_BY_ID(params.id!)],
  });

  return (
    <div className="w-full" aria-live="polite">
      <div className="p-4">
        <h1 className={cn('text-indigo-500', { 'text-yellow-500': mutation.isPending })}>{data?.title}</h1>
        {mutation.error && <pre className="text-red-500">{mutation.error.message}</pre>}
        {data?.images[0] && <img src={data?.images[0]} width={500} height={500} alt="" />}
        <Button onClick={() => mutation.mutate()}>Add to Cart</Button>
      </div>
    </div>
  );
}
