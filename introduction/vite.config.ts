import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // The base path is set to 'introduction' to ensure that all assets are correctly resolved when the application is served from this subdirectory.
  base: 'introduction',
  plugins: [react()],
});
