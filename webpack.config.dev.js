webpack = require('webpack');
var merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
baseConfig.plugins.push(new webpack.NamedModulesPlugin());

module.exports = merge(baseConfig, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './build',
    host: 'localhost',
    port: 8080
  },
  entry: {
    build: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/src/app.jsx'
    ]
  }
})