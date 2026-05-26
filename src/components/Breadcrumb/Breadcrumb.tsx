/*
 * Breadcrumb
 * ============================================================================
 * A simple trail of links used on Subcategory and Topic pages.
 * ============================================================================
 */

import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

type Crumb = { label: string; to?: string };

type Props = { items: Crumb[] };

export function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={styles.item}>
              {item.to && !isLast ? (
                <Link to={item.to} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.current}>{item.label}</span>
              )}
              {!isLast && <span className={styles.separator}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
