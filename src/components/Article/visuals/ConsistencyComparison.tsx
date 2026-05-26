/*
 * ConsistencyComparison
 * ============================================================================
 * Topic 02 — two rows of three mini screens. Top row: drifting buttons (no
 * system). Bottom row: identical buttons (with system).
 * ============================================================================
 */

import styles from './visuals.module.css';
import local from './ConsistencyComparison.module.css';

export function ConsistencyComparison() {
  return (
    <div className={styles.root}>
      <ComparisonRow label="Without a system" buttons={driftedButtons} />
      <ComparisonRow label="With a system" buttons={consistentButtons} />
    </div>
  );
}

type ButtonShape = {
  radius: number;
  padX: number;
  padY: number;
  bg: string;
};

const driftedButtons: ButtonShape[] = [
  { radius: 4, padX: 16, padY: 8, bg: 'color-mix(in srgb, var(--color-accent) 90%, black)' },
  { radius: 10, padX: 20, padY: 10, bg: 'color-mix(in srgb, var(--color-accent) 70%, white)' },
  { radius: 16, padX: 18, padY: 12, bg: 'color-mix(in srgb, var(--color-accent) 100%, transparent)' },
];

const consistentButtons: ButtonShape[] = [
  { radius: 8, padX: 16, padY: 10, bg: 'var(--color-accent)' },
  { radius: 8, padX: 16, padY: 10, bg: 'var(--color-accent)' },
  { radius: 8, padX: 16, padY: 10, bg: 'var(--color-accent)' },
];

function ComparisonRow({
  label,
  buttons,
}: {
  label: string;
  buttons: ButtonShape[];
}) {
  return (
    <div className={local.rowWrap}>
      <p className={styles.label}>{label}</p>
      <div className={styles.row}>
        {buttons.map((b, i) => (
          <FauxScreen key={i} button={b} />
        ))}
      </div>
    </div>
  );
}

function FauxScreen({ button }: { button: ButtonShape }) {
  return (
    <div className={styles['faux-window']}>
      <div className={styles['faux-window-bar']}>
        <span className={styles['faux-window-dot']} />
        <span className={styles['faux-window-dot']} />
        <span className={styles['faux-window-dot']} />
      </div>
      <div className={styles['faux-window-body']}>
        <div className={local.line} />
        <div className={local.lineShort} />
        <button
          type="button"
          className={local.fauxButton}
          style={{
            borderRadius: button.radius,
            padding: `${button.padY}px ${button.padX}px`,
            backgroundColor: button.bg,
          }}
        >
          Button
        </button>
      </div>
    </div>
  );
}
