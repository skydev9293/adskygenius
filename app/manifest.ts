import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AdSky Genius - Leading IT Development Agency',
    short_name: 'AdSky Genius',
    description: 'Leading IT development agency delivering exceptional web development, mobile apps, cloud solutions, and custom software.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#059669',
    icons: [
      {
        src: '/company_logo.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/company_logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/company_logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'technology', 'development'],
    lang: 'en',
    dir: 'ltr',
  }
}