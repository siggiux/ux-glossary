/*
 * Article
 * ============================================================================
 * Renders a Topic's article from its structured `sections` array.
 *
 * Each section type maps to a small dedicated component. Adding a new
 * section type means: extend ArticleSectionType in types.ts, add a case
 * to the switch below, and create the component.
 * ============================================================================
 */

import type { Article as ArticleData } from '../../content/types';
import { Definition } from './Definition';
import { BodyText } from './BodyText';
import { SectionHeading } from './SectionHeading';
import { SubHeading } from './SubHeading';
import { Callout } from './Callout';
import { VisualBlock } from './VisualBlock';
import { CrossReferences } from './CrossReferences';
import styles from './Article.module.css';

type Props = { article: ArticleData };

export function Article({ article }: Props) {
  return (
    <article className={styles.article}>
      {article.sections.map((section, index) => {
        switch (section.type) {
          case 'definition':
            return <Definition key={index} content={section.content ?? ''} />;
          case 'body':
            return <BodyText key={index} content={section.content ?? ''} />;
          case 'section-heading':
            return <SectionHeading key={index} content={section.content ?? ''} />;
          case 'sub-heading':
            return <SubHeading key={index} content={section.content ?? ''} />;
          case 'callout':
            return (
              <Callout
                key={index}
                calloutType={section.calloutType ?? 'insight'}
                content={section.content ?? ''}
              />
            );
          case 'visual':
            return (
              <VisualBlock
                key={index}
                visualId={section.visualId ?? ''}
                caption={section.caption ?? ''}
              />
            );
          case 'cross-refs':
            return (
              <CrossReferences key={index} items={section.items ?? []} />
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
