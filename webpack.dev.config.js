const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

module.exports = Object.assign({
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      inject: true,
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    overlay: true,
    port: 4550,
    hotOnly: true
  }
}, config);
