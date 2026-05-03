import type { Metadata } from "next";
import ErpSolutionsClient from "./ErpSolutionsClient";

export const metadata: Metadata = {
  title: "Custom ERP Software & Healthcare Solutions | Globify UAE",
  description: "Deploy scalable ERP solutions. Globify specializes in enterprise resource planning, logistics logistics tracking, and MEDOC hospital management systems.",
  alternates: { canonical: "/erp-solutions", languages: {
      'en-AE': 'https://globify.ae/erp-solutions',
      'en-IN': 'https://globify.in/erp-solutions',
      'x-default': 'https://globify.ae/erp-solutions'
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
            "@type": "Service",
            "serviceType": "ERP Solutions & Enterprise Architecture",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae"
            }
          })
        }}
      />
      <ErpSolutionsClient />
    </>
  );
}
