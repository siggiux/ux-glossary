/*
 * Topic page (/:domainSlug/:subcategorySlug/:topicSlug)
 * ============================================================================
 * Three render paths:
 *   1. Topic + article exist        -> render the full Article
 *   2. Topic exists, no article     -> "Article coming soon" placeholder
 *   3. Topic doesn't exist but the    domain/subcategory does
 *                                   -> "Topic coming soon" gentle fallback
 *                                      (used by cross-refs into locked sections)
 *   4. Nothing matches              -> NotFound
 * ============================================================================
 */

import { useParams } from 'react-router-dom';
import { findSubcategory, findTopic } from '../content/domains';
import { Breadcrumb } from '../components/Breadcrumb';
import { Article, MarkCompleteButton } from '../components/Article';
import { NotFound } from './NotFound';
import styles from './pages.module.css';

export function Topic() {
  const {
    domainSlug = '',
    subcategorySlug = '',
    topicSlug = '',
  } = useParams();

  const topicResult = findTopic(domainSlug, subcategorySlug, topicSlug);

  if (topicResult) {
    const { domain, subcategory, topic } = topicResult;
    const subcategoryHref = `/${domain.slug}/${subcategory.slug}`;

    return (
      <>
        <Breadcrumb
          items={[
            { label: 'Home', to: '/' },
            { label: domain.name, to: `/${domain.slug}` },
            { label: subcategory.name, to: subcategoryHref },
            { label: topic.name },
          ]}
        />
        <header className={styles.intro}>
          <p className={styles.eyebrow}>
            {String(subcategory.number).padStart(2, '0')} —{' '}
            {String(topic.number).padStart(2, '0')} · {subcategory.name}
          </p>
          <h1 className={styles.titleMd}>{topic.name}</h1>
          <p className={styles.tagline}>{topic.description}</p>
        </header>

        {topic.article ? (
          <>
            <Article article={topic.article} />
            <div className={styles.articleWrap}>
              <MarkCompleteButton
                domainSlug={domain.slug}
                subcategorySlug={subcategory.slug}
                topicSlug={topic.slug}
              />
            </div>
          </>
        ) : (
          <section className={styles.placeholder}>
            <p>Article coming soon.</p>
          </section>
        )}
      </>
    );
  }

  // The topic isn't in the data yet — but if at least the subcategory exists,
  // render a soft "coming soon" instead of NotFound. This is what cross-refs
  // into locked subcategories will hit.
  const subResult = findSubcategory(domainSlug, subcategorySlug);
  if (subResult) {
    const { domain, subcategory } = subResult;
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
          <p className={styles.eyebrow}>Coming soon</p>
          <h1 className={styles.titleMd}>This topic hasn't been written yet</h1>
          <p className={styles.tagline}>
            It lives in <strong>{subcategory.name}</strong>, which is still on
            the to-do list. Check back later.
          </p>
        </header>
      </>
    );
  }

  return <NotFound />;
}
