# Content Brief: Design Systems (UX Design — Sub-category 06)

## How to use this file
This is a Claude Code build brief. To implement this section, say:
"Read _content-briefs/ux-design/06-design-systems.md and implement everything it describes."

This brief assumes the site shell is already built and running. It adds article content only — do not rebuild the shell, routing, tokens, or existing components.

---

# Build: Design Systems — All 15 Article Pages

## Context

This is an addition to an existing personal learning glossary built with Vite + React + TypeScript. The shell is already built — routing, navigation, theme toggle, completion tracking, and all content data files exist. You are adding the article content for the 15 topics inside the Design Systems sub-category.

Do NOT rebuild the shell. Do NOT change tokens, global styles, routing, or existing components unless something is genuinely broken. Work within the existing structure.

## What to Build

For each of the 15 Design Systems topics, build a full article page. These pages render when a user navigates to:

`/ux-design/design-systems/:topicSlug`

The Topic.tsx page already exists as a placeholder. You are replacing that placeholder with a real article renderer that pulls in rich content per topic.

## Article Page Structure

Every article page must have the following structure — in this order:

1. **Breadcrumb** — Home → UX Design → Design Systems → [Topic Name]
2. **Topic number + title** — zero-padded (06 — 01, 06 — 02, etc.)
3. **One-line summary** — the existing description from the content data file
4. **Body content** — the article itself (see per-topic content below)
5. **Cross-references** — a clearly styled section at the bottom linking to related topics, with a one-line note on why each is relevant
6. **Mark complete button** — uses the existing useCompletion hook, same behaviour as the card indicator

## Article Body Format

Each article uses a consistent set of content blocks. Build these as reusable components:

- `<Definition>` — a highlighted block for the core definition. Visually distinct — slightly tinted background using the accent colour at low opacity, left border in accent colour.
- `<BodyText>` — standard prose paragraphs
- `<SectionHeading>` — h2-level headings within the article
- `<SubHeading>` — h3-level headings
- `<Callout type="insight" | "warning" | "example">` — for misconceptions, important distinctions, and real-world examples. Each type has a distinct but subtle visual treatment.
- `<VisualBlock>` — a container for diagrams, illustrations, and interactive demos. Labelled with a caption underneath.
- `<CrossReferences>` — bottom section with linked cards to related topics

All components should be in `src/components/Article/` and used across all 15 articles.

## Content Data Structure

Article content should live in the existing content file: `src/content/ux-design/design-systems.ts`

Extend the existing Topic type to include an optional `article` field. Structure it so that content can be written as structured data (sections with type + content) rather than raw HTML. This keeps content editable without touching component code.

## Design Rules

- Articles should feel spacious and readable — like a well-crafted documentation page
- Max content width: 720px, centred
- Generous line height (1.7–1.8 for body text)
- Section headings have clear breathing room above them
- The Definition block should stand out without being loud
- Callout blocks are subtle — a light tinted background, a small label (INSIGHT / WARNING / EXAMPLE), not heavy boxes
- Visuals and interactive demos sit in clearly bounded VisualBlock containers with a caption
- On mobile, all layout is single column, type scale steps down gracefully
- Dark mode fully supported throughout — all new components must respect the existing CSS custom properties in tokens.css

## Per-Topic Article Content

---

### Topic 01 — What a Design System Is
**Slug:** what-a-design-system-is

**Definition block:**
"A design system is the shared set of rules, components, and documentation that a product team uses to build interfaces consistently at scale."

**Body:**

Section: The problem it solves
Without a shared system, every designer and developer makes isolated decisions. Buttons get rebuilt from scratch. Colours drift. Spacing becomes inconsistent. The same UI problem gets solved twelve different ways across twelve screens. A design system makes consistency a default rather than a discipline — it encodes good decisions once so the whole team benefits from them every time.

Section: Three things people confuse it with
This is the most important distinction in this topic:

- **Style guide** — a document of visual rules: colours, typography, logo usage. Static. Often a PDF or a Notion page. It tells you what things should look like but gives you nothing to build with.
- **Component library** — a collection of reusable UI building blocks, either in Figma or in code. You can build with it, but it has no principles, no documentation, no governance. It answers "what does a button look like?" but not "when should I use a destructive button?"
- **Design system** — all of the above, plus: design principles, usage guidelines, documentation, the shared vocabulary between design and engineering, and the governance model that keeps it alive. A design system is a product that your product team uses to build your product.

