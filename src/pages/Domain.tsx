/*
 * Domain page (/:domainSlug)
 * ============================================================================
 * Lists all sub-categories of a domain. Locked sub-categories appear muted.
 * ============================================================================
 */

import { useParams } from 'react-router-dom';
import { findDomain } from '../content/domains';
import { SubcategoryCard } from '../components/SubcategoryCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { NotFound } from './NotFound';
import styles from './pages.module.css';

export function Domain() {
  const { domainSlug = '' } = useParams();
  const domain = findDomain(domainSlug);

  if (!domain) return <NotFound />;

  return (
    <>
      <Breadcrumb
        items={[{ label: 'Home', to: '/' }, { label: domain.name }]}
      />
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Domain</p>
        <h1 className={styles.titleMd}>{domain.name}</h1>
        <p className={styles.tagline}>{domain.description}</p>
      </header>

      <section className={styles.gridMedium}>
        {domain.subcategories.map((subcategory) => (
          <SubcategoryCard
            key={subcategory.slug}
            domainSlug={domain.slug}
            subcategory={subcategory}
          />
        ))}
      </section>
    </>
  );
}
