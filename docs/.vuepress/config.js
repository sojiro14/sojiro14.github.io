const { path } = require('@vuepress/utils')

module.exports = {
  // site config
  lang: 'ja-JP',
  title: "Sojiro's Blog",
  description: 'Everything written here is a xxx.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  // theme and its config
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/favicon.png',
    navbar: [
      { text: 'home', link: '/' },
      { text: 'archive', link: '/archive/' },
      // { text: 'about', link: '/about/' }
    ],
    sidebarDepth: 1,
  },
  
  // plugins
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-ECN7E21ZM0',
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/ja/': {
            placeholder: '検索',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
    [
      'vuepress-plugin-use-pages',
      {
        startsWith: '/posts/',
        file: 'posts.js',
      },
    ],
    [
      'vuepress-plugin-use-pages',
      {
        startsWith: '/blog/',
        file: 'blogs.js',
      },
    ],
  ],
}