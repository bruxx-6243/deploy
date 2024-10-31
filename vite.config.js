import { defineConfig } from "vite";

export default defineConfig({
  base: "'/deploy/'",
  build: {
    outDir: "dist",
  },
});
