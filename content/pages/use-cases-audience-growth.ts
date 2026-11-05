import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/use-cases/audience-growth",
  "title": "Community & Audience Growth | Tragami",
  "description": "A real-world implementation of audience growth campaigns: a craft beverage brand builds its Discord community and email list ahead of a taproom opening using stacked gamified actions.",
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
        "label": "Community & Audience Growth"
      }
    ],
    "eyebrow": "Community & Audience Growth",
    "title": "Stack small actions until \"join our list\" becomes \"join our community.\"",
    "soon": "Coming soon",
    "subtitle": "This use case is on our roadmap and not yet available to build in Tragami today. The implementation below shows how it's designed to work once it ships.",
    "body": "A single email opt-in gets you an email. Stacking gamified actions, join the Discord, follow the account, refer a friend, gets you a warmer, more connected audience before you've even opened your doors.",
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
          "title": "Pure top-of-funnel, built to survive past the first email.",
          "body": "This use case usually runs before there's anything to sell yet, a taproom that hasn't opened, a product that hasn't shipped. The goal isn't a transaction, it's a community that's still there and engaged once there is one.",
          "center": false
        },
        {
          "type": "funnel",
          "steps": [
            {
              "stage": "Stage 1",
              "label": "Awareness",
              "active": true
            },
            {
              "stage": "Stage 2",
              "label": "Community building",
              "active": true
            },
            {
              "stage": "Stage 3",
              "label": "Purchase",
              "active": false
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
          "title": "How a craft beverage brand built a founding community before opening day.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "The Local Pour, craft beverage brand, pre-launch taproom",
          "body": [
            {
              "k": "p",
              "v": "The Local Pour is three months from opening its first taproom and wants a \"founding member\" community in place before the doors open, not a cold list it has to build from scratch on launch week."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "A single landing page offers entry into a \"Founding Member\" raffle for a year of free drinks, but each additional action stacks more entries: ",
                  {
                    "b": "join the Discord (+3)"
                  },
                  ", follow Instagram (+1), refer a friend (+2 per referral)."
                ],
                "The Discord becomes the actual community, not just a badge to collect, early members get named cocktails, first look at the menu, and input on the opening event.",
                "Referrals are tracked per member, so the people who bring in the most friends can be recognized publicly on opening night, a real-world reward for a digital action.",
                "Weekly teaser content, menu previews, construction updates, keeps the list warm for three months instead of going cold after the first email."
              ]
            },
            {
              "k": "h",
              "v": "What this replaces"
            },
            {
              "k": "p",
              "v": "A plain \"sign up for updates\" form that produces an email list nobody opens by the time the taproom actually opens. Stacked actions produce people who already feel like insiders before day one."
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
          "title": "Built to identify your most engaged people, not just your biggest list.",
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
              "label": "Discord handle",
              "tag": "from join action"
            },
            {
              "label": "Instagram handle",
              "tag": "from follow action"
            },
            {
              "label": "Referral count & chain",
              "tag": "auto-tracked"
            },
            {
              "label": "Entry source",
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
          "title": "The community lives on Discord. The list lives in your ESP. Both stay in sync.",
          "body": null,
          "center": false
        },
        {
          "type": "stackRows",
          "rows": [
            {
              "n": "01",
              "text": [
                "Discord join events connect through ",
                {
                  "b": "Zapier"
                },
                ", so a new community member is automatically tagged \"Founding Member\" back in the campaign."
              ]
            },
            {
              "n": "02",
              "text": [
                "New members sync into ",
                {
                  "b": "Mailchimp"
                },
                " with that same tag, keeping the weekly teaser emails scoped to people who've actually opted in."
              ]
            },
            {
              "n": "03",
              "text": "The referral leaderboard is visible to the team running the campaign, so the top referrers can be identified and thanked publicly at the opening event."
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
          "eyebrow": "What the campaign dashboard looks like",
          "title": "Entries broken down by which action actually drove them.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.tragami.com/conversion/local-pour-founding",
          "head": [
            "Action",
            "Members who completed it",
            "Entries generated"
          ],
          "rows": [
            [
              "Email signup (base entry)",
              "2,340",
              "2,340"
            ],
            [
              "Joined Discord",
              "1,120",
              "3,360"
            ],
            [
              "Referred a friend",
              "640",
              "1,480"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. Discord joins outweighing plain follows is exactly the signal that tells The Local Pour their community angle, not just their prize, is what's working."
        }
      ]
    }
  ],
  "final": {
    "title": "Reward the actions that actually grow your brand.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "See Conversion Giveaways",
        "href": "/conversion-giveaways",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
