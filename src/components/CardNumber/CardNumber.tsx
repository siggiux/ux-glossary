/*
 * CardNumber
 * ============================================================================
 * The small zero-padded label (01, 02, 03) that sits in the top-left of every
 * card. Extracted so the style is identical everywhere.
 * ============================================================================
 */

import styles from './CardNumber.module.css';

type Props = { value: number };

export function CardNumber({ value }: Props) {
  const label = String(value).padStart(2, '0');
  return <span className={styles.number}>{label}</span>;
}