Section: What a design system actually contains
A mature design system typically includes:
- Design principles (the values that guide decisions)
- Design tokens (the named variables for colour, spacing, type, etc.)
- Component library (in Figma AND in code)
- Pattern guidelines (how components combine into flows)
- Documentation (usage rules, do/don't examples, accessibility notes)
- Contribution and governance model (how changes are proposed and shipped)

Section: Real examples worth knowing
- **Material Design (Google)** — one of the first large-scale public systems. Strong on motion and interaction principles.
- **Polaris (Shopify)** — widely respected for its content and writing guidelines, not just its components.
- **Carbon (IBM)** — enterprise scale, accessibility-first, highly detailed.
- **Atlassian Design System** — strong on patterns and product context, not just visual rules.
- **Primer (GitHub)** — a good example of a developer-tool design system done well.

Section: Common misconceptions

CALLOUT (warning): "We have a Figma library, so we have a design system."
No — you have a component library. A design system includes documentation, principles, and a live connection to the codebase. A Figma file alone is a starting point, not a system.

CALLOUT (warning): "Design systems are only for big companies."
Small teams benefit too — maybe more, because they have less capacity to fix inconsistencies later. The investment scales with the team and product complexity.

CALLOUT (warning): "It's the designer's job to own the system."
A design system is a cross-functional product. It needs design, engineering, and often content strategy. Owned by one discipline, it dies.

**Visual:** A nested circles diagram — three concentric rings labelled from inside out: "Style Guide" / "Component Library" / "Design System". Each ring adds what the inner one is missing.

**Cross-references:**
- Design Tokens (topic 03) — the atomic units that a design system is built on
- Why Design Systems Exist (topic 02) — the deeper case for investment
- The Design-to-Code Relationship (topic 10) — how the system bridges design and engineering
- Storybook from the Designer's Perspective (topic 11) — where component documentation lives in code

---

### Topic 02 — Why Design Systems Exist
**Slug:** why-design-systems-exist

**Definition block:**
"Design systems exist to make consistency automatic, speed up teams, and create a shared language between designers and engineers — so good decisions made once benefit everyone, forever."

**Body:**

Section: The four real reasons

**1. Consistency becomes a default, not a discipline**
Without a system, consistency requires constant effort — reviews, redlines, correction. With a system, the right choice is the easy choice. A developer reaches for a component that already follows the rules.

**2. Teams move faster**
Designers stop rebuilding the same button. Engineers stop asking what shade of grey the border should be. Onboarding a new designer takes days, not months, because the system documents the decisions. Speed compounds — the older and healthier the system, the faster the team.

**3. A shared vocabulary between design and engineering**
One of the most underrated benefits. When a designer says "use the primary button" and an engineer reaches for `<Button variant="primary">`, they are talking about the same thing. Without a system, these conversations involve screenshots, approximations, and interpretation. With a system, they involve a shared reference.

**4. Scalability — multiple teams, one product**
A startup with five people doesn't need a formal system. A company with ten product teams working on the same product absolutely does. A design system is the mechanism that keeps a product coherent as the organisation grows.

Section: The hidden cost of NOT having one

CALLOUT (insight): Design drift is invisible until it isn't.
Inconsistency accumulates slowly. The first time someone uses the wrong blue, nothing breaks. By the time there are fourteen slightly different blues in production, a visual audit takes weeks and a fix affects hundreds of components. The cost of building a system is visible upfront. The cost of NOT building one is invisible until it becomes a crisis.

Other hidden costs:
- Duplicated work across teams (the same component rebuilt seven times)
- Accessibility gaps (each rebuild introduces new problems)
- Slower onboarding (new team members have no reference point)
- Designer and developer friction (misaligned expectations, lengthy handoffs)

Section: When a design system is NOT worth it
Honesty matters here. A design system is a product — it needs maintaining. For a one-person team, a short-lived project, or an early-stage product that pivots constantly, a heavy system creates overhead without return. Start with tokens and a small component library. Build the governance later, when there are enough people to justify it.

**Visual:** Two rows of three product screens. Top row: without a system — subtle but visible drift in button styles, spacing, and colour. Bottom row: with a system — consistent, coherent. Illustrated rather than screenshot-based.

**Cross-references:**
- What a Design System Is (topic 01) — what the system actually contains
- Contribution & Governance (topic 13) — how a system stays healthy over time
- Software Creation Workflow (Programming domain) — how design systems fit into how product teams ship

---

### Topic 03 — Design Tokens
**Slug:** design-tokens

**Definition block:**
"A design token is a named design decision — a variable that stores a single value (a colour, a spacing unit, a font size) and gives it a meaningful name so it can be used consistently across design and code."

**Body:**

Section: What a token actually is
Before tokens, a designer would spec a button background as `#1D4ED8` and a developer would hardcode that value into a CSS file. If the brand colour changed, every instance had to be found and updated manually. A token replaces the raw value with a name: `color.action.primary`. Change the value behind that name once, and it updates everywhere — in Figma, in the web app, in the mobile app, in the email templates.

A token is not a Figma variable. It is not a CSS custom property. It is a design decision that CAN be represented as a Figma variable AND as a CSS custom property — the token is the concept, the variable is the implementation.

Section: Why tokens matter more than they seem
Tokens are the bridge between design and code. They are the mechanism that makes it possible for a designer to change a colour in Figma and have that change flow through to a production codebase without anyone manually updating values. They are also what makes theming — light mode, dark mode, multiple brands — technically possible at scale.

Section: The three-tier model
Tokens are not flat. A mature token system has three layers:

- **Primitive tokens** — raw values with no meaning attached. `blue-600: #2563EB`. `space-4: 16px`.
- **Semantic tokens** — named by purpose, not value. `color.background.danger` points to `red-600`. `color.background.success` points to `green-500`. These are what components actually use.
- **Component tokens** — scoped to a specific component. `button.background.primary` points to `color.action.primary`.

Each layer builds on the one below. Changing a primitive updates everything that references it. Swapping which primitive a semantic token points to is how theming works.

Section: The naming problem
Naming tokens well is genuinely hard. A good token name describes PURPOSE, not appearance. `color.text.danger` is a good name — it tells you where and why to use it. `red` is a bad name — it tells you the value, not the decision. A name like `color.text.danger` can stay stable even if the danger colour changes from red to orange in a rebrand. `red` cannot.

CALLOUT (insight): The hardest part of building a token system is resisting the urge to name tokens after their values. The moment you write `blue-button-background`, you have locked the button to being blue. Name the decision, not the colour.

**Interactive demo:** Show a sample card component (with a background, a label, a button, and a border) alongside a set of token controls. Let the user change the accent token value and watch the card update in real time — background, button colour, and border all change simultaneously. This demonstrates in one interaction why tokens exist and what they enable. Use the accent colour from the site's own tokens.css as the starting value.

**Cross-references:**
- Primitive Tokens (topic 04) — the raw value layer in detail
- Semantic Tokens (topic 05) — the purpose layer in detail
- Component Tokens (topic 06) — the component-scoped layer in detail
- Figma Variables (topic 07) — how tokens are implemented in Figma
- CSS in Practice (Programming domain) — how tokens become CSS custom properties in code

---

### Topic 04 — Primitive Tokens
**Slug:** primitive-tokens

**Definition block:**
"Primitive tokens are the raw value layer of a token system — named constants that store a single design value with no attached meaning. They are the ingredients, not the recipes."

**Body:**

Section: What primitives look like
A primitive token has a name based on its scale position or category, and a raw value:

Colour primitives: `blue-50` through `blue-900`, `red-50` through `red-900`, `neutral-0` through `neutral-1000`
Spacing primitives: `space-1: 4px`, `space-2: 8px`, `space-4: 16px`, `space-8: 32px`
Font size primitives: `font-size-xs: 12px`, `font-size-sm: 14px`, `font-size-base: 16px`
Border radius primitives: `radius-sm: 4px`, `radius-md: 8px`, `radius-lg: 12px`

Section: The rule about primitives
Primitives are never used directly in components. A component should never reference `blue-600` — it should reference `color.action.primary`, which points TO `blue-600`. This indirection is the whole point. If you use primitives directly in components, you lose the ability to theme, rebrand, or switch modes without touching every component.

CALLOUT (warning): Using primitive tokens directly in components is the most common token system mistake. It feels faster at first. It causes significant pain later when you need to change a colour across the product.

Section: Why they exist as a separate layer
Primitives define the total available palette — the full set of values the system is allowed to use. Semantic tokens then choose from that palette. This constraint is intentional: it prevents token sprawl (hundreds of slightly different colours with no relationship to each other) and ensures the system stays coherent.

Think of it like a paint brand's colour range. The brand decides which 200 colours exist. Interior designers then choose from those 200 — they don't mix custom colours for every project.

**Visual:** Two grids side by side. Left: a colour primitive scale from `blue-50` (near white) to `blue-900` (near black), each chip labelled. Right: a spacing primitive scale from `space-1` to `space-16`, shown as horizontal bars of increasing length, each labelled with its token name and pixel value.

**Cross-references:**
- Design Tokens (topic 03) — the full token model overview
- Semantic Tokens (topic 05) — how primitives get given meaning
- Colour Theory & Application (UI Design domain) — how colour scales are constructed

---

### Topic 05 — Semantic Tokens
**Slug:** semantic-tokens

**Definition block:**
"Semantic tokens are named by their purpose, not their value. They are the layer that gives meaning to raw primitives — and the layer that makes theming, dark mode, and rebranding possible."

**Body:**

Section: The shift from value to meaning
A primitive token says: `blue-600: #2563EB`. A semantic token says: `color.background.action: blue-600`. The semantic token doesn't store a colour — it stores a decision about where blue-600 belongs. The name describes the use case, not the appearance.

This distinction seems small. Its consequences are enormous.

Section: Common semantic categories
A well-structured semantic layer typically organises tokens by:

- **Background** — `color.background.default`, `color.background.subtle`, `color.background.danger`, `color.background.success`
- **Foreground / Text** — `color.text.default`, `color.text.muted`, `color.text.danger`, `color.text.on-accent`
- **Border** — `color.border.default`, `color.border.focus`, `color.border.danger`
- **Action / Interactive** — `color.action.primary`, `color.action.primary.hover`, `color.action.primary.active`

Section: Why this layer makes dark mode possible
In light mode: `color.background.default` points to `neutral-50` (near white).
In dark mode: `color.background.default` points to `neutral-950` (near black).

The semantic token name stays exactly the same. The primitive it points to changes per mode. Every component that uses `color.background.default` gets light mode and dark mode for free — without any component-level changes.

CALLOUT (insight): Dark mode is not "invert everything." It is a second set of primitive references for every semantic token. The semantic layer is what makes this manageable — without it, you'd need to write separate dark mode styles for every component individually.

**Visual:** A diagram showing two columns — Light Mode and Dark Mode. In the middle: a set of semantic tokens (`color.background.default`, `color.text.default`, `color.border.default`). Arrows point left to light mode primitive values and right to dark mode primitive values. The same semantic names resolve to different primitives depending on the mode.

**Cross-references:**
- Primitive Tokens (topic 04) — the raw values semantic tokens point to
- Component Tokens (topic 06) — the next layer down
- Colour Modes (UI Design domain) — building palettes that work in both modes
- Token Theming in Practice (topic 14) — the full payoff of a semantic layer

---

### Topic 06 — Component Tokens
**Slug:** component-tokens

**Definition block:**
"Component tokens are design tokens scoped to a specific component. They are the most specific layer of the token system — they point to semantic tokens and exist only when a component genuinely needs its own decision-making layer."

**Body:**

Section: What they look like
`button.background.primary` — points to `color.action.primary`
`button.background.primary.hover` — points to `color.action.primary.hover`
`button.text.primary` — points to `color.text.on-accent`
`card.border.radius` — points to `radius-md`
`input.border.focus` — points to `color.border.focus`

Section: The full chain
Component tokens create the final layer in the three-tier model:

`button.background.primary` → `color.action.primary` → `blue-600`

This chain means: to retheme the primary button background, you change one semantic token. Every component that references it updates. The component token is stable — it always points to `color.action.primary`. What changes is what `color.action.primary` resolves to at the primitive level.

Section: When you actually need them
Not every component needs component tokens. Component tokens are worth creating when:
- The component has many states that need individual token references (buttons, inputs, badges)
- The component is used extensively and its values might need independent overriding
- You are building a white-label system where clients can customise individual components

They are NOT worth creating for:
- Simple, rarely-customised elements
- One-off patterns
- Early-stage systems that are still evolving

CALLOUT (warning): Over-engineering component tokens is a real failure mode. A token system with 2,000 component tokens that nobody understands is worse than a flat system everyone can navigate. Build the layer when it earns its complexity.

**Visual:** A clean three-level diagram showing the full chain. Three rows, top to bottom: Component Token → Semantic Token → Primitive Token. Using the button primary example with actual names and values at each level. Arrows connecting each level.

**Cross-references:**
- Design Tokens (topic 03) — the full token model overview
- Semantic Tokens (topic 05) — the layer component tokens point to
- Figma Components (topic 08) — how component tokens map to Figma component properties

---

### Topic 07 — Figma Variables
**Slug:** figma-variables

**Definition block:**
"Figma Variables are Figma's native implementation of design tokens — named values that can be applied across a design file and switched via modes, enabling light/dark theming and multi-brand design directly in the design tool."

**Body:**

Section: Variables are tokens in Figma
Figma Variables (introduced in 2023) are the design tool's answer to the token problem. Before variables, designers used styles (which were flat and couldn't be aliased or themed). Variables introduced aliasing — a variable can point to another variable — which is exactly the primitive → semantic → component relationship in token form.

