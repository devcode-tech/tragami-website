import Link from "next/link";

export function Brand({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center hover:opacity-85 transition-opacity ${className}`} aria-label="Tragami Home">
      <img src="/logo.svg" alt="Tragami" className="h-7 lg:h-8 w-auto" />
    </Link>
  );
}
