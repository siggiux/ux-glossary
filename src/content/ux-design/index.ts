/*
 * UX / PRODUCT DESIGN — subcategories
 * ============================================================================
 * Each entry corresponds to a sub-category of UX work.
 *
 * To UNLOCK a subcategory:
 *   1. Set `locked: false`
 *   2. Import its topics file and set `topics: someTopicsArray`
 *
 * To ADD a new subcategory:
 *   1. Add an object below with a unique slug and the next sequential number
 *   2. (Optional) Create a new topics file in this folder
 * ============================================================================
 */

import type { Subcategory } from '../types';
import { uiDesignTopics } from './ui-design';
import { designSystemsTopics } from './design-systems';
import { componentsAndPatternsTopics } from './components-and-patterns';

export const uxDesignSubcategories: Subcategory[] = [
  {
    slug: 'research',
    number: 1,
    name: 'Research',
    description: 'Methods, interviews, surveys, and turning data into insight.',
    locked: true,
    topics: [],
  },
  {
    slug: 'ideation-and-strategy',
    number: 2,
    name: 'Ideation & Strategy',
    description:
      'Framing problems, generating ideas, and choosing what to build.',
    locked: true,
    topics: [],
  },
  {
    slug: 'information-architecture',
    number: 3,
    name: 'Information Architecture',
    description:
      'Organising content and navigation so products feel obvious to use.',
    locked: true,
    topics: [],
  },
  {
    slug: 'interaction-design',
    number: 4,
    name: 'Interaction Design',
    description:
      'How users move through a product — flows, states, and microinteractions.',
    locked: true,
    topics: [],
  },
  {
    slug: 'ui-design',
    number: 5,
    name: 'UI Design',
    description:
      'The visual craft of interface design — colour, type, space, and hierarchy.',
    locked: false,
    topics: uiDesignTopics,
  },
  {
    slug: 'design-systems',
    number: 6,
    name: 'Design Systems',
    description:
      'How modern product teams build, share, and scale design — the priority section of this glossary.',
    locked: false,
    topics: designSystemsTopics,
  },
  {
    slug: 'components-and-patterns',
    number: 7,
    name: 'Components & Patterns',
    description:
      'The vocabulary and judgment behind UI components and the patterns they form.',
    locked: false,
    topics: componentsAndPatternsTopics,
  },
  {
    slug: 'testing-and-validation',
    number: 8,
    name: 'Testing & Validation',
    description: 'Usability testing, A/B tests, and learning from real users.',
    locked: true,
    topics: [],
  },
  {
    slug: 'psychology-and-behaviour',
    number: 9,
    name: 'Psychology & Behaviour',
    description:
      'Cognitive load, mental models, biases — the human side of design.',
    locked: true,
    topics: [],
  },
  {
    slug: 'accessibility',
    number: 10,
    name: 'Accessibility',
    description:
      'WCAG, assistive tech, and designing for the full range of human ability.',
    locked: true,
    topics: [],
  },
  {
    slug: 'handoff-and-collaboration',
    number: 11,
    name: 'Handoff & Collaboration',
    description:
      'Working with engineers, specs, and shipping designs into production.',
    locked: true,
    topics: [],
  },
  {
    slug: 'motion-and-animation',
    number: 12,
    name: 'Motion & Animation',
    description:
      'Easing, duration, and using motion to clarify rather than decorate.',
    locked: true,
    topics: [],
  },
  {
    slug: 'content-and-ux-writing',
    number: 13,
    name: 'Content & UX Writing',
    description:
      'Microcopy, voice and tone, and writing that respects the reader.',
    locked: true,
    topics: [],
  },
  {
    slug: 'career-and-portfolio',
    number: 14,
    name: 'Career & Portfolio',
    description: 'Case studies, interviews, and growing as a designer.',
    locked: true,
    topics: [],
  },
];
