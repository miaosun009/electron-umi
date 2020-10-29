import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {
    type: 'hash'
  },
  outputPath: '../../dist/render',
  publicPath: './',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
