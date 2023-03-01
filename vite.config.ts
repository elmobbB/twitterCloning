import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-refresh";
import EnvCompatible from "vite-plugin-env-compatible";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  envPrefix: "REACT_APP_",
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  plugins: [react(), EnvCompatible(), tsConfigPaths()],
});
