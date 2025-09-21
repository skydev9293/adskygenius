import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://adskygenius.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}