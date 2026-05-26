/*
 * MarkCompleteButton
 * ============================================================================
 * Bottom-of-article button that toggles the same completion state as the
 * card indicator. Shares storage via the useCompletion hook so the two stay
 * in sync.
 * ============================================================================
 */

import { useCompletion } from '../../hooks/useCompletion';
import styles from './MarkCompleteButton.module.css';

type Props = {
  domainSlug: string;
  subcategorySlug: string;
  topicSlug: string;
};

export function MarkCompleteButton({
  domainSlug,
  subcategorySlug,
  topicSlug,
}: Props) {
  const { isComplete, toggle } = useCompletion(
    domainSlug,
    subcategorySlug,
    topicSlug,
  );

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={[styles.button, isComplete ? styles.complete : ''].join(' ')}
        onClick={toggle}
        aria-pressed={isComplete}
      >
        {isComplete ? (
          <>
            <CheckIcon />
            <span>Marked complete</span>
          </>
        ) : (
          <span>Mark as complete</span>
        )}
      </button>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}
