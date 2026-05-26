/*
 * BodyText
 * ============================================================================
 * Renders prose with a small markdown subset:
 *   - blank lines separate paragraphs
 *   - lines starting with "- " become bullet items
 *   - **text** renders as bold
 *
 * Deliberately tiny — we don't pull in a markdown library. If we ever need
 * richer formatting (links, images mid-text, code), revisit this then.
 * ============================================================================
 */

import type { ReactNode } from 'react';
import styles from './BodyText.module.css';

type Props = { content: string };

export function BodyText({ content }: Props) {
  return <div className={styles.body}>{renderBlocks(content)}</div>;
}

/* ---------------------------------------------------------------------------
 * Parsing
 * --------------------------------------------------------------------------- */

function renderBlocks(content: string): ReactNode[] {
  // Split on blank lines to get paragraphs / lists.
  const blocks = content.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  return blocks.map((block, i) => {
    // Bullet list — every line starts with "- "
    const lines = block.split('\n');
    const isList = lines.every((line) => line.trim().startsWith('- '));
    if (isList) {
      return (
        <ul key={i} className={styles.list}>
          {lines.map((line, j) => (
            <li key={j}>{renderInline(line.trim().slice(2))}</li>
          ))}
        </ul>
      );
    }
    // Otherwise a paragraph. Soft newlines inside become <br />.
    return (
      <p key={i} className={styles.paragraph}>
        {lines.map((line, j) => (
          <span key={j}>
            {renderInline(line)}
            {j < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
}

/**
 * Inline parser — only handles **bold**. Returns an array of strings and
 * <strong> elements ready to be rendered as children.
 */
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<strong key={key++}>{match[1]}</strong>);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}
