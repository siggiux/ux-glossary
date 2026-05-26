/*
 * NotFound
 * ============================================================================
 * Used as a fallback when a slug doesn't match anything (or matches a locked
 * sub-category that shouldn't be reachable directly).
 * ============================================================================
 */

import { Link } from 'react-router-dom';
import styles from './pages.module.css';

export function NotFound() {
  return (
    <div className={styles.intro}>
      <p className={styles.eyebrow}>404</p>
      <h1 className={styles.titleMd}>Not here</h1>
      <p className={styles.tagline}>
        That page doesn't exist yet. <Link to="/">Back to home</Link>.
      </p>
    </div>
  );
}
