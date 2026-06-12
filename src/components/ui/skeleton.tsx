function Skeleton({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`animate-pulse rounded-md bg-white/[0.06] ${className}`}
      {...props}
    />
  );
}

export { Skeleton };
