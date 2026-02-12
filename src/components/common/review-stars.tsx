interface Props {
  rating: number;
}

export default function ReviewStars({ rating }: Props) {
  return (
    <div className="flex text-lg items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i}>⭐️</span>
      ))}
    </div>
  );
}
