/*
 * LightDarkResolution
 * ============================================================================
 * Topic 05 — Light mode primitives ← semantic tokens → Dark mode primitives.
 * ============================================================================
 */

import styles from './LightDarkResolution.module.css';

const rows = [
  {
    semantic: 'color.background.default',
    light: 'neutral-50',
    lightColor: '#fafaf8',
    dark: 'neutral-950',
    darkColor: '#0f0f0f',
  },
  {
    semantic: 'color.text.default',
    light: 'neutral-900',
    lightColor: '#0f0f0f',
    dark: 'neutral-50',
    darkColor: '#f5f5f4',
  },
  {
    semantic: 'color.border.default',
    light: 'neutral-200',
    lightColor: '#d8d8d4',
    dark: 'neutral-800',
    darkColor: '#2a2a28',
  },
];

export function LightDarkResolution() {
  return (
    <div className={styles.root}>
      <div className={styles.headerRow}>
        <p className={styles.col}>Light primitives</p>
        <p className={styles.colCenter}>Semantic token</p>
        <p className={styles.col}>Dark primitives</p>
      </div>
      {rows.map((r) => (
        <div key={r.semantic} className={styles.row}>
          <div className={styles.cell}>
            <span
              className={styles.swatch}
              style={{ backgroundColor: r.lightColor }}
            />
            <span className={styles.mono}>{r.light}</span>
          </div>
          <div className={styles.middle}>
            <span className={styles.arrowLeft}>←</span>
            <span className={styles.semantic}>{r.semantic}</span>
            <span className={styles.arrowRight}>→</span>
          </div>
          <div className={styles.cell}>
            <span
              className={styles.swatch}
              style={{ backgroundColor: r.darkColor }}
            />
            <span className={styles.mono}>{r.dark}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
