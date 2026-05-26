/*
 * SubHeading — h3 within an article.
 */

import styles from './SubHeading.module.css';

type Props = { content: string };

export function SubHeading({ content }: Props) {
  return <h3 className={styles.heading}>{content}</h3>;
}
