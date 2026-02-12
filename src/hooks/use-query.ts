import React from 'react';

interface Props {
  queryFn: () => Promise<Response>;
}

interface Return<T> {
  isLoading: boolean;
  data: T | undefined;
  error: Error;
}

// const queryFn = () => fetch('https://dummyjson.com/products/1');
// await queryFn()

export function useQuery<T>({ queryFn }: Props): Return<T> {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<T | undefined>(undefined);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await queryFn();
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error?.message ?? 'something went wrong');
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log('error fetching', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, data, error };
}
