const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  target: 'web',
  devServer: {
    clientLogLevel: 'warn',
    historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    compress: true, // 一切服务都启用 gzip 压缩
    host: '0.0.0.0', // 外部网络可访问
    open: true,
    overlay: { warnings: false, errors: true }, // 在浏览器上全屏显示编译的errors或warnings。
    port: 8080,
    proxy: {},
  },
});
