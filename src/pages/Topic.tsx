/*
 * Topic page (/:domainSlug/:subcategorySlug/:topicSlug)
 * ============================================================================
 * Placeholder for now — actual article content will live here in later builds.
 * ============================================================================
 */

import { useParams } from 'react-router-dom';
import { findTopic } from '../content/domains';
import { Breadcrumb } from '../components/Breadcrumb';
import { NotFound } from './NotFound';
import styles from './pages.module.css';

export function Topic() {
  const {
    domainSlug = '',
    subcategorySlug = '',
    topicSlug = '',
  } = useParams();
  const result = findTopic(domainSlug, subcategorySlug, topicSlug);

  if (!result) return <NotFound />;
  const { domain, subcategory, topic } = result;

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: domain.name, to: `/${domain.slug}` },
          {
            label: subcategory.name,
            to: `/${domain.slug}/${subcategory.slug}`,
          },
          { label: topic.name },
        ]}
      />
      <header className={styles.intro}>
        <p className={styles.eyebrow}>{subcategory.name}</p>
        <h1 className={styles.titleMd}>{topic.name}</h1>
        <p className={styles.tagline}>{topic.description}</p>
      </header>

      <section className={styles.placeholder}>
        <p>Article coming soon.</p>
      </section>
    </>
  );
}
