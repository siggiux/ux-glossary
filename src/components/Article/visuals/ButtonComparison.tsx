/*
 * ButtonComparison
 * ============================================================================
 * Topic 08 — poorly-built vs well-built Figma button. Left side is a
 * fixed-size hardcoded thing; right side has variants and properties.
 * ============================================================================
 */

import styles from './ButtonComparison.module.css';

export function ButtonComparison() {
  return (
    <div className={styles.root}>
      <div className={styles.col}>
        <p className={styles.label}>Poorly built</p>
        <div className={styles.canvas}>
          <button type="button" className={styles.buttonRigid}>
            Submit
          </button>
        </div>
        <ul className={styles.propsList}>
          <li>No auto layout — fixed width</li>
          <li>No variants — one state only</li>
          <li>Colours hardcoded, not tokens</li>
          <li>Text overrides break the link</li>
        </ul>
      </div>

      <div className={styles.col}>
        <p className={styles.label}>Well built</p>
        <div className={styles.canvas}>
          <button type="button" className={styles.buttonGood}>
            Submit
          </button>
        </div>
        <div className={styles.propsPanel}>
          <PropRow label="variant" value="primary" />
          <PropRow label="size" value="md" />
          <PropRow label="hasIcon" value="false" />
          <PropRow label="state" value="default" />
        </div>
      </div>
    </div>
  );
}

function PropRow({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.propRow}>
      <span className={styles.propLabel}>{label}</span>
      <span className={styles.propValue}>{value}</span>
    </div>
  );
}
