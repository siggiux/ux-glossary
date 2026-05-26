/*
 * useTheme
 * ============================================================================
 * Manages light/dark theme state.
 *
 * Resolution order on first load:
 *   1. localStorage value (if the user has toggled before)
 *   2. `prefers-color-scheme: dark` from the OS
 *   3. Light
 *
 * The active theme is written to the <html> element as `data-theme="..."`,
 * which the CSS in tokens.css uses to swap the semantic colour tokens.
 * ============================================================================
 */

import { useCallback, useEffect, useState } from 'react';
import { readString, writeString, THEME_KEY } from '../lib/storage';

export type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const stored = readString(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  if (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    writeString(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggleTheme };
}
