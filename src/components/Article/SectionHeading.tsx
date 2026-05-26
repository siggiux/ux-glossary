/*
 * SectionHeading — h2 within an article. Gives the next section breathing room.
 */

import styles from './SectionHeading.module.css';

type Props = { content: string };

export function SectionHeading({ content }: Props) {
  return <h2 className={styles.heading}>{content}</h2>;
}
