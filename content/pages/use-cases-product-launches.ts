import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/use-cases/product-launches",
  "title": "Product Launches | Tragami",
  "description": "A real-world implementation of product launch campaigns: a DTC brand builds a referral-powered waitlist ahead of launch day, then converts that list with tiered early-access codes.",
  "hero": {
    "crumbs": [
      {
        "label": "Tragami",
        "href": "/"
      },
      {
        "label": "Use Cases"
      },
      {
        "label": "Product Launches"
      }
    ],
    "eyebrow": "Product Launches",
    "title": "A waitlist that moves people up when they bring a friend, not just a static sign-up form.",
    "soon": "Coming soon",
    "subtitle": "This use case is on our roadmap and not yet available to build in Tragami today. The implementation below shows how it's designed to work once it ships.",
    "body": "Referrals turn a waitlist into its own distribution channel. The queue-jump mechanic gives people an actual reason to share, instead of just registering interest and forgetting about it.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      }
    ]
  },
  "sections": [
    {
      "tone": "plain",
      "blocks": [
        {
          "type": "head",
          "eyebrow": "Where this fits",
          "title": "Weeks before launch day is when this pays off.",
          "body": "The list you build in the six weeks before launch determines how strong day one looks. This use case is entirely about the awareness-to-consideration window, before there's even a product to buy yet.",
          "center": false
        },
        {
          "type": "funnel",
          "steps": [
            {
              "stage": "Stage 1",
              "label": "Pre-launch awareness",
              "active": true
            },
            {
              "stage": "Stage 2",
              "label": "Waitlist & referral",
              "active": true
            },
            {
              "stage": "Stage 3",
              "label": "Launch day purchase",
              "active": true
            },
            {
              "stage": "Stage 4",
              "label": "Retention",
              "active": false
            }
          ]
        }
      ]
    },
    {
      "tone": "wash",
      "blocks": [
        {
          "type": "head",
          "eyebrow": "Real-world implementation",
          "title": "How a DTC headphone brand built 14,000 waitlist signups before launch.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "Nova Audio, DTC headphone brand, new model launch",
          "body": [
            {
              "k": "p",
              "v": "Nova Audio has a new headphone model six weeks out and no existing list for it. Instead of a plain \"notify me\" form, they build a referral-powered waitlist where your position depends on who you bring with you."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "Signing up with an email puts you on the waitlist at your current position. Referring a friend who also signs up moves you ",
                  {
                    "b": "up the queue"
                  },
                  ", a visible, gamified incentive to share."
                ],
                "A short preference survey asks about color and use case (commute, gym, studio), data Nova's product team actually uses to plan initial inventory splits.",
                "A handful of early-access unboxing units go to influencers in week one, seeding the initial wave of referral traffic into the waitlist.",
                [
                  "On launch day, the top 500 referrers get a ",
                  {
                    "b": "same-day priority access code"
                  },
                  ", everyone else gets access and a smaller discount code on a staggered schedule over the following week."
                ],
                "SMS opt-in at signup means launch-day notifications land as texts, not emails that get buried."
              ]
            },
            {
              "k": "h",
              "v": "Why it beat a plain waitlist"
            },
            {
              "k": "p",
              "v": "A static \"notify me\" form has no reason to be shared. A queue people can move up does, and that's the entire difference between a list that grows on its own and one that only grows from paid traffic."
            }
          ]
        }
      ]
    },
    {
      "tone": "plain",
      "blocks": [
        {
          "type": "head",
          "eyebrow": "First-party data captured",
          "title": "Useful for both marketing and inventory planning.",
          "body": null,
          "center": false
        },
        {
          "type": "dataGrid",
          "chips": [
            {
              "label": "Email",
              "tag": "required"
            },
            {
              "label": "Phone number",
              "tag": "for launch-day SMS"
            },
            {
              "label": "Referral count & queue position",
              "tag": "auto-tracked"
            },
            {
              "label": "Color preference",
              "tag": "survey field"
            },
            {
              "label": "Primary use case",
              "tag": "survey field"
            },
            {
              "label": "Referral source",
              "tag": "auto-tagged"
            },
            {
              "label": "Marketing consent",
              "tag": "required"
            }
          ]
        }
      ]
    },
    {
      "tone": "wash",
      "blocks": [
        {
          "type": "head",
          "eyebrow": "How it connects to your existing stack",
          "title": "The waitlist feeds the exact automation launch day depends on.",
          "body": null,
          "center": false
        },
        {
          "type": "stackRows",
          "rows": [
            {
              "n": "01",
              "text": [
                "Waitlist signups sync to ",
                {
                  "b": "Klaviyo"
                },
                " in real time, tagged with referral count so segments like \"top 500 referrers\" can be built before launch day, not scrambled together at the last minute."
              ]
            },
            {
              "n": "02",
              "text": [
                "A pre-built ",
                {
                  "b": "launch day flow"
                },
                " in the ESP fires based on queue tier, priority access code to the top segment, staggered codes to everyone else."
              ]
            },
            {
              "n": "03",
              "text": [
                "Color and use-case survey data exports to the product team ahead of the ",
                {
                  "b": "initial inventory buy"
                },
                ", well before a single unit ships."
              ]
            }
          ]
        }
      ]
    },
    {
      "tone": "plain",
      "blocks": [
        {
          "type": "head",
          "eyebrow": "What the launch recap looks like",
          "title": "Waitlist traffic converts differently than cold traffic.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.gamiflow.com/conversion/nova-launch-recap",
          "head": [
            "Segment",
            "List size",
            "Launch day conversion",
            "Revenue"
          ],
          "rows": [
            [
              "Top 500 referrers",
              "500",
              "61%",
              "$45,750"
            ],
            [
              "Rest of waitlist",
              "13,500",
              "14%",
              "$283,500"
            ],
            [
              "Cold ad traffic",
              "n/a",
              "2.1%",
              "$61,000"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. The gap between the top-referrer conversion rate and cold traffic is the entire case for building the list before launch day rather than after."
        }
      ]
    }
  ],
  "final": {
    "title": "Have an audience ready before the product is.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "See Audience Growth",
        "href": "/use-cases/audience-growth",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
