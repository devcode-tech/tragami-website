"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Pages designed with their own footer section (CTAWithFooter01Finsyc)
  const hasOwnFooter =
    pathname === "/conversion-giveaways" ||
    pathname === "/channel-giveaways" ||
    pathname === "/pricing";

  if (hasOwnFooter) {
    return <main className="bg-white">{children}</main>;
  }

  return (
    <>
      <main className="bg-white">{children}</main>
      <SiteFooter />
    </>
  );
}
