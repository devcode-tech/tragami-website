import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/use-cases/agencies",
  "title": "Agencies | Tragami",
  "description": "A real-world implementation of Tragami for agencies: run separate, branded campaigns for multiple clients from one workspace, with each client's data flowing into their own systems.",
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
        "label": "Agencies"
      }
    ],
    "eyebrow": "Agencies",
    "title": "Six clients. Six brands. One afternoon to launch each campaign.",
    "soon": null,
    "subtitle": null,
    "body": "The real bottleneck for agencies isn't ideas, it's rebuilding the same campaign infrastructure for every new client. Here's how a small growth agency runs six accounts without six separate toolchains.",
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
          "title": "Wherever the client's own funnel needs it.",
          "body": "An agency's use case spans the entire funnel, because it depends entirely on what each individual client is trying to do that quarter. What stays constant is the agency's own operational workflow underneath.",
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
              "active": true
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
          "title": "How a 15-person growth agency runs six client accounts.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "Pixel & Pine, 15-person growth agency, 6 CPG and retail clients",
          "body": [
            {
              "k": "p",
              "v": "Pixel & Pine runs giveaway and lead-gen campaigns for six different retail and CPG clients at once. Each client has different branding, different consent requirements, and different reporting expectations."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "Each client gets their own ",
                  {
                    "b": "workspace"
                  },
                  " inside one Pixel & Pine account, brand colors, logo, and consent language set once per client and reused across all their campaigns."
                ],
                [
                  "New campaigns for an existing client start from a ",
                  {
                    "b": "saved template"
                  },
                  ", so launching client #4's spring giveaway takes an afternoon instead of a week."
                ],
                "Consent and data handling language is stored per client, so nobody accidentally launches Client A's campaign with Client B's privacy policy pasted in.",
                [
                  "Each client's leads flow into ",
                  {
                    "b": "that client's own CRM or ESP"
                  },
                  ", not Pixel & Pine's, the agency operates the campaign, but the client owns their data."
                ],
                "Pixel & Pine's own dashboard rolls up performance across all six accounts, which is what account managers actually use in weekly client calls."
              ]
            },
            {
              "k": "h",
              "v": "Why this matters to the agency's bottom line"
            },
            {
              "k": "p",
              "v": "Time to launch is the thing that limits how many clients an agency can service well. Cutting it from a week to an afternoon is the difference between six accounts and ten."
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
          "title": "Varies by client, isolated by design.",
          "body": null,
          "center": false
        },
        {
          "type": "dataGrid",
          "chips": [
            {
              "label": "Email & consent",
              "tag": "every client"
            },
            {
              "label": "Client-specific custom fields",
              "tag": "per brand"
            },
            {
              "label": "Campaign source & channel",
              "tag": "auto-tagged"
            },
            {
              "label": "Client-scoped consent language",
              "tag": "per workspace"
            },
            {
              "label": "Gamified action history",
              "tag": "where used"
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
          "title": "The agency operates it. The client's stack owns the data.",
          "body": null,
          "center": false
        },
        {
          "type": "stackRows",
          "rows": [
            {
              "n": "01",
              "text": [
                "Each client workspace connects to ",
                {
                  "b": "that client's own CRM or ESP"
                },
                ", HubSpot for one, Klaviyo for another, whatever they already run."
              ]
            },
            {
              "n": "02",
              "text": [
                "Account managers get a ",
                {
                  "b": "cross-client dashboard"
                },
                " inside Pixel & Pine's own account for weekly reporting, without needing to log into six separate client logins."
              ]
            },
            {
              "n": "03",
              "text": [
                "New team members get access ",
                {
                  "b": "per client"
                },
                ", so a freelancer working on one account can't see another client's data by accident."
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
          "eyebrow": "What the agency's own dashboard looks like",
          "title": "Every account, one screen, for the Monday status call.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.tragami.com/agency/pixel-and-pine",
          "head": [
            "Client",
            "Active campaign",
            "Entries",
            "Time to launch"
          ],
          "rows": [
            [
              "Client A, DTC coffee",
              "spring-giveaway",
              "2,140",
              "4 hrs"
            ],
            [
              "Client B, retail apparel",
              "refer-a-friend",
              "960",
              "1 day"
            ],
            [
              "Client C, CPG snacks",
              "product-launch",
              "3,420",
              "6 hrs"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. \"Time to launch\" is the metric agencies track most closely once templates are in place."
        }
      ]
    }
  ],
  "final": {
    "title": "Run every client's campaign from one account.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "See Conversion",
        "href": "/conversion",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
