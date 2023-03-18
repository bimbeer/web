import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import { createSvgPlugin } from "vite-plugin-vue2-svg";

export default defineConfig({
  plugins: [createSvgPlugin(), createVuePlugin()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
