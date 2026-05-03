import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Globify Digital Commerce & AI Partner",
  description: "Get in touch with Globify for expert AI solutions, web and app development, Shopify extensions, and digital transformation.",
  alternates: { canonical: "/contact", languages: {
      'en-AE': 'https://globify.ae/contact',
      'en-IN': 'https://globify.in/contact',
      'x-default': 'https://globify.ae/contact'
    } },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Globify",
            "url": "https://globify.ae/contact",
            "description": "Contact Globify for enterprise AI, tech, and ecommerce solutions.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-954-408-6877",
                  "contactType": "customer service",
                  "areaServed": "IN"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+971-54-730-8673",
                  "contactType": "customer service",
                  "areaServed": "AE"
                }
              ]
            }
          })
        }}
      />
      <ContactClient />
    </>
  );
}
