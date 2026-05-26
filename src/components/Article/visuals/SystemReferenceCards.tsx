/*
 * SystemReferenceCards
 * ============================================================================
 * Topic 12 — six reference cards summarising each major design system.
 * ============================================================================
 */

import styles from './SystemReferenceCards.module.css';

const systems = [
  {
    name: 'Material',
    owner: 'Google',
    strength: 'Motion + interaction principles',
    steal: 'Depth of interaction docs',
  },
  {
    name: 'Polaris',
    owner: 'Shopify',
    strength: 'Writing + usage guidance',
    steal: 'Specificity of when NOT to use',
  },
  {
    name: 'Carbon',
    owner: 'IBM',
    strength: 'Accessibility-first rigour',
    steal: 'Density system + a11y docs',
  },
  {
    name: 'Atlassian DS',
    owner: 'Atlassian',
    strength: 'Patterns over components',
    steal: 'Pattern-level thinking',
  },
  {
    name: 'Primer',
    owner: 'GitHub',
    strength: 'Transparent, open-source',
    steal: 'Token + contribution docs',
  },
  {
    name: 'Radix UI',
    owner: 'WorkOS',
    strength: 'Headless primitives',
    steal: 'Behaviour as a reusable layer',
  },
];

export function SystemReferenceCards() {
  return (
    <div className={styles.grid}>
      {systems.map((s) => (
        <div key={s.name} className={styles.card}>
          <p className={styles.name}>{s.name}</p>
          <p className={styles.owner}>{s.owner}</p>
          <p className={styles.strength}>{s.strength}</p>
          <p className={styles.stealLabel}>Steal</p>
          <p className={styles.steal}>{s.steal}</p>
        </div>
      ))}
    </div>
  );
}
