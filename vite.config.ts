import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        program: resolve(__dirname, "program.html"),
        den: resolve(__dirname, "den.html"),
        ucastnici: resolve(__dirname, "ucastnici.html"),
        dobreVedet: resolve(__dirname, "dobre-vedet.html"),
      },
    },
  },
});
