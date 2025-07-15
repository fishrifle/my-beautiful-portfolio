import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: './App',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true
  }
});
