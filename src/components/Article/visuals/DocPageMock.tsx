/*
 * DocPageMock
 * ============================================================================
 * Topic 09 — a small mock of a Button component documentation page with an
 * anatomy diagram, a do/don't pair, and a props table.
 * ============================================================================
 */

import styles from './DocPageMock.module.css';

export function DocPageMock() {
  return (
    <div className={styles.frame}>
      <header className={styles.docHeader}>
        <p className={styles.crumb}>Components / Button</p>
        <h4 className={styles.title}>Button</h4>
        <p className={styles.summary}>
          Triggers an action. Use for the most important action on a screen.
        </p>
      </header>

      <section>
        <p className={styles.sectionLabel}>Anatomy</p>
        <div className={styles.anatomy}>
          <div className={styles.anatomyButton}>
            <span className={styles.dotA} />
            <span>Label</span>
          </div>
          <div className={styles.anatomyLegend}>
            <span>
              <span className={styles.dotB} /> Container
            </span>
            <span>
              <span className={styles.dotA} /> Icon (optional)
            </span>
          </div>
        </div>
      </section>

      <section>
        <p className={styles.sectionLabel}>Do / Don't</p>
        <div className={styles.dod}>
          <div className={[styles.dodCell, styles.do].join(' ')}>
            <span className={styles.dodLabel}>Do</span>
            <span className={styles.dodNote}>One primary per screen</span>
          </div>
          <div className={[styles.dodCell, styles.dont].join(' ')}>
            <span className={styles.dodLabel}>Don't</span>
            <span className={styles.dodNote}>Multiple primaries competing</span>
          </div>
        </div>
      </section>

      <section>
        <p className={styles.sectionLabel}>Props</p>
        <table className={styles.props}>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variant</td>
              <td>primary | secondary | ghost</td>
            </tr>
            <tr>
              <td>size</td>
              <td>sm | md | lg</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>ReactNode</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
