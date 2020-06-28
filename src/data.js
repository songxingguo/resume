const JLDDTemplate =

  module.exports = {
    header: {
      name: '宋兴国',
      position: '前端开发工程师',
      telNum: '18983642737',
      email: 'xg.song@qq.com',
      wxChat: 's1328989942',
      blog: 'www.songxingguo.com',
      blogUrl: 'https://www.songxingguo.com',
      headIcon: 'https://graphbed.qiniu.songxingguo.com/resume/header.png'
    },
    edu: {
      title: '教育经历',
      desc: '学生时代就踏上开发之路',
      list: [{
        name: '重庆理工大学',
        descList: ['高等数学，c 语言、Java、 数据结 构、计算机网络、线性代数、操作系统、数据 库、网络协议分析、概率论与统计、软件质量 保证与测试、算法、编译原理、设计模式、软件项目管理。'],
        logoUrl: 'https://graphbed.qiniu.songxingguo.com/resume/test/cqut_logo.png',
        term: '2015.9-2019.6',
        major: '软件工程',
        education: '本科'
      }]
    },
    tech: {
      title: '专注前端，涉猎后端',
      desc: '编织有艺术感的代码',
      list: [{
        name: 'JavaScript',
        style: 'cyan',
        desc: '熟悉掌握 JavaScript 基础，对基础数据类型和它们的 API 能够纯熟应用',
        grade: '85%'
      }, {
        name: 'HTML&CSS',
        style: 'green',
        desc: '熟悉 HTML 和 CSS',
        grade: '80%'
      }, {
        name: 'Node.js',
        style: 'orange',
        desc: '了解 Node.js 的基本使用',
        grade: '20%'
      }],
      descList: ['坚持和善于用技术和工具解决问题。',
        '熟悉掌握 JavaScript 基础，对基础数据类型和它们的 API 能够纯熟应用。',
        '熟悉 React、 ES6、 Webpack 、JQuery 等技术。',
        '具有 Web 应用前后端研发经验。',
        '了解 npm、Webpack 等工具的基本原理。',]
    },
    projects: {
      title: '丰富的项目经验',
      desc: '业余项目与公司项目相得益彰',
      list: [{
        name: '大约旗下微信小程序及后台管理',
        desc: '2018.12-至今',
        tagList: [{
          name: 'WXML',
          style: 'tech-item--strong'
        }, {
          name: 'SCSS',
          style: 'tech-item--normal'
        }, {
          name: 'JavaScript',
          style: 'tech-item--light'
        }],
        cName: 'JLDD',
        link: {
          name: '锦鲤多多',
          imgUrl: 'https://graphbed.qiniu.songxingguo.com/resume/test/JLDD.png'
        },
        imgUrls: ['https://graphbed.qiniu.songxingguo.com/resume/test/JLDD-1.jpeg',
          'https://graphbed.qiniu.songxingguo.com/resume/test/JLDD-3.jpeg'],
      }, {
        name: '知晓理工',
        desc: '2018.12-至今',
        tagList: [{
          name: 'WXML',
          style: 'tech-item--strong'
        }, {
          name: 'WXSS',
          style: 'tech-item--normal'
        }, {
          name: 'JavaScript',
          style: 'tech-item--light'
        }],
        cName: 'CQUT',
        link: {
          name: '知晓理工',
          imgUrl: 'https://graphbed.qiniu.songxingguo.com/resume/test/cqut.png'
        },
        imgUrls: ['https://media.ifanrusercontent.com/user_files/trochili/44/17/44170385601da97f7fb47d542f4c41fbb19afadc-5c20dcbcfbab07ab6c2df7e27444d5ac2afca569.png',
          'https://media.ifanrusercontent.com/user_files/trochili/9f/6b/9f6b0b4e631f081554a9a7f4f5985704fc93b06e-cd738a722fd3838065f6fa1e747cad6f62c703a5.png'],
      }, {
        name: '相册',
        desc: '2018.12-至今',
        tagList: [{
          name: 'HTML5',
          style: 'tech-item--strong'
        }, {
          name: 'CSS3',
          style: 'tech-item--normal'
        }, {
          name: 'JavaScript',
          style: 'tech-item--light'
        }, {
          name: 'TravisCI',
          style: 'tech-item--grey'
        }],
        cName: 'ALBUM',
        link: {
          name: '相册地址',
          url: 'https://album.songxingguo.com/'
        },
        imgUrls: ['https://graphbed.qiniu.songxingguo.com/resume/%E6%9D%A8%E6%B5%A6.png'],
        mClass: 'not-for-print'
      }, {
        name: '结网',
        desc: '2018.12-至今',
        tagList: [{
          name: 'Node.js',
          style: 'tech-item--lighter'
        }, {
          name: 'Webpack',
          style: 'tech-item--dark'
        }],
        cName: 'STAGE',
        imgUrls: ['https://graphbed.qiniu.songxingguo.com/resume/test/%E6%9E%B6%E6%9E%84%E5%9B%BE.png'],
        mClass: 'not-for-print'
      }]
    },
    works: {
      title: '3 年工作经验',
      desc: '有所经历才会有所收获',
      list: [{
        name: '上海大约网络科技有限公司',
        desc: '前端开发工程师',
        cName: 'DAYUE',
        date: {
          start: '2018/06'
        }
      }, {
        name: '重庆理工大学 B305 实验室',
        desc: '软件研发工程师',
        cName: 'B305',
        date: {
          start: '2018/06'
        }
      }]
    },
    footer: {
      scanDesc: '查看完整版简历',
      updatedDesc: '最后更新于2018年9月23日',
      QRCode: 'https://graphbed.qiniu.songxingguo.com/resume/resume.songxinguo.com.png'
    }
  }
