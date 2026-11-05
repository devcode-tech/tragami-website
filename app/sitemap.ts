import type { MetadataRoute } from "next";
import { PAGE_ROUTES } from "@/lib/routes";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tragami.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...PAGE_ROUTES];

  return routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

    if (route === "/") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (
      route === "/conversion-giveaways" ||
      route === "/channel-giveaways" ||
      route === "/pricing"
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route.startsWith("/platform")) {
      priority = 0.85;
      changeFrequency = "monthly";
    } else if (route.startsWith("/use-cases") || route === "/resources") {
      priority = 0.8;
      changeFrequency = "monthly";
    }

    return {
      url: `${BASE}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
