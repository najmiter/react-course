import { Button } from '@/components/ui/button';
import useToast from '@/hooks/general/toast';
import { useGetProductById } from '@/hooks/queries/product';
import { PRODUCTS_QUERY_KEYS } from '@/hooks/queries/product/keys';
import { cn } from '@/lib/utils';
import { useParams } from 'react-router';

export default function Product() {
  const params = useParams();
  const { data, isLoading } = useGetProductById(params.id!);

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
    <div aria-hidden={isLoading} className="w-full" aria-live="polite">
      {isLoading && (
        <div className="grid w-full place-content-center h-svh">
          <div className="border border-t-transparent border-white rounded-full animate-spin size-5" />
        </div>
      )}

      {!isLoading && (
        <div className="p-4">
          <h1 className={cn('text-indigo-500', { 'text-yellow-500': mutation.isPending })}>{data?.title}</h1>
          {mutation.error && <pre className="text-red-500">{mutation.error.message}</pre>}
          <img src={data?.images[0]} width={500} height={500} alt="" />
          <Button onClick={() => mutation.mutate()}>Add to Cart</Button>
        </div>
      )}
    </div>
  );
}
