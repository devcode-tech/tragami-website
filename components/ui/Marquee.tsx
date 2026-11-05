import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Renders `children` twice back to back and scrolls the strip with a pure
 * CSS animation, so the loop is seamless. Pauses on hover. Fades at both
 * edges via a mask instead of a hard clip.
 */
export function Marquee({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const maskStyle = {
    WebkitMaskImage:
      "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
    maskImage:
      "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
  };

  return (
    <div
      className={cn("marquee-pause overflow-hidden", className)}
      style={maskStyle}
    >
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
