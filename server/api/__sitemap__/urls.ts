// server/api/__sitemap__/urls.ts  (path depends on your @nuxtjs/sitemap setup)
import { defineEventHandler } from 'h3'
import { PROGRAMS } from '../../../app/composables/usePrograms'

export default defineEventHandler(async () => {
  const urls: any[] = []

  // Program info/registration routes
  Object.values(PROGRAMS).forEach(program => {
    urls.push({
      loc: `/register/${program.slug}`,
      changefreq: 'monthly',
      priority: 0.8
    })
  })

  return urls
})