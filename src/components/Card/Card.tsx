/*
 * Card
 * ============================================================================
 * The base card primitive. All three card types (DomainCard, SubcategoryCard,
 * TopicCard) compose this.
 *
 * When `to` is provided the card renders as a React Router <Link>; otherwise
 * it renders as a <div>. When `locked` is true it renders as a non-interactive
 * <div> with a "Coming soon" badge regardless of `to`.
 * ============================================================================
 */

import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import styles from './Card.module.css';

type Props = {
  to?: string;
  locked?: boolean;
  children: ReactNode;
  ariaLabel?: string;
};

export function Card({ to, locked = false, children, ariaLabel }: Props) {
  const className = [styles.card, locked ? styles.locked : styles.interactive]
    .join(' ')
    .trim();

  if (locked || !to) {
    return (
      <div
        className={className}
        aria-disabled={locked || undefined}
        aria-label={ariaLabel}
      >
        {locked && <span className={styles.lockedBadge}>Coming soon</span>}
        {children}
      </div>
    );
  }

  return (
    <Link to={to} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
