# Glossary

A personal learning glossary for a designer transitioning into product design. It covers UX/Product Design, Programming/Software Development, and AI/Machine Learning.

This is **not** a production product. It exists to be added to constantly over weeks and months. The codebase prioritises **extensibility and clarity** over polish, performance optimisation, or commercial-grade architecture. Edits should be easy; nothing should require hunting through code.

---

## Running it

```bash
npm install
npm run dev
```

That starts Vite's dev server. Open the URL it prints.

To build a static bundle:

```bash
npm run build
npm run preview
```

---

## What's here

```
src/
  styles/
    tokens.css            ← ALL design tokens (colour, type, spacing, etc.)
    global.css            ← resets + base element styles
  content/
    types.ts              ← TypeScript types: Domain, Subcategory, Topic
    domains.ts            ← the three top-level domains + lookup helpers
    ux-design/
      index.ts            ← subcategories for UX / Product Design
      ui-design.ts        ← topics for "UI Design"
      design-systems.ts   ← topics for "Design Systems"
      components-and-patterns.ts
    programming/index.ts  ← subcategories for Programming (all locked)
    ai/index.ts           ← subcategories for AI (all locked)
  components/
    Card/                 ← base card primitive (used by all card types)
    CardNumber/           ← the "01" / "02" zero-padded number label
    DomainCard/           ← home-page cards
    SubcategoryCard/      ← domain-page cards (can be locked)
    TopicCard/            ← subcategory-page cards (with completion toggle)
    CompletionToggle/     ← the small circular checkbox
    ThemeToggle/          ← light/dark switcher in the header
    Breadcrumb/           ← used on Subcategory + Topic pages
    Layout/               ← site shell (header + main + footer)
  pages/
    Home.tsx              ← /
    Domain.tsx            ← /:domainSlug
    Subcategory.tsx       ← /:domainSlug/:subcategorySlug
    Topic.tsx             ← /:domainSlug/:subcategorySlug/:topicSlug
    NotFound.tsx          ← * (also used for locked subcategories)
    pages.module.css      ← shared page-level styles
  hooks/
    useTheme.ts           ← reads / writes light vs dark, persists to storage
    useCompletion.ts      ← per-topic + per-subcategory + per-domain counters
  lib/
    storage.ts            ← localStorage helpers + key conventions
  App.tsx                 ← React Router route tree
  main.tsx                ← entry point (mounts App into #root)
  global.d.ts             ← TS declarations for CSS Modules

  components/Article/     ← article renderer + content blocks
    visuals/              ← static diagrams (one component per visualId)
    demos/                ← interactive demos (one component per visualId)
    visuals/index.ts      ← registry mapping visualId → component
```

---

## Where design tokens live

**All** visual decisions live in [`src/styles/tokens.css`](src/styles/tokens.css). Colours, type sizes, spacing, radii, shadows, motion durations, easing curves — everything.

Tokens are organised in two tiers:

1. **Primitive tokens** — raw values (e.g. `--color-stone-900: #0f0f0f`).
2. **Semantic tokens** — named by purpose (e.g. `--color-text`, `--color-bg`, `--color-accent`). These are what components actually use.

To change the accent colour site-wide, edit `--color-accent-500` (and optionally `--color-accent-400` for dark mode). To change the body font, edit `--font-sans` here AND swap the Google Fonts link in [`index.html`](index.html).

Dark mode is a single block at the bottom of `tokens.css` that overrides the semantic tokens. Theme switching adds `data-theme="dark"` to the `<html>` element.

---

## How to add a new topic to an existing sub-category

1. Open the topics file, e.g. [`src/content/ux-design/ui-design.ts`](src/content/ux-design/ui-design.ts).
2. Append an object to the array:

```ts
{
  slug: 'my-new-topic',
  number: 14,                       // continue the sequence
  name: 'My New Topic',
  description: 'A one-line summary.',
},
```

That's it. The topic shows up on the sub-category page with a completion toggle and a clickable card that routes to the placeholder topic page.

---

## How to add article content to a topic

Topics carry an optional `article` field. When it's present, the topic page renders a full article instead of the "Article coming soon" placeholder.

An article is a list of typed sections. Each section is a small object that the renderer dispatches to a dedicated block component. See [`src/content/types.ts`](src/content/types.ts) for the full type, and [`src/content/ux-design/design-systems.ts`](src/content/ux-design/design-systems.ts) for a complete worked example.

### Available section types

