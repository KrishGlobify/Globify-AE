import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify Development Company",
  description: "Expert Shopify development, theme customization, and e-commerce solutions for scalable online stores.",
  alternates: { canonical: "https://www.globify.ae/shopify-development" },
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
            "areaServed": ["United Arab Emirates", "India", "Global"],
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
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"Shopify development","item":"https://www.globify.ae/shopify-development"}]
          })
        }}
      />
      {children}
    </>
  );
}