Section: Variable types
Figma supports four variable types:
- **Colour** — for any fill, stroke, or effect colour
- **Number** — for spacing, sizing, corner radius, opacity
- **String** — for text content, font family references
- **Boolean** — for showing/hiding layers, toggling states

Section: Modes — the killer feature
A variable collection can have multiple modes. The most common use: Light and Dark. You define `color/background/default` in Light mode as `#FAFAF8` and in Dark mode as `#0F0F0F`. Switch the mode on any frame and every variable resolves to its dark mode value instantly. This mirrors exactly how semantic tokens work in code.

Modes also enable multi-brand theming — define a Brand A mode and a Brand B mode for the same semantic variables. One component library, multiple brand skins.

Section: Collections and structure
Variables live in collections. A clean structure:
- **Primitives** collection — all raw values, not exposed to component use
- **Semantics** collection — all purpose-named variables, references primitives
- **Components** collection (optional) — component-scoped variables, references semantics

Scope your variables — Figma lets you restrict which variable types appear in which contexts. A spacing variable shouldn't appear in a colour picker.

CALLOUT (insight): The structure of your Figma Variables should mirror the structure of your code tokens. If they diverge, handoff gets messy. Use the same names. This is the foundation of a smooth design-to-code workflow.

**Visual:** An annotated diagram of the Figma Variables panel — the collections sidebar, the variable list, the mode switcher, and the value/alias field — with callout labels explaining each part.

