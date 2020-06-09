const path = require('path');

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'assets/',
            publicPath: '/assets/'
          }
        }, 'extract-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'assets/',
            publicPath: '/assets/'
          }
        }
      }
    ]
  }
};
