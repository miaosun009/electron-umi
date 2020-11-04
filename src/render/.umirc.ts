import { defineConfig } from 'umi';
import * as path from 'path';

const resolvePath = dir => path.join(__dirname, dir);
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {
    type: 'hash',
  },
  outputPath: '../../dist/render',
  publicPath: './',
  // 路径别名
  alias: {
    '@': resolvePath(''),
    '@components': resolvePath('components'),
    '@pages': resolvePath('layout'),
    '@store': resolvePath('store'),
  },
  chainWebpack(memo) {
    memo.target('electron-renderer');
  },
});
