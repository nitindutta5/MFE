import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteComponent": "./src/RemoteComponent.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server:{
    port:5000
  },
    build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
});
