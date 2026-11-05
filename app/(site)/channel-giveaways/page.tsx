import { page } from "@/content/pages/channel-giveaways";
import { pageMetadata } from "@/components/site/PageView";
import ChannelGiveawaysFinsyc from "@/components/templates/finance-management-landing-page-finsyc/ChannelGiveawaysFinsyc";

export const metadata = pageMetadata(page);

export default function Page() {
  return <ChannelGiveawaysFinsyc />;
}
