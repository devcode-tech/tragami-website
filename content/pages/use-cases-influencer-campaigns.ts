import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/use-cases/influencer-campaigns",
  "title": "Influencer Campaigns | Tragami",
  "description": "A real-world implementation of influencer campaigns for e-commerce: capture emails through influencer giveaways, track redemptions with unique coupon codes, and calculate ROI and ROAS per creator all the way to purchase.",
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
        "label": "Influencer Campaigns"
      }
    ],
    "eyebrow": "Influencer Campaigns",
    "title": "Turn influencer reach into emails, coupon redemptions, and a real ROAS number.",
    "soon": null,
    "subtitle": null,
    "body": "The most common version of this use case is an e-commerce brand running a giveaway through a group of influencers, capturing emails at the top, and tracking every one of those emails through to a coupon-code purchase. Here's exactly how that's built.",
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
          "title": "Influencer campaigns touch three stages, not one.",
          "body": "Most teams think of influencer marketing as pure awareness. In practice, one campaign gives you a lead-capture moment, a purchase-tracking moment, and a retention moment, if it's built to capture data at each one.",
          "center": false
        },
        {
          "type": "funnel",
          "steps": [
            {
              "stage": "Stage 1",
              "label": "Awareness & entry",
              "active": true
            },
            {
              "stage": "Stage 2",
              "label": "Consideration",
              "active": true
            },
            {
              "stage": "Stage 3",
              "label": "Purchase",
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
          "title": "How a DTC skincare brand actually runs this.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "Bloom & Co., DTC skincare, Shopify store",
          "body": [
            {
              "k": "p",
              "v": "Bloom & Co. wants to grow its email list ahead of a seasonal sale and prove which influencers are worth rebooking. They partner with 12 micro-influencers (8,000 to 60,000 followers each)."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "Each influencer gets their ",
                  {
                    "b": "own tracked entry link"
                  },
                  " (tragami.com/bloom/via/mia) and their ",
                  {
                    "b": "own coupon code"
                  },
                  " (MIA20), generated from the same campaign."
                ],
                "The campaign is a gamified giveaway: entering with an email is the base action, and following Bloom's Instagram or sharing the post earns bonus entries.",
                "Every entrant, winner or not, receives their influencer's 20% coupon code by email immediately, so the campaign converts even for people who don't win anything.",
                "Influencers post the link in their Stories and bio for 7 to 10 days. Tragami's detection layer filters bot and duplicate entries before anyone touches the list.",
                "Coupon codes are unique per influencer, so when someone checks out on Shopify, the code itself tells you exactly which creator gets the credit."
              ]
            },
            {
              "k": "h",
              "v": "The result Bloom's team actually looks at"
            },
            {
              "k": "p",
              "v": "Not \"how many entries.\" A per-influencer breakdown of emails captured, coupon redemptions, revenue generated, and cost, so the next rebooking decision is based on ROAS, not follower count."
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
          "title": "What actually lands in your database.",
          "body": null,
          "center": false
        },
        {
          "type": "dataGrid",
          "chips": [
            {
              "label": "Email address",
              "tag": "required"
            },
            {
              "label": "Marketing consent",
              "tag": "required"
            },
            {
              "label": "Referring influencer",
              "tag": "auto-tagged"
            },
            {
              "label": "Instagram handle",
              "tag": "optional"
            },
            {
              "label": "First name",
              "tag": "optional"
            },
            {
              "label": "Coupon code assigned",
              "tag": "auto-tagged"
            },
            {
              "label": "Purchase status",
              "tag": "post-checkout"
            },
            {
              "label": "Order value",
              "tag": "post-checkout"
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
          "title": "It doesn't replace Shopify or Klaviyo. It feeds them.",
          "body": null,
          "center": false
        },
        {
          "type": "stackRows",
          "rows": [
            {
              "n": "01",
              "text": [
                {
                  "b": "Entry captured"
                },
                " on the campaign page, with the influencer source attached automatically from the tracked link."
              ]
            },
            {
              "n": "02",
              "text": [
                "New email pushed to ",
                {
                  "b": "Klaviyo or Mailchimp"
                },
                " as a segmented list (\"Bloom Giveaway, via Mia\"), so follow-up emails can be written per influencer if needed."
              ]
            },
            {
              "n": "03",
              "text": [
                "Coupon code lives in ",
                {
                  "b": "Shopify"
                },
                " as a normal discount code. No custom checkout work required."
              ]
            },
            {
              "n": "04",
              "text": [
                "A ",
                {
                  "b": "Shopify order webhook"
                },
                " fires back to Tragami whenever that code is used, matching the redemption to the original entry and influencer."
              ]
            },
            {
              "n": "05",
              "text": [
                "Revenue and redemption counts roll up into a ",
                {
                  "b": "per-influencer scorecard"
                },
                " your team checks before the next booking, not a spreadsheet someone rebuilds by hand."
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
          "eyebrow": "What the scorecard looks like",
          "title": "ROAS per influencer, not just entries per influencer.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.tragami.com/conversion/bloom-giveaway",
          "head": [
            "Influencer",
            "Coupon",
            "Emails captured",
            "Redemptions",
            "Revenue",
            "Fee paid",
            "ROAS"
          ],
          "rows": [
            [
              "Mia (62K)",
              "MIA20",
              "418",
              "61",
              "$3,110",
              "$400",
              "7.8x"
            ],
            [
              "Jordan (24K)",
              "JORDAN20",
              "205",
              "19",
              "$940",
              "$200",
              "4.7x"
            ],
            [
              "Priya (11K)",
              "PRIYA20",
              "96",
              "22",
              "$1,180",
              "$150",
              "7.9x"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. In practice this table updates live as redemptions come in from Shopify."
        }
      ]
    },
    {
      "tone": "wash",
      "blocks": [
        {
          "type": "head",
          "eyebrow": "Beyond one campaign",
          "title": "Turn it into an ongoing leaderboard.",
          "body": "Run this same structure every quarter and the per-influencer scorecard becomes a running leaderboard. Rebooking decisions stop being about vibes and follower count, and start being about who actually converts your audience.",
          "center": true
        }
      ]
    }
  ],
  "final": {
    "title": "Give your creators a campaign you can actually measure.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "See Channel",
        "href": "/channel",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
