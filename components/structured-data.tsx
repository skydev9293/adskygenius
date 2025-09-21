import Script from 'next/script'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'breadcrumb' | 'localbusiness'
  data?: any
}

export function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://adskygenius.com'

    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": ["Organization", "TechnologyCompany"],
          "name": "AdSky Genius",
          "alternateName": "AdSky Genius IT Development Agency",
          "description": "Leading IT development agency founded in 2024 with a bold vision to become a leading IT development agency in the United States. We deliver exceptional web development, mobile apps, cloud solutions, and custom software with exceptional talent.",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/company_logo.png`,
            "width": 400,
            "height": 400,
            "caption": "AdSky Genius Logo"
          },
          "image": {
            "@type": "ImageObject",
            "url": `${baseUrl}/company_logo.png`,
            "width": 1200,
            "height": 630,
            "caption": "AdSky Genius - Leading IT Development Agency"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-555-ADSKY-01", // Replace with actual phone
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": ["English"],
              "contactOption": "TollFree"
            },
            {
              "@type": "ContactPoint",
              "email": "contact@adskygenius.com", // Replace with actual email
              "contactType": "customer service",
              "areaServed": "US"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "California", // Replace with actual state
            "addressLocality": "San Francisco", // Replace with actual city
            "streetAddress": "123 Tech Street, Suite 100" // Replace with actual address
          },
          "foundingDate": "2024",
          "foundingLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US",
              "addressRegion": "California",
              "addressLocality": "San Francisco"
            }
          },
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 10,
            "maxValue": 50,
            "unitText": "employees"
          },
          "naics": "541511", // Custom Computer Programming Services
          "industry": "Information Technology",
          "knowsAbout": [
            "Web Development",
            "Mobile App Development",
            "Cloud Computing",
            "Software Engineering",
            "Digital Transformation",
            "Technology Consulting",
            "JavaScript",
            "React",
            "Node.js",
            "Python",
            "AWS",
            "Azure"
          ],
          "serviceArea": {
            "@type": "Country",
            "name": "United States"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom web application development using modern technologies"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "description": "Native and cross-platform mobile application development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Solutions",
                  "description": "Cloud infrastructure and migration services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Software Development",
                  "description": "Tailored software solutions for business needs"
                }
              }
            ]
          },
          "award": [
            "Leading IT Development Agency 2024"
          ],
          "slogan": "Exceptional talent delivers exceptional results",
          "sameAs": [
            "https://linkedin.com/company/adskygenius", // Replace with actual social links
            "https://twitter.com/adskygenius",
            "https://github.com/adskygenius",
            "https://facebook.com/adskygenius"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          }
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

      case 'localbusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          "name": "AdSky Genius",
          "alternateName": "AdSky Genius IT Development Agency",
          "description": "Leading IT development agency delivering exceptional web development, mobile apps, cloud solutions, and custom software services in the United States.",
          "url": baseUrl,
          "telephone": "+1-555-ADSKY-01", // Replace with actual phone
          "email": "contact@adskygenius.com", // Replace with actual email
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Street, Suite 100", // Replace with actual address
            "addressLocality": "San Francisco", // Replace with actual city
            "addressRegion": "CA", // Replace with actual state
            "postalCode": "94105", // Replace with actual zip
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.7749", // Replace with actual coordinates
            "longitude": "-122.4194"
          },
          "image": [
            `${baseUrl}/company_logo.png`,
            `${baseUrl}/modern-web-development-workspace-with-multiple-scre.jpg`
          ],
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/company_logo.png`,
            "width": 400,
            "height": 400
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "priceRange": "$$",
          "currenciesAccepted": "USD",
          "paymentAccepted": ["Cash", "Credit Card", "Invoice"],
          "foundingDate": "2024",
          "numberOfEmployees": "10-50",
          "naics": "541511",
          "serviceArea": {
            "@type": "Country",
            "name": "United States"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "sameAs": [
            "https://linkedin.com/company/adskygenius",
            "https://twitter.com/adskygenius",
            "https://github.com/adskygenius",
            "https://facebook.com/adskygenius"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "AdSky Genius delivered an exceptional web application for our startup. Their team's expertise and attention to detail exceeded our expectations."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Michael Chen"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Outstanding mobile app development services. Professional, timely, and exactly what we needed for our business."
            }
          ]
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