import Script from 'next/script'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'breadcrumb'
  data?: any
}

export function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://adskygenius.com'

    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AdSky Genius",
          "description": "Leading IT development agency founded in 2024 with a bold vision to become a leading IT development agency in the United States.",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/company_logo.png`,
            "width": 400,
            "height": 400
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "XX", // Replace with actual state
            "addressLocality": "City Name" // Replace with actual city
          },
          "foundingDate": "2024",
          "numberOfEmployees": "10-50",
          "industry": "Information Technology",
          "services": [
            "Web Development",
            "Mobile App Development",
            "Cloud Solutions",
            "Custom Software Development",
            "Digital Transformation",
            "Technology Consulting"
          ],
          "sameAs": [
            "https://linkedin.com/company/adskygenius", // Replace with actual social links
            "https://twitter.com/adskygenius",
            "https://github.com/adskygenius"
          ]
        }

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AdSky Genius",
          "description": "Leading IT development agency delivering exceptional web development, mobile apps, cloud solutions, and custom software.",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "AdSky Genius",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/company_logo.png`
            }
          }
        }

      default:
        return data || {}
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}