/*
 * PrimitiveScales
 * ============================================================================
 * Topic 04 — colour scale + spacing scale, side by side.
 *
 * Colour scale uses a single hue (the site's accent) at varying lightness so
 * it stays palette-consistent in both light and dark mode.
 * ============================================================================
 */

import styles from './PrimitiveScales.module.css';

const colourSteps = [
  { name: 'accent-50', mix: 95 },
  { name: 'accent-100', mix: 85 },
  { name: 'accent-200', mix: 70 },
  { name: 'accent-400', mix: 40 },
  { name: 'accent-600', mix: 10 },
  { name: 'accent-800', mix: -30 },
  { name: 'accent-900', mix: -50 },
];

const spaceSteps = [
  { name: 'space-1', px: 4 },
  { name: 'space-2', px: 8 },
  { name: 'space-3', px: 12 },
  { name: 'space-4', px: 16 },
  { name: 'space-6', px: 24 },
  { name: 'space-8', px: 32 },
  { name: 'space-12', px: 48 },
  { name: 'space-16', px: 64 },
];

export function PrimitiveScales() {
  return (
    <div className={styles.root}>
      <div className={styles.column}>
        <p className={styles.label}>Colour primitives</p>
        <div className={styles.colourGrid}>
          {colourSteps.map((step) => (
            <div key={step.name} className={styles.colourRow}>
              <span
                className={styles.swatch}
                style={
                  step.mix >= 0
                    ? {
                        backgroundColor: `color-mix(in srgb, var(--color-accent) ${100 - step.mix}%, white)`,
                      }
                    : {
                        backgroundColor: `color-mix(in srgb, var(--color-accent) ${100 + step.mix}%, black)`,
                      }
                }
              />
              <span className={styles.tokenName}>{step.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.column}>
        <p className={styles.label}>Spacing primitives</p>
        <div className={styles.spaceGrid}>
          {spaceSteps.map((step) => (
            <div key={step.name} className={styles.spaceRow}>
              <span className={styles.tokenName}>{step.name}</span>
              <span
                className={styles.spaceBar}
                style={{ width: `${step.px * 1.5}px` }}
              />
              <span className={styles.spaceValue}>{step.px}px</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
