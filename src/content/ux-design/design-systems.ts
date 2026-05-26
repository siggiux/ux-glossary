/*
 * DESIGN SYSTEMS — topics + article content
 * ============================================================================
 * The priority section of this glossary.
 *
 * Each topic carries an optional `article` field made of structured sections.
 * Adding a section to an article means appending an object — no component
 * changes required. Section types are documented in ../types.ts.
 * ============================================================================
 */

import type { Topic } from '../types';

/* ---------------------------------------------------------------------------
 * Shared cross-reference shortcuts — keeps the article data terse.
 * Reuse these where it helps; otherwise build references inline.
 * --------------------------------------------------------------------------- */

const REF = {
  // Within Design Systems
  whatItIs: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'what-a-design-system-is',
    label: 'What a Design System Is',
  },
  whyTheyExist: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'why-design-systems-exist',
    label: 'Why Design Systems Exist',
  },
  designTokens: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'design-tokens',
    label: 'Design Tokens',
  },
  primitiveTokens: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'primitive-tokens',
    label: 'Primitive Tokens',
  },
  semanticTokens: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'semantic-tokens',
    label: 'Semantic Tokens',
  },
  componentTokens: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'component-tokens',
    label: 'Component Tokens',
  },
  figmaVariables: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'figma-variables',
    label: 'Figma Variables',
  },
  figmaComponents: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'figma-components',
    label: 'Figma Components',
  },
  componentDocs: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'component-documentation',
    label: 'Component Documentation',
  },
  designToCode: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'design-to-code-relationship',
    label: 'The Design-to-Code Relationship',
  },
  storybookDesigner: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'storybook-designer-perspective',
    label: "Storybook from the Designer's Perspective",
  },
  contribution: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'contribution-and-governance',
    label: 'Contribution & Governance',
  },
  tokenTheming: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'token-theming-in-practice',
    label: 'Token Theming in Practice',
  },
  whenNotToUse: {
    domainSlug: 'ux-design',
    subcategorySlug: 'design-systems',
    topicSlug: 'when-not-to-use-the-design-system',
    label: 'When NOT to Use the Design System',
  },
  // Cross-domain
  colourTheory: {
    domainSlug: 'ux-design',
    subcategorySlug: 'ui-design',
    topicSlug: 'colour-theory',
    label: 'Colour Theory & Application',
  },
  colourModes: {
    domainSlug: 'ux-design',
    subcategorySlug: 'ui-design',
    topicSlug: 'colour-modes',
    label: 'Colour Modes',
  },
  componentStates: {
    domainSlug: 'ux-design',
    subcategorySlug: 'components-and-patterns',
    topicSlug: 'component-states',
    label: 'Component States',
  },
  cssInPractice: {
    domainSlug: 'programming',
    subcategorySlug: 'css-in-practice',
    topicSlug: 'css-custom-properties',
    label: 'CSS in Practice',
  },
  frameworks: {
    domainSlug: 'programming',
    subcategorySlug: 'frameworks-and-libraries',
    topicSlug: 'react',
    label: 'Frameworks & Libraries',
  },
  softwareWorkflow: {
    domainSlug: 'programming',
    subcategorySlug: 'software-creation-workflow',
    topicSlug: 'overview',
    label: 'Software Creation Workflow',
  },
  gitAndGithub: {
    domainSlug: 'programming',
    subcategorySlug: 'git-and-github',
    topicSlug: 'overview',
    label: 'Git & GitHub',
  },
  storybookEngineer: {
    domainSlug: 'programming',
    subcategorySlug: 'storybook',
    topicSlug: 'overview',
    label: 'Storybook (engineer perspective)',
  },
  careerPortfolio: {
    domainSlug: 'ux-design',
    subcategorySlug: 'career-and-portfolio',
    topicSlug: 'design-judgment',
    label: 'Career & Portfolio',
  },
};

/* ---------------------------------------------------------------------------
 * Topics
 * --------------------------------------------------------------------------- */

