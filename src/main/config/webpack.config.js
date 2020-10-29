const path = require('path');

const pathResolve = (dir = '') => path.join(__dirname, '..', dir) // 指向 src/main

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  target: 'electron-main',
  entry: {
    bundle:pathResolve('main.ts'),
    preload:pathResolve('preload.ts'),
  },
  output: {
    path: pathResolve('../../dist/main'),
    filename: '[name].js',
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node-modules/
      },
    ]
  }
};
