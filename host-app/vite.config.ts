import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
        federation({
      name: 'host_app',
      remotes: {
        remote_app: 'http://localhost:5000/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
    server: {
    port: 5001,
  },
})
