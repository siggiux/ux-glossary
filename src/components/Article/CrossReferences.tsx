/*
 * CrossReferences
 * ============================================================================
 * Renders the "Related" section at the bottom of an article — a row of small
 * linked cards. Each card links to another topic and explains why it's
 * relevant.
 *
 * Links navigate normally — if the target topic has no article yet, the Topic
 * page falls back to the placeholder. That's intentional.
 * ============================================================================
 */

import { Link } from 'react-router-dom';
import type { CrossReference } from '../../content/types';
import styles from './CrossReferences.module.css';

type Props = { items: CrossReference[] };

export function CrossReferences({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Related topics">
      <h2 className={styles.heading}>Related</h2>
      <ul className={styles.list}>
        {items.map((item, i) => {
          const href = `/${item.domainSlug}/${item.subcategorySlug}/${item.topicSlug}`;
          return (
            <li key={i}>
              <Link to={href} className={styles.card}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.reason}>{item.reason}</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
