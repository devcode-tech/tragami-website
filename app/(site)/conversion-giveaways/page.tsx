import { page } from "@/content/pages/conversion-giveaways";
import { pageMetadata } from "@/components/site/PageView";
import ConversionGiveawaysFinsyc from "@/components/templates/finance-management-landing-page-finsyc/ConversionGiveawaysFinsyc";

export const metadata = pageMetadata(page);

export default function Page() {
  return <ConversionGiveawaysFinsyc />;
}
