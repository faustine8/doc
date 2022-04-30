const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'zh-CN',
    title: 'zmn.cn',
    description: '后端开发知识库',
    base: '/doc/',

    // 默认主题配置
    theme: defaultTheme({
        // Logo
        logo: 'https://cdn-statics.zmn.cn/_nuxt/img/logo_web.b793f2a.png',
        // 仓库地址
        repo: 'faustine8/doc',
        repoLabel: 'GitHub',
        // 文档路径
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑',
        lastUpdatedText: '更新时间',
        contributorsText: '贡献者',
        // 导航
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'Java',
                children: [
                    {
                        text: 'Kafka',
                        link: '/java/kafka/'
                    },
                    {
                        text: 'Redis',
                        link: '/java/redis/02/'
                    },
                    {
                        text: 'SkyWalking',
                        link: '/java/skywalking/01/'
                    },
                    {
                        text: 'ElasticSearch',
                        link: '/java/es/01/'
                    },
                    {
                        text: 'Drools',
                        link: '/java/drools/'
                    },
                ],
            },
            {
                text: 'BigData',
                children: [
                    {
                        text: 'Hadoop',
                        link: '/bigdata/hadoop/core/hadoop/01/'
                    },
                    {
                        text: 'Scala',
                        link: '/bigdata/scala/01base/'
                    },
                    {
                        text: 'Spark',
                        link: '/bigdata/spark/core/base/'
                    },
                ],
            },

        ],
    }),

    // 插件
    plugins: [
        // 搜索
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                }
            }
        }),
    ],

}