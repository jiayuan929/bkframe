const { resolve } = require('path');
const webpack = require('webpack');
const mockServer = require('./mock-server');
const isModeProduction = process.env.NODE_ENV === 'production';
const env = require('./env')();

module.exports = {
  indexPath: isModeProduction ? './index.html' : './index-dev.html',
  publicPath: env.assetsPublicPath,
  devServer: {
    host: env.HOST,
    open: true,
    port: 5000,
    before: mockServer,
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('@doc', resolve('doc'));

    config.plugin('define')
      .use(webpack.DefinePlugin, [env]);
    config.plugin('replace').use(require('./replace-static-url-plugin'), [{}])
      .after('html');
  },
};
