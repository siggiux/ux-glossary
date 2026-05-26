/*
 * Callout
 * ============================================================================
 * A subtly tinted block for misconceptions, important distinctions, and
 * real-world examples. Three variants — insight, warning, example — each
 * with its own colour and label. Kept deliberately quiet so they don't
 * dominate the page.
 * ============================================================================
 */

import type { CalloutType } from '../../content/types';
import { BodyText } from './BodyText';
import styles from './Callout.module.css';

type Props = {
  calloutType: CalloutType;
  content: string;
};

const LABELS: Record<CalloutType, string> = {
  insight: 'Insight',
  warning: 'Watch out',
  example: 'Example',
};

export function Callout({ calloutType, content }: Props) {
  return (
    <aside className={[styles.callout, styles[calloutType]].join(' ')}>
      <p className={styles.label}>{LABELS[calloutType]}</p>
      <div className={styles.content}>
        <BodyText content={content} />
      </div>
    </aside>
  );
}
