/*
 * Home page (/)
 * ============================================================================
 * Site title, tagline, and the three domain cards.
 * ============================================================================
 */

import { domains } from '../content/domains';
import { DomainCard } from '../components/DomainCard';
import styles from './pages.module.css';

export function Home() {
  return (
    <>
      <header className={styles.intro}>
        <h1 className={styles.title}>Glossary</h1>
        <p className={styles.tagline}>
          A personal learning archive — the language of design, the building
          blocks of software, and the basics of AI.
        </p>
      </header>

      <section className={styles.gridLarge}>
        {domains.map((domain) => (
          <DomainCard key={domain.slug} domain={domain} />
        ))}
      </section>
    </>
  );
}
