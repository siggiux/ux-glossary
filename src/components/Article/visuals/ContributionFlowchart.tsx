/*
 * ContributionFlowchart
 * ============================================================================
 * Topic 13 — six-stage lifecycle of a design system contribution. Rendered
 * as a vertical flow with a decision point at the start.
 * ============================================================================
 */

import styles from './ContributionFlowchart.module.css';

const stages = [
  'Proposal',
  'Review',
  'Design',
  'Build',
  'Documentation',
  'Release',
];

export function ContributionFlowchart() {
  return (
    <div className={styles.root}>
      <div className={[styles.node, styles.decision].join(' ')}>
        <span className={styles.nodeNumber}>?</span>
        <span className={styles.nodeName}>Does this exist already?</span>
        <span className={styles.nodeNote}>If yes — use it. If no, continue.</span>
      </div>
      <div className={styles.connector} />
      {stages.map((stage, i) => (
        <div key={stage} className={styles.row}>
          <div className={styles.node}>
            <span className={styles.nodeNumber}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.nodeName}>{stage}</span>
          </div>
          {i < stages.length - 1 && <div className={styles.connector} />}
        </div>
      ))}
    </div>
  );
}
