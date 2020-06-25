import './css/style.scss'

const isDev = process.env.NODE_ENV === 'development'

// 在开发环境下，使用 raw-loader 引入 ejs 模板文件，强制 webpack 将其视为需要热更新的一部分 bundle
if (isDev) {
  require('raw-loader!../src/index.ejs')
  require('raw-loader!../src/header.ejs')
  require('raw-loader!../src/footer.ejs')
  require('raw-loader!../src/edu.ejs')
  require('raw-loader!../src/tech.ejs')
  require('raw-loader!../src/works.ejs')
  require('raw-loader!../src/projects.ejs')
  require('raw-loader!../src/layout/header.ejs')
  require('raw-loader!../src/layout/content.ejs')
  require('../src/data.js')
}
