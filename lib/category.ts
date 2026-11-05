/**
 * Every internal page gets one of a few accent treatments based on its
 * route, so the site reads as a few coherent families (product, platform,
 * use case) instead of 22 identical gray pages, without hand-styling each
 * page individually.
 */
export type Category = "product" | "platform" | "usecase" | "other";

export function categoryFromRoute(route: string): Category {
  if (route.startsWith("/use-cases")) return "usecase";
  if (route.startsWith("/platform")) return "platform";
  if (["/conversion-giveaways", "/channel-giveaways"].includes(route)) {
    return "product";
  }
  return "other";
}

export type Accent = {
  category: Category;
  solid: string;
  soft: string; // very light tint, for backgrounds
  ring: string; // light border tint
  from: string;
  via: string;
  to: string;
};

export const ACCENTS: Record<Category, Accent> = {
  product: { category: "product", solid: "#2563EB", soft: "#eff6ff", ring: "#bfdbfe", from: "#3b82f6", via: "#2563EB", to: "#1d4ed8" },
  platform: { category: "platform", solid: "#1d4ed8", soft: "#eff6ff", ring: "#bfdbfe", from: "#2563EB", via: "#1d4ed8", to: "#1e3a8a" },
  usecase: { category: "usecase", solid: "#0284c7", soft: "#f0f9ff", ring: "#bae6fd", from: "#0ea5e9", via: "#0284c7", to: "#0369a1" },
  other: { category: "other", solid: "#2563EB", soft: "#eff6ff", ring: "#bfdbfe", from: "#3b82f6", via: "#2563EB", to: "#1d4ed8" },
};

export function accentFor(route: string): Accent {
  return ACCENTS[categoryFromRoute(route)];
}
