/*
 * CompletionToggle
 * ============================================================================
 * The small circular checkbox in the top-right of every topic card.
 *
 * Important detail: this is a real <button> inside the card's <Link>. We
 * stop click + key events from propagating so toggling completion never
 * navigates to the topic page.
 * ============================================================================
 */

import type { MouseEvent, KeyboardEvent } from 'react';
import styles from './CompletionToggle.module.css';

type Props = {
  isComplete: boolean;
  onToggle: () => void;
  topicName: string;
};

export function CompletionToggle({ isComplete, onToggle, topicName }: Props) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle();
  };

  // Same protection for keyboard users tabbing through the toggle.
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onToggle();
    }
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={isComplete}
      aria-label={`Mark ${topicName} as ${isComplete ? 'incomplete' : 'complete'}`}
      className={[styles.toggle, isComplete ? styles.checked : ''].join(' ')}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {isComplete && (
        <svg
          viewBox="0 0 16 16"
          width="12"
          height="12"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 8.5 6.5 12 13 4.5" />
        </svg>
      )}
    </button>
  );
}
