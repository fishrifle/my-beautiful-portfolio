import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: './App',
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: '../dist'
  }
});
