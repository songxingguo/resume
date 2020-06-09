const config = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      inject: false,
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}, config);
