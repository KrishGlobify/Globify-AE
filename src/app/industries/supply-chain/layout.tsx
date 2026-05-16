import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered Supply Chain Solutions, Predictive Logistics & Autonomous Ops",
  description: "Globify builds AI-powered supply chain platforms with predictive demand sensing, autonomous warehouse ops, and intelligent route optimization. AEO-optimized. 40% cost reduction.",
  alternates: { canonical: "https://www.globify.ae/industries/supply-chain" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://www.globify.ae/industries"},{"@type":"ListItem","position":3,"name":"Supply chain","item":"https://www.globify.ae/industries/supply-chain"}]
          })
        }}
      />
      {children}</>;
}
