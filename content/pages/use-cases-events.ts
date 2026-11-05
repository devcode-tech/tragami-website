import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/use-cases/events",
  "title": "Events & Experiential Marketing | Tragami",
  "description": "A real-world implementation of event marketing: a B2B exhibitor replaces the business-card fishbowl with a booth game that captures leads directly into Salesforce the same day.",
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
        "label": "Events & Experiential"
      }
    ],
    "eyebrow": "Events & Experiential Marketing",
    "title": "Replace the business-card fishbowl with a booth game that syncs to Salesforce same day.",
    "soon": "Coming soon",
    "subtitle": [
      "This use case is on our roadmap and not yet available to build in Tragami today. The implementation below shows how it's designed to work once it ships. Running a B2B giveaway today? See ",
      {
        "a": "B2B Events",
        "href": "/use-cases/b2b-events"
      },
      ", which is live."
    ],
    "body": "The fishbowl of business cards has always been a bad lead capture system, someone has to retype every card a week later, by which point the prospect has forgotten the conversation. A booth game fixes the capture problem and the delay problem at once.",
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
          "title": "Top-of-funnel for B2B, but the follow-up speed matters more than the mechanic.",
          "body": "Trade show leads are early-stage by nature. What determines whether they become a real pipeline is whether sales follows up in hours, not the week it usually takes to process a stack of cards.",
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
          "title": "How a B2B HVAC exhibitor turns booth traffic into same-day sales meetings.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "Meridian HVAC, B2B exhibitor at a regional contractor expo",
          "body": [
            {
              "k": "p",
              "v": "Meridian exhibits at a three-day regional contractor expo. Foot traffic is decent, but historically half the business cards collected never made it into a follow-up sequence before the trail went cold."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "A tablet at the booth runs a ",
                  {
                    "b": "spin-the-wheel game"
                  },
                  ": prizes range from branded merch to a free system inspection, entered by scanning the attendee's badge and confirming an email."
                ],
                "Badge scanning auto-fills name, company, and title, so the booth staff aren't typing anything, just handing over the tablet for ten seconds.",
                "A short optional question, \"What are you shopping for?\", tags the lead by product interest (residential, commercial, service contracts).",
                "The prize tier someone lands on doubles as a rough interest signal, someone who spins for \"book a consultation\" is a hotter lead than someone who just wants a sticker.",
                [
                  "Every entry pushes into Salesforce ",
                  {
                    "b": "the same day"
                  },
                  ", tagged \"Trade Show, Regional Contractor Expo,\" with the prize tier mapped to an initial lead score."
                ]
              ]
            },
            {
              "k": "h",
              "v": "What changed for the sales team"
            },
            {
              "k": "p",
              "v": "Reps started calling qualified leads the next morning instead of the following week, while the conversation from the booth was still fresh on the prospect's mind."
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
          "title": "B2B fields, not consumer giveaway fields.",
          "body": null,
          "center": false
        },
        {
          "type": "dataGrid",
          "chips": [
            {
              "label": "Name, email, company",
              "tag": "from badge scan"
            },
            {
              "label": "Job title / role",
              "tag": "from badge scan"
            },
            {
              "label": "Product interest",
              "tag": "optional field"
            },
            {
              "label": "Prize tier won",
              "tag": "interest proxy"
            },
            {
              "label": "Event & booth source",
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
          "title": "No re-typing badges. No week-long lag before follow-up.",
          "body": null,
          "center": false
        },
        {
          "type": "stackRows",
          "rows": [
            {
              "n": "01",
              "text": "Badge scan feeds directly into the campaign form, skipping manual data entry entirely."
            },
            {
              "n": "02",
              "text": [
                "Leads push into ",
                {
                  "b": "Salesforce"
                },
                " same day as a new lead record, source-tagged to the specific event."
              ]
            },
            {
              "n": "03",
              "text": [
                "Prize tier maps to an initial ",
                {
                  "b": "lead score"
                },
                ", so sales can prioritize the morning call list instead of working through cards in the order they were collected."
              ]
            },
            {
              "n": "04",
              "text": "Marketing sees total booth traffic versus qualified leads, useful for deciding whether that particular expo is worth exhibiting at again next year."
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
          "eyebrow": "What the post-event recap looks like",
          "title": "Booth traffic, qualified leads, and meetings booked, in one view.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.tragami.com/conversion/meridian-expo-recap",
          "head": [
            "Day",
            "Booth visitors",
            "Leads captured",
            "MQLs",
            "Meetings booked"
          ],
          "rows": [
            [
              "Day 1",
              "340",
              "198",
              "41",
              "9"
            ],
            [
              "Day 2",
              "410",
              "255",
              "58",
              "14"
            ],
            [
              "Day 3",
              "265",
              "171",
              "33",
              "7"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. MQLs here are leads whose prize tier or product-interest answer crossed a defined score threshold."
        }
      ]
    }
  ],
  "final": {
    "title": "Make your next event more than a headcount.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "See Distribution",
        "href": "/distribution",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
