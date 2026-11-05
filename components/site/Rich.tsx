import Link from "next/link";
import type { RichText } from "@/content/types";

/** Renders inline text with optional bold runs and links. */
export function Rich({ value }: { value: RichText }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <>
      {value.map((seg, i) => {
        if (typeof seg === "string") return <span key={i}>{seg}</span>;
        if ("b" in seg)
          return (
            <strong key={i} className="font-semibold text-black">
              {seg.b}
            </strong>
          );
        return (
          <Link key={i} href={seg.href} className="font-medium text-[#4b3cf0] hover:underline">
            {seg.a}
          </Link>
        );
      })}
    </>
  );
}
