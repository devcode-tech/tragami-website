import { page } from "@/content/pages/use-cases-events";
import { PageView, pageMetadata } from "@/components/site/PageView";

export const metadata = pageMetadata(page);

export default function Page() {
  return <PageView page={page} />;
}
