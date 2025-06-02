// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: false,
    port: 5179,
    allowedHosts: ['.ngrok-free.app'],
    proxy: {
      '/api/submit': {
        target: 'https://script.google.com/macros/s/AKfycbw-ukzXvkbBRRwZuzNn85Xo817oIYqHsTVpCjVY5IpD_hpqASAizevc-WJAg288psdvZw/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/submit/, '')
      }
    }
  }
});
