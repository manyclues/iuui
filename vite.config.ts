import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ rollupTypes: true }),
    libInjectCss(),
  ],
  build: {
    // library entry and output settings
    lib: {
      entry: [
        resolve(__dirname, "lib/main.ts"),
        resolve(__dirname, "lib/IUButton/IUButton.tsx"),
        resolve(__dirname, "lib/IUTextField/IUTextField.tsx"),
      ],
      // name: "iuui",
      // fileName: "iuui",
    },
    // bundler options
    // externalize react-related imports
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
