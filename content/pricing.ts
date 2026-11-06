/** Pricing data ported from the original pricing page. Prices are per month unless noted. */
export type ProductKey = "conversion" | "channel" | "one-app";

export type Plan = {
  name: string;
  best: boolean;
  badge: string | null;
  monthly: number;
  yearly: number;
  noteMonthly: string;
  noteYearly: string;
  includes: { monthly: string; yearly: string; unit: string; perMonthly: string; perYearly: string };
  desc: string;
  features: string[];
  /** Set on Scale: opens the "customize volume" slider. */
  customize: string | null;
};

export type Modal = {
  title: string;
  sub: string;
  label: string;
  min: number;
  max: number;
  step: number;
  minPrice: number;
  maxPrice: number;
  caption: string;
};

export type Product = {
  key: ProductKey;
  label: string;
  plans: Plan[];
  compare: { head: string[]; rows: string[][] };
  modal: Modal;
};

export const PRICING: Record<ProductKey, Product> = {
  "conversion": {
    "key": "conversion",
    "label": "Conversion",
    "plans": [
      {
        "name": "Launch",
        "best": false,
        "badge": null,
        "monthly": 49,
        "yearly": 29,
        "noteMonthly": "Billed monthly",
        "noteYearly": "Billed yearly at $348/year",
        "includes": {
          "monthly": "1,000",
          "yearly": "24,000",
          "unit": "entries",
          "perMonthly": "/ mo",
          "perYearly": "/ yr"
        },
        "desc": "For a single campaign finding its feet.",
        "features": [
          "Unlimited active campaigns",
          "Unlimited forms, 30+ templates",
          "Pro email integrations",
          "Standard rules & targeting",
          "1 team member"
        ],
        "customize": null
      },
      {
        "name": "Growth",
        "best": true,
        "badge": "Most popular",
        "monthly": 129,
        "yearly": 99,
        "noteMonthly": "Billed monthly",
        "noteYearly": "Billed yearly at $1,188/year",
        "includes": {
          "monthly": "5,000",
          "yearly": "120,000",
          "unit": "entries",
          "perMonthly": "/ mo",
          "perYearly": "/ yr"
        },
        "desc": "For teams running several campaigns at once.",
        "features": [
          "Everything in Launch, plus:",
          "Business email integrations",
          "Remove Tragami branding",
          "Coupon templates",
          "3 team members"
        ],
        "customize": null
      },
      {
        "name": "Scale",
        "best": false,
        "badge": null,
        "monthly": 499,
        "yearly": 399,
        "noteMonthly": "Billed monthly",
        "noteYearly": "Billed yearly at $4,788/year",
        "includes": {
          "monthly": "50,000",
          "yearly": "1,200,000",
          "unit": "entries",
          "perMonthly": "/ mo",
          "perYearly": "/ yr"
        },
        "desc": "For high-volume campaigns and agencies.",
        "features": [
          "Everything in Growth, plus:",
          "Premium email integrations",
          "Webhooks",
          "5 team members"
        ],
        "customize": "Need more than 1,200,000 entries a year?"
      }
    ],
    "compare": {
      "head": [
        "Feature",
        "Launch",
        "Growth",
        "Scale"
      ],
      "rows": [
        [
          "Active campaigns",
          "Unlimited",
          "Unlimited",
          "Unlimited"
        ],
        [
          "Unlimited forms",
          "✓",
          "✓",
          "✓"
        ],
        [
          "30+ templates",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Pro email integrations",
          "✓",
          "–",
          "–"
        ],
        [
          "Business email integrations",
          "–",
          "✓",
          "–"
        ],
        [
          "Premium email integrations",
          "–",
          "–",
          "✓"
        ],
        [
          "Mobile responsive",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Standard rules",
          "✓",
          "✓",
          "✓"
        ],
        [
          "On-exit targeting",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Page-level targeting",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Geo-targeting",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Remove Tragami branding",
          "–",
          "✓",
          "✓"
        ],
        [
          "Coupon templates",
          "–",
          "✓",
          "✓"
        ],
        [
          "Webhooks",
          "–",
          "–",
          "✓"
        ],
        [
          "Team members",
          "1",
          "3",
          "5"
        ]
      ]
    },
    "modal": {
      "title": "Customize Conversion Scale",
      "sub": "Scale already includes 1,200,000 entries a year. Drag to add more.",
      "label": "Entries per year",
      "min": 1200000,
      "max": 12000000,
      "step": 100000,
      "minPrice": 4788,
      "maxPrice": 15000,
      "caption": "Estimated yearly price for Conversion Scale at this volume"
    }
  },
  "channel": {
    "key": "channel",
    "label": "Channel",
    "plans": [
      {
        "name": "Launch",
        "best": false,
        "badge": null,
        "monthly": 99,
        "yearly": 83,
        "noteMonthly": "Billed monthly",
        "noteYearly": "Billed yearly at $999/year",
        "includes": {
          "monthly": "5,000",
          "yearly": "5,000",
          "unit": "attributed leads",
          "perMonthly": "/ mo",
          "perYearly": "/ mo"
        },
        "desc": "For a first few tracked channels and partners.",
        "features": [
          "5 active campaigns",
          "25 tracked channels",
          "50 partners / influencers",
          "First-touch & last-touch attribution",
          "3 team members"
        ],
        "customize": null
      },
      {
        "name": "Growth",
        "best": true,
        "badge": "Most popular",
        "monthly": 499,
        "yearly": 417,
        "noteMonthly": "Billed monthly",
        "noteYearly": "Billed yearly at $4,999/year",
        "includes": {
          "monthly": "25,000",
          "yearly": "25,000",
          "unit": "attributed leads",
          "perMonthly": "/ mo",
          "perYearly": "/ mo"
        },
        "desc": "For growing partner and dealer networks.",
        "features": [
          "Everything in Launch, plus:",
          "OEM / distributor attribution",
          "Partner leaderboards & ROI reporting",
          "Webhooks",
          "10 team members"
        ],
        "customize": null
      },
      {
        "name": "Scale",
        "best": false,
        "badge": null,
        "monthly": 999,
        "yearly": 833,
        "noteMonthly": "Billed monthly",
        "noteYearly": "Billed yearly at $9,999/year",
        "includes": {
          "monthly": "100,000",
          "yearly": "100,000",
          "unit": "attributed leads",
          "perMonthly": "/ mo",
          "perYearly": "/ mo"
        },
        "desc": "For large dealer, distributor, and retail networks.",
        "features": [
          "Everything in Growth, plus:",
          "Multi-touch & custom attribution models",
          "API access",
          "Unlimited data retention",
          "25 team members"
        ],
        "customize": "Need more than 100,000 leads a month?"
      }
    ],
    "compare": {
      "head": [
        "Feature",
        "Launch",
        "Growth",
        "Scale"
      ],
      "rows": [
        [
          "Active campaigns",
          "5",
          "25",
          "Unlimited"
        ],
        [
          "Tracked channels",
          "25",
          "100",
          "500"
        ],
        [
          "Partners / influencers",
          "50",
          "250",
          "1,000"
        ],
        [
          "Monthly attributed leads",
          "5,000",
          "25,000",
          "100,000"
        ],
        [
          "Tracking links / codes",
          "100",
          "500",
          "2,500"
        ],
        [
          "First-touch attribution",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Last-touch attribution",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Multi-touch attribution",
          "–",
          "–",
          "✓"
        ],
        [
          "Custom attribution models",
          "–",
          "–",
          "✓"
        ],
        [
          "Influencer attribution",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Partner attribution",
          "✓",
          "✓",
          "✓"
        ],
        [
          "OEM / distributor attribution",
          "–",
          "✓",
          "✓"
        ],
        [
          "Real-time reporting",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Partner leaderboards",
          "–",
          "✓",
          "✓"
        ],
        [
          "Revenue attribution",
          "–",
          "✓",
          "✓"
        ],
        [
          "Marketing spend tracking",
          "–",
          "✓",
          "✓"
        ],
        [
          "ROI / ROAS reporting",
          "–",
          "✓",
          "✓"
        ],
        [
          "Webhooks",
          "–",
          "✓",
          "✓"
        ],
        [
          "API access",
          "–",
          "–",
          "✓"
        ],
        [
          "CRM integrations",
          "Basic",
          "Standard",
          "Advanced"
        ],
        [
          "Team members",
          "3",
          "10",
          "25"
        ],
        [
          "Remove Tragami branding",
          "–",
          "✓",
          "✓"
        ],
        [
          "Data retention",
          "12 months",
          "24 months",
          "Unlimited"
        ]
      ]
    },
    "modal": {
      "title": "Customize Channel Scale",
      "sub": "Scale already includes 100,000 attributed leads a month. Drag to add more.",
      "label": "Attributed leads per month",
      "min": 100000,
      "max": 10000000,
      "step": 50000,
      "minPrice": 9999,
      "maxPrice": 20000,
      "caption": "Estimated yearly price for Channel Scale at this volume"
    }
  },
  "one-app": {
    "key": "one-app",
    "label": "One app",
    "plans": [
      {
        "name": "Launch",
        "best": false,
        "badge": null,
        "monthly": 129,
        "yearly": 99,
        "noteMonthly": "Billed monthly",
        "noteYearly": "Billed yearly at $1,188/year",
        "includes": {
          "monthly": "5,000",
          "yearly": "60,000",
          "unit": "entries & leads",
          "perMonthly": "/ mo",
          "perYearly": "/ yr"
        },
        "desc": "Full giveaway form builder combined with partner attribution for growing brands.",
        "features": [
          "Unlimited active campaigns & forms",
          "5,000 monthly entries & attributed leads",
          "25 tracked channels & 50 partners / influencers",
          "First-touch & last-touch attribution",
          "Pro email integrations & standard rules",
          "3 team members"
        ],
        "customize": null
      },
      {
        "name": "Growth",
        "best": true,
        "badge": "Most popular",
        "monthly": 549,
        "yearly": 449,
        "noteMonthly": "Billed monthly",
        "noteYearly": "Billed yearly at $5,388/year",
        "includes": {
          "monthly": "25,000",
          "yearly": "300,000",
          "unit": "entries & leads",
          "perMonthly": "/ mo",
          "perYearly": "/ yr"
        },
        "desc": "All-in-one engine: interactive forms, partner leaderboards, and white-labeling.",
        "features": [
          "Everything in Launch, plus:",
          "25,000 monthly entries & attributed leads",
          "100 tracked channels & 250 partners / influencers",
          "Remove Tragami branding",
          "Partner leaderboards & OEM attribution",
          "Webhooks & business integrations",
          "10 team members"
        ],
        "customize": null
      },
      {
        "name": "Scale",
        "best": false,
        "badge": null,
        "monthly": 1299,
        "yearly": 999,
        "noteMonthly": "Billed monthly",
        "noteYearly": "Billed yearly at $11,988/year",
        "includes": {
          "monthly": "100,000",
          "yearly": "1,200,000",
          "unit": "entries & leads",
          "perMonthly": "/ mo",
          "perYearly": "/ yr"
        },
        "desc": "For high-volume brands, retailers, and agencies running multi-channel operations.",
        "features": [
          "Everything in Growth, plus:",
          "100,000+ monthly entries & attributed leads",
          "500 tracked channels & 1,000 partners",
          "Multi-touch & custom attribution models",
          "REST API access & developer webhooks",
          "Unlimited data retention",
          "25 team members"
        ],
        "customize": "Need more than 100,000 entries and leads a month?"
      }
    ],
    "compare": {
      "head": [
        "Feature",
        "Launch",
        "Growth",
        "Scale"
      ],
      "rows": [
        [
          "Active campaigns",
          "Unlimited",
          "Unlimited",
          "Unlimited"
        ],
        [
          "Unlimited forms & templates",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Tracked channels",
          "25",
          "100",
          "500"
        ],
        [
          "Partners & influencers",
          "50",
          "250",
          "1,000"
        ],
        [
          "Monthly entries & attributed leads",
          "5,000",
          "25,000",
          "100,000"
        ],
        [
          "Drag-and-drop form builder",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Conditional logic & custom fields",
          "✓",
          "✓",
          "✓"
        ],
        [
          "First-touch & last-touch attribution",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Multi-touch attribution models",
          "–",
          "–",
          "✓"
        ],
        [
          "Partner leaderboards & scorecards",
          "–",
          "✓",
          "✓"
        ],
        [
          "Bot protection & entry validation",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Remove Tragami branding",
          "–",
          "✓",
          "✓"
        ],
        [
          "Coupon templates & incentives",
          "✓",
          "✓",
          "✓"
        ],
        [
          "Webhooks",
          "–",
          "✓",
          "✓"
        ],
        [
          "REST API access",
          "–",
          "–",
          "✓"
        ],
        [
          "Team members",
          "3",
          "10",
          "25"
        ],
        [
          "Data retention",
          "12 months",
          "24 months",
          "Unlimited"
        ]
      ]
    },
    "modal": {
      "title": "Customize One App Scale",
      "sub": "Scale already includes 1,200,000 entries and leads a year. Drag to add more.",
      "label": "Entries & leads per year",
      "min": 1200000,
      "max": 15000000,
      "step": 100000,
      "minPrice": 11988,
      "maxPrice": 35000,
      "caption": "Estimated yearly price for One App Scale at this volume"
    }
  }
};
