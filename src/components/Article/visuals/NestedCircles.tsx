/*
 * NestedCircles
 * ============================================================================
 * Topic 01 — three concentric labels showing how a design system contains a
 * component library contains a style guide.
 *
 * Rendered as SVG because concentric circles are awkward in HTML/CSS.
 * ============================================================================
 */

export function NestedCircles() {
  return (
    <svg
      viewBox="0 0 360 260"
      width="100%"
      style={{ maxWidth: 360 }}
      role="img"
      aria-label="Nested rings: a design system contains a component library, which contains a style guide."
    >
      {/* Outer ring — design system */}
      <circle
        cx="180"
        cy="130"
        r="120"
        fill="color-mix(in srgb, var(--color-accent) 6%, var(--color-surface))"
        stroke="var(--color-border-strong)"
      />
      {/* Middle ring — component library */}
      <circle
        cx="180"
        cy="130"
        r="82"
        fill="color-mix(in srgb, var(--color-accent) 12%, var(--color-surface))"
        stroke="var(--color-border-strong)"
      />
      {/* Inner ring — style guide */}
      <circle
        cx="180"
        cy="130"
        r="44"
        fill="color-mix(in srgb, var(--color-accent) 22%, var(--color-surface))"
        stroke="var(--color-border-strong)"
      />

      <text
        x="180"
        y="134"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fill="var(--color-text)"
      >
        Style guide
      </text>
      <text
        x="180"
        y="62"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fill="var(--color-text)"
      >
        Component library
      </text>
      <text
        x="180"
        y="24"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fill="var(--color-text)"
      >
        Design system
      </text>
    </svg>
  );
}
