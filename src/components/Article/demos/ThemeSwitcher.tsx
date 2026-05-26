/*
 * ThemeSwitcher
 * ============================================================================
 * Topic 14 demo — a sample UI panel + a three-option theme switcher (Light /
 * Dark / Warm). Below the panel: a token resolution table updating live as
 * the theme switches.
 *
 * Each "theme" is a set of CSS custom properties scoped to this demo only.
 * This is exactly how a real semantic token layer drives multi-theme
 * interfaces — only the resolved primitives change, not the components.
 * ============================================================================
 */

import { useState, type CSSProperties } from 'react';
import styles from './ThemeSwitcher.module.css';

type ThemeId = 'light' | 'dark' | 'warm';

type Theme = {
  id: ThemeId;
  label: string;
  vars: {
    bg: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    accent: string;
  };
};

const themes: Theme[] = [
  {
    id: 'light',
    label: 'Light',
    vars: {
      bg: '#FAFAF8',
      surface: '#FFFFFF',
      text: '#0F0F0F',
      textMuted: '#6B6B66',
      border: '#E5E5E1',
      accent: '#4A6B7C',
    },
  },
  {
    id: 'dark',
    label: 'Dark',
    vars: {
      bg: '#0F0F0F',
      surface: '#1A1A18',
      text: '#F5F5F4',
      textMuted: '#A1A1A0',
      border: '#2A2A28',
      accent: '#6A8A9A',
    },
  },
  {
    id: 'warm',
    label: 'Warm',
    vars: {
      bg: '#F5EFE6',
      surface: '#FBF6EE',
      text: '#3A2E1F',
      textMuted: '#7A6A55',
      border: '#E2D6BF',
      accent: '#B97A3F',
    },
  },
];

const tokenRows: { name: string; key: keyof Theme['vars'] }[] = [
  { name: 'color.background.default', key: 'bg' },
  { name: 'color.surface.default', key: 'surface' },
  { name: 'color.text.default', key: 'text' },
  { name: 'color.border.default', key: 'border' },
  { name: 'color.accent.primary', key: 'accent' },
];

export function ThemeSwitcher() {
  const [themeId, setThemeId] = useState<ThemeId>('light');
  const theme = themes.find((t) => t.id === themeId)!;

  // Scope all the resolved primitives to this subtree only.
  const scoped = {
    '--demo-bg': theme.vars.bg,
    '--demo-surface': theme.vars.surface,
    '--demo-text': theme.vars.text,
    '--demo-text-muted': theme.vars.textMuted,
    '--demo-border': theme.vars.border,
    '--demo-accent': theme.vars.accent,
  } as CSSProperties;

  return (
    <div className={styles.root}>
      <div className={styles.switcher}>
        {themes.map((t) => (
          <button
            key={t.id}
            type="button"
            className={[styles.tab, t.id === themeId ? styles.tabActive : ''].join(' ')}
            onClick={() => setThemeId(t.id)}
            aria-pressed={t.id === themeId}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.panelWrap} style={scoped}>
        <div className={styles.panel}>
          <header className={styles.panelHeader}>
            <p className={styles.panelEyebrow}>Card</p>
            <h4 className={styles.panelTitle}>Same component, three themes</h4>
          </header>
          <p className={styles.panelBody}>
            Nothing about this card knows what theme it's in. Only the semantic
            tokens it reads change value.
          </p>
          <button type="button" className={styles.panelButton}>
            Primary action
          </button>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Semantic token</th>
              <th>Resolves to</th>
            </tr>
          </thead>
          <tbody>
            {tokenRows.map((row) => (
              <tr key={row.name}>
                <td className={styles.tokenName}>{row.name}</td>
                <td className={styles.tokenValue}>
                  <span
                    className={styles.swatch}
                    style={{ backgroundColor: theme.vars[row.key] }}
                  />
                  {theme.vars[row.key]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
