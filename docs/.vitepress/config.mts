import { defineConfig } from 'vitepress';

const githubLink = 'https://github.com/CherishBY/CherishBY.github.io/';
const author = 'CherishBY';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: author+"'s Blog",
  description: "A Blog Site",
  locales: {
    root: {
      label: '中文',
      lang: 'zh-cn'
    }
  },
  rewrites: {
    'posts/:path(.*)': ':path(.*)',
    'posts/index.md': '/'
  },
  themeConfig: {
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/web/', activeMatch: '/web/' }
    ],
    outline: {
      level: 'deep',
      label: '本章导航'
    },
    footer: {
      message: `Powered by&nbsp;<a href="https://vitepress.dev/zh/" target="_blank">VitePress</a>`,
      copyright: `<span>Copyright © <a href="${githubLink}" target="_blank">${author}</a> | MIT License</span>`
    },
    sidebar: {
      '/web/': [
        {
          items: [
            {text: '术语',link: '/web/术语'},
            { text: 'HTML和CSS', link: '/web/HTML和CSS' },
            { text: '语义化', link: '/web/语义化' },
          ]
        },
        {
          text: '浏览器',
          collapsed: false,
          link: '/web/browser/',
          items: [
            // { text: '什么是HTML？', link: '/web/html/什么是HTML？' }
          ]
        },
        {
          text: 'CSS',
          collapsed: false,
          items: [
            { text: '层叠（权重计算）', link: '/web/css/层叠（权重计算）' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: githubLink }
    ]
  }
})
