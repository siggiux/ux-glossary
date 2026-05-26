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
 * ============================================================================
 */

export type Topic = {
  slug: string;
  number: number;          // 1-based position within its subcategory
  name: string;
  description: string;     // one-line summary shown on the topic card
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
