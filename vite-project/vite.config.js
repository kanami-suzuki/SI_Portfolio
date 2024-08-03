import {
  defineConfig
} from "vite";
import vitePluginPugStatic from "@macropygia/vite-plugin-pug-static";
import eslint from '@nabla/vite-plugin-eslint';

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "src/index.pug",
        // about: "src/about/about.pug"
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return 'assets/images/[name].[ext]';
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        }
      }
    }
  },
  plugins: [
    vitePluginPugStatic({
      buildOptions: {
        basedir: "src"
      }, //ルートディレクトリ
      serveOptions: {
        basedir: "src"
      } //ルートディレクトリ
    }),
    eslint({
      eslintOptions: {
        fix: true,
      }
    }),
  ]
})