/* eslint-disable */
import * as path from 'path'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import { createVuePlugin } from 'vite-plugin-vue2'
import ScriptSetup from 'vue2-script-setup-transform/vite-plugin'
import Inspect from 'vite-plugin-inspect'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import ViteComponents, { ElementUiResolver } from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
// @see https://cn.vitejs.dev/config/
export default ({ command, mode }) => {
  let rollupOptions = {}

  let alias = [
    { find: /^~/, replacement: '' },
    { find: 'vue', replacement: 'vue/dist/vue.esm' },
    {
      find: '@',
      replacement: path.resolve(__dirname, ''),
    },
  ]

  let proxy = {}

  let define = {
    'process.env.NODE_ENV': '"development"',
    'precess.env.SITE_NAME': '"Vite Vue2 App"',
  }

  let esbuild = {}

  return {
    base: './', // index.html文件所在位置
    root: './', // js导入的资源路径
    publicDir: 'static',
    resolve: {
      alias,
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.styl'],
      dedupe: ['vue-demi'],
    },
    define: define,
    server: {
      // 代理
      proxy,

      port: 3003,
      fs: {
        strict: false,
      },
    },
    build: {
      target: 'es2015',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出maifest.json
      sourcemap: false, // 是否产出soucemap.json
      outDir: 'build', // 产出目录
      rollupOptions,
    },
    esbuild,
    plugins: [
      createVuePlugin({
        jsx: true,
        vueTemplateOptions: {
          compilerOptions: {
            whitespace: 'condense',
          },
        },
      }),
      PkgConfig(),
      OptimizationPersist(),
      ViteComponents({
        globalComponentsDeclaration: true,
        customComponentResolvers: [ElementUiResolver()],
      }),
      Inspect(),
      // @ts-ignore
      ScriptSetup(),
      Layouts({
        layoutsDir: 'src/layouts',
      }),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
        exclude: ['**/components/**.vue'],
        extensions: ['vue'],
        syncIndex: false,
        replaceSquareBrackets: true,
        nuxtStyle: true,
      }),
      WindiCSS(),
    ],
    css: {
      preprocessorOptions: {},
    },
  }
}
