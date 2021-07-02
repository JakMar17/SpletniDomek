export default {
  server: {
    port: 3100,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JakMar',
    htmlAttrs: {
      lang: 'sl',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Osebna stran študenta računalništva, ki se s programiranjem ukvarja 25 ur na dan'
      },
    ],
    link: [
      {rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Caveat&family=Fuggles&display=swap'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/aos.client', '@/plugins/filters'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#19647e',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    backendUrl: process.env.NUXT_ENV_BACKEND_URL || 'http://localhost:3000/api/',
    backendV2Url: process.env.NUXT_ENV_BACKEND_V2_URL || 'http://localhost:8080/',
    /* backendV2Url: 'http://localhost:8080/', */
    ghostUrl: process.env.NUXT_ENV_GHOST_URL || "http://internal.lan:4000",
    ghostKey: process.env.NUXT_ENV_GHOST_KEY || "e2dcedf9073da92a9021ecafdc"
  },

  googleAnalytics: {
    id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID
    }
  }
}
