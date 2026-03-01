import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

export default function MainProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="top-center" />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
