import { page } from "@/content/pages/pricing";
import { pageMetadata } from "@/components/site/PageView";
import PricingPageFinsyc from "@/components/templates/finance-management-landing-page-finsyc/PricingPageFinsyc";

export const metadata = pageMetadata(page);

export default function Page() {
  return <PricingPageFinsyc />;
}

