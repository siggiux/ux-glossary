/*
 * TopicCard
 * ============================================================================
 * Rendered on a Subcategory page. Card body navigates to the topic page;
 * the completion toggle in the corner does NOT navigate (see CompletionToggle).
 * ============================================================================
 */

import type { Topic } from '../../content/types';
import { useCompletion } from '../../hooks/useCompletion';
import { Card } from '../Card';
import { CardNumber } from '../CardNumber';
import { CompletionToggle } from '../CompletionToggle';
import styles from './TopicCard.module.css';

type Props = {
  domainSlug: string;
  subcategorySlug: string;
  topic: Topic;
};

export function TopicCard({ domainSlug, subcategorySlug, topic }: Props) {
  const { isComplete, toggle } = useCompletion(
    domainSlug,
    subcategorySlug,
    topic.slug,
  );

  return (
    <Card
      to={`/${domainSlug}/${subcategorySlug}/${topic.slug}`}
      ariaLabel={`Open ${topic.name}`}
    >
      <div className={styles.header}>
        <CardNumber value={topic.number} />
        <CompletionToggle
          isComplete={isComplete}
          onToggle={toggle}
          topicName={topic.name}
        />
      </div>
      <h3 className={[styles.name, isComplete ? styles.complete : ''].join(' ')}>
        {topic.name}
      </h3>
      <p className={styles.description}>{topic.description}</p>
    </Card>
  );
}
