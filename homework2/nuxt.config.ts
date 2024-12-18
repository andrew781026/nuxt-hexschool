// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    // ref - https://tailwindcss.nuxtjs.org/getting-started/configuration
    // Options
    // cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    // configPath: 'tailwind.config',
    // exposeConfig: {
    //   level: 2
    // },
    // viewer: true,
    config: {
      plugins: [
        require('daisyui'),
      ],
    },
  }
})
