/*
 * CONTENT TYPES
 * ============================================================================
 * The shape of every piece of content in this site.
 *
 * Three nesting levels:
 *   Domain          -> e.g. "UX/Product Design"
 *     Subcategory   -> e.g. "UI Design"
 *       Topic       -> e.g. "Colour Theory & Application"
 *
 * Each level has a `slug` that becomes part of the URL, e.g.
 *   /ux-design/ui-design/colour-theory
 *
 * A Subcategory is `locked: true` until its topics are written. Locked
 * subcategories still render (so the user can see what's coming) but can't
 * be navigated into.
 *
 * A Topic optionally carries `article` content. If it's present, the Topic
 * page renders a full article. If it's absent, the page shows a placeholder.
 * Articles are structured data (sections of typed blocks), not raw HTML —
 * this keeps content editable without touching component code.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * Article content
 * --------------------------------------------------------------------------- */

/**
 * Section types used inside an Article.
 *
 *   definition       — the highlighted core definition (one per article)
 *   body             — standard prose. Supports a tiny markdown subset:
 *                        - paragraphs separated by blank lines
 *                        - lines starting with "- " become bullet items
 *                        - **text** becomes bold
 *   section-heading  — h2 within the article
 *   sub-heading      — h3 within the article
 *   callout          — tinted block with a small label
 *   visual           — renders a registered visual or interactive demo
 *   cross-refs       — a row of linked cards at the bottom
 */
export type ArticleSectionType =
  | 'definition'
  | 'body'
  | 'section-heading'
  | 'sub-heading'
  | 'callout'
  | 'visual'
  | 'cross-refs';

export type CalloutType = 'insight' | 'warning' | 'example';

export type CrossReference = {
  topicSlug: string;
  subcategorySlug: string;
  domainSlug: string;
  label: string;
  reason: string;
};

/**
 * A single block within an article. Only the fields relevant to the chosen
 * `type` are populated — TypeScript can't narrow these without a discriminated
 * union, but in practice each renderer only reads the fields it cares about.
 */
export type ArticleSection = {
  type: ArticleSectionType;
  content?: string;
  calloutType?: CalloutType;
  /** Identifier for a visual/demo registered in components/Article/visuals. */
  visualId?: string;
  caption?: string;
  items?: CrossReference[];
};

export type Article = {
  sections: ArticleSection[];
};

/* ---------------------------------------------------------------------------
 * Topic / Subcategory / Domain
 * --------------------------------------------------------------------------- */

export type Topic = {
  slug: string;
  number: number;          // 1-based position within its subcategory
  name: string;
  description: string;     // one-line summary shown on the topic card
  article?: Article;       // optional rich content for the topic page
};

export type Subcategory = {
  slug: string;
  number: number;          // 1-based position within its domain
  name: string;
  description: string;
  locked: boolean;         // true = visible but not navigable
  topics: Topic[];         // empty array if locked / not yet written
};

export type Domain = {
  slug: string;
  number: number;          // 1-based position on the home page
  name: string;
  description: string;
  subcategories: Subcategory[];
};
