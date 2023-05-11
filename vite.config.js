import path, { resolve } from "path"
import { defineConfig } from "vite"
import jsconfigPaths from "vite-jsconfig-paths"

export default defineConfig({
  base: "/next-college-website/",
  plugins: [jsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  assetsInclude: ["src/objs/*"],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        courses: resolve(__dirname, "src/pages/courses.html"),
        "contact-us": resolve(__dirname, "src/pages/contact-us.html"),
        "art-course": resolve(__dirname, "src/pages/art-course.html")
      }
    }
  }
})
