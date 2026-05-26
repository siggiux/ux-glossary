/*
 * StorybookInterface
 * ============================================================================
 * Topic 11 — annotated mock of Storybook: sidebar with components & stories,
 * canvas with a rendered button, controls panel with prop toggles.
 * ============================================================================
 */

import styles from './StorybookInterface.module.css';

const sidebarItems = [
  { name: 'Button', expanded: true },
  { name: 'Default', isStory: true, active: true },
  { name: 'Hover', isStory: true },
  { name: 'Disabled', isStory: true },
  { name: 'Loading', isStory: true },
  { name: 'Card', expanded: false },
  { name: 'Modal', expanded: false },
];

export function StorybookInterface() {
  return (
    <div className={styles.frame}>
      <aside className={styles.sidebar}>
        <p className={styles.smallLabel}>Components</p>
        {sidebarItems.map((item) => (
          <div
            key={item.name}
            className={[
              styles.sidebarItem,
              item.isStory ? styles.story : '',
              item.active ? styles.active : '',
            ].join(' ')}
          >
            {item.isStory ? '◇ ' : '▾ '}
            {item.name}
          </div>
        ))}
      </aside>

      <section className={styles.canvas}>
        <p className={styles.smallLabel}>Canvas</p>
        <div className={styles.canvasInner}>
          <button type="button" className={styles.previewButton}>
            Button
          </button>
        </div>
      </section>

      <aside className={styles.controls}>
        <p className={styles.smallLabel}>Controls</p>
        <ControlRow label="variant" value="primary" />
        <ControlRow label="size" value="md" />
        <ControlRow label="disabled" value="false" />
      </aside>
    </div>
  );
}

function ControlRow({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.controlRow}>
      <span className={styles.controlLabel}>{label}</span>
      <span className={styles.controlValue}>{value}</span>
    </div>
  );
}
