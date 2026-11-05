import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/platform/attribution",
  "title": "Attribution | Tragami Platform",
  "description": "Know which source generated the lead. Connect campaign participation to the influencer, partner, store, location, or other source that distributed it.",
  "hero": {
    "crumbs": [
      {
        "label": "Tragami",
        "href": "/"
      },
      {
        "label": "Platform"
      },
      {
        "label": "Attribution"
      }
    ],
    "eyebrow": "Attribution",
    "title": "Know which source generated the lead.",
    "soon": null,
    "subtitle": null,
    "body": "Connect campaign participation to the influencer, partner, store, location, or other source that distributed the campaign.",
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
          "eyebrow": "Attribution can help you understand",
          "title": "Where leads came from, and who's actually contributing.",
          "body": null,
          "center": false
        },
        {
          "type": "cards",
          "cards": [
            {
              "title": "Where leads came from",
              "body": "Trace every lead back to the exact source that produced it.",
              "list": null
            },
            {
              "title": "Which sources are generating participation",
              "body": "Not just impressions or clicks, actual completed campaign activity.",
              "list": null
            },
            {
              "title": "Which partners are contributing",
              "body": "See partner effort translated into real, countable results.",
              "list": null
            },
            {
              "title": "Which locations are active",
              "body": "Compare stores, franchises, or regions on equal footing.",
              "list": null
            },
            {
              "title": "Which campaigns perform through which sources",
              "body": "The same campaign can land differently depending on who's sharing it.",
              "list": null
            }
          ]
        }
      ]
    },
    {
      "tone": "wash",
      "blocks": [
        {
          "type": "quote",
          "quote": "\"Where did this lead come from?\"",
          "body": "The source may change, an influencer, a distributor, a dealer, a store, an affiliate. The underlying question stays exactly the same, and Tragami's attribution model is built to answer it regardless of what kind of source is involved."
        }
      ]
    },
    {
      "tone": "plain",
      "blocks": [
        {
          "type": "deepdive",
          "reverse": false,
          "eyebrow": "What it looks like",
          "title": "A number becomes a lot more useful once you can see its parts.",
          "body": "A campaign generating 10,000 leads is a good headline. Knowing that Influencer A generated 324 of them, Distributor B generated 218, and Store C generated 97, is what actually helps your team make decisions.",
          "features": [],
          "visual": {
            "type": "table",
            "url": "app.tragami.com/channel/scorecard",
            "head": [
              "Source",
              "Type",
              "Leads generated"
            ],
            "rows": [
              [
                "Influencer A",
                "creator",
                "324"
              ],
              [
                "Distributor B",
                "partner",
                "218"
              ],
              [
                "Store C",
                "retail location",
                "97"
              ],
              [
                "Partner D",
                "affiliate",
                "86"
              ]
            ]
          }
        }
      ]
    }
  ],
  "final": {
    "title": "Give every lead a source, not just a headcount.",
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
