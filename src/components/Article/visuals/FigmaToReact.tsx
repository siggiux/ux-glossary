/*
 * FigmaToReact
 * ============================================================================
 * Topic 10 — side-by-side. Left: Figma component with property panel.
 * Right: matching TypeScript React component signature.
 * ============================================================================
 */

import styles from './FigmaToReact.module.css';

const props = [
  { name: 'variant', values: 'Primary / Secondary / Ghost' },
  { name: 'size', values: 'Small / Medium / Large' },
  { name: 'hasIcon', values: 'true / false' },
];

const code = `<Button
  variant="primary"
  size="md"
  hasIcon={false}
>
  Submit
</Button>`;

export function FigmaToReact() {
  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <p className={styles.label}>Figma component</p>
        <div className={styles.figmaPanel}>
          {props.map((p) => (
            <div key={p.name} className={styles.propRow}>
              <span className={styles.propName}>{p.name}</span>
              <span className={styles.propValues}>{p.values}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bridge}>→</div>

      <div className={styles.panel}>
        <p className={styles.label}>React component</p>
        <pre className={styles.code}>{code}</pre>
      </div>
    </div>
  );
}
