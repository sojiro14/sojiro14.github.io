const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Archive: path.resolve(__dirname, 'layouts/Archive.vue'),
  },
}