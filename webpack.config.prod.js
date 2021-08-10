const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic', // 使用哈希值作为模块 id
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    nodeEnv: 'production',
    splitChunks: {
      maxSize: 200 * 1024 * 8, // 「原始单位是字节」，最大 200kb，再大就分包
      chunks: 'all', // all 表示同步加载和异步加载，async 表示异步加载，initial 表示同步加载
      cacheGroups: {
        commons: {
          minSize: 0, // 只要是 node_modules 里面的就抽出来
          priority: 10,
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    }),
  ],
});
