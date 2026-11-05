/** Inline text: a plain string, or a list of segments with bold text / links. */
export type Seg = string | { b: string } | { a: string; href: string };
export type RichText = string | Seg[];

export type Cta = { label: string; href: string; variant: "primary" | "ghost"; arrow: boolean };
export type Crumb = { label: string; href?: string };

export type TimelineVisual = {
  type: "timeline";
  title: string;
  items: { name: string; desc: string; time: string }[];
};
export type TableVisual = {
  type: "table";
  url: string | null;
  head: string[];
  rows: string[][];
};

export type ScenarioPart =
  | { k: "p"; v: RichText }
  | { k: "h"; v: string }
  | { k: "ol" | "ul"; v: RichText[] };

export type Block =
  | { type: "head"; eyebrow: string | null; title: string; body: RichText | null; center: boolean }
  | { type: "cards"; cards: { title: string; body: RichText | null; list: string[] | null }[] }
  | {
      type: "deepdive";
      reverse: boolean;
      eyebrow: string;
      title: string;
      body: RichText | null;
      features: { title: string; body: string }[];
      visual: TimelineVisual | TableVisual;
    }
  | { type: "chips"; kind: "question" | "source"; chips: string[] }
  | { type: "resolve"; text: RichText }
  | { type: "chain"; nodes: { title: string; body: string; hi: boolean }[] }
  | { type: "p"; text: RichText }
  | { type: "actions"; items: string[] }
  | { type: "numbered"; items: { n: string; title: string; body: string }[] }
  | { type: "engines"; cards: { tag: string; title: string; body: string; hi: boolean }[] }
  | { type: "quote"; quote: string; body: RichText }
  | { type: "tiles"; tiles: string[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "scenario"; badge: string; body: ScenarioPart[] }
  | { type: "funnel"; steps: { stage: string; label: string; active: boolean }[] }
  | { type: "dataGrid"; chips: { label: string; tag: string }[] }
  | { type: "stackRows"; rows: { n: string; text: RichText }[] }
  | TableVisual;

export type Section = { tone: "plain" | "wash"; blocks: Block[] };

export type PageData = {
  route: string;
  title: string;
  description: string;
  hero: {
    crumbs: Crumb[];
    eyebrow: string;
    title: string;
    soon: string | null;
    subtitle: RichText | null;
    body: RichText | null;
    ctas: Cta[];
  };
  sections: Section[];
  final: { title: string; ctas: Cta[] };
};
