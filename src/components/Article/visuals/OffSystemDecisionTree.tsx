/*
 * OffSystemDecisionTree
 * ============================================================================
 * Topic 15 — a decision tree of when to go off-system. Four question nodes
 * leading to recommended outcomes.
 * ============================================================================
 */

import styles from './OffSystemDecisionTree.module.css';

const steps = [
  {
    question: 'Does a component exist for this?',
    yes: 'Use it.',
    no: 'Continue.',
  },
  {
    question: 'Is this a marketing or brand surface?',
    yes: 'Off-system, by design.',
    no: 'Continue.',
  },
  {
    question: 'Is this genuinely experimental?',
    yes: 'Off-system, document the trade-off.',
    no: 'Continue.',
  },
  {
    question: 'Will other teams need the same thing?',
    yes: 'Propose a contribution.',
    no: 'Build off-system, scoped locally.',
  },
];

export function OffSystemDecisionTree() {
  return (
    <div className={styles.root}>
      {steps.map((s, i) => (
        <div key={i} className={styles.step}>
          <div className={styles.question}>{s.question}</div>
          <div className={styles.branches}>
            <div className={[styles.branch, styles.yes].join(' ')}>
              <span className={styles.branchLabel}>Yes</span>
              <span className={styles.branchText}>{s.yes}</span>
            </div>
            <div className={[styles.branch, styles.no].join(' ')}>
              <span className={styles.branchLabel}>No</span>
              <span className={styles.branchText}>{s.no}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
