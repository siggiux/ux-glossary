/*
 * VisualBlock
 * ============================================================================
 * Container for diagrams, illustrations, and interactive demos. The actual
 * visual is resolved by `visualId` from the registry in ./visuals/index.ts.
 *
 * If an id isn't found we render a friendly placeholder rather than crashing —
 * this way a content file can reference a visual that hasn't been built yet
 * without breaking the whole page.
 * ============================================================================
 */

import { visuals } from './visuals';
import styles from './VisualBlock.module.css';

type Props = {
  visualId: string;
  caption: string;
};

export function VisualBlock({ visualId, caption }: Props) {
  const Visual = visuals[visualId];

  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        {Visual ? (
          <Visual />
        ) : (
          <div className={styles.missing}>
            Visual not built yet:{' '}
            <code className={styles.code}>{visualId}</code>
          </div>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
