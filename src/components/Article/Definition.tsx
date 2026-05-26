/*
 * Definition
 * ============================================================================
 * The highlighted block at the top of every article that carries the core
 * definition. Visually distinct via a tinted background and an accent left
 * border.
 * ============================================================================
 */

import styles from './Definition.module.css';

type Props = { content: string };

export function Definition({ content }: Props) {
  return (
    <aside className={styles.definition}>
      <p className={styles.label}>Definition</p>
      <p className={styles.text}>{content}</p>
    </aside>
  );
}
