/*
 * DESIGN SYSTEMS — topics
 * ============================================================================
 * The priority section of this glossary.
 * ============================================================================
 */

import type { Topic } from '../types';

export const designSystemsTopics: Topic[] = [
  {
    slug: 'what-a-design-system-is',
    number: 1,
    name: 'What a Design System Is',
    description:
      'The difference between a style guide, a component library, and a full system.',
  },
  {
    slug: 'why-design-systems-exist',
    number: 2,
    name: 'Why Design Systems Exist',
    description:
      'Speed, consistency, and shared language between design and engineering.',
  },
  {
    slug: 'design-tokens',
    number: 3,
    name: 'Design Tokens',
    description: 'What they are, why they exist, and the three-tier model.',
  },
  {
    slug: 'primitive-tokens',
    number: 4,
    name: 'Primitive Tokens',
    description: 'Raw values: hex codes, spacing numbers, font sizes.',
  },
  {
    slug: 'semantic-tokens',
    number: 5,
    name: 'Semantic Tokens',
    description:
      'Named by purpose, not value — color.background.danger, not red.500.',
  },
  {
    slug: 'component-tokens',
    number: 6,
    name: 'Component Tokens',
    description:
      'Scoped to a specific component — button.background.primary.',
  },
  {
    slug: 'figma-variables',
    number: 7,
    name: 'Figma Variables',
    description: 'How variables map to tokens, structuring them, and using modes.',
  },
  {
    slug: 'figma-components',
    number: 8,
    name: 'Figma Components',
    description:
      'Variants, properties, auto layout, and building components developers can actually use.',
  },
  {
    slug: 'component-documentation',
    number: 9,
    name: 'Component Documentation',
    description:
      "What good documentation looks like, with usage guidelines and do/don't examples.",
  },
  {
    slug: 'design-to-code-relationship',
    number: 10,
    name: 'The Design-to-Code Relationship',
    description:
      'How a Figma component maps to a React component, and why naming matters.',
  },
  {
    slug: 'storybook-for-designers',
    number: 11,
    name: "Storybook from the Designer's Perspective",
    description:
      'What it is, how to read it, and why it matters for handoff.',
  },
  {
    slug: 'real-system-examples',
    number: 12,
    name: 'Real System Examples',
    description:
      'Material, Radix, Primer, Carbon, Atlassian — what each prioritises and why.',
  },
  {
    slug: 'contribution-and-governance',
    number: 13,
    name: 'Contribution & Governance',
    description:
      'Who owns the system, how changes get proposed, and versioning.',
  },
  {
    slug: 'token-theming-in-practice',
    number: 14,
    name: 'Token Theming in Practice',
    description: 'How one token system powers multiple brands or themes.',
  },
  {
    slug: 'when-not-to-use-the-design-system',
    number: 15,
    name: 'When NOT to Use the Design System',
    description:
      'The judgment call of going off-system and what it costs.',
  },
];
