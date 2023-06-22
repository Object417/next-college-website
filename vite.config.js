import path, { resolve } from "path"
import { defineConfig } from "vite"
import jsconfigPaths from "vite-jsconfig-paths"
import license from "rollup-plugin-license"

export default defineConfig({
  base: "/next-college-website/",
  plugins: [
    jsconfigPaths(),
    license({
      thirdParty: {
        output: resolve(__dirname, "dist/assets/vendor.LICENSE.txt")
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/")
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
      },
      output: {
        assetFileNames: ({ name, type, source }) => {
          // images
          if (/\.(jpe?g|png|svg|webp|avif|gif)$/.test(name)) {
            return "assets/imgs/[hash][extname]"
          }
          // fonts
          if (/\.(woff2?|eot|otf|ttf)$/.test(name)) {
            return "assets/fonts/[hash][extname]"
          }
          // videos
          if (/\.(mp4|avi|mpeg|webm|wmv)$/.test(name)) {
            return "assets/vids/[hash][extname]"
          }
          // 3d models
          if (/\.(gltf|glb|obj|fbx)$/.test(name)) {
            return "assets/objs/[hash][extname]"
          }

          // default
          return name === "main"
            ? "assets/[name]-[hash][extname]"
            : "assets/[hash][extname]"
        }
      }
    }
  }
})
