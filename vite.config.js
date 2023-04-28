import { defineConfig } from "vite"
import jsconfigPaths from "vite-jsconfig-paths"
import path from "path"

export default defineConfig({
  plugins: [jsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  }
})
