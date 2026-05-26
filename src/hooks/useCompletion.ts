/*
 * useCompletion
 * ============================================================================
 * Tracks which topics the user has marked complete. State lives in
 * localStorage so progress survives reloads.
 *
 * Two hooks:
 *   useCompletion(domain, subcategory, topic)
 *     -> { isComplete, toggle } for a single topic
 *
 *   useCompletionCount(subcategory)
 *     -> number of completed topics in a subcategory (live updates)
 *
 * They share state via a tiny in-module pub/sub so toggling on a card
 * immediately updates the progress count on the parent page.
 * ============================================================================
 */

import { useCallback, useEffect, useState } from 'react';
import { completionKey, readString, removeKey, writeString } from '../lib/storage';
import type { Subcategory, Domain } from '../content/types';

/* ---------------------------------------------------------------------------
 * Pub/sub — components subscribe and re-render when ANY completion key changes.
 * Cheap enough at our scale; no need for a state library.
 * --------------------------------------------------------------------------- */

type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/* ---------------------------------------------------------------------------
 * Read / write a single completion flag.
 * --------------------------------------------------------------------------- */

function readCompletion(key: string): boolean {
  return readString(key) === '1';
}

function setCompletion(key: string, complete: boolean) {
  if (complete) writeString(key, '1');
  else removeKey(key);
  notify();
}

/* ---------------------------------------------------------------------------
 * Hook: one topic.
 * --------------------------------------------------------------------------- */

export function useCompletion(
  domainSlug: string,
  subcategorySlug: string,
  topicSlug: string,
) {
  const key = completionKey(domainSlug, subcategorySlug, topicSlug);
  const [isComplete, setIsComplete] = useState(() => readCompletion(key));

  useEffect(() => {
    const update = () => setIsComplete(readCompletion(key));
    update();
    return subscribe(update);
  }, [key]);

  const toggle = useCallback(() => {
    setCompletion(key, !readCompletion(key));
  }, [key]);

  return { isComplete, toggle };
}

/* ---------------------------------------------------------------------------
 * Hook: completion count for a subcategory.
 * --------------------------------------------------------------------------- */

export function useSubcategoryCompletionCount(
  domainSlug: string,
  subcategory: Subcategory,
) {
  const [count, setCount] = useState(() =>
    countComplete(domainSlug, subcategory),
  );

  useEffect(() => {
    const update = () => setCount(countComplete(domainSlug, subcategory));
    update();
    return subscribe(update);
  }, [domainSlug, subcategory]);

  return count;
}

/* ---------------------------------------------------------------------------
 * Hook: completion count for a whole domain.
 * --------------------------------------------------------------------------- */

export function useDomainCompletionCount(domain: Domain) {
  const [count, setCount] = useState(() => countDomainComplete(domain));

  useEffect(() => {
    const update = () => setCount(countDomainComplete(domain));
    update();
    return subscribe(update);
  }, [domain]);

  return count;
}

function countComplete(domainSlug: string, subcategory: Subcategory): number {
  let n = 0;
  for (const t of subcategory.topics) {
    if (readCompletion(completionKey(domainSlug, subcategory.slug, t.slug))) {
      n += 1;
    }
  }
  return n;
}

function countDomainComplete(domain: Domain): number {
  let n = 0;
  for (const s of domain.subcategories) {
    n += countComplete(domain.slug, s);
  }
  return n;
}
