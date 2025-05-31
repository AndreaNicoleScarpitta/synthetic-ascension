// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: false,
    port: 5179,
    allowedHosts: ['.ngrok-free.app']
  }
});
