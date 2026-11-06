import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/platform/lead-capture",
  "title": "Lead Capture | Tragami Platform",
  "description": "Capture first-party data through campaigns people want to participate in. Custom forms, custom fields, consent collection, and email verification built in.",
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
        "label": "Lead Capture"
      }
    ],
    "eyebrow": "Lead Capture",
    "title": "Capture first-party data through campaigns people want to participate in.",
    "soon": null,
    "subtitle": null,
    "body": "Build campaign experiences that collect the information your business needs, while giving your audience a clear reason to participate and enter.",
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
          "eyebrow": "Features",
          "title": "Everything a campaign form actually needs.",
          "body": null,
          "center": false
        },
        {
          "type": "cards",
          "cards": [
            {
              "title": "Custom forms",
              "body": "Build the exact fields your campaign requires, nothing more.",
              "list": null
            },
            {
              "title": "Custom fields",
              "body": "Collect the specifics of your business, not a generic template.",
              "list": null
            },
            {
              "title": "Consent collection",
              "body": "Built into the campaign flow, not bolted on as an afterthought.",
              "list": null
            },
            {
              "title": "Campaign-specific capture",
              "body": "Different campaigns can ask for different information.",
              "list": null
            },
            {
              "title": "Email verification",
              "body": "Helps confirm the address behind every entry is real.",
              "list": null
            },
            {
              "title": "Integration-ready data",
              "body": "Leads arrive already shaped for your CRM and marketing tools.",
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
          "type": "deepdive",
          "reverse": false,
          "eyebrow": "What it looks like",
          "title": "Ask for what you need. Nothing you don't.",
          "body": "Name, email, location, company, preferences, custom fields, marketing consent. Depending on your use case, a campaign might ask for one of these or all of them. The form adapts to the campaign, not the other way around.",
          "features": [],
          "visual": {
            "type": "timeline",
            "title": "Entry form fields",
            "items": [
              {
                "name": "Full name",
                "desc": "Required",
                "time": ""
              },
              {
                "name": "Email address",
                "desc": "Required, verified",
                "time": ""
              },
              {
                "name": "Company",
                "desc": "Optional",
                "time": ""
              },
              {
                "name": "Marketing consent",
                "desc": "Explicit opt-in",
                "time": ""
              }
            ]
          }
        }
      ]
    }
  ],
  "final": {
    "title": "Collect the right information without turning every campaign into a complex form.",
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
