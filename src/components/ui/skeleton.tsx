import type { SkeletonProps } from '@/types/ui/skeleton';

export default function Skeleton({ className, style }: SkeletonProps) {
  return <div aria-busy style={style} className={`bg-stone-700 rounded-2xl animate-pulse ${className}`} />;
}