**Cross-references:**
- Design Tokens (topic 03) — the concept variables implement
- Semantic Tokens (topic 05) — the layer that makes modes work
- The Design-to-Code Relationship (topic 10) — how Figma Variables sync to code tokens

---

### Topic 08 — Figma Components
**Slug:** figma-components

**Definition block:**
"A Figma component is a reusable UI element defined once and instanced throughout a design file. Well-built components use variants, properties, and auto layout to mirror how the element behaves in code — making handoff accurate and design at scale manageable."

**Body:**

Section: Components and instances
A component (the main component) is the source of truth. An instance is a copy placed in a design. Edit the main component and every instance updates. This mirrors the component model in code — one definition, many uses.

Section: Variants and properties
Modern Figma components use properties to expose their configurable options:
- **Variant properties** — discrete states or types. A Button might have variants for Type (Primary, Secondary, Ghost, Destructive) and Size (Small, Medium, Large).
- **Boolean properties** — show/hide a layer. HasIcon: true/false.
- **Instance swap properties** — swap a nested component (swap one icon for another).
- **Text properties** — expose a text layer for editing without detaching.

Properties are what make components useful at scale. Without them, designers create endless one-off variants by detaching instances and overriding layers manually — which breaks the connection to the main component.

Section: Auto layout — non-negotiable
Auto layout is Figma's flexbox. A component without auto layout is rigid — it cannot grow with its content, cannot respond to text changes, and does not behave like a real UI element. Every component should use auto layout. It is not optional.

CALLOUT (insight): Auto layout in Figma directly maps to flexbox in CSS. When a developer inspects a component built with auto layout, they see layout logic they can immediately translate to code. When they inspect a component without it, they see fixed positions that don't reflect how the element actually works in a browser.

