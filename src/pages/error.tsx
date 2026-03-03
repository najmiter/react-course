import Button from '@/components/ui/button';

interface Props {
  error: unknown;
  resetErrorBoundary: (...args: unknown[]) => void;
}

export default function ErrorPage({ error, resetErrorBoundary }: Props) {
  const er = error as Error;
  return (
    <div className="h-dvh grid w-full place-content-center">
      <h1 className="text-red-400 font-semibold text-2xl">An error has ocurred</h1>
      <pre className="text-neutral-400 max-w-[40ch] text-wrap">{er?.message}</pre>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </div>
  );
}
