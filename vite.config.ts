import { defineConfig } from 'vite';
import {svelte} from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "", //  "/arrganizerdocs/",
  plugins: [svelte()],
  resolve: {
    alias: {
      "data-arrganizer": "data-arrganizer/dist/index.js",
    },
  },
});
