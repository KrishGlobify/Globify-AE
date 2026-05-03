import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Globify | Digital Commerce & Automation Experts",
  description: "Discover Globify's mission to architect scalable digital ecosystems using AI, custom development, and revenue engineering.",
  alternates: { canonical: "/about", languages: {
      'en-AE': 'https://globify.ae/about',
      'en-IN': 'https://globify.in/about',
      'x-default': 'https://globify.ae/about'
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
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://globify.ae",
              "description": "Globify is a 360° digital commerce and technology partner."
            }
          })
        }}
      />
      <AboutClient />
    </>
  );
}
