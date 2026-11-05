import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/use-cases/multi-location",
  "title": "Multi-Location Marketing | Tragami",
  "description": "A real-world implementation of multi-location marketing: a 40-location gym franchise runs one national trial campaign while routing each lead to the right local front desk.",
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
        "label": "Multi-Location Marketing"
      }
    ],
    "eyebrow": "Multi-Location Marketing",
    "title": "One national campaign. Every lead routed to the right front desk.",
    "soon": null,
    "subtitle": null,
    "body": "The hard part of multi-location marketing isn't running the campaign once, it's making sure a lead from the Round Rock ad ends up in front of Round Rock's staff, not buried in one national inbox.",
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
          "title": "Awareness at the national level, follow-up at the local level.",
          "body": "The ad spend and creative are usually centralized. The actual conversion, a trial sign-up, a booked appointment, happens locally, and needs to land with the right team the same day.",
          "center": false
        },
        {
          "type": "funnel",
          "steps": [
            {
              "stage": "Stage 1",
              "label": "Local awareness",
              "active": true
            },
            {
              "stage": "Stage 2",
              "label": "Trial signup",
              "active": true
            },
            {
              "stage": "Stage 3",
              "label": "Conversion",
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
          "title": "How a 40-location gym franchise runs one campaign, everywhere.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "Ironclad Fitness, 40-location gym franchise",
          "body": [
            {
              "k": "p",
              "v": "Ironclad runs a \"Free Week Challenge\" nationally, but each of its 40 locations is independently staffed, and only the local team can actually follow up on a trial sign-up."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "Marketing builds ",
                  {
                    "b": "one campaign template"
                  },
                  " centrally, then generates a unique tracked link per location, embedded in each location's local Facebook ads, flyers, and window signage."
                ],
                "The sign-up form asks for name, email, phone, and a custom field for fitness goal, useful context for the trainer doing the follow-up call.",
                "Because the location is baked into the link, there's no dropdown for \"choose your gym\", one less step for a mobile user to abandon.",
                "Each location's owner or manager gets a permissioned view showing only their own leads and trial-start numbers, not the other 39 locations.",
                "Corporate marketing sees the roll-up across all locations, to compare cost per trial and cost per membership by market."
              ]
            },
            {
              "k": "h",
              "v": "What changes operationally"
            },
            {
              "k": "p",
              "v": "Front desk staff get same-day leads tagged to their location automatically, instead of a weekly national spreadsheet somebody has to sort and forward. Follow-up happens faster because it doesn't have to wait for someone else to route it."
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
          "title": "Enough for the front desk to make a useful call.",
          "body": null,
          "center": false
        },
        {
          "type": "dataGrid",
          "chips": [
            {
              "label": "Name & email",
              "tag": "required"
            },
            {
              "label": "Phone number",
              "tag": "required"
            },
            {
              "label": "Home ZIP code",
              "tag": "optional"
            },
            {
              "label": "Fitness goal",
              "tag": "custom field"
            },
            {
              "label": "Location",
              "tag": "auto-tagged from link"
            },
            {
              "label": "Ad source (Facebook, flyer, signage)",
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
          "title": "Every location's CRM view, one national rollup.",
          "body": null,
          "center": false
        },
        {
          "type": "stackRows",
          "rows": [
            {
              "n": "01",
              "text": [
                "Lead lands in ",
                {
                  "b": "HubSpot"
                },
                " (or the franchise's CRM of choice) tagged with the specific location, not just \"Ironclad Fitness\" generically."
              ]
            },
            {
              "n": "02",
              "text": [
                "A workflow rule assigns the lead to that ",
                {
                  "b": "location's own contact owner"
                },
                ", so the right person gets notified, not a shared national queue."
              ]
            },
            {
              "n": "03",
              "text": "Trial-to-membership conversion, once logged in the gym's membership system, can be matched back to the original campaign source for cost-per-member reporting."
            },
            {
              "n": "04",
              "text": [
                "Corporate marketing views a ",
                {
                  "b": "rolled-up scorecard"
                },
                " across all 40 locations without needing access to any single location's day-to-day CRM."
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
          "eyebrow": "What the location scorecard looks like",
          "title": "Cost per member, not just leads per market.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.tragami.com/conversion/ironclad-free-week",
          "head": [
            "Location",
            "Leads",
            "Trial starts",
            "Memberships",
            "Cost / member"
          ],
          "rows": [
            [
              "Ironclad Denton",
              "184",
              "96",
              "31",
              "$42"
            ],
            [
              "Ironclad Frisco",
              "211",
              "103",
              "24",
              "$58"
            ],
            [
              "Ironclad Plano",
              "140",
              "61",
              "19",
              "$51"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. Frisco's higher lead volume with a lower conversion rate is exactly the kind of gap a location-level view surfaces that a single national number would hide."
        }
      ]
    }
  ],
  "final": {
    "title": "Measure every location like it's its own campaign.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "See Retail & In-Store",
        "href": "/use-cases/retail-in-store",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
