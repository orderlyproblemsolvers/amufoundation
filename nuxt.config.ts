// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   ssr: true,
  app: {
    head: {
      title: 'AMU Foundation',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: 'AMU Foundation is a non-profit organization dedicated to supporting the academic and professional growth of children.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router']
          }
        }
      }
    },
  },
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
    }
  },
  nitro: {
    preset: 'netlify',
     compressPublicAssets: true,
    minify: true
  },
  site: {
    url: 'https://amufoundation.org',
    name: 'AMU Foundation',
    description: 'AMU Foundation is a non-profit organization dedicated to supporting the academic and professional growth of children.',
    defaultLocale: 'en'
  },
  
  robots: {
    disallow: ['/admin']
  },
  
  ogImage: {
    enabled: true
  },
  
  linkChecker: {
    enabled: true
  }
})