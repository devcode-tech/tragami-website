import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/use-cases/b2b-events",
  "title": "B2B Events | Tragami",
  "description": "A real-world implementation of B2B event giveaways: a simple email-only entry form, scored automatically by the signup's email domain, so a lead from microsoft.com gets called before a lead from a personal gmail address.",
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
        "label": "B2B Events"
      }
    ],
    "eyebrow": "B2B Events",
    "title": "One email field. A lead score that tells sales who to call first.",
    "soon": null,
    "subtitle": null,
    "body": "You don't need a long form to qualify a B2B lead at an event. The email address alone, specifically the domain after the @, already tells you a lot. A signup from microsoft.com deserves a callback today. A signup from a personal gmail address can wait for the follow-up sequence.",
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
          "title": "Top-of-funnel, but with the qualification step built in from entry one.",
          "body": "Most event giveaways treat every entry the same until someone on the sales team manually looks each one up later. This use case moves that judgment call to the moment of signup, automatically.",
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
              "label": "Lead scoring & qualification",
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
          "title": "How a B2B SaaS exhibitor prioritizes 600 giveaway entries without reading a single one by hand.",
          "body": null,
          "center": false
        },
        {
          "type": "scenario",
          "badge": "Fieldstack, workforce scheduling software, booth at a regional operations conference",
          "body": [
            {
              "k": "p",
              "v": "Fieldstack runs a simple giveaway at its booth, \"Enter your work email to win a pair of noise-cancelling headphones.\" No company name field, no job title dropdown, no phone number. Just an email address, because every extra field costs entries."
            },
            {
              "k": "h",
              "v": "The setup"
            },
            {
              "k": "ol",
              "v": [
                [
                  "The entry form asks for one thing: a ",
                  {
                    "b": "work email address"
                  },
                  ". Fewer fields means more entries, and the email domain alone is enough to work with."
                ],
                [
                  "The moment an entry comes in, Tragami checks the domain after the @ against a scoring list: ",
                  {
                    "b": "known enterprise domains"
                  },
                  " (microsoft.com, salesforce.com, and similar recognizable companies) score highest, ",
                  {
                    "b": "business domains"
                  },
                  " that aren't free email providers score medium, and ",
                  {
                    "b": "personal domains"
                  },
                  " (gmail.com, yahoo.com, icloud.com) score lowest."
                ],
                "Every entry lands in a live queue sorted by score, so the Fieldstack team can see at a glance which signups are worth a same-day call.",
                "A signup from someone@microsoft.com jumps straight to the top of that queue. A signup from someone@gmail.com still gets followed up on, just not before the higher-priority names.",
                "No job title, no phone number, no extra friction, the domain alone is doing the qualification work that a five-field form used to do worse."
              ]
            },
            {
              "k": "h",
              "v": "Why this beats a longer form"
            },
            {
              "k": "p",
              "v": "A longer form filters out casual entrants before they ever sign up, which also filters out real prospects who just don't want to fill out five fields at a trade show booth. One email field maximizes entries. Domain-based scoring recovers the qualification a longer form was trying to buy in the first place."
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
          "title": "Deliberately minimal. The score does the rest.",
          "body": null,
          "center": false
        },
        {
          "type": "dataGrid",
          "chips": [
            {
              "label": "Work email address",
              "tag": "only required field"
            },
            {
              "label": "Email domain",
              "tag": "auto-extracted"
            },
            {
              "label": "Inferred company",
              "tag": "auto-enriched from domain"
            },
            {
              "label": "Lead score",
              "tag": "auto-calculated"
            },
            {
              "label": "Event source",
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
          "title": "The score travels with the lead into your CRM.",
          "body": null,
          "center": false
        },
        {
          "type": "stackRows",
          "rows": [
            {
              "n": "01",
              "text": [
                "Every entry is checked against a ",
                {
                  "b": "domain scoring list"
                },
                " the moment it's submitted, no manual lookups, no waiting for enrichment tools to catch up."
              ]
            },
            {
              "n": "02",
              "text": [
                "Leads push into ",
                {
                  "b": "Salesforce or HubSpot"
                },
                " with the lead score attached as a field, so your existing lead-routing rules can act on it immediately."
              ]
            },
            {
              "n": "03",
              "text": [
                "Sales sees a ",
                {
                  "b": "sorted queue"
                },
                " instead of a flat list, so the first calls of the morning go to the highest-value domains, not whoever happened to enter first."
              ]
            },
            {
              "n": "04",
              "text": "You control the scoring list, which domains count as high-priority is something your team sets and can update, not a fixed rule you're stuck with."
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
          "eyebrow": "What the sorted lead queue looks like",
          "title": "Highest priority at the top, automatically, before anyone reads a single entry.",
          "body": null,
          "center": false
        },
        {
          "type": "table",
          "url": "app.gamiflow.com/conversion/fieldstack-expo-queue",
          "head": [
            "Email",
            "Inferred company",
            "Domain type",
            "Lead score",
            "Priority"
          ],
          "rows": [
            [
              "j.reyes@microsoft.com",
              "Microsoft",
              "enterprise",
              "98",
              "Call today"
            ],
            [
              "d.chen@brightline-ops.com",
              "Brightline Operations",
              "business",
              "64",
              "This week"
            ],
            [
              "taylor.m92@gmail.com",
              "n/a",
              "personal",
              "12",
              "Nurture sequence"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Illustrative numbers. The scoring bands (enterprise, business, personal) and the exact score cutoffs are configurable per campaign."
        }
      ]
    }
  ],
  "final": {
    "title": "Let the email address do the qualifying.",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "See Attribution",
        "href": "/platform/attribution",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
