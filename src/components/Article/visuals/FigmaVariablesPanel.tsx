/*
 * FigmaVariablesPanel
 * ============================================================================
 * Topic 07 — annotated mock of Figma's Variables panel: collections sidebar,
 * variable list, mode switcher, alias field.
 * ============================================================================
 */

import styles from './FigmaVariablesPanel.module.css';

const collections = [
  { name: 'Primitives', active: false },
  { name: 'Semantics', active: true },
  { name: 'Components', active: false },
];

const variables = [
  { name: 'color/background/default', light: '#FAFAF8', dark: '#0F0F0F' },
  { name: 'color/background/subtle', light: '#F3F3EF', dark: '#161614' },
  { name: 'color/text/default', light: '#0F0F0F', dark: '#F5F5F4' },
  { name: 'color/border/default', light: '#D8D8D4', dark: '#2A2A28' },
];

export function FigmaVariablesPanel() {
  return (
    <div className={styles.frame}>
      <aside className={styles.sidebar}>
        <p className={styles.sidebarLabel}>Collections</p>
        {collections.map((c) => (
          <div
            key={c.name}
            className={[styles.sidebarItem, c.active ? styles.active : ''].join(' ')}
          >
            {c.name}
          </div>
        ))}
      </aside>

      <section className={styles.main}>
        <div className={styles.modeRow}>
          <span className={styles.modeLabel}>Mode</span>
          <div className={styles.modePills}>
            <span className={[styles.modePill, styles.modePillActive].join(' ')}>
              Light
            </span>
            <span className={styles.modePill}>Dark</span>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Light value</th>
              <th>Dark value</th>
            </tr>
          </thead>
          <tbody>
            {variables.map((v) => (
              <tr key={v.name}>
                <td className={styles.mono}>{v.name}</td>
                <td>
                  <span
                    className={styles.swatch}
                    style={{ backgroundColor: v.light }}
                  />
                  <span className={styles.mono}>{v.light}</span>
                </td>
                <td>
                  <span
                    className={styles.swatch}
                    style={{ backgroundColor: v.dark }}
                  />
                  <span className={styles.mono}>{v.dark}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
