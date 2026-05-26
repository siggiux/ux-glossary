import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Minimal Vite config. We use React's plugin and nothing else.
// If you ever want path aliases, add `resolve.alias` here.
export default defineConfig({
  plugins: [react()],
});
