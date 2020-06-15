const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssExtractPlugin = require("mini-css-extract-plugin");   // 将css代码提取为独立文件的插件
const MediaQueryPlugin = require('media-query-plugin');

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
        {
          loader: MinCssExtractPlugin.loader,  // 将处理后的CSS代码提取为独立的CSS文件，可以只在生产环境中配置，但我喜欢保持开发环境与生产环境尽量一致
          options: {
            publicPath: '/assets/',
            // only enable hot in development
            hmr: true,
            // if hmr does not work, this is a forceful method.
            reloadAll: true,
          },
        },
        'css-loader',  // CSS加载器，使webpack可以识别css文件
        MediaQueryPlugin.loader,
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }, // 承载autoprefixer功能，为css添加前缀
        'sass-loader', // Compiles Sass to CSS
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
        },
          'extract-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          }]
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
      },
      {
        test: /\.ejs$/,
        use: {
          loader: 'ejs-compiled-loader',
          options: {
            htmlmin: true,
            htmlminOptions: {
              removeComments: true
            }
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
    new webpack.HotModuleReplacementPlugin(),
    new MinCssExtractPlugin(),
    new MediaQueryPlugin({
      include: [
        'style',
      ],
      queries: {
        'print': 'print',
        'screen': 'screen'
      }
    })
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
