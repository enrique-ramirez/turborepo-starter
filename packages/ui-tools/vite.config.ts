/* eslint-disable import/no-extraneous-dependencies, import/no-nodejs-modules, import/no-default-export, sort-keys */
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `ui-tools.${format}.js`,
      formats: ["es", "umd"],
      name: "ui-tools",
    },
    rollupOptions: {
      external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
      output: {
        globals: {
          "@emotion/styled": "styled",
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
  },
});