| Type | Fields | What it renders |
| --- | --- | --- |
| `definition` | `content` | Highlighted block at the top with an accent border |
| `body` | `content` | Prose. Supports `**bold**`, blank-line paragraphs, and `- ` bullet lists |
| `section-heading` | `content` | H2 within the article |
| `sub-heading` | `content` | H3 within the article |
| `callout` | `calloutType` (`'insight' \| 'warning' \| 'example'`), `content` | Subtly tinted block with a label |
| `visual` | `visualId`, `caption` | Renders a registered visual or interactive demo |
| `cross-refs` | `items` (array of `CrossReference`) | Row of linked cards at the bottom |

### Example

```ts
article: {
  sections: [
    { type: 'definition', content: 'One-sentence definition…' },
    { type: 'section-heading', content: 'Why this matters' },
    { type: 'body', content: 'Paragraph one.\n\nParagraph two.\n\n- Bullet a\n- Bullet b' },
    { type: 'callout', calloutType: 'insight', content: 'Key insight…' },
    { type: 'visual', visualId: 'my-diagram', caption: 'Caption text.' },
    { type: 'cross-refs', items: [
      { domainSlug: 'ux-design', subcategorySlug: 'design-systems',
        topicSlug: 'design-tokens', label: 'Design Tokens', reason: 'Why it relates.' },
    ]},
  ],
},
```

### Adding a new visual or interactive demo

1. Build the component under `src/components/Article/visuals/` (static) or `src/components/Article/demos/` (interactive).
2. Import it in [`src/components/Article/visuals/index.ts`](src/components/Article/visuals/index.ts) and register it under a stable id.
3. Reference that id from an article section's `visualId`.

If you reference a `visualId` that hasn't been built yet, the page renders a small "Visual not built yet: …" note instead of crashing — so you can write content first and add the visual later.

### Cross-references that point to non-existent topics

It's fine for a cross-reference to point to a topic that doesn't exist yet (locked sub-categories, future topics). The link will navigate to a graceful "Topic coming soon" page rather than a broken 404.

---

## How to unlock a sub-category

1. Open the domain's subcategories file, e.g. [`src/content/ux-design/index.ts`](src/content/ux-design/index.ts).
2. Find the locked subcategory and set `locked: false`.
3. Create a new topics file in the same folder (use any of the existing ones as a template).
4. Import it at the top and set `topics: yourNewTopicsArray`.

The card on the domain page will lose its "Coming soon" badge and become clickable.

---

## How to add a whole new sub-category

1. In the appropriate domain folder (e.g. `src/content/ux-design/`), add a new `<your-subcategory>.ts` file exporting a `Topic[]`. (Skip this if it'll start locked.)
2. Add a new entry to the array in that folder's `index.ts`, with:
   - a unique `slug`
   - the next sequential `number`
   - `locked: true` (or false with a topics import)
3. Done — it appears on its domain page automatically.

---

## How to add a new domain

1. Create a new folder under `src/content/` (e.g. `src/content/business/`).
2. Add an `index.ts` exporting a `Subcategory[]`.
3. Open [`src/content/domains.ts`](src/content/domains.ts), import your new subcategories array, and append a new entry to the `domains` array.

The home page picks it up automatically.

---

## Completion tracking

Each topic card has a small circular toggle. Clicking it stores the completion state in `localStorage` under the key:

```
glossary.completed.<domainSlug>.<subcategorySlug>.<topicSlug>
```

Counts update live on the subcategory and domain cards via a tiny pub/sub inside [`useCompletion.ts`](src/hooks/useCompletion.ts) — no global state library needed.

The toggle stops click propagation so it never triggers card navigation.

---

## Theme

Light by default. The theme toggle in the header flips between light and dark and persists to `localStorage`. On first load, if there's no stored preference, we respect the OS-level `prefers-color-scheme` setting.

---

## Conventions worth knowing

- **Content lives in `src/content/`** as plain TypeScript data. Components never hardcode topic names or numbers.
- **Components are small and named after what they are.** A junior dev should be able to read the file in a minute.
- **CSS Modules** scope styles to a single component. Use the semantic tokens, not raw hex codes.
- **No component libraries.** Buttons, cards, toggles — all hand-built so the visual layer stays mine to evolve.
- **No backwards-compatibility scaffolding.** When you rename or remove something, just do it.

---

## What's deliberately *not* here

- No analytics
- No SEO setup
- No tests
- No deployment config
- No Tailwind, no CSS-in-JS, no UI library
- No SSR

If any of those become useful later, add them then — not now.
