import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";
import autoprefixer from "autoprefixer";
import handlebars from "vite-plugin-handlebars";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const configs = {
  global: {},
  meta: {},
};

const readConfigJSONFile = async (filePath) => {
  return new Promise(async (resolve) => {
    const file = fs.readFileSync(filePath);
    resolve(JSON.parse(file));
  });
};

const root = resolve(__dirname, "./src/pages");

export default defineConfig(async () => {
  configs.global = await readConfigJSONFile("./src/configs/global.json");
  configs.meta = await readConfigJSONFile("./src/configs/meta.json");

  return {
    root: root,
    base: "./",
    publicDir: resolve(__dirname, "public"),
    server: {
      port: 8080,
    },
    build: {
      outDir: resolve(__dirname, "dist"),
      target: 'modules',
      manifest: true,
      rollupOptions: {
        input: {
          index: resolve(__dirname, "./src/pages/index.html"),
          news: resolve(__dirname, "./src/pages/news/index.html"),
          hanabi: resolve(__dirname, "./src/pages/hanabi/index.html"),
          kankou: resolve(__dirname, "./src/pages/kankou/index.html"),
        },
        output: {
          chunkFileNames: `assets/js/[name].[hash].js`,
          entryFileNames: `assets/js/[name].[hash].js`,
          assetFileNames: ({ name }) => {
            if (/\.(jpg|jpeg|png|svg|ico|gif|webp|bmp|tiff)$/.test(name ?? '')) {
              return `assets/images/[name].[hash][extname]`;
            }
            if (/\.css$/.test(name ?? '')) {
              return `assets/css/[name].[hash][extname]`;
            }
            if (/\.(ttf|otf|eot|woff|woff2)$/.test(name ?? '')) {
              return `assets/fonts/[name].[hash][extname]`;
            }

            return `assets/[name].[hash][extname]`;
          }
        },
      },
      assetsInlineLimit: 0,
      css: {
        devSourcemap: true,
        postcss: {
          plugins: [autoprefixer()],
        },
      },
    },
    assetsInclude: [resolve(__dirname, "public")],
    plugins: [
      ViteMinifyPlugin(),
      handlebars({
        partialDirectory: [
          resolve(__dirname, "src/includes/globals"),
          resolve(__dirname, "src/includes/components"),
          resolve(__dirname, "src/includes/modules"),
        ],
        context: (pagePath) => {
          return {
            ...configs.global,
            page: typeof configs.meta[pagePath] !== "undefined" && configs.meta[pagePath],
            pagePath: pagePath,
          };
        },
      }),
      ViteImageOptimizer(configs.global.image.optimization),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src/assets/scss"),
        "@js": resolve(__dirname, "src/assets/js"),
      },
    },
  };
});
