import type { PageData } from "@/content/types";

export const page: PageData = {
  "route": "/resources",
  "title": "Resources | Tragami",
  "description": "Guides, campaign ideas, and attribution resources for teams building giveaway, lead-generation, and channel marketing campaigns with Tragami.",
  "hero": {
    "crumbs": [
      {
        "label": "Tragami",
        "href": "/"
      },
      {
        "label": "Resources"
      }
    ],
    "eyebrow": "Resources",
    "title": "Guides, campaign ideas, and attribution resources.",
    "soon": null,
    "subtitle": null,
    "body": "Everything we've learned about building campaigns that do more than collect entries, organized so you can actually find it.",
    "ctas": []
  },
  "sections": [
    {
      "tone": "plain",
      "blocks": [
        {
          "type": "cards",
          "cards": [
            {
              "title": "Guides",
              "body": "Setup guides and best practices for getting the most out of Tragami.",
              "list": [
                "Setting up your first Conversion campaign",
                "Choosing giveaway incentives that actually convert",
                "A beginner's guide to Channel distribution",
                "Connecting Tragami to your CRM",
                "Writing consent language people actually read"
              ]
            },
            {
              "title": "Campaign Ideas",
              "body": "Real campaign formats you can adapt for your next launch.",
              "list": [
                "Ten giveaway formats that aren't just a raffle",
                "Running a waitlist campaign before you have a product",
                "Turning a store visit into an email subscriber",
                "Building a referral loop into an existing campaign",
                "Event campaign ideas for trade show booths"
              ]
            },
            {
              "title": "Attribution & Channel Marketing Resources",
              "body": "Deeper reading on measuring channels and partner networks.",
              "list": [
                "How to measure a dealer network without POS data",
                "Building a scorecard your partners will actually trust",
                "Multi-touch attribution, explained without the jargon",
                "What to ask before trusting a \"leads generated\" number",
                "Running a fair leaderboard across influencers"
              ]
            }
          ]
        }
      ]
    }
  ],
  "final": {
    "title": "Ready to put it into practice?",
    "ctas": [
      {
        "label": "Start Building a Campaign",
        "href": "#",
        "variant": "primary",
        "arrow": false
      },
      {
        "label": "Explore the Platform",
        "href": "/",
        "variant": "ghost",
        "arrow": true
      }
    ]
  }
};
