// packages/button/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'node:path';

export default defineConfig({
  // 增加插件的使用
  plugins: [vue()],
  build: {
    lib: {
      entry: './index.ts',
      name: 'CCTHBUiComponents',
      fileName: 'ccthb-ui-components',
    },
    minify: false,
    rollupOptions: {
      external: [
        // 除了 @openxui/shared，未来可能还会依赖其他内部模块，不如用正则表达式将 @openxui 开头的依赖项一起处理掉
        /@ccthb-ui.*/,
        'vue',
      ],
    },
  },
  resolve: {
    alias: [
      {
        find: /^@ccthb-ui\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      },
    ],
  },
});
