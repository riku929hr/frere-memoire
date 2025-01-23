import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [
    laravel(["resources/js/src/main.tsx", "resources/css/app.css"]),
    react(),
  ],
  resolve: {
    alias: {
      "@": "/resources/js/src",
    },
  },
});
