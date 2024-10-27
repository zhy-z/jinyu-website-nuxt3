// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "南通景语网络科技有限公司",
      meta: [
        {
          name: 'description',
          content: "南通景语网络科技有限公司成立于2017年，是海安市第一家专业的游戏公司。南通市海安优质的企业信息服务提供商，拥有专业的技术和实施团队，主要向客户提供数字运营服务、软件开发、云计算、软件定制等各类信息化产品和服务。"
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
      ]
    }
  },
  srcDir: 'views/',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
