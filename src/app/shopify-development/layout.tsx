import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify Development Agency UAE, India & Global — Shopify Plus Partner",
  description: "Shopify and Shopify Plus development for brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. 300+ stores launched, 3x average revenue growth, ISO 27001 certified Shopify Partner.",
  keywords: [
    "shopify development UAE",
    "shopify development Dubai",
    "shopify development Saudi Arabia",
    "shopify development India",
    "shopify development UK",
    "shopify development Netherlands",
    "shopify development Australia",
    "shopify development South Africa",
    "shopify plus partner",
    "shopify agency",
    "shopify store development",
    "shopify migration",
  ],
  alternates: {
    canonical: "/shopify-development",
  },
  openGraph: {
    title: "Shopify Development Agency — UAE, India, UK, Netherlands, Australia",
    description: "Custom Shopify and Shopify Plus stores for brands in UAE, KSA, India, UK, Netherlands, Australia, and South Africa. 300+ stores launched, 3x revenue growth.",
    url: "https://www.globify.ae/shopify-development",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "en_US", "nl_NL", "ar_AE", "ar_SA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency | UAE, India, UK, EU, AU, ZA",
    description: "Shopify and Shopify Plus stores for global brands. 300+ launched, 3x revenue growth.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Shopify Development Company",
            "description": "Expert Shopify development, theme customization, and e-commerce solutions for scalable online stores.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://www.globify.ae"
            },
            "areaServed": [
              { "@type": "Country", "name": "United Arab Emirates" },
              { "@type": "Country", "name": "Saudi Arabia" },
              { "@type": "Country", "name": "India" },
              { "@type": "Country", "name": "United Kingdom" },
              { "@type": "Country", "name": "Netherlands" },
              { "@type": "Country", "name": "Australia" },
              { "@type": "Country", "name": "South Africa" }
            ],
            "url": "https://www.globify.ae/shopify-development"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.globify.ae" },
              { "@type": "ListItem", "position": 2, "name": "Shopify development", "item": "https://www.globify.ae/shopify-development" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}