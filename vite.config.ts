import { defineConfig } from 'vite';
import {svelte} from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/arrganizerdocs/",
  plugins: [svelte()],
  resolve: {
    alias: {
      arrganizer: "arrganizer/dist/index.js",
    },
  },
});
