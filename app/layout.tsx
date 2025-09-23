import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { PageLoadingWrapper } from "@/components/page-loading-wrapper"
import { StructuredData } from "@/components/structured-data"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adskygenius.com'),
  title: {
    default: "AdSky Genius - Leading IT Development Agency",
    template: "%s | AdSky Genius"
  },
  description: "Founded in 2024 with a bold vision to become a leading IT development agency in the United States. We deliver exceptional web development, mobile apps, cloud solutions, and custom software with exceptional talent.",
  keywords: ["IT development", "software development", "web development", "mobile apps", "cloud solutions", "custom software", "digital transformation", "technology consulting", "AdSky Genius", "IT agency", "software agency"],
  authors: [{ name: "AdSky Genius" }],
  creator: "AdSky Genius",
  publisher: "AdSky Genius",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/company_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/company_logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/company_logo.png",
    apple: [
      { url: "/company_logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/company_logo.png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adskygenius.com",
    siteName: "AdSky Genius",
    title: "AdSky Genius - Leading IT Development Agency",
    description: "Founded in 2024 with a bold vision to become a leading IT development agency in the United States. Exceptional talent delivers exceptional results.",
    images: [
      {
        url: "https://adskygenius.com/company_logo.png",
        width: 1200,
        height: 630,
        alt: "AdSky Genius - IT Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdSky Genius - Leading IT Development Agency",
    description: "Founded in 2024 with a bold vision to become a leading IT development agency in the United States. Exceptional talent delivers exceptional results.",
    images: ["https://adskygenius.com/company_logo.png"],
    creator: "@adskygenius",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://adskygenius.com",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual Google Search Console verification code
  },
  other: {
    'google-site-verification': 'google-site-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://adskygenius.com" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="localbusiness" />
      </head>
      <body className={`font-sans ${sourceSans.variable} ${playfairDisplay.variable} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PageLoadingWrapper>
            {children}
          </PageLoadingWrapper>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
