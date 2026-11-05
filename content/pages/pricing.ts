import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/pricing",
  "title": "Pricing | Tragami",
  "description": "Tragami pricing for Conversion and Channel. Launch, Growth, and Scale plans, monthly or yearly billing, with a custom slider for high-volume Scale plans.",
  "hero": {
    "crumbs": [
      {
        "label": "Tragami",
        "href": "/"
      },
      {
        "label": "Pricing"
      }
    ],
    "eyebrow": "Pricing",
    "title": "Choose your Tragami plan.",
    "soon": null,
    "subtitle": null,
    "body": "Conversion and Channel are priced separately, so you only pay for the engine you're actually using. Each comes in Launch, Growth, and Scale, monthly or yearly.",
    "ctas": []
  },
  "sections": [
    {
      "tone": "wash",
      "blocks": [
        {
          "type": "head",
          "eyebrow": "Common questions",
          "title": "Billing, entries, leads, and plan changes.",
          "body": null,
          "center": false
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Do I need both Conversion and Channel?",
              "a": "No. Each is priced and billed separately, so an agency running giveaways only needs Conversion, and an OEM tracking partners only needs Channel. Plenty of teams run both."
            },
            {
              "q": "What happens if I go over my included entries or leads?",
              "a": "On Launch and Growth, we'll reach out about upgrading before anything is cut off. On Scale, you can customize your plan with the slider to cover higher volume from the start."
            },
            {
              "q": "How does the Scale slider pricing work?",
              "a": "Scale already includes a generous baseline. If you need more, the slider shows what a custom volume would cost, scaling up smoothly rather than jumping to a flat enterprise number."
            },
            {
              "q": "How does yearly billing save money?",
              "a": "Yearly plans are billed once a year at a lower effective monthly rate than paying month to month."
            },
            {
              "q": "Can I switch between plans?",
              "a": "Yes. Upgrades apply immediately. Downgrades take effect at the end of your current billing cycle."
            }
          ]
        }
      ]
    }
  ],
  "final": {
    "title": "Start with the engine you need. Add the other one later.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "Back to Home",
        "href": "/",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
