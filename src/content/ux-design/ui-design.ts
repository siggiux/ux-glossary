/*
 * UI DESIGN — topics
 * ============================================================================
 * To add a new topic: append an object to the array, give it a unique slug,
 * and continue the number sequence.
 * ============================================================================
 */

import type { Topic } from '../types';

export const uiDesignTopics: Topic[] = [
  {
    slug: 'colour-theory',
    number: 1,
    name: 'Colour Theory & Application',
    description:
      'HSL vs HEX vs RGB, palettes, and what semantic colour really means.',
  },
  {
    slug: 'contrast-and-accessibility',
    number: 2,
    name: 'Contrast & Accessibility',
    description:
      'WCAG ratios, where AA and AAA matter, and how to test contrast in practice.',
  },
  {
    slug: 'typography-fundamentals',
    number: 3,
    name: 'Typography Fundamentals',
    description:
      'Typeface vs font, classifications, and what makes a typeface work for UI.',
  },
  {
    slug: 'type-scale-and-rhythm',
    number: 4,
    name: 'Type Scale & Rhythm',
    description: 'Modular scales, line height, letter spacing, and vertical rhythm.',
  },
  {
    slug: 'type-hierarchy',
    number: 5,
    name: 'Type Hierarchy',
    description: 'How size, weight, colour, and spacing build reading order.',
  },
  {
    slug: 'spacing-and-the-8pt-grid',
    number: 6,
    name: 'Spacing & the 8pt Grid',
    description:
      'Why 8pt, how to apply it, and the difference between component and layout spacing.',
  },
  {
    slug: 'visual-hierarchy',
    number: 7,
    name: 'Visual Hierarchy',
    description:
      "What it is, how to construct it, and how to test whether it's working.",
  },
  {
    slug: 'iconography',
    number: 8,
    name: 'Iconography',
    description:
      'Style consistency, sizing, stroke vs fill, and when to use icons vs labels.',
  },
  {
    slug: 'layout-systems',
    number: 9,
    name: 'Layout Systems',
    description:
      "Columns, grids, gutters, and how Figma's auto layout maps to CSS flexbox.",
  },
  {
    slug: 'responsive-design-concepts',
    number: 10,
    name: 'Responsive Design Concepts',
    description: 'Breakpoints, fluid vs fixed, and mobile-first thinking.',
  },
  {
    slug: 'elevation-and-depth',
    number: 11,
    name: 'Elevation & Depth',
    description: 'Shadows, blur, and layering — how depth communicates hierarchy.',
  },
  {
    slug: 'colour-modes',
    number: 12,
    name: 'Colour Modes',
    description:
      'Building a palette that genuinely works in both light and dark mode.',
  },
  {
    slug: 'density-and-ui-ia',
    number: 13,
    name: 'Density & UI Information Architecture',
    description: 'Compact, comfortable, spacious — and when each is right.',
  },
];
