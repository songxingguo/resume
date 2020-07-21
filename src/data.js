const JLDDTemplate =

  module.exports = {
    header: {
      name: '宋兴国',
      position: '前端开发工程师',
      telNum: '18983642737',
      email: 'xg.song@qq.com',
      wxChat: 'sxg961014',
      blog: 'www.songxingguo.com',
      blogUrl: 'https://www.songxingguo.com',
      headIcon: 'https://graphbed.qiniu.songxingguo.com/resume/header.png'
    },
    edu: {
      title: '教育经历',
      desc: '学生时代就踏上开发之路',
      list: [{
        name: '重庆理工大学',
        descList: ['高等数学，c 语言、Java、 数据结构、计算机网络、线性代数、操作系统、数据库、网络协议分析、概率论与统计、软件质量 保证与测试、算法、编译原理、设计模式、软件项目管理。'],
        logoUrl: 'https://graphbed.qiniu.songxingguo.com/resume/test/cqut_logo.png',
        term: '2015.09-2019.06',
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
        '熟练掌握 JavaScript （ES6）、HTML（5）、CSS（3）。',
        '熟练使用 Vue(Vue2  + vue-router + Vuex + Axios) 全家桶相关技术并了解相关原理。',
        '熟悉前端相关标准，了解浏览器原理和兼容问题，了解页面性能优化以及安全相关技术。',
        '熟练运用 Webpack 模块管理打包工具，了解前端工程化，具有有独立设计与开发项目的能力。',
        '熟练使用 Vant、 Bootstrap、Ant Design 等前端开发框架，熟悉微信小程序开发，了解 TypeScript 开发。',
        '熟练使用 Node.js、 Java 等后端语言，具有 Web 应用前后端开发经验。']
    },
    projects: {
      title: '丰富的项目经验',
      desc: '业余项目与公司项目相得益彰',
      list: [{
        name: '大约旗下微信小程序及后台管理',
        desc: '2018.12-2020.06',
        tagList: [{
          name: 'WXML',
          style: 'tech-item--strong'
        }, {
          name: 'SCSS',
          style: 'tech-item--normal'
        }, {
          name: 'JavaScript',
          style: 'tech-item--light'
        }, {
          name: 'Vue',
          style: 'tech-item--vue'
        }, {
          name: 'Gulp',
          style: 'tech-item--dark'
        }],
        cName: 'JLDD',
        link: {
          name: '锦鲤多多',
          imgUrl: 'https://graphbed.qiniu.songxingguo.com/resume/test/JLDD.png'
        },
        imgUrls: ['https://graphbed.qiniu.songxingguo.com/resume/test/JLDD-1.jpeg',
          'https://graphbed.qiniu.songxingguo.com/resume/test/JLDD-3.jpeg'],
        imgClass: "project-item__img--mb not-for-print"
      }, {
        name: '知晓理工（独立设计与开发）',
        desc: '2018.06-至今',
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
        imgClass: "project-item__img--mb not-for-print",
      }, {
        name: '大学校园生活共享平台（独立设计与开发）',
        desc: '2019.05-2019.06',
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
        cName: 'STORE',
        link: {
          imgUrl: 'https://graphbed.qiniu.songxingguo.com/resume/test/%E7%90%86%E5%B7%A5%E5%B0%8F%E9%93%BA-removebg.png'
        },
        imgUrls: ['https://graphbed.qiniu.songxingguo.com/resume/test/store-1.jpeg',
          'https://graphbed.qiniu.songxingguo.com/resume/test/store-3.jpeg',
          'https://graphbed.qiniu.songxingguo.com/resume/test/store-4.jpeg',
          'https://graphbed.qiniu.songxingguo.com/resume/test/store-2.jpeg'],
        imgClass: "not-for-print",
      }, {
        name: '嗨大白（独立设计与开发）',
        desc: '2019.01-至今',
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
        cName: 'AI',
        link: {
          imgUrl: 'https://graphbed.qiniu.songxingguo.com/resume/test/%E5%97%A8%E5%A4%A7%E7%99%BD-removebg.png'
        },
        imgUrls: ['https://graphbed.qiniu.songxingguo.com/resume/test/ai-1.jpeg',
          'https://graphbed.qiniu.songxingguo.com/resume/test/ai-2.jpeg',
          'https://graphbed.qiniu.songxingguo.com/resume/test/ai-3.jpeg',
          'https://graphbed.qiniu.songxingguo.com/resume/test/ai-5.jpeg'],
        mClass: 'not-for-print',
        imgClass: "not-for-print",
      }, {
        name: 'WeUI 库（开源项目）',
        desc: '2018.10-至今',
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
        cName: 'WEUI',
        link: {
          imgUrl: 'https://graphbed.qiniu.songxingguo.com/resume/test/WeUI_%E5%BA%93-removebg.png'
        },
        mClass: 'not-for-print',
        imgClass: "not-for-print",
      }, {
        name: '新能源物流车综合运营平台',
        desc: '2016.07-2018.02',
        tagList: [{
          name: 'HTML',
          style: 'tech-item--strong'
        }, {
          name: 'Less',
          style: 'tech-item--normal'
        }, {
          name: 'JavaScript',
          style: 'tech-item--light'
        }, {
          name: 'AngularJS',
          style: 'tech-item--angular'
        }, {
          name: 'Java',
          style: 'tech-item--java'
        }, {
          name: 'MySQL',
          style: 'tech-item--my-sql'
        }],
        cName: 'XNY',
        imgClass: "project-item__img--mb not-for-print"
      }, {
        name: '相册（开源项目）',
        desc: '2020.01-至今',
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
        imgClass: "not-for-print",
      }, {
        name: '简历（开源项目）',
        desc: '2020.06-至今',
        tagList: [{
          name: 'EJS',
          style: 'tech-item--strong'
        }, {
          name: 'SCSS',
          style: 'tech-item--normal'
        }, {
          name: 'Webpack',
          style: 'tech-item--dark'
        }, {
          name: 'TravisCI',
          style: 'tech-item--grey'
        }],
        link: {
          name: '简历地址',
          imgUrl: 'https://graphbed.qiniu.songxingguo.com/resume/test/%E7%AE%80%E5%8E%86%E4%BA%8C%E7%BB%B4%E7%A0%81-removebg.png'
        },
        cName: 'RESUME',
        imgUrls: ['https://graphbed.qiniu.songxingguo.com/resume/test/%E7%AE%80%E5%8E%86.png'],
        imgClass: "not-for-print",
      }, {
        name: '结网',
        desc: '2020.01-至今',
        tagList: [{
          name: 'TypeScript',
          style: 'tech-item--light'
        }, {
          name: 'Node.js',
          style: 'tech-item--node'
        }, {
          name: 'Webpack',
          style: 'tech-item--dark'
        }, {
          name: 'TravisCI',
          style: 'tech-item--grey'
        }],
        cName: 'STAGE',
        imgUrls: ['https://graphbed.qiniu.songxingguo.com/resume/test/%E6%9E%B6%E6%9E%84%E5%9B%BE.png'],
        imgClass: "mt10",
      }]
    },
    works: {
      title: '3 年工作经验',
      desc: '有所经历才会有所收获',
      list: [{
        name: '上海大约网络科技有限公司',
        nameStyle: 'work-item__title--red',
        desc: '前端开发工程师',
        cName: 'DAYUE',
        date: {
          start: '2018.12',
          end: '2020.06'
        }
      }, {
        name: '重庆理工大学 B305 实验室',
        nameStyle: 'work-item__title--blue',
        desc: '软件研发工程师',
        cName: 'B305',
        date: {
          start: '2016.10',
          end: '2018.02'
        },
      }]
    },
    footer: {
      scanDescForPrint: '查看完整版简历',
      scanDescForPC: '在移动设备上打开本页',
      updatedDesc: '最后更新于2020年07月06日',
      QRCode: 'https://graphbed.qiniu.songxingguo.com/resume/resume.songxinguo.com.png'
    }
  }
