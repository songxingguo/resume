const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
      {
        test: /\.css$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'assets/',
            publicPath: './assets/'
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
            publicPath: './assets/'
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.ejs',
    inject: true,
    minify: {
      collapseWhitespace: true
    }
  }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    overlay: true,
    port: 4550,
    open: true,
    hot: true
  }
};
