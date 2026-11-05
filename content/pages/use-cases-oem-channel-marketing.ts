import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/use-cases/oem-channel-marketing",
  "title": "OEM & Channel Marketing | Tragami",
  "description": "A real-world implementation of OEM channel marketing: product registration and warranty campaigns distributed across an independent dealer network, with co-op spend tied to actual registrations by dealer.",
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
        "label": "OEM & Channel Marketing"
      }
    ],
    "eyebrow": "OEM & Channel Marketing",
    "title": "Know which dealer actually drove the registration, not just how many happened.",
    "soon": null,
    "subtitle": null,
    "body": "OEMs rarely sell direct. The real implementation challenge is running one campaign across hundreds of independent dealers who each have their own point of sale and none of whom will hand you their sales data.",
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
          "title": "This lives at the purchase-to-retention handoff.",
          "body": "The campaign usually launches the moment a customer buys, and its real value shows up afterward, in warranty registrations, service reminders, and knowing which dealer's marketing effort actually produced the sale.",
          "center": false
        },
        {
          "type": "funnel",
          "steps": [
            {
              "stage": "Stage 1",
              "label": "Awareness",
              "active": false
            },
            {
              "stage": "Stage 2",
              "label": "Consideration",
              "active": false
            },
            {
              "stage": "Stage 3",
              "label": "Purchase",
              "active": true
            },
            {
              "stage": "Stage 4",
              "label": "Retention & service",
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
          "title": "How a lawn equipment OEM runs this across 340 dealers.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "Ridgeline Power Equipment, OEM, independent dealer network",
          "body": [
            {
              "k": "p",
              "v": "Ridgeline sells mowers and trimmers through 340 independently owned dealers. Ridgeline doesn't have access to any dealer's point-of-sale system, and never will. It still needs to know who's buying, register warranties, and see which dealers' local marketing is working."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "Each dealer gets a ",
                  {
                    "b": "co-branded microsite and QR code"
                  },
                  " to hand customers at checkout: \"Register your mower, get a free maintenance kit.\""
                ],
                "The QR code is unique per dealer, so a scan at Miller's Outdoor Power in Ohio is attributed differently than one at Frontline Equipment in Texas, automatically.",
                "The registration form captures the product model, serial number, purchase date, and customer contact details, all fields Ridgeline's service team actually needs.",
                "No point-of-sale integration is required anywhere in this flow. Attribution comes entirely from which dealer's tracked link or QR code was used.",
                "Dealers running co-op-funded local ads (Facebook, local paper, radio) get their own campaign link for that spend specifically, separate from their in-store QR code."
              ]
            },
            {
              "k": "h",
              "v": "What Ridgeline gets that it didn't have before"
            },
            {
              "k": "p",
              "v": "A registration count and a co-op cost-per-registration, by dealer, without ever touching a dealer's sales system. That's the whole point: attribution without requiring POS access nobody was going to grant anyway."
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
          "title": "Built around what a service and warranty team actually needs.",
          "body": null,
          "center": false
        },
        {
          "type": "dataGrid",
          "chips": [
            {
              "label": "Customer name & email",
              "tag": "required"
            },
            {
              "label": "Phone number",
              "tag": "for service reminders"
            },
            {
              "label": "ZIP code",
              "tag": "dealer matching"
            },
            {
              "label": "Product model & serial number",
              "tag": "required"
            },
            {
              "label": "Purchase date",
              "tag": "warranty window"
            },
            {
              "label": "Originating dealer",
              "tag": "auto-tagged"
            },
            {
              "label": "Campaign source (QR vs. co-op ad)",
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
          "title": "Registrations flow to service. Attribution flows to marketing.",
          "body": null,
          "center": false
        },
        {
          "type": "stackRows",
          "rows": [
            {
              "n": "01",
              "text": "Customer scans the dealer's QR code or lands on the dealer's tracked link at checkout or in a co-op ad."
            },
            {
              "n": "02",
              "text": [
                "Registration data pushes into ",
                {
                  "b": "Ridgeline's Salesforce"
                },
                " instance as a new record, tagged with the originating dealer and campaign, triggering the service team's warranty and maintenance-reminder workflow."
              ]
            },
            {
              "n": "03",
              "text": [
                "Dealer-level counts roll up into a ",
                {
                  "b": "channel scorecard"
                },
                " that Ridgeline's marketing team uses to justify or adjust co-op fund allocation each quarter."
              ]
            },
            {
              "n": "04",
              "text": "Dealers themselves can see their own registration count through a shared, permissioned view, without seeing any other dealer's numbers."
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
          "eyebrow": "What the dealer scorecard looks like",
          "title": "Cost per registration, by dealer and by channel.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.tragami.com/channel/ridgeline-dealers",
          "head": [
            "Dealer",
            "Source",
            "Registrations",
            "Co-op spend",
            "Cost / registration"
          ],
          "rows": [
            [
              "Miller's Outdoor Power, OH",
              "in-store QR",
              "212",
              "$0",
              "$0.00"
            ],
            [
              "Frontline Equipment, TX",
              "local FB co-op",
              "88",
              "$620",
              "$7.05"
            ],
            [
              "Northgate Mowers, WI",
              "in-store QR",
              "146",
              "$0",
              "$0.00"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. In-store QR registrations show real intent at no incremental cost, while co-op numbers let Ridgeline evaluate paid spend by dealer."
        }
      ]
    }
  ],
  "final": {
    "title": "Know which partners are actually driving demand.",
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
