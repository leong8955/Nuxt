// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { 
    enabled: true
  },
  pages: true,

  router: {
    prefetchLinks: true, // Prefetch linked pages in the background
  },
  modules: [
    '@pinia/nuxt', 
    '@nuxtjs/i18n', 
    '@vee-validate/nuxt', 
    '@unlazy/nuxt', 
    'nuxt-marquee',
    'nuxt-swiper',
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "/css/all.min.css",
          tagPriority: 0,
          crossorigin: false,
        },
        {
          rel: "stylesheet",
          href: "/css/animate.css",
          tagPriority: 0,
          crossorigin: false,
        },
        {
          rel: 'stylesheet',
          href: "/css/bootstrap.min.css",
          tagPriority: 0,
          crossorigin: false,
        },
        {
          rel: 'stylesheet',
          href: "/css/swiper-bundle.min.css",
          tagPriority: 0,
          crossorigin: false,
        },


      ],
      script: [
        {
          src: "/js/all.min.js",
          tagPriority: 300,
          crossorigin: false,
        },
        {
          src: "/js/bootstrap.bundle.min.js",
          tagPriority: 300,
          crossorigin: false,
        },
        {
          src: "/js/jquery-3.7.1.min.js",
          tagPriority: 300,
          crossorigin: false,
        },
        {
          src: "/js/swiper-bundle.min.js",
          tagPriority: 300,
          crossorigin: false,
        },
      ],
    },
  },

  ssr: true,

  i18n: {
    lazy: true,
    langDir: "./locales",
    strategy: "no_prefix",
    defaultLocale: "CN",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: false,
    },
    locales: [
      {
        code: "EN",
        name: "English",
        icon: "lang-en.png",
        // files: ["en/ui.json", "en/validation.json", "en/errors.json", "en/messages.json", "en/_m.json"],
        files: ["en/ui.json","en/messages.json"],
      },
      {
        code: "CN",
        name: "中文",
        icon: "lang-cn.png",
        // files: ["cn/ui.json", "cn/validation.json", "cn/errors.json", "cn/messages.json", "cn/_m.json"],
        files: ["cn/ui.json","cn/messages.json"],
      },
      {
        code: "MLY",
        name: "MALAY",
        icon: "lang-mly.png",
        files: [],
      },










      {
        code: "PHP",
        name: "",
        icon: "lang-php.png",
        files: [],
      },
      {
        code: "MMK",
        name: "",
        icon: "lang-mmk.png",
        files: [],
      },
      {
        code: "MNT",
        name: "",
        icon: "lang-mnt.png",
        files: [],
      },
      {
        code: "IDR",
        name: "",
        icon: "lang-idr.png",
        files: [],
      },
    ],
  },
  $development: {
    runtimeConfig: {
      public: {
        version: "20241001",
        templateBase: "https://www.cloudbear.somee.com/",
      },
    },
  },
  $production: {
    runtimeConfig: {
      public: {
        version: "20241001",
        templateBase: "https://www.cloudbear.somee.com/",
      },
    },
  },
})