const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { prismjsPlugin } = require('@vuepress/plugin-prismjs')

module.exports = {
    lang: 'zh-CN',
    title: '知识库',
    description: '后端开发知识库',
    base: '/doc/',

    // 默认主题配置
    theme: defaultTheme({
        // Logo
        logo: 'https://cdn-statics.zmn.cn/_nuxt/img/logo_web.b793f2a.png',
        // 仓库地址
        repo: 'faustine8/doc',
        repoLabel: '报告问题',
        // 文档路径
        docsDir: 'docs',
        editLinkText: '修改此页',
        lastUpdatedText: '更新时间',
        contributorsText: '作者',
        // 导航
        navbar: [
            {
                text: '首页',
                link: '/',
            },
        ],
    }),

    // 插件
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                }
            }
        }),
        prismjsPlugin({
            // 配置项
            preloadLanguages: ['java', 'javadoc', 'c', 'scala', 'go', 'sql', 'shell-session']
        }),
    ],

}