import {
  type MutationFunctionContext,
  useMutation,
  useQueryClient,
  type UseMutationOptions,
  type UseMutationResult,
} from '@tanstack/react-query';
import React from 'react';
import { toast } from 'sonner';

type SuccessResult<TData> = Exclude<TData, { error: string }>;

interface UseToastOptions<TData, TError, TVariables, TContext> extends Omit<
  UseMutationOptions<TData, TError, TVariables, TContext>,
  'mutationFn' | 'onSuccess'
> {
  /** Callback function to execute the mutation */
  mutationFn: (variables: TVariables) => Promise<TData>;

  /** Custom success type that accepts results excluding the error. */
  onSuccess?: (
    data: SuccessResult<TData>,
    variables: TVariables,
    onMutateResult: SuccessResult<TData>,
    context: MutationFunctionContext,
  ) => Promise<SuccessResult<TData>> | unknown;

  /** Loading message */
  loadingMsg?: React.ReactNode;

  /** Success message */
  successMsg?: React.ReactNode;

  /** Disable the internal default toast and handle the state externally or discard */
  disableDefaultSuccessToast?: boolean;

  /**
   * Queries to invalidate on successful mutation.
   *
   * Each element (at a given index) will be considered as a query key.
   *
   * @example
   *
   * ```ts
   * // Single query
   * invalidateQueries: [['current-user']] // will invalidate query with key ['current-user']
   *
   * // Multiple queries
   * invalidateQueries: [['current-user'], ['onboarding-state']] // will invalidate both queries
   * ```
   */
  invalidateQueries?: Array<readonly unknown[]>;
}

export default function useToast<TData = unknown, TError = Error, TVariables = void, TContext = unknown>(
  options: UseToastOptions<TData, TError, TVariables, TContext>,
): UseMutationResult<TData, TError, TVariables, TContext> {
  const {
    mutationFn,
    loadingMsg,
    successMsg,
    disableDefaultSuccessToast = false,
    invalidateQueries,
    ...restOptions
  } = options;
  const toastId = React.useRef<string | number | null>(null);
  const queryClient = useQueryClient();

  return useMutation<TData, TError, TVariables, TContext>({
    ...restOptions,
    async mutationFn(variables) {
      toastId.current = toast.loading(loadingMsg || 'Processing...');
      const res = await mutationFn(variables);
      const error = res as unknown as { error?: string };
      if (error?.error) throw new Error(error.error);
      return res;
    },
    onSettled(...props) {
      if (toastId.current) {
        toast.dismiss(toastId.current);
        toastId.current = null;
      }
      restOptions.onSettled?.(...props);
    },
    onError(...props) {
      const error = props[0] as Error;
      toast.error(error?.message || 'An error occurred. Please try again.', { id: toastId.current || undefined });
      toastId.current = null;
      return restOptions.onError?.(...props);
    },
    onSuccess(...props) {
      if (!disableDefaultSuccessToast) {
        toast.success(successMsg || 'Operation successful!', { id: toastId.current || undefined });
      } else {
        toast.dismiss(toastId.current || undefined);
      }
      toastId.current = null;
      for (const query of invalidateQueries || []) {
        queryClient.invalidateQueries({ queryKey: query });
      }
      // maybe some typescript wizard will fix it properly someday
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      return (restOptions.onSuccess as Function)?.(...props);
    },
  });
}
