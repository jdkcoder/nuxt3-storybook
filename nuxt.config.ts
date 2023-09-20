// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    '@pinia/nuxt',
    "nuxt-simple-sitemap",
    "nuxt-typed-router",
    "nuxt-radash",
    "dayjs-nuxt",
  ],
  css: ["@unocss/reset/tailwind.css"],
  experimental: {
    headNext: true,
    componentIslands: true,
  },
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  components: [
    { path: './components', pathPrefix: false, extensions: ['.vue'] }
  ]
})
