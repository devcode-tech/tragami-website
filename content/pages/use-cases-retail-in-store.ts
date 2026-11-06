import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/use-cases/retail-in-store",
  "title": "Retail & In-Store | Tragami",
  "description": "A real-world implementation of in-store campaigns: unique QR codes per store and per employee, capturing email and SMS for loyalty campaigns and high-ticket sales follow-up. No hardware or POS integration required.",
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
        "label": "Retail & In-Store"
      }
    ],
    "eyebrow": "Retail & In-Store",
    "title": "One QR code per store, one per employee if you want it, no hardware from us either way.",
    "soon": null,
    "subtitle": null,
    "body": "Every store gets a unique QR code and link. What you do with it, print it as a poster, tape it to the register, add it to a receipt template you already have, is entirely up to you. We don't sell or integrate with POS hardware. We just generate the code, capture email and SMS behind it, and tell you exactly which store, and optionally which employee, it came from.",
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
          "title": "The moment someone is already standing in your store.",
          "body": "This isn't cold-audience awareness. It's converting attention you already earned, foot traffic, into a channel you can follow up on, whether that's a quick-turn loyalty signup or a considered, high-ticket purchase that closes weeks later.",
          "center": false
        },
        {
          "type": "funnel",
          "steps": [
            {
              "stage": "Stage 1",
              "label": "In-store awareness",
              "active": true
            },
            {
              "stage": "Stage 2",
              "label": "List & loyalty capture",
              "active": true
            },
            {
              "stage": "Stage 3",
              "label": "Purchase & follow-up",
              "active": true
            },
            {
              "stage": "Stage 4",
              "label": "Retention & repeat visits",
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
          "title": "How a 22-location taco chain runs a location-vs-location competition.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "Casa Verde Tacos, 22-location fast-casual chain",
          "body": [
            {
              "k": "p",
              "v": "Casa Verde wants two things at once: more SMS subscribers ahead of a menu launch, and a reason for each location's staff to care about hitting a number, the way a leaderboard makes a sales floor competitive."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "Casa Verde generates a ",
                  {
                    "b": "location-specific QR code"
                  },
                  " for each of its 22 stores from Tragami. What that code gets printed on is entirely their call, they choose table tents and a small register sticker. Tragami doesn't supply or touch any of that hardware."
                ],
                "Entrants submit an email and phone number (SMS opt-in), an optional photo of their meal, and their location, the location is pre-filled from the QR code itself, not self-reported.",
                "The campaign adds bonus entries for following on Instagram or referring a friend who also enters.",
                "A live leaderboard shows entries by location, refreshed daily, so the Round Rock, TX location can see it's ahead of Cedar Park by 40 entries with three days left.",
                "The winning location gets a team lunch funded by corporate and a feature on Casa Verde's Instagram, an incentive staff at that location actually feel."
              ]
            },
            {
              "k": "h",
              "v": "What Casa Verde walks away with"
            },
            {
              "k": "p",
              "v": "A larger email and SMS list, segmented by home location from day one, plus real signal on which locations under-index on customer participation relative to foot traffic, useful for deciding where to focus staff training next."
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
          "eyebrow": "Also works for high-ticket retail",
          "title": "When the sale doesn't close today, the follow-up is everything.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "Harlow & Rowe, furniture and mattress showroom, 6 locations",
          "body": [
            {
              "k": "p",
              "v": "Most furniture shoppers don't buy on their first visit. Harlow & Rowe's sales associates need a fast way to capture a browsing customer's details without an awkward handwritten form, and a clear record of which associate actually spent time with them."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "Each showroom has its own QR code, and each ",
                  {
                    "b": "sales associate has their own personal code"
                  },
                  " as well, printed on a small badge or business card they hand over during the conversation."
                ],
                "A customer scans the associate's code, not the generic store code, so the lead is attributed to the person who actually did the work, not just the building.",
                "The form takes email and phone in under fifteen seconds, plus an optional note field the associate can fill in later (\"interested in the Ashford sectional, wants it in charcoal\").",
                [
                  "The captured lead lands in Harlow & Rowe's own CRM, tagged with store, associate, and product interest. ",
                  {
                    "b": "Tragami does not send any follow-up emails or texts itself."
                  },
                  " The associate, or the store's own marketing tool, does that follow-up."
                ]
              ]
            },
            {
              "k": "h",
              "v": "Why the employee-level detail matters here"
            },
            {
              "k": "p",
              "v": "On a high-ticket floor, commission and follow-up ownership both depend on knowing exactly which associate earns credit for a lead. A store-level QR code alone can't answer that. A personal one can."
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
          "title": "Email and SMS both, plus who gets the credit.",
          "body": null,
          "center": false
        },
        {
          "type": "dataGrid",
          "chips": [
            {
              "label": "Email address",
              "tag": "captured"
            },
            {
              "label": "Phone number",
              "tag": "SMS opt-in"
            },
            {
              "label": "Home location",
              "tag": "auto-tagged from QR"
            },
            {
              "label": "Attributed employee",
              "tag": "auto-tagged, optional"
            },
            {
              "label": "Product or interest notes",
              "tag": "optional field"
            },
            {
              "label": "Birthday",
              "tag": "for birthday club"
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
          "title": "We hand you a code and the data behind it. Everything else stays yours.",
          "body": null,
          "center": false
        },
        {
          "type": "stackRows",
          "rows": [
            {
              "n": "01",
              "text": [
                "Tragami generates a unique QR code and link ",
                {
                  "b": "per store, and per employee if you want it"
                },
                ". Printing it on a poster, a register sticker, or a receipt template you already have is on you, we don't sell or set up any hardware."
              ]
            },
            {
              "n": "02",
              "text": [
                "Email addresses and phone numbers sync into ",
                {
                  "b": "your own ESP and SMS platform"
                },
                " (Klaviyo, Attentive, Podium, or whatever you already run), pre-tagged by store and, where used, by employee."
              ]
            },
            {
              "n": "03",
              "text": [
                {
                  "b": "Tragami doesn't send marketing emails or texts."
                },
                " We capture and attribute the lead, then it's your team, or your store staff directly for high-ticket follow-up, who does the outreach."
              ]
            },
            {
              "n": "04",
              "text": [
                "Loyalty-eligible entries can push into your existing ",
                {
                  "b": "loyalty program"
                },
                " as a new member record if one already exists."
              ]
            },
            {
              "n": "05",
              "text": [
                "Store managers see a ",
                {
                  "b": "permissioned leaderboard"
                },
                ", their own store's and employees' numbers, not the full chain-wide customer database."
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
          "eyebrow": "What the location leaderboard looks like",
          "title": "A number every store manager can see themselves in.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.tragami.com/conversion/casa-verde-showdown",
          "head": [
            "Location",
            "Entries",
            "New SMS subscribers",
            "Redemption rate"
          ],
          "rows": [
            [
              "Round Rock, TX",
              "612",
              "540",
              "38%"
            ],
            [
              "Cedar Park, TX",
              "571",
              "498",
              "34%"
            ],
            [
              "South Congress, TX",
              "289",
              "240",
              "22%"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. South Congress's lower redemption rate relative to entries is exactly the kind of signal that prompts a follow-up conversation with that location's team."
        }
      ]
    },
    {
      "tone": "wash",
      "blocks": [
        {
          "type": "head",
          "eyebrow": "What employee-level attribution looks like",
          "title": "Useful the moment commission or follow-up ownership is on the line.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.tragami.com/conversion/harlow-rowe-leads",
          "head": [
            "Associate",
            "Store",
            "Leads captured",
            "Consent rate"
          ],
          "rows": [
            [
              "Danielle P.",
              "Harlow & Rowe, North",
              "38",
              "92%"
            ],
            [
              "Marcus T.",
              "Harlow & Rowe, North",
              "24",
              "88%"
            ],
            [
              "Sam K.",
              "Harlow & Rowe, Westside",
              "31",
              "95%"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. This is the exact view a sales manager checks before deciding who follows up on which lead."
        }
      ]
    }
  ],
  "final": {
    "title": "Give every location a number worth competing over.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "See Multi-Location",
        "href": "/use-cases/multi-location",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
