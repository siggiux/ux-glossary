/*
 * TokenChain
 * ============================================================================
 * Topic 06 — three rows showing the chain:
 *   button.background.primary  →  color.action.primary  →  blue-600
 * ============================================================================
 */

import styles from './TokenChain.module.css';

const rows = [
  { tier: 'Component token', name: 'button.background.primary' },
  { tier: 'Semantic token', name: 'color.action.primary' },
  { tier: 'Primitive token', name: 'blue-600 (#2563EB)' },
];

export function TokenChain() {
  return (
    <div className={styles.root}>
      {rows.map((row, i) => (
        <div key={row.name} className={styles.rowWrap}>
          <div className={styles.row}>
            <span className={styles.tier}>{row.tier}</span>
            <span className={styles.name}>{row.name}</span>
          </div>
          {i < rows.length - 1 && <div className={styles.arrow}>↓</div>}
        </div>
      ))}
    </div>
  );
}