Section: Building for developers
The names you give variants and properties in Figma should match the prop names in code. If the React component has `variant="primary"` and `size="lg"`, the Figma component should have a Variant property called "variant" and a Size property called "size" with matching values. This seems like a small detail. It dramatically reduces the translation cost at handoff.

**Visual:** Side-by-side comparison — two button components. Left: poorly built (no auto layout, manually positioned elements, no variants, fixed size). Right: well-built (auto layout, variant property with all states, size property, boolean for icon). Annotated to show the specific differences.

**Cross-references:**
- Component Tokens (topic 06) — how tokens apply at the component level
- Figma Variables (topic 07) — how variables power component theming
- The Design-to-Code Relationship (topic 10) — how Figma components map to React components
- Component States (Components & Patterns domain) — the states every component needs

---

### Topic 09 — Component Documentation
**Slug:** component-documentation

**Definition block:**
"Component documentation is the written layer of a design system — the guidelines, rules, and examples that explain not just what a component looks like, but when to use it, how to use it correctly, and what to avoid."

**Body:**

Section: Why documentation is the hardest part
Any team can build a component library. Far fewer build one people actually use correctly. The difference is documentation. A component without docs is a tool without a manual — technically functional, practically misunderstood. Documentation is what turns a component library into a design system.

Section: What good component documentation contains
A well-documented component includes:

- **Description** — one paragraph on what the component is and its primary purpose
- **Anatomy** — a labelled diagram showing every part of the component (container, label, icon, border, etc.)
- **Variants and props** — a table or list of every configurable option and what it does
- **Usage guidelines** — when to use this component and when not to
- **Do / Don't examples** — visual pairs showing correct and incorrect usage
- **States** — documentation of every state (default, hover, focus, disabled, loading, error)
- **Accessibility notes** — keyboard behaviour, ARIA roles, screen reader expectations
- **Related components** — links to similar components with guidance on when to choose each

Section: Where documentation lives
- **Figma** — component pages with usage notes and do/don't frames. Good for designers.
- **Storybook** — component stories with controls and code examples. Good for developers.
- **Zeroheight / Supernova** — dedicated documentation sites that pull from both Figma and Storybook. Good for cross-functional teams.
- **Custom doc sites** — what large systems like Material, Carbon, and Polaris use.

Section: Writing tone
Documentation should be decisive and opinionated. Not "you might consider using a primary button for the main action" but "use the primary button for the single most important action on a screen. Use it once per view." Wishy-washy docs create inconsistency — designers interpret ambiguity differently.

