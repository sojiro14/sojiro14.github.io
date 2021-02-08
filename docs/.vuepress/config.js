module.exports = {
  title: "Sojiro's Blog", // Title for the site. This will be displayed in the navbar.
  theme: '@vuepress/theme-blog',
  themeConfig: {
    directories: [
      {
        // Unique ID of current classification
        id: 'tech',
        // Target directory
        dirname: '_tech',
        // Path of the `entry page` (or `list page`)
        path: '/tech/',
        itemPermalink: "/tech/:year/:month/:day/:slug"
      },
      {
        // Unique ID of current classification
        id: 'asset management',
        // Target directory
        dirname: '_am',
        // Path of the `entry page` (or `list page`)
        path: '/am/',
        itemPermalink: "/am/:year/:month/:day/:slug"
      },
      {
        // Unique ID of current classification
        id: 'chinese',
        // Target directory
        dirname: '_zh',
        // Path of the `entry page` (or `list page`)
        path: '/zh/',
        itemPermalink: "/zh/:year/:month/:day/:slug"
      },
    ],
    nav: [
      {
        text: "情報技術",
        link: "/tech/"
      },
      {
        text: "資産運用",
        link: "/am/"
      },
      {
        text: "中国語",
        link: "/zh/"
      }
    ],
  },
  plugins: [
    [
      //'@vuepress/blog',
      //{
      //},
    ],
  ],
}
