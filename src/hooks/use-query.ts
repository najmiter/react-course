import React from 'react';

interface Props {
  queryFn: () => Promise<Response>;
}

// const queryFn = () => fetch('https://dummyjson.com/products/1');
// await queryFn()

export function useQuery<T>({ queryFn }: Props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await queryFn();
        const data = await res.json();
        setData(data);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, data };
}
