/*
 * TokenPlayground
 * ============================================================================
 * Topic 03 demo — a sample card where the accent value is exposed as a
 * controllable variable. Changing it updates the card's button background,
 * border, and label colour simultaneously. This is the token concept in
 * one interaction.
 *
 * We set the CSS custom property on a wrapper element so only this demo's
 * subtree sees the override — the rest of the page keeps its real accent.
 * ============================================================================
 */

import { useState, type CSSProperties } from 'react';
import styles from './TokenPlayground.module.css';

const presets = [
  { name: 'Slate', value: '#4A6B7C' },
  { name: 'Teal', value: '#3F7C7A' },
  { name: 'Warm', value: '#B97A3F' },
  { name: 'Plum', value: '#7A4A6B' },
];

export function TokenPlayground() {
  const [accent, setAccent] = useState(presets[0].value);

  // Inline style sets the custom property scoped to this subtree only.
  const scopedAccent = { '--demo-accent': accent } as CSSProperties;

  return (
    <div className={styles.root} style={scopedAccent}>
      <div className={styles.controls}>
        <p className={styles.controlLabel}>color.accent.primary</p>
        <div className={styles.presetRow}>
          {presets.map((p) => (
            <button
              key={p.name}
              type="button"
              className={[
                styles.preset,
                p.value === accent ? styles.presetActive : '',
              ].join(' ')}
              onClick={() => setAccent(p.value)}
              aria-pressed={p.value === accent}
            >
              <span
                className={styles.presetSwatch}
                style={{ backgroundColor: p.value }}
              />
              <span>{p.name}</span>
            </button>
          ))}
        </div>
        <p className={styles.note}>
          One token. Three places it's used. Change the value — watch the card
          repaint in lockstep.
        </p>
      </div>

      <div className={styles.cardWrap}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>Card</p>
          <h4 className={styles.cardTitle}>A small example</h4>
          <p className={styles.cardBody}>
            The label, the underline, and the button all read from the same
            token.
          </p>
          <button type="button" className={styles.cardButton}>
            Action
          </button>
        </article>
      </div>
    </div>
  );
}
