/*
 * Visuals registry
 * ============================================================================
 * Maps a string `visualId` (used in article content data) to the React
 * component that renders it. Both static visuals and interactive demos live
 * in this map.
 *
 * To add a new visual:
 *   1. Build the component (here in /visuals or in /demos)
 *   2. Import it below
 *   3. Add an entry to the `visuals` map with a stable id
 *   4. Reference that id from an article section's `visualId`
 * ============================================================================
 */

import type { ComponentType } from 'react';

import { NestedCircles } from './NestedCircles';
import { ConsistencyComparison } from './ConsistencyComparison';
import { PrimitiveScales } from './PrimitiveScales';
import { LightDarkResolution } from './LightDarkResolution';
import { TokenChain } from './TokenChain';
import { FigmaVariablesPanel } from './FigmaVariablesPanel';
import { ButtonComparison } from './ButtonComparison';
import { DocPageMock } from './DocPageMock';
import { FigmaToReact } from './FigmaToReact';
import { StorybookInterface } from './StorybookInterface';
import { SystemReferenceCards } from './SystemReferenceCards';
import { ContributionFlowchart } from './ContributionFlowchart';
import { OffSystemDecisionTree } from './OffSystemDecisionTree';

import { TokenPlayground } from '../demos/TokenPlayground';
import { ThemeSwitcher } from '../demos/ThemeSwitcher';

export const visuals: Record<string, ComponentType> = {
  // Topic 01 — What a Design System Is
  'nested-circles': NestedCircles,
  // Topic 02 — Why Design Systems Exist
  'consistency-comparison': ConsistencyComparison,
  // Topic 03 — Design Tokens (interactive)
  'token-playground': TokenPlayground,
  // Topic 04 — Primitive Tokens
  'primitive-scales': PrimitiveScales,
  // Topic 05 — Semantic Tokens
  'light-dark-resolution': LightDarkResolution,
  // Topic 06 — Component Tokens
  'token-chain': TokenChain,
  // Topic 07 — Figma Variables
  'figma-variables-panel': FigmaVariablesPanel,
  // Topic 08 — Figma Components
  'button-comparison': ButtonComparison,
  // Topic 09 — Component Documentation
  'doc-page-mock': DocPageMock,
  // Topic 10 — The Design-to-Code Relationship
  'figma-to-react': FigmaToReact,
  // Topic 11 — Storybook from the Designer's Perspective
  'storybook-interface': StorybookInterface,
  // Topic 12 — Real System Examples
  'system-reference-cards': SystemReferenceCards,
  // Topic 13 — Contribution & Governance
  'contribution-flowchart': ContributionFlowchart,
  // Topic 14 — Token Theming in Practice (interactive)
  'theme-switcher': ThemeSwitcher,
  // Topic 15 — When NOT to Use the Design System
  'off-system-decision-tree': OffSystemDecisionTree,
};
