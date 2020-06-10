const isDev = process.env.NODE_ENV === 'development'

// 在开发环境下，使用 raw-loader 引入 ejs 模板文件，强制 webpack 将其视为需要热更新的一部分 bundle
if (isDev) {
  require('raw-loader!../src/index.ejs')
}
