/* eslint-disable no-undef */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "@": path.resolve(__dirname, "./src"),
    }
  },
  server: {
    port: 8080,
    open: true,
  }
});