export const designSystemsTopics: Topic[] = [
  // --------------------------------------------------------------------------
  // 01 — What a Design System Is
  // --------------------------------------------------------------------------
  {
    slug: 'what-a-design-system-is',
    number: 1,
    name: 'What a Design System Is',
    description:
      'The difference between a style guide, a component library, and a full system.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'A design system is the shared set of rules, components, and documentation that a product team uses to build interfaces consistently at scale.',
        },
        { type: 'section-heading', content: 'The problem it solves' },
        {
          type: 'body',
          content:
            'Without a shared system, every designer and developer makes isolated decisions. Buttons get rebuilt from scratch. Colours drift. Spacing becomes inconsistent. The same UI problem gets solved twelve different ways across twelve screens. A design system makes consistency a default rather than a discipline — it encodes good decisions once so the whole team benefits from them every time.',
        },
        { type: 'section-heading', content: 'Three things people confuse it with' },
        {
          type: 'body',
          content: 'This is the most important distinction in this topic:',
        },
        {
          type: 'body',
          content:
            '- **Style guide** — a document of visual rules: colours, typography, logo usage. Static. Often a PDF or a Notion page. It tells you what things should look like but gives you nothing to build with.\n- **Component library** — a collection of reusable UI building blocks, either in Figma or in code. You can build with it, but it has no principles, no documentation, no governance. It answers "what does a button look like?" but not "when should I use a destructive button?"\n- **Design system** — all of the above, plus: design principles, usage guidelines, documentation, the shared vocabulary between design and engineering, and the governance model that keeps it alive. A design system is a product that your product team uses to build your product.',
        },
        {
          type: 'visual',
          visualId: 'nested-circles',
          caption:
            'A design system contains a component library, which contains a style guide.',
        },
        { type: 'section-heading', content: 'What a design system actually contains' },
        {
          type: 'body',
          content: 'A mature design system typically includes:',
        },
        {
          type: 'body',
          content:
            '- Design principles (the values that guide decisions)\n- Design tokens (the named variables for colour, spacing, type, etc.)\n- Component library (in Figma AND in code)\n- Pattern guidelines (how components combine into flows)\n- Documentation (usage rules, do/don\'t examples, accessibility notes)\n- Contribution and governance model (how changes are proposed and shipped)',
        },
        { type: 'section-heading', content: 'Real examples worth knowing' },
        {
          type: 'body',
          content:
            '- **Material Design (Google)** — one of the first large-scale public systems. Strong on motion and interaction principles.\n- **Polaris (Shopify)** — widely respected for its content and writing guidelines, not just its components.\n- **Carbon (IBM)** — enterprise scale, accessibility-first, highly detailed.\n- **Atlassian Design System** — strong on patterns and product context, not just visual rules.\n- **Primer (GitHub)** — a good example of a developer-tool design system done well.',
        },
        { type: 'section-heading', content: 'Common misconceptions' },
        {
          type: 'callout',
          calloutType: 'warning',
          content:
            '"We have a Figma library, so we have a design system."\nNo — you have a component library. A design system includes documentation, principles, and a live connection to the codebase. A Figma file alone is a starting point, not a system.',
        },
        {
          type: 'callout',
          calloutType: 'warning',
          content:
            '"Design systems are only for big companies."\nSmall teams benefit too — maybe more, because they have less capacity to fix inconsistencies later. The investment scales with the team and product complexity.',
        },
        {
          type: 'callout',
          calloutType: 'warning',
          content:
            "\"It's the designer's job to own the system.\"\nA design system is a cross-functional product. It needs design, engineering, and often content strategy. Owned by one discipline, it dies.",
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.designTokens,
              reason:
                'The atomic units a design system is built on.',
            },
            {
              ...REF.whyTheyExist,
              reason: 'The deeper case for investing in a system.',
            },
            {
              ...REF.designToCode,
              reason:
                'How the system bridges design and engineering in practice.',
            },
            {
              ...REF.storybookDesigner,
              reason: 'Where component documentation lives in code.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 02 — Why Design Systems Exist
  // --------------------------------------------------------------------------
  {
    slug: 'why-design-systems-exist',
    number: 2,
    name: 'Why Design Systems Exist',
    description:
      'Speed, consistency, and shared language between design and engineering.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Design systems exist to make consistency automatic, speed up teams, and create a shared language between designers and engineers — so good decisions made once benefit everyone, forever.',
        },
        { type: 'section-heading', content: 'The four real reasons' },
        {
          type: 'sub-heading',
          content: '1. Consistency becomes a default, not a discipline',
        },
        {
          type: 'body',
          content:
            'Without a system, consistency requires constant effort — reviews, redlines, correction. With a system, the right choice is the easy choice. A developer reaches for a component that already follows the rules.',
        },
        { type: 'sub-heading', content: '2. Teams move faster' },
        {
          type: 'body',
          content:
            'Designers stop rebuilding the same button. Engineers stop asking what shade of grey the border should be. Onboarding a new designer takes days, not months, because the system documents the decisions. Speed compounds — the older and healthier the system, the faster the team.',
        },
        {
          type: 'sub-heading',
          content: '3. A shared vocabulary between design and engineering',
        },
        {
          type: 'body',
          content:
            'One of the most underrated benefits. When a designer says "use the primary button" and an engineer reaches for `<Button variant="primary">`, they are talking about the same thing. Without a system, these conversations involve screenshots, approximations, and interpretation. With a system, they involve a shared reference.',
        },
        {
          type: 'sub-heading',
          content: '4. Scalability — multiple teams, one product',
        },
        {
          type: 'body',
          content:
            "A startup with five people doesn't need a formal system. A company with ten product teams working on the same product absolutely does. A design system is the mechanism that keeps a product coherent as the organisation grows.",
        },
        {
          type: 'visual',
          visualId: 'consistency-comparison',
          caption:
            'Three product screens, with and without a system. The drift in the top row is what consistency-by-discipline actually looks like.',
        },
        { type: 'section-heading', content: 'The hidden cost of NOT having one' },
        {
          type: 'callout',
          calloutType: 'insight',
          content:
            "Design drift is invisible until it isn't.\n\nInconsistency accumulates slowly. The first time someone uses the wrong blue, nothing breaks. By the time there are fourteen slightly different blues in production, a visual audit takes weeks and a fix affects hundreds of components. The cost of building a system is visible upfront. The cost of NOT building one is invisible until it becomes a crisis.",
        },
        {
          type: 'body',
          content: 'Other hidden costs:',
        },
        {
          type: 'body',
          content:
            '- Duplicated work across teams (the same component rebuilt seven times)\n- Accessibility gaps (each rebuild introduces new problems)\n- Slower onboarding (new team members have no reference point)\n- Designer and developer friction (misaligned expectations, lengthy handoffs)',
        },
        { type: 'section-heading', content: 'When a design system is NOT worth it' },
        {
          type: 'body',
          content:
            'Honesty matters here. A design system is a product — it needs maintaining. For a one-person team, a short-lived project, or an early-stage product that pivots constantly, a heavy system creates overhead without return. Start with tokens and a small component library. Build the governance later, when there are enough people to justify it.',
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.whatItIs,
              reason: 'What the system actually contains.',
            },
            {
              ...REF.contribution,
              reason: 'How a system stays healthy over time.',
            },
            {
              ...REF.softwareWorkflow,
              reason: 'How design systems fit into how product teams ship.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 03 — Design Tokens (with interactive demo)
  // --------------------------------------------------------------------------
  {
    slug: 'design-tokens',
    number: 3,
    name: 'Design Tokens',
    description: 'What they are, why they exist, and the three-tier model.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'A design token is a named design decision — a variable that stores a single value (a colour, a spacing unit, a font size) and gives it a meaningful name so it can be used consistently across design and code.',
        },
        { type: 'section-heading', content: 'What a token actually is' },
        {
          type: 'body',
          content:
            'Before tokens, a designer would spec a button background as `#1D4ED8` and a developer would hardcode that value into a CSS file. If the brand colour changed, every instance had to be found and updated manually. A token replaces the raw value with a name: `color.action.primary`. Change the value behind that name once, and it updates everywhere — in Figma, in the web app, in the mobile app, in the email templates.',
        },
        {
          type: 'body',
          content:
            'A token is not a Figma variable. It is not a CSS custom property. It is a design decision that CAN be represented as a Figma variable AND as a CSS custom property — the token is the concept, the variable is the implementation.',
        },
        { type: 'section-heading', content: 'Why tokens matter more than they seem' },
        {
          type: 'body',
          content:
            'Tokens are the bridge between design and code. They are the mechanism that makes it possible for a designer to change a colour in Figma and have that change flow through to a production codebase without anyone manually updating values. They are also what makes theming — light mode, dark mode, multiple brands — technically possible at scale.',
        },
        { type: 'section-heading', content: 'The three-tier model' },
        {
          type: 'body',
          content: 'Tokens are not flat. A mature token system has three layers:',
        },
        {
          type: 'body',
          content:
            '- **Primitive tokens** — raw values with no meaning attached. `blue-600: #2563EB`. `space-4: 16px`.\n- **Semantic tokens** — named by purpose, not value. `color.background.danger` points to `red-600`. `color.background.success` points to `green-500`. These are what components actually use.\n- **Component tokens** — scoped to a specific component. `button.background.primary` points to `color.action.primary`.',
        },
        {
          type: 'body',
          content:
            'Each layer builds on the one below. Changing a primitive updates everything that references it. Swapping which primitive a semantic token points to is how theming works.',
        },
        { type: 'section-heading', content: 'The naming problem' },
        {
          type: 'body',
          content:
            "Naming tokens well is genuinely hard. A good token name describes PURPOSE, not appearance. `color.text.danger` is a good name — it tells you where and why to use it. `red` is a bad name — it tells you the value, not the decision. A name like `color.text.danger` can stay stable even if the danger colour changes from red to orange in a rebrand. `red` cannot.",
        },
        {
          type: 'callout',
          calloutType: 'insight',
          content:
            'The hardest part of building a token system is resisting the urge to name tokens after their values. The moment you write `blue-button-background`, you have locked the button to being blue. Name the decision, not the colour.',
        },
        {
          type: 'visual',
          visualId: 'token-playground',
          caption:
            'One token. Three places it appears in the card. Change the value — every place updates together.',
        },
        {
          type: 'cross-refs',
          items: [
            { ...REF.primitiveTokens, reason: 'The raw value layer in detail.' },
            { ...REF.semanticTokens, reason: 'The purpose layer in detail.' },
            {
              ...REF.componentTokens,
              reason: 'The component-scoped layer in detail.',
            },
            {
              ...REF.figmaVariables,
              reason: 'How tokens are implemented in Figma.',
            },
            {
              ...REF.cssInPractice,
              reason: 'How tokens become CSS custom properties in code.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 04 — Primitive Tokens
  // --------------------------------------------------------------------------
  {
    slug: 'primitive-tokens',
    number: 4,
    name: 'Primitive Tokens',
    description: 'Raw values: hex codes, spacing numbers, font sizes.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Primitive tokens are the raw value layer of a token system — named constants that store a single design value with no attached meaning. They are the ingredients, not the recipes.',
        },
        { type: 'section-heading', content: 'What primitives look like' },
        {
          type: 'body',
          content:
            'A primitive token has a name based on its scale position or category, and a raw value.',
        },
        {
          type: 'body',
          content:
            '- **Colour primitives:** `blue-50` through `blue-900`, `red-50` through `red-900`, `neutral-0` through `neutral-1000`\n- **Spacing primitives:** `space-1: 4px`, `space-2: 8px`, `space-4: 16px`, `space-8: 32px`\n- **Font size primitives:** `font-size-xs: 12px`, `font-size-sm: 14px`, `font-size-base: 16px`\n- **Border radius primitives:** `radius-sm: 4px`, `radius-md: 8px`, `radius-lg: 12px`',
        },
        {
          type: 'visual',
          visualId: 'primitive-scales',
          caption:
            'Primitives define the total palette of values available to the system.',
        },
        { type: 'section-heading', content: 'The rule about primitives' },
        {
          type: 'body',
          content:
            'Primitives are never used directly in components. A component should never reference `blue-600` — it should reference `color.action.primary`, which points TO `blue-600`. This indirection is the whole point. If you use primitives directly in components, you lose the ability to theme, rebrand, or switch modes without touching every component.',
        },
        {
          type: 'callout',
          calloutType: 'warning',
          content:
            'Using primitive tokens directly in components is the most common token system mistake. It feels faster at first. It causes significant pain later when you need to change a colour across the product.',
        },
        { type: 'section-heading', content: 'Why they exist as a separate layer' },
        {
          type: 'body',
          content:
            'Primitives define the total available palette — the full set of values the system is allowed to use. Semantic tokens then choose from that palette. This constraint is intentional: it prevents token sprawl (hundreds of slightly different colours with no relationship to each other) and ensures the system stays coherent.',
        },
        {
          type: 'body',
          content:
            "Think of it like a paint brand's colour range. The brand decides which 200 colours exist. Interior designers then choose from those 200 — they don't mix custom colours for every project.",
        },
        {
          type: 'cross-refs',
          items: [
            { ...REF.designTokens, reason: 'The full token model overview.' },
            {
              ...REF.semanticTokens,
              reason: 'How primitives get given meaning.',
            },
            {
              ...REF.colourTheory,
              reason: 'How colour scales are constructed.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 05 — Semantic Tokens
  // --------------------------------------------------------------------------
  {
    slug: 'semantic-tokens',
    number: 5,
    name: 'Semantic Tokens',
    description:
      'Named by purpose, not value — color.background.danger, not red.500.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Semantic tokens are named by their purpose, not their value. They are the layer that gives meaning to raw primitives — and the layer that makes theming, dark mode, and rebranding possible.',
        },
        { type: 'section-heading', content: 'The shift from value to meaning' },
        {
          type: 'body',
          content:
            "A primitive token says: `blue-600: #2563EB`. A semantic token says: `color.background.action: blue-600`. The semantic token doesn't store a colour — it stores a decision about where blue-600 belongs. The name describes the use case, not the appearance.",
        },
        {
          type: 'body',
          content: 'This distinction seems small. Its consequences are enormous.',
        },
        { type: 'section-heading', content: 'Common semantic categories' },
        {
          type: 'body',
          content:
            'A well-structured semantic layer typically organises tokens by:',
        },
        {
          type: 'body',
          content:
            '- **Background** — `color.background.default`, `color.background.subtle`, `color.background.danger`, `color.background.success`\n- **Foreground / Text** — `color.text.default`, `color.text.muted`, `color.text.danger`, `color.text.on-accent`\n- **Border** — `color.border.default`, `color.border.focus`, `color.border.danger`\n- **Action / Interactive** — `color.action.primary`, `color.action.primary.hover`, `color.action.primary.active`',
        },
        {
          type: 'section-heading',
          content: 'Why this layer makes dark mode possible',
        },
        {
          type: 'body',
          content:
            'In light mode: `color.background.default` points to `neutral-50` (near white).\nIn dark mode: `color.background.default` points to `neutral-950` (near black).',
        },
        {
          type: 'body',
          content:
            'The semantic token name stays exactly the same. The primitive it points to changes per mode. Every component that uses `color.background.default` gets light mode and dark mode for free — without any component-level changes.',
        },
        {
          type: 'visual',
          visualId: 'light-dark-resolution',
          caption:
            'Same semantic token name. Different resolved primitive per mode.',
        },
        {
          type: 'callout',
          calloutType: 'insight',
          content:
            'Dark mode is not "invert everything." It is a second set of primitive references for every semantic token. The semantic layer is what makes this manageable — without it, you would need to write separate dark mode styles for every component individually.',
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.primitiveTokens,
              reason: 'The raw values semantic tokens point to.',
            },
            { ...REF.componentTokens, reason: 'The next layer down.' },
            {
              ...REF.colourModes,
              reason: 'Building palettes that work in both modes.',
            },
            {
              ...REF.tokenTheming,
              reason: 'The full payoff of a semantic layer.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 06 — Component Tokens
  // --------------------------------------------------------------------------
  {
    slug: 'component-tokens',
    number: 6,
    name: 'Component Tokens',
    description:
      'Scoped to a specific component — button.background.primary.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Component tokens are design tokens scoped to a specific component. They are the most specific layer of the token system — they point to semantic tokens and exist only when a component genuinely needs its own decision-making layer.',
        },
        { type: 'section-heading', content: 'What they look like' },
        {
          type: 'body',
          content:
            '- `button.background.primary` — points to `color.action.primary`\n- `button.background.primary.hover` — points to `color.action.primary.hover`\n- `button.text.primary` — points to `color.text.on-accent`\n- `card.border.radius` — points to `radius-md`\n- `input.border.focus` — points to `color.border.focus`',
        },
        { type: 'section-heading', content: 'The full chain' },
        {
          type: 'body',
          content:
            'Component tokens create the final layer in the three-tier model:',
        },
        {
          type: 'visual',
          visualId: 'token-chain',
          caption:
            'Change the semantic token once. Every component pointing to it updates.',
        },
        {
          type: 'body',
          content:
            'This chain means: to retheme the primary button background, you change one semantic token. Every component that references it updates. The component token is stable — it always points to `color.action.primary`. What changes is what `color.action.primary` resolves to at the primitive level.',
        },
        { type: 'section-heading', content: 'When you actually need them' },
        {
          type: 'body',
          content: 'Not every component needs component tokens. Component tokens are worth creating when:',
        },
        {
          type: 'body',
          content:
            '- The component has many states that need individual token references (buttons, inputs, badges)\n- The component is used extensively and its values might need independent overriding\n- You are building a white-label system where clients can customise individual components',
        },
        {
          type: 'body',
          content: 'They are NOT worth creating for:',
        },
        {
          type: 'body',
          content:
            '- Simple, rarely-customised elements\n- One-off patterns\n- Early-stage systems that are still evolving',
        },
        {
          type: 'callout',
          calloutType: 'warning',
          content:
            'Over-engineering component tokens is a real failure mode. A token system with 2,000 component tokens that nobody understands is worse than a flat system everyone can navigate. Build the layer when it earns its complexity.',
        },
        {
          type: 'cross-refs',
          items: [
            { ...REF.designTokens, reason: 'The full token model overview.' },
            {
              ...REF.semanticTokens,
              reason: 'The layer component tokens point to.',
            },
            {
              ...REF.figmaComponents,
              reason:
                'How component tokens map to Figma component properties.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 07 — Figma Variables
  // --------------------------------------------------------------------------
  {
    slug: 'figma-variables',
    number: 7,
    name: 'Figma Variables',
    description: 'How variables map to tokens, structuring them, and using modes.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            "Figma Variables are Figma's native implementation of design tokens — named values that can be applied across a design file and switched via modes, enabling light/dark theming and multi-brand design directly in the design tool.",
        },
        { type: 'section-heading', content: 'Variables are tokens in Figma' },
        {
          type: 'body',
          content:
            "Figma Variables (introduced in 2023) are the design tool's answer to the token problem. Before variables, designers used styles (which were flat and couldn't be aliased or themed). Variables introduced aliasing — a variable can point to another variable — which is exactly the primitive → semantic → component relationship in token form.",
        },
        { type: 'section-heading', content: 'Variable types' },
        {
          type: 'body',
          content: 'Figma supports four variable types:',
        },
        {
          type: 'body',
          content:
            '- **Colour** — for any fill, stroke, or effect colour\n- **Number** — for spacing, sizing, corner radius, opacity\n- **String** — for text content, font family references\n- **Boolean** — for showing/hiding layers, toggling states',
        },
        { type: 'section-heading', content: 'Modes — the killer feature' },
        {
          type: 'body',
          content:
            'A variable collection can have multiple modes. The most common use: Light and Dark. You define `color/background/default` in Light mode as `#FAFAF8` and in Dark mode as `#0F0F0F`. Switch the mode on any frame and every variable resolves to its dark mode value instantly. This mirrors exactly how semantic tokens work in code.',
        },
        {
          type: 'body',
          content:
            'Modes also enable multi-brand theming — define a Brand A mode and a Brand B mode for the same semantic variables. One component library, multiple brand skins.',
        },
        {
          type: 'visual',
          visualId: 'figma-variables-panel',
          caption:
            "Figma's Variables panel — collections, mode switcher, and the variable list with per-mode values.",
        },
        { type: 'section-heading', content: 'Collections and structure' },
        {
          type: 'body',
          content: 'Variables live in collections. A clean structure:',
        },
        {
          type: 'body',
          content:
            '- **Primitives** collection — all raw values, not exposed to component use\n- **Semantics** collection — all purpose-named variables, references primitives\n- **Components** collection (optional) — component-scoped variables, references semantics',
        },
        {
          type: 'body',
          content:
            "Scope your variables — Figma lets you restrict which variable types appear in which contexts. A spacing variable shouldn't appear in a colour picker.",
        },
        {
          type: 'callout',
          calloutType: 'insight',
          content:
            'The structure of your Figma Variables should mirror the structure of your code tokens. If they diverge, handoff gets messy. Use the same names. This is the foundation of a smooth design-to-code workflow.',
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.designTokens,
              reason: 'The concept variables implement.',
            },
            {
              ...REF.semanticTokens,
              reason: 'The layer that makes modes work.',
            },
            {
              ...REF.designToCode,
              reason: 'How Figma Variables sync to code tokens.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 08 — Figma Components
  // --------------------------------------------------------------------------
  {
    slug: 'figma-components',
    number: 8,
    name: 'Figma Components',
    description:
      'Variants, properties, auto layout, and building components developers can actually use.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'A Figma component is a reusable UI element defined once and instanced throughout a design file. Well-built components use variants, properties, and auto layout to mirror how the element behaves in code — making handoff accurate and design at scale manageable.',
        },
        { type: 'section-heading', content: 'Components and instances' },
        {
          type: 'body',
          content:
            'A component (the main component) is the source of truth. An instance is a copy placed in a design. Edit the main component and every instance updates. This mirrors the component model in code — one definition, many uses.',
        },
        { type: 'section-heading', content: 'Variants and properties' },
        {
          type: 'body',
          content:
            'Modern Figma components use properties to expose their configurable options:',
        },
        {
          type: 'body',
          content:
            '- **Variant properties** — discrete states or types. A Button might have variants for Type (Primary, Secondary, Ghost, Destructive) and Size (Small, Medium, Large).\n- **Boolean properties** — show/hide a layer. HasIcon: true/false.\n- **Instance swap properties** — swap a nested component (swap one icon for another).\n- **Text properties** — expose a text layer for editing without detaching.',
        },
        {
          type: 'body',
          content:
            'Properties are what make components useful at scale. Without them, designers create endless one-off variants by detaching instances and overriding layers manually — which breaks the connection to the main component.',
        },
        {
          type: 'visual',
          visualId: 'button-comparison',
          caption:
            'A button without auto layout and variants is a drawing. With them, it is a component a developer can read.',
        },
        { type: 'section-heading', content: 'Auto layout — non-negotiable' },
        {
          type: 'body',
          content:
            "Auto layout is Figma's flexbox. A component without auto layout is rigid — it cannot grow with its content, cannot respond to text changes, and does not behave like a real UI element. Every component should use auto layout. It is not optional.",
        },
        {
          type: 'callout',
          calloutType: 'insight',
          content:
            "Auto layout in Figma directly maps to flexbox in CSS. When a developer inspects a component built with auto layout, they see layout logic they can immediately translate to code. When they inspect a component without it, they see fixed positions that don't reflect how the element actually works in a browser.",
        },
        { type: 'section-heading', content: 'Building for developers' },
        {
          type: 'body',
          content:
            'The names you give variants and properties in Figma should match the prop names in code. If the React component has `variant="primary"` and `size="lg"`, the Figma component should have a Variant property called "variant" and a Size property called "size" with matching values. This seems like a small detail. It dramatically reduces the translation cost at handoff.',
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.componentTokens,
              reason: 'How tokens apply at the component level.',
            },
            {
              ...REF.figmaVariables,
              reason: 'How variables power component theming.',
            },
            {
              ...REF.designToCode,
              reason: 'How Figma components map to React components.',
            },
            {
              ...REF.componentStates,
              reason: 'The states every component needs.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 09 — Component Documentation
  // --------------------------------------------------------------------------
  {
    slug: 'component-documentation',
    number: 9,
    name: 'Component Documentation',
    description:
      "What good documentation looks like, with usage guidelines and do/don't examples.",
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Component documentation is the written layer of a design system — the guidelines, rules, and examples that explain not just what a component looks like, but when to use it, how to use it correctly, and what to avoid.',
        },
        { type: 'section-heading', content: 'Why documentation is the hardest part' },
        {
          type: 'body',
          content:
            'Any team can build a component library. Far fewer build one people actually use correctly. The difference is documentation. A component without docs is a tool without a manual — technically functional, practically misunderstood. Documentation is what turns a component library into a design system.',
        },
        {
          type: 'section-heading',
          content: 'What good component documentation contains',
        },
        {
          type: 'body',
          content: 'A well-documented component includes:',
        },
        {
          type: 'body',
          content:
            '- **Description** — one paragraph on what the component is and its primary purpose\n- **Anatomy** — a labelled diagram showing every part of the component (container, label, icon, border, etc.)\n- **Variants and props** — a table or list of every configurable option and what it does\n- **Usage guidelines** — when to use this component and when not to\n- **Do / Don\'t examples** — visual pairs showing correct and incorrect usage\n- **States** — documentation of every state (default, hover, focus, disabled, loading, error)\n- **Accessibility notes** — keyboard behaviour, ARIA roles, screen reader expectations\n- **Related components** — links to similar components with guidance on when to choose each',
        },
        {
          type: 'visual',
          visualId: 'doc-page-mock',
          caption:
            "A component doc page packs anatomy, usage rules, do/don'ts, and props into one scannable layout.",
        },
        { type: 'section-heading', content: 'Where documentation lives' },
        {
          type: 'body',
          content:
            "- **Figma** — component pages with usage notes and do/don't frames. Good for designers.\n- **Storybook** — component stories with controls and code examples. Good for developers.\n- **Zeroheight / Supernova** — dedicated documentation sites that pull from both Figma and Storybook. Good for cross-functional teams.\n- **Custom doc sites** — what large systems like Material, Carbon, and Polaris use.",
        },
        { type: 'section-heading', content: 'Writing tone' },
        {
          type: 'body',
          content:
            'Documentation should be decisive and opinionated. Not "you might consider using a primary button for the main action" but "use the primary button for the single most important action on a screen. Use it once per view." Wishy-washy docs create inconsistency — designers interpret ambiguity differently.',
        },
        {
          type: 'callout',
          calloutType: 'example',
          content:
            "Polaris (Shopify's design system) is widely considered one of the best-documented systems precisely because of its writing. It doesn't just say what a component looks like — it says what problem it solves and shows three examples of when not to use it. That level of specificity is what makes a system usable.",
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.figmaComponents,
              reason: 'Building the components that documentation describes.',
            },
            {
              ...REF.storybookDesigner,
              reason: 'Where code-side documentation lives.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 10 — The Design-to-Code Relationship
  // --------------------------------------------------------------------------
  {
    slug: 'design-to-code-relationship',
    number: 10,
    name: 'The Design-to-Code Relationship',
    description:
      'How a Figma component maps to a React component, and why naming matters.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'The design-to-code relationship is the connection between a component as it exists in Figma and the same component as it exists in a codebase — and the practices that keep those two representations in sync.',
        },
        {
          type: 'section-heading',
          content: 'Why this relationship is the central tension of product design',
        },
        {
          type: 'body',
          content:
            'A product only exists in code. A design only exists in Figma. The gap between them is where most product quality problems originate — components that look right in the design file but behave differently in the browser, tokens that got renamed in code but not in Figma, states that were designed but never communicated to the developer. The design-to-code relationship is the discipline of closing that gap.',
        },
        {
          type: 'section-heading',
          content: 'How a Figma component maps to a React component',
        },
        {
          type: 'body',
          content:
            'A Figma component named `Button` with properties `variant` (Primary, Secondary, Ghost) and `size` (Small, Medium, Large) maps to a React component with matching props.',
        },
        {
          type: 'visual',
          visualId: 'figma-to-react',
          caption:
            'Matching property names in Figma and code remove the translation layer at handoff.',
        },
        {
          type: 'body',
          content:
            "When these names match, a developer looking at a design in Figma can write the component instantiation without asking a single question. When they don't match, every handoff involves a translation layer that introduces ambiguity.",
        },
        {
          type: 'section-heading',
          content: 'Token sync — how design decisions flow to code',
        },
        {
          type: 'body',
          content:
            'Design tokens are the mechanism that keeps values in sync between Figma and code. The pipeline typically works like this:',
        },
        {
          type: 'body',
          content:
            '- Tokens are defined in Figma Variables\n- A plugin (like Tokens Studio) exports them to a JSON file\n- A tool like Style Dictionary transforms that JSON into CSS custom properties, JavaScript variables, or whatever format the codebase needs\n- The codebase imports those variables\n- A designer changes a token in Figma → exports → the change flows through to production',
        },
        {
          type: 'body',
          content:
            'This pipeline is not always set up, especially in smaller teams. But understanding that it CAN work this way is important — it is the architecture that mature design systems aim for.',
        },
        {
          type: 'callout',
          calloutType: 'insight',
          content:
            'You do not need a fully automated token pipeline to get value from token thinking. Even manually keeping your Figma Variables and your tokens.css file in sync — same names, same values — is enormously better than no system at all. Start simple. The automation can come later.',
        },
        {
          type: 'section-heading',
          content: 'Why a designer who understands this is valuable',
        },
        {
          type: 'body',
          content:
            'Most junior designers treat handoff as "sending Figma links." A designer who understands component props, token naming, and how Figma maps to code can participate in the engineering conversation — not write the code, but understand it well enough to make better design decisions and collaborate without friction. That is a significant differentiator at junior level.',
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.figmaComponents,
              reason: 'Building components that map cleanly to code.',
            },
            {
              ...REF.figmaVariables,
              reason: 'How token sync starts in Figma.',
            },
            {
              ...REF.componentTokens,
              reason: 'The token layer that bridges design and code.',
            },
            {
              ...REF.frameworks,
              reason: 'What React components actually are.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 11 — Storybook from the Designer's Perspective
  // --------------------------------------------------------------------------
  {
    slug: 'storybook-designer-perspective',
    number: 11,
    name: "Storybook from the Designer's Perspective",
    description:
      'What it is, how to read it, and why it matters for handoff.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Storybook is a development tool that renders UI components in isolation — outside of the full application — so they can be built, tested, and documented independently. For designers, it is the place where the built component lives and where you can verify that the design was implemented correctly.',
        },
        { type: 'section-heading', content: 'What Storybook is' },
        {
          type: 'body',
          content:
            'Storybook is an open-source tool that creates a separate mini-application alongside the main product. In it, every component is rendered on its own, in every state, with controls to adjust its props in real time. It is where developers build components in isolation (without needing the full app running) and where the component library becomes browsable and testable.',
        },
        {
          type: 'section-heading',
          content: "Why it exists — the developer's problem it solves",
        },
        {
          type: 'body',
          content:
            'Building a component inside a live application is messy — you need the right data, the right page state, the right user permissions. Storybook removes all of that. A developer can build a modal component without needing to navigate to the flow that triggers it. A "story" is just a component rendered with a specific set of props — one story for the default state, one for the error state, one for the loading state.',
        },
        {
          type: 'visual',
          visualId: 'storybook-interface',
          caption:
            'Storybook: sidebar of components and stories, canvas with a live render, and controls to adjust props.',
        },
        {
          type: 'section-heading',
          content: 'Why designers should know how to use it',
        },
        {
          type: 'body',
          content:
            'Storybook is increasingly the source of truth for what is actually built. A designer who can navigate a Storybook can:',
        },
        {
          type: 'body',
          content:
            '- Verify that the implemented component matches the design intent\n- Check that all states (hover, focus, disabled, error) were built correctly\n- Share a direct link to a specific component state in a bug report or design review\n- Understand the available props before designing a new use case for an existing component',
        },
        {
          type: 'callout',
          calloutType: 'insight',
          content:
            'Before raising a "this doesn\'t match the design" comment, check Storybook first. The implementation might be intentionally different for a technical reason. Storybook gives you the context to have that conversation properly.',
        },
        { type: 'section-heading', content: 'What to look for in Storybook' },
        {
          type: 'body',
          content:
            "- **The sidebar** — lists all components and their stories (states)\n- **The canvas** — renders the component live\n- **The controls panel** — lets you change props interactively without touching code. This is the equivalent of Figma's property panel.\n- **The docs tab** — auto-generated or hand-written documentation for the component, including prop descriptions and usage notes",
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.componentDocs,
              reason: 'Storybook as a documentation platform.',
            },
            {
              ...REF.designToCode,
              reason: 'Storybook as a verification tool.',
            },
            {
              ...REF.storybookEngineer,
              reason: 'The technical perspective on the same tool.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 12 — Real System Examples
  // --------------------------------------------------------------------------
  {
    slug: 'real-system-examples',
    number: 12,
    name: 'Real System Examples',
    description:
      'Material, Radix, Primer, Carbon, Atlassian — what each prioritises and why.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Studying real design systems teaches you what mature systems look like in practice — what each team prioritised, what trade-offs they made, and what you can apply to your own work.',
        },
        { type: 'section-heading', content: 'How to study a design system' },
        {
          type: 'body',
          content:
            "Don't just browse the components. Look for: how they handle tokens, how their documentation is written, what their contribution model is, and where they made opinionated choices. The interesting thing about any design system is not what it includes — it's why.",
        },
        {
          type: 'visual',
          visualId: 'system-reference-cards',
          caption: 'Six systems worth studying — and what to steal from each.',
        },
        { type: 'section-heading', content: 'Material Design (Google)' },
        {
          type: 'body',
          content:
            'The system that established the template for public design systems. First published in 2014, now on Material 3. Known for its strong motion and interaction principles — it was the first major system to treat animation as a design decision, not a developer afterthought. Material 3 introduced dynamic colour, which generates a full colour scheme from a single seed colour. **What to steal:** the depth of interaction documentation, and the approach to elevation and colour roles.',
        },
        { type: 'section-heading', content: 'Polaris (Shopify)' },
        {
          type: 'body',
          content:
            "Widely considered one of the best-documented systems in the industry. Polaris is notable not for its visual design but for its content — the writing guidelines are exceptional, and every component page includes opinionated guidance on when NOT to use it. Built for Shopify's merchant-facing products, so it handles complex data-heavy interfaces well. **What to steal:** the writing quality and the specificity of usage guidelines.",
        },
        { type: 'section-heading', content: 'Carbon (IBM)' },
        {
          type: 'body',
          content:
            'A large-scale enterprise system with an accessibility-first philosophy. Carbon is notable for its rigour — every component is tested against WCAG standards and ships with detailed accessibility annotations. Built for complex, data-dense enterprise products. **What to steal:** the approach to accessibility documentation, and the density system (2px, 4px, and 8px grid variants for different product contexts).',
        },
        { type: 'section-heading', content: 'Atlassian Design System' },
        {
          type: 'body',
          content:
            'Built for Jira, Confluence, and the broader Atlassian suite — products that are more about productivity and information management than visual polish. The Atlassian system is strong on patterns (not just components) and is notable for its guidance on complex interaction states. **What to steal:** the pattern-level thinking, and how they handle complexity in data-heavy UI.',
        },
        { type: 'section-heading', content: 'Primer (GitHub)' },
        {
          type: 'body',
          content:
            "A developer-tool design system that demonstrates that systems built for technical audiences don't need to sacrifice craft. Primer is clean, well-documented, and open source — you can read the source code alongside the documentation. **What to steal:** the transparency of the contribution model and the quality of the token documentation.",
        },
        { type: 'section-heading', content: 'Radix UI' },
        {
          type: 'body',
          content:
            'A different approach entirely — headless components. Radix provides the behaviour and accessibility of UI components (modal focus trapping, dropdown keyboard navigation, tooltip positioning) without any visual styling. You bring your own design. This is increasingly influential because it separates the hard engineering problems from the design decisions. **What to steal:** the philosophy that accessibility and interaction logic should be solved once and reused — not rebuilt with every component library.',
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.whatItIs,
              reason: 'What these systems are examples of.',
            },
            {
              ...REF.componentDocs,
              reason: 'How these systems document their components.',
            },
            {
              ...REF.tokenTheming,
              reason: 'How systems like Material handle theming.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 13 — Contribution & Governance
  // --------------------------------------------------------------------------
  {
    slug: 'contribution-and-governance',
    number: 13,
    name: 'Contribution & Governance',
    description:
      'Who owns the system, how changes get proposed, and versioning.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Design system governance is the set of processes and ownership structures that determine how the system evolves — how new components are proposed, reviewed, built, and released, and who is responsible for keeping the system healthy.',
        },
        {
          type: 'section-heading',
          content: 'Why governance is what makes or breaks a system',
        },
        {
          type: 'body',
          content:
            "A design system without governance is a snapshot. It reflects the team's decisions at the moment it was built and then slowly becomes outdated as the product evolves around it. Governance is the mechanism that keeps the system alive — it is the answer to \"how does anything ever change?\"",
        },
        { type: 'section-heading', content: 'Ownership models' },
        { type: 'sub-heading', content: 'Centralised' },
        {
          type: 'body',
          content:
            'A dedicated design system team owns the system entirely. All contributions are made by this team. High quality and consistency, but a bottleneck. Works well for large organisations with enough budget for a dedicated team.',
        },
        { type: 'sub-heading', content: 'Federated' },
        {
          type: 'body',
          content:
            'Contributors from across the product organisation can propose and build components, with a core team responsible for review and standards. Faster, more representative of real product needs, but requires strong review processes to maintain quality.',
        },
        { type: 'sub-heading', content: 'Hybrid' },
        {
          type: 'body',
          content:
            'The most common model. A small core team sets standards and owns the token and primitive layers. Product teams contribute components through a defined process, reviewed by the core team before acceptance.',
        },
        { type: 'section-heading', content: 'The contribution lifecycle' },
        {
          type: 'body',
          content:
            "A healthy contribution process typically has these stages:\n\n- **Proposal** — a designer or team identifies a need. They check the system doesn't already solve it, then submit a proposal with the use case.\n- **Review** — the core team (or a review group) evaluates whether this belongs in the system or should stay local to the product.\n- **Design** — if accepted, the component is designed to system standards, including all states, variants, and accessibility requirements.\n- **Build** — the component is built in code to match the design.\n- **Documentation** — usage guidelines, do/don'ts, accessibility notes, and props documentation are written.\n- **Release** — the component is versioned and released. Existing users of the system are notified.",
        },
        {
          type: 'visual',
          visualId: 'contribution-flowchart',
          caption:
            'A healthy contribution path — from "does this already exist?" to a versioned release.',
        },
        { type: 'section-heading', content: 'Versioning basics' },
        {
          type: 'body',
          content:
            'Design systems use semantic versioning (the same system as software): `major.minor.patch` — e.g. `3.2.1`.',
        },
        {
          type: 'body',
          content:
            '- **Patch** (3.2.1 → 3.2.2) — bug fixes, no API changes\n- **Minor** (3.2.1 → 3.3.0) — new components or tokens added, backwards compatible\n- **Major** (3.2.1 → 4.0.0) — breaking changes. Something that worked before may need to be updated.',
        },
        {
          type: 'callout',
          calloutType: 'warning',
          content:
            'Breaking changes in a design system affect every team using it. A major version bump should be rare, well-communicated, and come with a migration guide. Systems that break things frequently without warning lose the trust of the teams that depend on them.',
        },
        { type: 'section-heading', content: 'Common failure modes' },
        {
          type: 'body',
          content:
            '- No clear owner — the system drifts because nobody is responsible for it\n- Contribution too slow — teams stop waiting and build locally, creating divergence\n- No versioning — teams can\'t pin to a stable version, updates break things unexpectedly\n- Documentation debt — components exist but docs are never written, so the system is underused',
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.whyTheyExist,
              reason: 'The value the governance model protects.',
            },
            {
              ...REF.whenNotToUse,
              reason: 'The other side of the governance conversation.',
            },
            {
              ...REF.gitAndGithub,
              reason: 'How versioning and contribution work in code.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 14 — Token Theming in Practice (with interactive demo)
  // --------------------------------------------------------------------------
  {
    slug: 'token-theming-in-practice',
    number: 14,
    name: 'Token Theming in Practice',
    description: 'How one token system powers multiple brands or themes.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Token theming is the practice of using the semantic token layer to power multiple visual presentations of the same interface — different colour modes, different brands, or user-customisable preferences — by changing what primitive values the semantic tokens resolve to.',
        },
        { type: 'section-heading', content: 'The payoff of the semantic layer' },
        {
          type: 'body',
          content:
            'This is where the three-tier token model earns its complexity. The mechanism is simple: semantic tokens are stable names. What they point to can change. Change the pointer, and the entire interface repaints — without touching a single component.',
        },
        { type: 'section-heading', content: 'Light and dark mode' },
        {
          type: 'body',
          content:
            'The simplest form of theming. In light mode, `color.background.default` points to `neutral-50`. In dark mode, it points to `neutral-950`. Every component uses `color.background.default`. Switch the mode and every component updates. No component needs to know about light or dark mode. That knowledge lives entirely in the token layer.',
        },
        {
          type: 'body',
          content:
            'This is why dark mode built without a semantic token layer is so painful — you end up with hundreds of individual CSS overrides, one per component, that all need maintaining separately.',
        },
        { type: 'section-heading', content: 'Multi-brand systems' },
        {
          type: 'body',
          content:
            "More complex, but same mechanism. A SaaS company white-labelling their product to multiple clients gives each client a Brand mode. Brand A's `color.action.primary` resolves to their blue. Brand B's resolves to their green. Same components, same codebase, different visual identity. The components are entirely unaware of the brand.",
        },
        {
          type: 'callout',
          calloutType: 'example',
          content:
            "Salesforce's Lightning Design System uses this pattern to power different visual themes across their product suite. One token system, multiple brand expressions, zero component duplication.",
        },
        {
          type: 'visual',
          visualId: 'theme-switcher',
          caption:
            'Same component, three themes. Switch the theme and watch the semantic tokens resolve to different primitives live.',
        },
        { type: 'section-heading', content: 'User-controlled theming' },
        {
          type: 'body',
          content:
            'Some products expose theming to users — Linear lets you choose an accent colour, Notion lets you set a page theme, many productivity tools offer high-contrast modes. These work by exposing a subset of semantic tokens to user control and persisting the choice in local storage or a user preference record. The components remain unchanged — only the token values shift.',
        },
        {
          type: 'section-heading',
          content: 'Why this only works if the semantic layer is solid',
        },
        {
          type: 'body',
          content:
            'If components reference primitive tokens directly (`blue-600`) instead of semantic tokens (`color.action.primary`), theming is impossible without touching every component. The semantic layer is the prerequisite. The moment you skip it, you lose theming, you lose easy dark mode, and you lose the ability to rebrand without a full audit.',
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.semanticTokens,
              reason: 'The layer that makes theming work.',
            },
            {
              ...REF.figmaVariables,
              reason: 'Modes in Figma as the design-side implementation.',
            },
            {
              ...REF.colourModes,
              reason: 'Building palettes that support multiple modes.',
            },
          ],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 15 — When NOT to Use the Design System
  // --------------------------------------------------------------------------
  {
    slug: 'when-not-to-use-the-design-system',
    number: 15,
    name: 'When NOT to Use the Design System',
    description:
      'The judgment call of going off-system and what it costs.',
    article: {
      sections: [
        {
          type: 'definition',
          content:
            'Knowing when to go off-system is as important as knowing how to use the system. A design system is a tool for building consistent products — not a constraint that prevents good design decisions.',
        },
        { type: 'section-heading', content: 'The maturity marker' },
        {
          type: 'body',
          content:
            'Junior designers either ignore the system or follow it rigidly. Senior designers know when to use it, when to extend it, and when to deliberately go around it — and they can articulate why. The ability to make that judgment call is a signal of design maturity.',
        },
        { type: 'section-heading', content: 'Legitimate reasons to go off-system' },
        { type: 'sub-heading', content: 'Marketing and brand moments' },
        {
          type: 'body',
          content:
            "Product UI and marketing surfaces have different jobs. A landing page, a campaign microsite, or an onboarding splash screen may intentionally break from the product's component system to create a distinct brand experience. This is expected and appropriate.",
        },
        { type: 'sub-heading', content: 'Genuinely novel interfaces' },
        {
          type: 'body',
          content:
            "Sometimes a product problem has no precedent in the system — a new interaction model, a data visualisation, a feature that doesn't map to any existing pattern. Building it within the system's constraints would produce an inferior result. Going off-system, documenting why, and potentially contributing back is the right call.",
        },
        { type: 'sub-heading', content: 'Experimental and prototype work' },
        {
          type: 'body',
          content:
            'Design exploration should be unconstrained. Using the system in prototypes is good for fidelity when presenting to stakeholders, but early-stage exploration benefits from ignoring it entirely.',
        },
        {
          type: 'sub-heading',
          content: "Edge cases the system genuinely doesn't cover",
        },
        {
          type: 'body',
          content:
            'A good system acknowledges its own gaps. If a component doesn\'t exist and the use case is too narrow for a contribution, an off-system solution is appropriate.',
        },
        {
          type: 'visual',
          visualId: 'off-system-decision-tree',
          caption:
            'Four questions to walk through before going off-system.',
        },
        { type: 'section-heading', content: 'How to go off-system responsibly' },
        {
          type: 'callout',
          calloutType: 'warning',
          content:
            '"Going off-system" is not the same as "ignoring the system." Off-system work should still use the token layer — same spacing values, same type scale, same colour primitives. Going off-system means creating a new component or pattern, not abandoning the foundational decisions.',
        },
        {
          type: 'body',
          content: 'The responsible approach:',
        },
        {
          type: 'body',
          content:
            "- Check whether the system actually covers the case — it might, in a way you haven't seen\n- If not, build the solution using system tokens where possible\n- Document the decision — why you went off-system and what the trade-off is\n- Consider whether the solution belongs in the system — if other teams will need the same thing, propose a contribution",
        },
        { type: 'section-heading', content: 'The cost of off-system work' },
        {
          type: 'body',
          content:
            'Every off-system component is a component nobody else can reuse, nobody else will document, and nobody else will maintain. Accessibility and dark mode support may be missing. It creates design debt — not always bad debt, but debt that should be acknowledged.',
        },
        {
          type: 'cross-refs',
          items: [
            {
              ...REF.whyTheyExist,
              reason: "The value you're choosing to trade off.",
            },
            {
              ...REF.contribution,
              reason:
                'The channel for feeding back off-system solutions.',
            },
            {
              ...REF.careerPortfolio,
              reason: 'How to talk about design judgment in interviews.',
            },
          ],
        },
      ],
    },
  },
];
