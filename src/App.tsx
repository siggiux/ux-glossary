/*
 * App
 * ============================================================================
 * Defines the route tree. Every page renders inside <Layout> via <Outlet />.
 *
 * Routes:
 *   /                                  -> Home
 *   /:domainSlug                       -> Domain
 *   /:domainSlug/:subcategorySlug      -> Subcategory
 *   /:domainSlug/:subcategorySlug/:topicSlug   -> Topic (placeholder)
 *   *                                  -> NotFound
 * ============================================================================
 */

import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Domain } from './pages/Domain';
import { Subcategory } from './pages/Subcategory';
import { Topic } from './pages/Topic';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:domainSlug" element={<Domain />} />
        <Route path="/:domainSlug/:subcategorySlug" element={<Subcategory />} />
        <Route
          path="/:domainSlug/:subcategorySlug/:topicSlug"
          element={<Topic />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