CALLOUT (example): Polaris (Shopify's design system) is widely considered one of the best-documented systems precisely because of its writing. It doesn't just say what a component looks like — it says what problem it solves and shows three examples of when not to use it. That level of specificity is what makes a system usable.

**Visual:** A mock documentation page for a Button component — showing the anatomy diagram with labelled parts, a small do/don't pair, and a props table. Not a real screenshot — an illustrated recreation that demonstrates the format.

**Cross-references:**
- Figma Components (topic 08) — building the components that documentation describes
- Storybook from the Designer's Perspective (topic 11) — where code-side documentation lives
- Content & UX Writing (UX Design domain) — writing clear, useful microcopy and documentation

---

### Topic 10 — The Design-to-Code Relationship
**Slug:** design-to-code-relationship

**Definition block:**
"The design-to-code relationship is the connection between a component as it exists in Figma and the same component as it exists in a codebase — and the practices that keep those two representations in sync."

**Body:**

Section: Why this relationship is the central tension of product design
A product only exists in code. A design only exists in Figma. The gap between them is where most product quality problems originate — components that look right in the design file but behave differently in the browser, tokens that got renamed in code but not in Figma, states that were designed but never communicated to the developer. The design-to-code relationship is the discipline of closing that gap.

Section: How a Figma component maps to a React component
A Figma component named `Button` with properties `variant` (Primary, Secondary, Ghost) and `size` (Small, Medium, Large) maps to a React component like this:

The Figma variant property `variant: Primary` becomes `variant="primary"` as a prop.
The Figma variant property `size: Large` becomes `size="lg"` as a prop.
The Figma boolean property `hasIcon: true` becomes `icon={<IconName />}` as a prop.

When these names match, a developer looking at a design in Figma can write the component instantiation without asking a single question. When they don't match, every handoff involves a translation layer that introduces ambiguity.

Section: Token sync — how design decisions flow to code
Design tokens are the mechanism that keeps values in sync between Figma and code. The pipeline typically works like this:
- Tokens are defined in Figma Variables
- A plugin (like Tokens Studio) exports them to a JSON file
- A tool like Style Dictionary transforms that JSON into CSS custom properties, JavaScript variables, or whatever format the codebase needs
- The codebase imports those variables
- A designer changes a token in Figma → exports → the change flows through to production

This pipeline is not always set up, especially in smaller teams. But understanding that it CAN work this way is important — it is the architecture that mature design systems aim for.

CALLOUT (insight): You do not need a fully automated token pipeline to get value from token thinking. Even manually keeping your Figma Variables and your tokens.css file in sync — same names, same values — is enormously better than no system at all. Start simple. The automation can come later.

Section: Why a designer who understands this is valuable
Most junior designers treat handoff as "sending Figma links." A designer who understands component props, token naming, and how Figma maps to code can participate in the engineering conversation — not write the code, but understand it well enough to make better design decisions and collaborate without friction. That is a significant differentiator at junior level.

**Visual:** Side-by-side panel. Left: a Figma Button component with its property panel visible — variant dropdown showing Primary/Secondary/Ghost, size dropdown showing Small/Medium/Large. Right: the equivalent React component definition in TypeScript showing matching prop names and types. Arrows connecting the Figma properties to the TypeScript props.

**Cross-references:**
- Figma Components (topic 08) — building components that map cleanly to code
- Figma Variables (topic 07) — how token sync starts in Figma
- Component Tokens (topic 06) — the token layer that bridges design and code
- Frameworks & Libraries (Programming domain) — what React components actually are

---

### Topic 11 — Storybook from the Designer's Perspective
**Slug:** storybook-designer-perspective

**Definition block:**
"Storybook is a development tool that renders UI components in isolation — outside of the full application — so they can be built, tested, and documented independently. For designers, it is the place where the built component lives and where you can verify that the design was implemented correctly."

**Body:**

Section: What Storybook is
Storybook is an open-source tool that creates a separate mini-application alongside the main product. In it, every component is rendered on its own, in every state, with controls to adjust its props in real time. It is where developers build components in isolation (without needing the full app running) and where the component library becomes browsable and testable.

Section: Why it exists — the developer's problem it solves
Building a component inside a live application is messy — you need the right data, the right page state, the right user permissions. Storybook removes all of that. A developer can build a modal component without needing to navigate to the flow that triggers it. A "story" is just a component rendered with a specific set of props — one story for the default state, one for the error state, one for the loading state.

Section: Why designers should know how to use it
Storybook is increasingly the source of truth for what is actually built. A designer who can navigate a Storybook can:
- Verify that the implemented component matches the design intent
- Check that all states (hover, focus, disabled, error) were built correctly
- Share a direct link to a specific component state in a bug report or design review
- Understand the available props before designing a new use case for an existing component

CALLOUT (insight): Before raising a "this doesn't match the design" comment, check Storybook first. The implementation might be intentionally different for a technical reason. Storybook gives you the context to have that conversation properly.

Section: What to look for in Storybook
- **The sidebar** — lists all components and their stories (states)
- **The canvas** — renders the component live
- **The controls panel** — lets you change props interactively without touching code. This is the equivalent of Figma's property panel.
- **The docs tab** — auto-generated or hand-written documentation for the component, including prop descriptions and usage notes

**Visual:** An annotated diagram of a Storybook interface — the sidebar with component list and stories, the canvas showing a rendered button, and the controls panel with prop toggles. Each section labelled with what it is and what a designer would use it for.

**Cross-references:**
- Component Documentation (topic 09) — Storybook as a documentation platform
- The Design-to-Code Relationship (topic 10) — Storybook as verification tool
- Storybook (Programming domain) — the technical perspective on the same tool

---

### Topic 12 — Real System Examples
**Slug:** real-system-examples

**Definition block:**
"Studying real design systems teaches you what mature systems look like in practice — what each team prioritised, what trade-offs they made, and what you can apply to your own work."

**Body:**

Section: How to study a design system
Don't just browse the components. Look for: how they handle tokens, how their documentation is written, what their contribution model is, and where they made opinionated choices. The interesting thing about any design system is not what it includes — it's why.

Section: Material Design (Google)
The system that established the template for public design systems. First published in 2014, now on Material 3. Known for its strong motion and interaction principles — it was the first major system to treat animation as a design decision, not a developer afterthought. Material 3 introduced dynamic colour, which generates a full colour scheme from a single seed colour. What to steal: the depth of interaction documentation, and the approach to elevation and colour roles.

Section: Polaris (Shopify)
Widely considered one of the best-documented systems in the industry. Polaris is notable not for its visual design but for its content — the writing guidelines are exceptional, and every component page includes opinionated guidance on when NOT to use it. Built for Shopify's merchant-facing products, so it handles complex data-heavy interfaces well. What to steal: the writing quality and the specificity of usage guidelines.

Section: Carbon (IBM)
A large-scale enterprise system with an accessibility-first philosophy. Carbon is notable for its rigour — every component is tested against WCAG standards and ships with detailed accessibility annotations. Built for complex, data-dense enterprise products. What to steal: the approach to accessibility documentation, and the density system (2px, 4px, and 8px grid variants for different product contexts).

Section: Atlassian Design System
Built for Jira, Confluence, and the broader Atlassian suite — products that are more about productivity and information management than visual polish. The Atlassian system is strong on patterns (not just components) and is notable for its guidance on complex interaction states. What to steal: the pattern-level thinking, and how they handle complexity in data-heavy UI.

Section: Primer (GitHub)
A developer-tool design system that demonstrates that systems built for technical audiences don't need to sacrifice craft. Primer is clean, well-documented, and open source — you can read the source code alongside the documentation. What to steal: the transparency of the contribution model and the quality of the token documentation.

Section: Radix UI
A different approach entirely — headless components. Radix provides the behaviour and accessibility of UI components (modal focus trapping, dropdown keyboard navigation, tooltip positioning) without any visual styling. You bring your own design. This is increasingly influential because it separates the hard engineering problems from the design decisions. What to steal: the philosophy that accessibility and interaction logic should be solved once and reused — not rebuilt with every component library.

**Visual:** A row of six reference cards — one per system. Each card: system name, owner, one-line signature strength, and the "what to steal" point. Clean, scannable, no screenshots needed.

**Cross-references:**
- What a Design System Is (topic 01) — what these systems are examples of
- Component Documentation (topic 09) — how these systems document their components
- Token Theming in Practice (topic 14) — how systems like Material handle theming

---

### Topic 13 — Contribution & Governance
**Slug:** contribution-and-governance

**Definition block:**
"Design system governance is the set of processes and ownership structures that determine how the system evolves — how new components are proposed, reviewed, built, and released, and who is responsible for keeping the system healthy."

**Body:**

Section: Why governance is what makes or breaks a system
A design system without governance is a snapshot. It reflects the team's decisions at the moment it was built and then slowly becomes outdated as the product evolves around it. Governance is the mechanism that keeps the system alive — it is the answer to "how does anything ever change?"

Section: Ownership models

**Centralised** — a dedicated design system team owns the system entirely. All contributions are made by this team. High quality and consistency, but a bottleneck. Works well for large organisations with enough budget for a dedicated team.

**Federated** — contributors from across the product organisation can propose and build components, with a core team responsible for review and standards. Faster, more representative of real product needs, but requires strong review processes to maintain quality.

**Hybrid** — the most common model. A small core team sets standards and owns the token and primitive layers. Product teams contribute components through a defined process, reviewed by the core team before acceptance.

Section: The contribution lifecycle
A healthy contribution process typically has these stages:
1. **Proposal** — a designer or team identifies a need. They check the system doesn't already solve it, then submit a proposal with the use case.
2. **Review** — the core team (or a review group) evaluates whether this belongs in the system or should stay local to the product.
3. **Design** — if accepted, the component is designed to system standards, including all states, variants, and accessibility requirements.
4. **Build** — the component is built in code to match the design.
5. **Documentation** — usage guidelines, do/don'ts, accessibility notes, and props documentation are written.
6. **Release** — the component is versioned and released. Existing users of the system are notified.

Section: Versioning basics
Design systems use semantic versioning (the same system as software): `major.minor.patch` — e.g. `3.2.1`.
- **Patch** (3.2.1 → 3.2.2) — bug fixes, no API changes
- **Minor** (3.2.1 → 3.3.0) — new components or tokens added, backwards compatible
- **Major** (3.2.1 → 4.0.0) — breaking changes. Something that worked before may need to be updated.

CALLOUT (warning): Breaking changes in a design system affect every team using it. A major version bump should be rare, well-communicated, and come with a migration guide. Systems that break things frequently without warning lose the trust of the teams that depend on them.

Section: Common failure modes
- No clear owner — the system drifts because nobody is responsible for it
- Contribution too slow — teams stop waiting and build locally, creating divergence
- No versioning — teams can't pin to a stable version, updates break things unexpectedly
- Documentation debt — components exist but docs are never written, so the system is underused

**Visual:** A flowchart showing the contribution lifecycle — the six stages listed above, in a clean left-to-right or top-to-bottom flow with decision points (e.g. "Does this already exist in the system? → Yes → Use existing / No → Continue to proposal").

**Cross-references:**
- Why Design Systems Exist (topic 02) — the value the governance model protects
- Why NOT to Use the Design System (topic 15) — the other side of the governance conversation
- Git & GitHub (Programming domain) — how versioning and contribution work in code

---

### Topic 14 — Token Theming in Practice
**Slug:** token-theming-in-practice

**Definition block:**
"Token theming is the practice of using the semantic token layer to power multiple visual presentations of the same interface — different colour modes, different brands, or user-customisable preferences — by changing what primitive values the semantic tokens resolve to."

**Body:**

Section: The payoff of the semantic layer
This is where the three-tier token model earns its complexity. The mechanism is simple: semantic tokens are stable names. What they point to can change. Change the pointer, and the entire interface repaints — without touching a single component.

Section: Light and dark mode
The simplest form of theming. In light mode, `color.background.default` points to `neutral-50`. In dark mode, it points to `neutral-950`. Every component uses `color.background.default`. Switch the mode and every component updates. No component needs to know about light or dark mode. That knowledge lives entirely in the token layer.

This is why dark mode built without a semantic token layer is so painful — you end up with hundreds of individual CSS overrides, one per component, that all need maintaining separately.

Section: Multi-brand systems
More complex, but same mechanism. A SaaS company white-labelling their product to multiple clients gives each client a Brand mode. Brand A's `color.action.primary` resolves to their blue. Brand B's resolves to their green. Same components, same codebase, different visual identity. The components are entirely unaware of the brand.

CALLOUT (example): Salesforce's Lightning Design System uses this pattern to power different visual themes across their product suite. One token system, multiple brand expressions, zero component duplication.

Section: User-controlled theming
Some products expose theming to users — Linear lets you choose an accent colour, Notion lets you set a page theme, many productivity tools offer high-contrast modes. These work by exposing a subset of semantic tokens to user control and persisting the choice in local storage or a user preference record. The components remain unchanged — only the token values shift.

Section: Why this only works if the semantic layer is solid
If components reference primitive tokens directly (`blue-600`) instead of semantic tokens (`color.action.primary`), theming is impossible without touching every component. The semantic layer is the prerequisite. The moment you skip it, you lose theming, you lose easy dark mode, and you lose the ability to rebrand without a full audit.

**Interactive demo:** A sample UI panel (a card with a header, body text, a primary button, and a border) with a theme switcher below it offering three options — Light, Dark, and Warm (a warm neutral variation). Switching themes shows the semantic tokens resolving to different primitive values, repainting the card instantly. Below the card, show the token resolution table — semantic token name, and the primitive value it resolves to in each mode — updating live as the theme switches.

**Cross-references:**
- Semantic Tokens (topic 05) — the layer that makes theming work
- Figma Variables (topic 07) — modes in Figma as the design-side implementation
- Colour Modes (UI Design domain) — building palettes that support multiple modes

---

### Topic 15 — When NOT to Use the Design System
**Slug:** when-not-to-use-the-design-system

**Definition block:**
"Knowing when to go off-system is as important as knowing how to use the system. A design system is a tool for building consistent products — not a constraint that prevents good design decisions."

**Body:**

Section: The maturity marker
Junior designers either ignore the system or follow it rigidly. Senior designers know when to use it, when to extend it, and when to deliberately go around it — and they can articulate why. The ability to make that judgment call is a signal of design maturity.

Section: Legitimate reasons to go off-system

**Marketing and brand moments**
Product UI and marketing surfaces have different jobs. A landing page, a campaign microsite, or an onboarding splash screen may intentionally break from the product's component system to create a distinct brand experience. This is expected and appropriate.

**Genuinely novel interfaces**
Sometimes a product problem has no precedent in the system — a new interaction model, a data visualisation, a feature that doesn't map to any existing pattern. Building it within the system's constraints would produce an inferior result. Going off-system, documenting why, and potentially contributing back is the right call.

**Experimental and prototype work**
Design exploration should be unconstrained. Using the system in prototypes is good for fidelity when presenting to stakeholders, but early-stage exploration benefits from ignoring it entirely.

**Edge cases the system genuinely doesn't cover**
A good system acknowledges its own gaps. If a component doesn't exist and the use case is too narrow for a contribution, an off-system solution is appropriate.

Section: How to go off-system responsibly

CALLOUT (warning): "Going off-system" is not the same as "ignoring the system." Off-system work should still use the token layer — same spacing values, same type scale, same colour primitives. Going off-system means creating a new component or pattern, not abandoning the foundational decisions.

The responsible approach:
1. Check whether the system actually covers the case — it might, in a way you haven't seen
2. If not, build the solution using system tokens where possible
3. Document the decision — why you went off-system and what the trade-off is
4. Consider whether the solution belongs in the system — if other teams will need the same thing, propose a contribution

Section: The cost of off-system work
Every off-system component is a component nobody else can reuse, nobody else will document, and nobody else will maintain. Accessibility and dark mode support may be missing. It creates design debt — not always bad debt, but debt that should be acknowledged.

**Visual:** A simple decision tree — "Should I use the design system here?" with four branching questions: Does a component exist for this? → Is this a marketing/brand surface? → Is this genuinely experimental? → Will other teams need this? Each path leads to a clear recommendation.

**Cross-references:**
- Why Design Systems Exist (topic 02) — the value you're choosing to trade off
- Contribution & Governance (topic 13) — the channel for feeding back off-system solutions
- Career & Portfolio (UX Design domain) — how to talk about design judgment in interviews

---

## Technical Implementation Notes

### Article content storage
Extend the existing Topic type in `src/content/types.ts` to include an optional `article` field. Structure:

```typescript
interface ArticleSection {
  type: 'definition' | 'body' | 'section-heading' | 'sub-heading' | 'callout' | 'visual' | 'cross-refs'
  content?: string
  calloutType?: 'insight' | 'warning' | 'example'
  caption?: string
  items?: CrossReference[]
}

interface CrossReference {
  topicSlug: string
  subcategorySlug: string
  domainSlug: string
  label: string
  reason: string
}

interface Article {
  sections: ArticleSection[]
}
```

### Interactive demos (topics 03 and 14)
Build these as self-contained React components in `src/components/Article/demos/`. They should use the site's own CSS custom properties from tokens.css as their starting values — this means the demos are themselves a live example of the token system working.

Topic 03 demo: A card component with a colour swatch input or preset colour buttons. Changing the accent value updates a CSS custom property that the demo card uses for its button background, border, and label colour.

Topic 14 demo: A small UI panel with a three-option theme switcher (Light / Dark / Warm). Below the panel, a table showing 4–5 semantic token names and their resolved primitive values in the current theme, updating live as the theme switches.

### Visuals
For all static visuals (diagrams, illustrations, side-by-sides): build them as SVG or as styled HTML/CSS components in `src/components/Article/visuals/`. Do not use placeholder images or external image URLs. Every visual should render correctly in both light and dark mode using CSS custom properties.

### Cross-references
The cross-reference component at the bottom of each article should render as a row of small linked cards. Each card shows the topic name, the domain/subcategory path, and the one-line reason it's relevant. Clicking navigates to that topic. If the target topic's article content does not exist yet (most of them), it navigates to the placeholder topic page — that is fine.

### Mark complete
The mark complete button at the bottom of each article should use the same `useCompletion` hook already in the codebase. It should update the same local storage key as the card indicator, so marking complete from the article and from the card are in sync.

### File structure
No new top-level folders needed. Article components go in `src/components/Article/`. Demo components go in `src/components/Article/demos/`. Visual components go in `src/components/Article/visuals/`.

### README update
Add a section to the existing README explaining how to add article content to a topic — how to add sections to the article field in the content data file.