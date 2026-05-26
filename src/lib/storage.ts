/*
 * STORAGE HELPERS
 * ============================================================================
 * Thin wrappers around localStorage so callers don't have to think about
 * JSON parsing or the (rare) case where storage is unavailable.
 *
 * Key conventions:
 *   glossary.theme                                       -> "light" | "dark"
 *   glossary.completed.<domain>.<subcategory>.<topic>    -> "1" when complete
 * ============================================================================
 */

export function readString(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeString(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage might be disabled (private mode etc.) — fail silently */
  }
}

export function removeKey(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* see above */
  }
}

/* ---------------------------------------------------------------------------
 * Completion keys — kept here so every caller uses the same shape.
 * --------------------------------------------------------------------------- */

export function completionKey(
  domainSlug: string,
  subcategorySlug: string,
  topicSlug: string,
): string {
  return `glossary.completed.${domainSlug}.${subcategorySlug}.${topicSlug}`;
}

export const THEME_KEY = 'glossary.theme';
