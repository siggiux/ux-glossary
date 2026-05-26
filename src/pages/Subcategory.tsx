/*
 * Subcategory page (/:domainSlug/:subcategorySlug)
 * ============================================================================
 * Lists the topic cards in a sub-category.
 *
 * If the user navigates here directly for a locked sub-category, we treat it
 * the same as not-found — locked sub-categories aren't meant to be reachable.
 * ============================================================================
 */

import { useParams } from 'react-router-dom';
import { findSubcategory } from '../content/domains';
import { TopicCard } from '../components/TopicCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { NotFound } from './NotFound';
import styles from './pages.module.css';

export function Subcategory() {
  const { domainSlug = '', subcategorySlug = '' } = useParams();
  const result = findSubcategory(domainSlug, subcategorySlug);

  if (!result || result.subcategory.locked) return <NotFound />;

  const { domain, subcategory } = result;

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: domain.name, to: `/${domain.slug}` },
          { label: subcategory.name },
        ]}
      />
      <header className={styles.intro}>
        <p className={styles.eyebrow}>{domain.name}</p>
        <h1 className={styles.titleMd}>{subcategory.name}</h1>
        <p className={styles.tagline}>{subcategory.description}</p>
      </header>

      <section className={styles.gridSmall}>
        {subcategory.topics.map((topic) => (
          <TopicCard
            key={topic.slug}
            domainSlug={domain.slug}
            subcategorySlug={subcategory.slug}
            topic={topic}
          />
        ))}
      </section>
    </>
  );
}
