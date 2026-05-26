/*
 * DOMAINS
 * ============================================================================
 * The three top-level areas of this glossary. To add a fourth domain:
 *   1. Create a new folder under src/content/ for its subcategories
 *   2. Import the subcategories array here
 *   3. Append a new Domain object below
 * ============================================================================
 */

import type { Domain } from './types';
import { uxDesignSubcategories } from './ux-design';
import { programmingSubcategories } from './programming';
import { aiSubcategories } from './ai';

export const domains: Domain[] = [
  {
    slug: 'ux-design',
    number: 1,
    name: 'UX / Product Design',
    description:
      'The craft of designing products people use — from research through to handoff.',
    subcategories: uxDesignSubcategories,
  },
  {
    slug: 'programming',
    number: 2,
    name: 'Programming / Software Development',
    description:
      'Breadth-first foundations in how software is built, for designers who want to speak the language.',
    subcategories: programmingSubcategories,
  },
  {
    slug: 'ai',
    number: 3,
    name: 'AI & Machine Learning',
    description:
      'The basics of how AI works and what it means for product design.',
    subcategories: aiSubcategories,
  },
];

/* ---------------------------------------------------------------------------
 * Lookup helpers — used by pages so they don't reach into the array directly.
 * --------------------------------------------------------------------------- */

export function findDomain(domainSlug: string): Domain | undefined {
  return domains.find((d) => d.slug === domainSlug);
}

export function findSubcategory(
  domainSlug: string,
  subcategorySlug: string,
) {
  const domain = findDomain(domainSlug);
  if (!domain) return undefined;
  const subcategory = domain.subcategories.find(
    (s) => s.slug === subcategorySlug,
  );
  if (!subcategory) return undefined;
  return { domain, subcategory };
}

export function findTopic(
  domainSlug: string,
  subcategorySlug: string,
  topicSlug: string,
) {
  const found = findSubcategory(domainSlug, subcategorySlug);
  if (!found) return undefined;
  const topic = found.subcategory.topics.find((t) => t.slug === topicSlug);
  if (!topic) return undefined;
  return { ...found, topic };
}

/* ---------------------------------------------------------------------------
 * Totals — used by the home page progress indicators. We only count topics
 * that have actually been defined (locked subcategories contribute 0 for now).
 * --------------------------------------------------------------------------- */

export function countTopicsInDomain(domain: Domain): number {
  return domain.subcategories.reduce((sum, s) => sum + s.topics.length, 0);
}
