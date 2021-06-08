const { navBar, sideBar } = require('./config/index.js')
const { path } = require('@vuepress/utils')

module.exports = {
  title: 'WHYJM',
  description: 'WHYJM\'s playground',
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/WHYJM',
    docsDir: 'docs',
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: navBar.en,
        sidebar: sideBar.en
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@src/, path.resolve(__dirname, './../../src/')),
    },
  },
  plugins: [
  ],
}