/*
 * Layout
 * ============================================================================
 * Site shell: header (with logo + theme toggle) and a main slot for page
 * content. Used by every page via React Router's <Outlet />.
 * ============================================================================
 */

import { Link, Outlet } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={[styles.headerInner, 'container'].join(' ')}>
          <Link to="/" className={styles.logo}>
            Glossary
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className={styles.footer}>
        <div className="container">
          <p>A personal learning glossary.</p>
        </div>
      </footer>
    </div>
  );
}
