/*
 * SubcategoryCard
 * ============================================================================
 * Rendered on a Domain page. Locked subcategories show a "Coming soon" badge,
 * a lower opacity, and are not clickable.
 * ============================================================================
 */

import type { Subcategory } from '../../content/types';
import { useSubcategoryCompletionCount } from '../../hooks/useCompletion';
import { Card } from '../Card';
import { CardNumber } from '../CardNumber';
import styles from './SubcategoryCard.module.css';

type Props = {
  domainSlug: string;
  subcategory: Subcategory;
};

export function SubcategoryCard({ domainSlug, subcategory }: Props) {
  const complete = useSubcategoryCompletionCount(domainSlug, subcategory);
  const total = subcategory.topics.length;

  // Locked cards have no `to` prop — Card handles the locked rendering itself.
  const to = subcategory.locked
    ? undefined
    : `/${domainSlug}/${subcategory.slug}`;

  return (
    <Card
      to={to}
      locked={subcategory.locked}
      ariaLabel={`${subcategory.name}${subcategory.locked ? ' — coming soon' : ''}`}
    >
      <div className={styles.header}>
        <CardNumber value={subcategory.number} />
      </div>
      <h3 className={styles.name}>{subcategory.name}</h3>
      <p className={styles.description}>{subcategory.description}</p>
      <p className={styles.meta}>
        {subcategory.locked
          ? 'Coming soon'
          : total === 0
            ? 'No topics yet'
            : `${complete} of ${total} complete`}
      </p>
    </Card>
  );
}
