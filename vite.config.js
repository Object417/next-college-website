import { defineConfig } from "vite"
import jsconfigPaths from "vite-jsconfig-paths"
import path, { resolve } from "path"
import { fileURLToPath } from "url"
import { createHtmlPlugin } from "vite-plugin-html"

export default defineConfig({
  base: "/next-college-website/",
  plugins: [jsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        courses: resolve(__dirname, "src/pages/courses.html"),
        "contact-us": resolve(__dirname, "src/pages/contact-us.html"),
        "art-course": resolve(__dirname, "src/pages/art-course.html")
        // index: fileURLToPath(new URL("index.html", import.meta.url)),
        // courses: fileURLToPath(
        //   new URL("public/pages/courses.html", import.meta.url)
        // ),
        // "art-course": fileURLToPath(
        //   new URL("public/pages/art-course.html", import.meta.url)
        // ),
        // "contact-us": fileURLToPath(
        //   new URL("public/pages/contact-us.html", import.meta.url)
        // )
      }
    }
  }
})
