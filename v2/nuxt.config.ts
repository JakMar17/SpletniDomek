// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {},
    css: [
        "@/assets/styles/main.scss",
        "@/node_modules/remixicon/fonts/remixicon.css",
        '@/node_modules/animate.css/animate.min.css'
    ],
    build: {
        transpile: [],
    },
    vite: {
        define: {
            'process.env.DEBUG': true,
        },
        server: {
            hmr: {
                port: 3008
            }
        },
        css: {
            preprocessorOptions: {
                scss: {}
            }
        }

    },
    plugins: [
        {src: '~/plugins/aos.client.js', mode: 'client'},
    ],
    modules: [
        ['@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ],
            },],
        ['@nuxtjs/google-fonts', {
            families: {
                'Caveat': true,
                'Lato': true,
                download: true,
                inject: true
            }
        }],
        '@nuxt/content',
    ],
})
