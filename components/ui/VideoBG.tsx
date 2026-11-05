export function VideoBG({
  src,
  poster,
  className = "absolute inset-0 h-full w-full object-cover",
  fit = "cover",
}: {
  src: string;
  poster?: string;
  className?: string;
  fit?: "cover" | "fill";
}) {
  return (
    <video
      className={className}
      style={fit === "fill" ? { objectFit: "fill" } : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
