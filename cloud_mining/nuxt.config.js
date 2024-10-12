// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
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
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "/css/bootstrap-grid.css",
          tagPriority: 0,
          crossorigin: false,
        },
        {
          rel: "stylesheet",
          href: "/css/bootstrap-grid.min.css",
          tagPriority: 0,
          crossorigin: false,
        },
        {
          rel: "stylesheet",
          href: "/css/bootstrap-reboot.css",
          tagPriority: 0,
          crossorigin: false,
        },
        {
          rel: "stylesheet",
          href: "/css/bootstrap-reboot.min.css",
          tagPriority: 0,
          crossorigin: false,
        },
        {
          rel: "stylesheet",
          href: "/css/bootstrap.css",
          tagPriority: 0,
          crossorigin: false,
        },
        {
          rel: "stylesheet",
          href: "/css/bootstrap.min.css",
          tagPriority: 0,
          crossorigin: false,
        },
        
      ]
    },
  },
  $development: {
    runtimeConfig: {
      public: {
        version: "1.0.0.0",
        templateBase: "http://cloudbear.somee.com",
        imageUrl: "http://cloudbear.somee.com/images",
      },
    },
  },
  $production: {
    runtimeConfig: {
      public: {
        version: "1.0.0.0",
        templateBase: "https://cloudbear.somee.com",
        imageUrl: "https://cloudbear.somee.com/images",
      },
    },
  },
})