const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    runtimeChunk: 'single'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/index.[contenthash].css'
    })
  ]
});
