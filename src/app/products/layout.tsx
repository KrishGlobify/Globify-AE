import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Products — MEDOC & EKASYS Enterprise Software",
  description: "Discover Globify's enterprise products: MEDOC Hospital Management System and EKASYS ERP for scalable business operations in healthcare and manufacturing.",
  alternates: { canonical: "https://www.globify.ae/products" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"Products","item":"https://www.globify.ae/products"}]
          })
        }}
      />
      {children}</>;
}
