import { twMerge } from "tailwind-merge";

interface LoadingDotsProps {
  size?: number;
  className?: string;
  colorClass?: string;
}

export function LoadingDots({ size = 6, className = "", colorClass = "bg-current" }: LoadingDotsProps) {
  const dotStyle = { width: size, height: size };

  return (
    <div className={twMerge("inline-flex items-center gap-1.5", className)}>
      <span className={twMerge("rounded-full animate-dots-animation", colorClass)} style={{ ...dotStyle, animationDelay: "0ms" }} />
      <span className={twMerge("rounded-full animate-dots-animation", colorClass)} style={{ ...dotStyle, animationDelay: "200ms" }} />
      <span className={twMerge("rounded-full animate-dots-animation", colorClass)} style={{ ...dotStyle, animationDelay: "400ms" }} />
    </div>
  );
}
