const axios = require('axios');

module.exports = {
  mode: 'universal',

  telemetry: false, // 開発時毎回「? Are you interested in participating? (Y/n)」聞かれるのを回避

  /*
  ** Headers of the page
  */
  head: {
    // Default title if not defined
    title: 'ピラティス・ヨガNo1のzen place｜東京・大阪・名古屋など100店舗｜養成コース、ピラティスマシンも充実',
    // Append " - zenplace" to all titles
    titleTemplate: '%s ｜ピラティス・ヨガ専門スタジオ zen place',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '豊かなライフスタイルとウェルビーイングの創造を目指し、全国に100店舗以上のピラティス・ヨガ専門スタジオ「zen place」。自分の心と体のつながりや変化に気づき、学べるピラティス・ヨガスタジオを運営しています。' },
      { hid: 'keywords', name: 'keywords', content: 'ピラティス, ヨガ, ゼン, マシンピラティス' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og.jpg' },
      { hid: 'og:title', property: 'og:title', content: 'ピラティス・ヨガNo1のzen place｜東京・大阪・名古屋など100店舗｜養成コース、ピラティスマシンも充実' },
      { hid: 'og:description', property: 'og:description', content: '豊かなライフスタイルとウェルビーイングの創造を目指し、全国に100店舗以上のピラティス・ヨガ専門スタジオ「zen place」。自分の心と体のつながりや変化に気づき、学べるピラティス・ヨガスタジオを運営しています。' },
      { name: 'facebook-domain-verification', content: 'ehokrkhg2md7xubczwa5r13qg4glwd' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  env: {
    apiBaseUrl: process.env.API_BASE_URL,
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/Loading.vue',
  /*
  ** Global CSS
  */

  css: [
    '@/assets/scss/zenplace.scss',
    // Prevent the initial huge font flash on load (also in plugin)
    // ref: https://github.com/FortAwesome/vue-fontawesome/issues/14
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/vue-scrollto',
    './plugins/global-directives.js',
    './plugins/global-filters.js',
    './plugins/global-components.js',
    './plugins/zenplace-api.js',
    { src: './plugins/initialize-data.js', mode: 'server' },
    './plugins/fontawesome.js',
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vue-video-background.js', ssr: false },
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['nuxt-env', {
      keys: [
        { key: 'API_BASE_URL', name: 'apiBaseUrl' },
      ],
    }],
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-TQJSLBB',
      dev: false,
    }],
    '@nuxtjs/sitemap',
  ],

  serverMiddleware: [
    { path: '/api', handler: '~/middleware/api-proxy.js' },
  ],

  loaders: {
    vue: {
      transformAssetUrls: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src',
      },
    },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    babel: {
      compact: true,
    },
  },

  axios: {
    timeout: 15000,
  },

  sitemap: {
    defaults: {
      // changefreq: 'daily',
      // priority: 1,
      // lastmod: new Date(),
      // lastmodrealtime: true,
    },
    // We are only interested production sitemap, so lets assume hostname
    // To make this dynamic would require passing a variable to the process
    hostname: 'https://www.zenplace.co.jp',
    gzip: true,
    exclude: [
      // '/secret',
      // '/admin/**',
      // '/pilates',
      '/classes',
      '/classes/**',
      // '/classes/pilates',
      // '/classes/yoga',
      // '/classes/strong',
      // '/classes/bijiribikyaku',
    ],
    routes: async () => {
      const apiUrl = process.env.API_BASE_URL || 'https://staging-api.zen-jp.info/zenplace/v1/';
      const url = `${apiUrl}studios`;
      try {
        const { data } = await axios.get(url);
        // We need to consider if slug is not set
        return data.map((studio) => `/studios/${studio.slug || studio.studio_id}`);
      } catch (err) {
        console.error('Could not get studios for sitemap.xml !!!', url);
        return [];
      }
    },
    filter({ routes }) {
      return routes.filter((route) => {
        // Routes can be modified here
        if (route.url.startsWith('/studios')) {
        //   route.priority = 1;
        }
        return true;
      });
    },
  },

};
