/*
 * DomainCard
 * ============================================================================
 * Used on the home page. Always clickable.
 * ============================================================================
 */

import type { Domain } from '../../content/types';
import { countTopicsInDomain } from '../../content/domains';
import { useDomainCompletionCount } from '../../hooks/useCompletion';
import { Card } from '../Card';
import { CardNumber } from '../CardNumber';
import styles from './DomainCard.module.css';

type Props = { domain: Domain };

export function DomainCard({ domain }: Props) {
  const total = countTopicsInDomain(domain);
  const complete = useDomainCompletionCount(domain);

  return (
    <Card to={`/${domain.slug}`} ariaLabel={`Open ${domain.name}`}>
      <div className={styles.header}>
        <CardNumber value={domain.number} />
      </div>
      <h2 className={styles.name}>{domain.name}</h2>
      <p className={styles.description}>{domain.description}</p>
      <p className={styles.progress}>
        {complete} of {total} topics complete
      </p>
    </Card>
  );
}
