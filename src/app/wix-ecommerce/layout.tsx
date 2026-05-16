import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wix E-Commerce Development | Fast D2C Stores",
  description: "Launch your D2C store fast with Wix E-Commerce. Drag-and-drop builder, Wix Studio for agencies, built-in marketing. Professional Wix stores from AED 3,000.",
  alternates: { canonical: "https://www.globify.ae/wix-ecommerce" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"Wix ecommerce","item":"https://www.globify.ae/wix-ecommerce"}]
          })
        }}
      />
      {children}</>;
}
