import {
  defineConfig
} from "vite";
import vitePluginPugStatic from "@macropygia/vite-plugin-pug-static";
import eslint from '@nabla/vite-plugin-eslint';

export default defineConfig({
  root: "src",
  base: "",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: "src/index.pug",
        about: "src/works/works.pug"
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp|ico| )$/.test(assetInfo.name)) {
            return 'assets/images/[name].[ext]';
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]';
          }
          if (/Jost.*\.ttf$/.test(assetInfo.name)) {
            return 'assets/font/Jost/[name].[ext]';
          }
          if (/NotoSansJP.*\.ttf$/.test(assetInfo.name)) {
            return 'assets/font/Noto_Sans_JP/[name].[ext]';
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